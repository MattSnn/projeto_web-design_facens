import { useState } from "react"
import Segmented from "../ui/Segmented";
import FinanciamentoPanel from "./FinanciamentoPanel";
import ConsorcioPanel from "./ConsorcioPanel";
import AnunciarPanel from "./AnunciarPanel";
import AluguelPanel from "./AluguelPanel";

type Aba = "financiamento" | "consorcio" | "aluguel" | "anunciar"

const ABAS: { id: Aba; label: string }[] = [
    { id: "financiamento", label: "Financiamento" },
    { id: "consorcio", label: "Consórcio" },
    { id: "aluguel", label: "Aluguel" },
    { id: "anunciar", label: "Anunciar imóvel" },
]

const COMPARATIVO = [
    { item: "Acesso ao imóvel", fin: "Imediato, com a aprovação do crédito", con: "Após a contemplação (sorteio ou lance)" },
    { item: "Custo", fin: "Juros sobre o valor financiado", con: "Taxa de administração e fundo de reserva" },
    { item: "Entrada", fin: "Exigida pelo banco", con: "Não exige; o lance é opcional" },
    { item: "Ideal para", fin: "Quem quer comprar agora", con: "Quem pode esperar e planejar" },
]

const DICAS = [
    { titulo: "Custos além da entrada", texto: "ITBI, escritura e registro costumam somar de 3% a 5% do valor do imóvel. Entre no planejamento." },
    { titulo: "Renda e score", texto: "Os bancos costumam limitar a parcela a cerca de 30% da renda e analisam seu histórico de crédito." },
    { titulo: "Documentos prontos", texto: "RG, CPF, comprovante de renda e de residência. Ter tudo em mãos acelera a aprovação." },
]

function MainCalculator() {
    const [aba, setAba] = useState<Aba>("financiamento")

    return (
        <div className="bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 md:px-15 pb-16">

                {/* Hero */}
                <section className="pt-10 md:pt-14 pb-8">
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                        Financiamento, consórcio e aluguel
                    </p>
                    <h1 className="mt-3 max-w-3xl text-3xl md:text-5xl font-bold tracking-tight text-brand-dark">
                        Descubra quanto cabe no seu bolso antes de escolher o imóvel
                    </h1>
                    <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-500">
                        Simule na hora, compare os caminhos e fale com um especialista quando estiver pronto.
                    </p>
                </section>

                {/* Abas + simulador */}
                <section id="simuladores" className="flex flex-col gap-5">
                    <Segmented options={ABAS} value={aba} onChange={setAba} />
                    {aba === "financiamento" && <FinanciamentoPanel />}
                    {aba === "consorcio" && <ConsorcioPanel />}
                    {aba === "aluguel" && <AluguelPanel />}
                    {aba === "anunciar" && <AnunciarPanel />}
                </section>

                {/* Comparativo */}
                <section id="comparativo" className="mt-16">
                    <h2 className="mb-6 text-2xl md:text-3xl font-semibold tracking-tight text-brand-dark">
                        Financiamento ou consórcio?
                    </h2>
                    <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white">
                        <table className="w-full min-w-xl text-left">
                            <thead className="bg-slate-100 text-sm text-blue-700">
                                <tr>
                                    <th className="p-5 w-1/4"></th>
                                    <th className="p-5">Financiamento</th>
                                    <th className="p-5">Consórcio</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-600">
                                {COMPARATIVO.map((linha) => (
                                    <tr key={linha.item} className="border-t border-slate-100">
                                        <th className="p-5 font-semibold text-brand-dark">{linha.item}</th>
                                        <td className="p-5">{linha.fin}</td>
                                        <td className="p-5">{linha.con}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Dicas */}
                <section id="dicas" className="mt-16">
                    <h2 className="mb-6 text-2xl md:text-3xl font-semibold tracking-tight text-brand-dark">
                        Antes de decidir
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {DICAS.map((dica) => (
                            <article key={dica.titulo} className="rounded-2xl border border-slate-200 bg-white p-6">
                                <h3 className="font-semibold text-brand-dark">{dica.titulo}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-500">{dica.texto}</p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* CTA final */}
                <section className="mt-16 flex flex-col md:flex-row md:items-center gap-6 rounded-3xl bg-blue-600 p-8 md:p-12 text-white">
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Ficou com dúvida nos números?</h2>
                        <p className="mt-2 text-blue-50">Um especialista ajuda você a escolher o melhor caminho, sem compromisso.</p>
                    </div>
                    <a
                        href="#contato"
                        className="rounded-full bg-white px-7 py-4 text-center font-bold text-blue-700 hover:bg-blue-50 transition"
                    >
                        Falar com um especialista
                    </a>
                </section>
            </div>
        </div>
    )
}

export default MainCalculator 