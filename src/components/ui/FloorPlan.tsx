// Planta baixa ilustrativa desenhada em SVG a partir dos dados do imóvel
// (quartos, suítes e metragem). Não é a planta oficial, serve para dar noção da distribuição.

interface FloorPlanProps {
    bedrooms: number
    suites: number
    area: number
}

const W = 600
const H = 380
const PAD = 12
const TOPO = 165 // altura da faixa dos quartos

interface Comodo {
    x: number
    y: number
    w: number
    h: number
    nome: string
    pct: number // fração aproximada da área total
    cor: string
}

function FloorPlan({ bedrooms, suites, area }: FloorPlanProps) {
    const quartos = Math.max(bedrooms, 1)
    const larguraQuarto = (W - PAD * 2) / quartos
    const pctQuarto = 0.42 / quartos

    const comodos: Comodo[] = []

    for (let i = 0; i < quartos; i++) {
        const suite = i < suites
        comodos.push({
            x: PAD + i * larguraQuarto,
            y: PAD,
            w: larguraQuarto,
            h: TOPO,
            nome: suite ? (suites > 1 ? `Suíte ${i + 1}` : "Suíte") : quartos > 1 ? `Quarto ${i + 1 - suites}` : "Quarto",
            pct: pctQuarto,
            cor: suite ? "#e0f2fe" : "#eff6ff",
        })
    }

    const baseY = PAD + TOPO
    const baseH = H - PAD - baseY
    const salaW = (W - PAD * 2) * 0.58
    const restoX = PAD + salaW
    const restoW = W - PAD - restoX

    comodos.push(
        { x: PAD, y: baseY, w: salaW, h: baseH, nome: "Sala de estar e jantar", pct: 0.3, cor: "#f8fafc" },
        { x: restoX, y: baseY, w: restoW, h: baseH * 0.55, nome: "Cozinha", pct: 0.12, cor: "#fef9c3" },
        { x: restoX, y: baseY + baseH * 0.55, w: restoW * 0.55, h: baseH * 0.45, nome: "Banho", pct: 0.06, cor: "#e2e8f0" },
        { x: restoX + restoW * 0.55, y: baseY + baseH * 0.45 + baseH * 0.1, w: restoW * 0.45, h: baseH * 0.45, nome: "Serviço", pct: 0.05, cor: "#f1f5f9" },
    )

    const m2 = (pct: number) => `${Math.max(Math.round(area * pct), 2)}m²`

    return (
        <svg viewBox={`0 0 ${W} ${H + 44}`} className="h-auto w-full" role="img" aria-label={`Planta ilustrativa com ${bedrooms} quartos e ${area}m²`}>
            {/* varanda */}
            <rect x={PAD} y={H - PAD} width={salaW} height={40} fill="#f0fdf4" stroke="#86efac" strokeWidth={2} strokeDasharray="6 5" />
            <text x={PAD + salaW / 2} y={H + 14} textAnchor="middle" fontSize="13" fill="#15803d" fontWeight="600">Varanda</text>

            {comodos.map((c) => (
                <g key={c.nome}>
                    <rect x={c.x} y={c.y} width={c.w} height={c.h} fill={c.cor} stroke="#1e3a8a" strokeWidth={3} />
                    <text x={c.x + c.w / 2} y={c.y + c.h / 2 - 4} textAnchor="middle" fontSize={c.w < 110 ? 12 : 15} fill="#172554" fontWeight="700">
                        {c.nome}
                    </text>
                    <text x={c.x + c.w / 2} y={c.y + c.h / 2 + 15} textAnchor="middle" fontSize="12" fill="#64748b">
                        {m2(c.pct)}
                    </text>
                </g>
            ))}

            {/* banheiro dentro das suítes */}
            {comodos.slice(0, Math.min(suites, quartos)).map((c) => (
                <g key={`wc-${c.nome}`}>
                    <rect x={c.x + c.w - 62} y={c.y} width={62} height={52} fill="#e2e8f0" stroke="#1e3a8a" strokeWidth={2} />
                    <text x={c.x + c.w - 31} y={c.y + 31} textAnchor="middle" fontSize="11" fill="#334155" fontWeight="600">WC</text>
                </g>
            ))}

            {/* portas (aberturas nas paredes) */}
            {comodos.slice(0, quartos).map((c) => (
                <path key={`porta-${c.nome}`} d={`M ${c.x + 18} ${baseY} a 26 26 0 0 0 26 -26`} fill="none" stroke="#94a3b8" strokeWidth={1.5} />
            ))}
            {comodos.slice(0, quartos).map((c) => (
                <line key={`vao-${c.nome}`} x1={c.x + 16} y1={baseY} x2={c.x + 46} y2={baseY} stroke="#ffffff" strokeWidth={5} />
            ))}

            {/* contorno externo */}
            <rect x={PAD} y={PAD} width={W - PAD * 2} height={H - PAD * 2} fill="none" stroke="#172554" strokeWidth={7} />
            <text x={W - PAD} y={H + 34} textAnchor="end" fontSize="12" fill="#94a3b8">Total aproximado: {area}m²</text>
        </svg>
    )
}

export default FloorPlan
