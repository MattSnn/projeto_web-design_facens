import { useState } from "react";
import type { FormEvent } from "react";
import buildings from "../assets/buildings.jpg";
import { prediosLista } from "../../data/prediosLista";
import type { Navigate } from "../../utils/navigation";

interface HeroProps {
    navigate: Navigate
}

const CIDADES = [...new Set(prediosLista.map((predio) => predio.location))].sort()

const DESTAQUES = [
    { valor: "15+", label: "anos de mercado" },
    { valor: `${prediosLista.length}`, label: "imóveis selecionados" },
    { valor: `${CIDADES.length}`, label: "cidades atendidas" },
]

function Hero({ navigate }: HeroProps) {
    const [tipo, setTipo] = useState<"venda" | "aluguel">("venda")
    const [cidade, setCidade] = useState("")

    function buscar(e: FormEvent) {
        e.preventDefault()
        navigate("todosOsApartamentos", { tipo, busca: cidade })
    }

    return (
        <section id="inicio" className="relative isolate w-full min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] bg-cover bg-center bg-no-repeat flex items-center"
            style={{ backgroundImage: `url(${buildings})` }}>

            <div className="absolute inset-0 -z-10 bg-linear-to-r from-brand-full-dark via-brand-full-dark/75 to-brand-full-dark/20" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-brand-full-dark/80 to-transparent" />

            <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-15 py-16 md:py-24">
                <div className="max-w-2xl text-left">

                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs md:text-sm font-medium text-white/90 backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                        Imóveis em São Paulo, Campinas, Sorocaba e Santos
                    </span>

                    <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-white">
                        O lar ideal está mais perto <span className="font-display italic font-medium text-accent">do que você imagina</span>
                    </h1>

                    <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed max-w-xl">
                        Há mais de 15 anos a ImobiFaces conecta pessoas aos seus lares ideais, unindo
                        atendimento próximo, confiança e as melhores oportunidades do mercado imobiliário.
                    </p>

                    {/* Busca rápida */}
                    <form
                        onSubmit={buscar}
                        className="mt-8 flex flex-col sm:flex-row gap-2 rounded-3xl sm:rounded-full bg-white p-2 shadow-2xl shadow-black/30"
                    >
                        <div className="flex rounded-full bg-slate-100 p-1" role="group" aria-label="Tipo de negócio">
                            {(["venda", "aluguel"] as const).map((opcao) => (
                                <button
                                    key={opcao}
                                    type="button"
                                    aria-pressed={tipo === opcao}
                                    onClick={() => setTipo(opcao)}
                                    className={`flex-1 rounded-full px-5 py-2.5 text-sm font-bold transition ${tipo === opcao ? "bg-brand-dark text-white shadow" : "text-slate-500 hover:text-brand-dark"}`}
                                >
                                    {opcao === "venda" ? "Comprar" : "Alugar"}
                                </button>
                            ))}
                        </div>
                        <label className="flex flex-1 items-center gap-2 px-4">
                            <svg className="h-5 w-5 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span className="sr-only">Cidade</span>
                            <select
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                                className="w-full bg-transparent py-3 text-sm font-medium text-brand-dark outline-none"
                            >
                                <option value="">Todas as cidades</option>
                                {CIDADES.map((c) => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </label>
                        <button
                            type="submit"
                            className="rounded-full bg-brand-muted px-7 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
                        >
                            Buscar imóveis
                        </button>
                    </form>

                    <div className="mt-6 flex flex-wrap gap-3 text-white">
                        <a href="#oportunidades" className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold hover:bg-white/20 transition-all duration-300">
                            Ver destaques ↓
                        </a>
                        <a href="#contato" className="px-6 py-3 rounded-full text-sm font-semibold text-white/80 hover:text-white underline-offset-4 hover:underline transition-all duration-300">
                            Falar com um especialista
                        </a>
                    </div>

                    <dl className="mt-12 grid grid-cols-3 gap-4 max-w-lg border-t border-white/15 pt-6">
                        {DESTAQUES.map((item) => (
                            <div key={item.label}>
                                <dt className="sr-only">{item.label}</dt>
                                <dd className="text-2xl md:text-4xl font-bold text-white">{item.valor}</dd>
                                <dd className="text-xs md:text-sm text-white/60">{item.label}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

        </section>
    )
}

export default Hero
