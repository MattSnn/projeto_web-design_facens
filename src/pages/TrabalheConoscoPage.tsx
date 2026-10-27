import { useState } from "react"
import type { FormEvent } from "react"
import Footer from "../components/layout/Footer"
import equipeReuniao from "../components/assets/equipe-reuniao.jpg"
import equipeTrabalho from "../components/assets/equipe-trabalho.jpg"
import { CheckIcon, PinIcon } from "../components/ui/Icons"
import { emailValido, mascaraTelefone, nomeValido, telefoneValido } from "../utils/formulario"

const BENEFICIOS = [
    { titulo: "Leads qualificados", texto: "Você recebe contatos de clientes do site e das campanhas, sem precisar prospectar do zero." },
    { titulo: "Comissão competitiva", texto: "Modelo de comissão acima da média do mercado, com bônus por metas trimestrais." },
    { titulo: "Treinamento contínuo", texto: "Mentoria com corretores seniores, cursos de negociação e apoio para o CRECI." },
    { titulo: "Horário flexível", texto: "Agenda organizada por você, com escritório de apoio em Sorocaba e atendimento remoto." },
]

const VAGAS = [
    { titulo: "Corretor(a) de imóveis", local: "Sorocaba", tipo: "Autônomo · Presencial" },
    { titulo: "Corretor(a) alto padrão", local: "Campinas", tipo: "Autônomo · Híbrido" },
    { titulo: "Assistente administrativo", local: "São Paulo", tipo: "CLT · Presencial" },
    { titulo: "Estágio em marketing digital", local: "Sorocaba", tipo: "Estágio · Híbrido" },
]

const inputCls = "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-brand-dark outline-none transition focus:border-brand-muted focus:ring-4 focus:ring-brand-muted/15"

function TrabalheConoscoPage() {
    const [vaga, setVaga] = useState(VAGAS[0].titulo)
    const [enviado, setEnviado] = useState(false)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")

    function enviar(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!e.currentTarget.reportValidity()) return
        setEnviado(true)
    }

    // mensagens próprias no lugar da validação padrão do navegador, que aceitava
    // nome só com espaços e telefone com letras
    function validarCampo(campo: HTMLInputElement | null, ok: boolean, mensagem: string) {
        campo?.setCustomValidity(campo.value === "" || ok ? "" : mensagem)
    }

    function validarArquivo(campo: HTMLInputElement) {
        const arquivo = campo.files?.[0]
        let erro = ""
        if (arquivo && !/\.(pdf|docx?)$/i.test(arquivo.name)) erro = "Envie o currículo em PDF ou Word."
        else if (arquivo && arquivo.size > 5 * 1024 * 1024) erro = "O arquivo deve ter no máximo 5 MB."
        campo.setCustomValidity(erro)
    }

    function candidatar(titulo: string) {
        setVaga(titulo)
        setEnviado(false)
        document.getElementById("candidatura")?.scrollIntoView()
    }

    return (
        <div className="bg-slate-50">
            {/* Hero */}
            <section className="relative isolate overflow-hidden bg-brand-dark text-white">
                <img src={equipeReuniao} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-brand-full-dark via-brand-full-dark/85 to-brand-full-dark/40" />
                <div className="mx-auto max-w-screen-2xl px-5 md:px-15 py-20 md:py-32">
                    <h1 className="max-w-3xl text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                        Trabalhe na ImobiFaces
                    </h1>
                    <p className="mt-5 max-w-xl text-lg text-white/75">
                        Somos 25 corretores especialistas espalhados por quatro cidades. Se você gosta de pessoas e de bons negócios, tem lugar para você aqui.
                    </p>
                    <a href="#vagas" className="mt-8 inline-flex rounded-full bg-accent px-7 py-4 font-bold text-on-accent transition hover:bg-accent-hover">
                        Ver vagas abertas
                    </a>
                </div>
            </section>

            {/* Benefícios */}
            <section className="mx-auto max-w-screen-2xl px-5 md:px-15 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">Por que a ImobiFaces?</h2>
                    <p className="mt-3 text-slate-500">Estrutura de imobiliária grande, com o cuidado de um time pequeno.</p>
                    <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {BENEFICIOS.map((b) => (
                            <li key={b.titulo} className="rounded-2xl border border-slate-200 bg-white p-5">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-light text-brand-muted">
                                    <CheckIcon className="h-5 w-5" />
                                </span>
                                <h3 className="mt-3 font-bold text-brand-dark">{b.titulo}</h3>
                                <p className="mt-1 text-sm leading-relaxed text-slate-500">{b.texto}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative">
                    <img src={equipeTrabalho} alt="Equipe da ImobiFaces trabalhando junta" loading="lazy" className="aspect-4/3 w-full rounded-3xl object-cover shadow-2xl" />
                </div>
            </section>

            {/* Vagas */}
            <section id="vagas" className="mx-auto max-w-screen-2xl px-5 md:px-15 pb-16 md:pb-24">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">Vagas abertas</h2>
                <ul className="mt-8 flex flex-col gap-3">
                    {VAGAS.map((v) => (
                        <li key={v.titulo} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:px-8 transition hover:border-brand-muted hover:shadow-md">
                            <div>
                                <h3 className="text-lg font-bold text-brand-dark">{v.titulo}</h3>
                                <p className="mt-1 flex flex-wrap items-center gap-x-3 text-sm text-slate-500">
                                    <span className="inline-flex items-center gap-1"><PinIcon className="h-4 w-4" />{v.local}</span>
                                    <span>{v.tipo}</span>
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => candidatar(v.titulo)}
                                className="rounded-full bg-brand-dark px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-muted"
                            >
                                Quero me candidatar
                            </button>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Formulário */}
            <section id="candidatura" className="bg-white border-t border-slate-200">
                <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark text-center">Envie sua candidatura</h2>
                    <p className="mt-3 text-center text-slate-500">Responderemos em até 5 dias úteis.</p>

                    {enviado ? (
                        <div className="mt-10 flex flex-col items-center rounded-3xl bg-green-50 p-10 text-center" role="status">
                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <CheckIcon className="h-8 w-8" />
                            </span>
                            <h3 className="mt-4 text-xl font-bold text-brand-dark">Candidatura recebida!</h3>
                            <p className="mt-2 text-slate-600">Obrigado, {nome.trim().split(/\s+/)[0]}. Recebemos seu interesse na vaga de {vaga}.</p>
                        </div>
                    ) : (
                        <form onSubmit={enviar} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-dark sm:col-span-2">
                                Nome completo
                                <input required value={nome} onChange={(e) => { setNome(e.target.value); validarCampo(e.target, nomeValido(e.target.value), "Informe seu nome completo.") }} autoComplete="name" className={inputCls} />
                            </label>
                            <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-dark">
                                E-mail
                                <input required type="email" value={email} onChange={(e) => { setEmail(e.target.value); validarCampo(e.target, emailValido(e.target.value), "Informe um e-mail válido, como nome@email.com.") }} autoComplete="email" className={inputCls} />
                            </label>
                            <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-dark">
                                Telefone
                                <input required type="tel" value={telefone} onChange={(e) => { const v = mascaraTelefone(e.target.value); setTelefone(v); validarCampo(e.target, telefoneValido(v), "Informe um telefone com DDD.") }} autoComplete="tel" placeholder="(15) 99999-9999" className={inputCls} />
                            </label>
                            <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-dark">
                                Vaga
                                <select value={vaga} onChange={(e) => setVaga(e.target.value)} className={inputCls}>
                                    {VAGAS.map((v) => <option key={v.titulo}>{v.titulo}</option>)}
                                </select>
                            </label>
                            <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-dark">
                                CRECI <span className="sr-only">(opcional)</span>
                                <input placeholder="Opcional" className={inputCls} />
                            </label>
                            <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-dark sm:col-span-2">
                                Currículo (PDF ou Word, até 5 MB)
                                <input required type="file" accept=".pdf,.doc,.docx" onChange={(e) => validarArquivo(e.target)} className="w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-brand-light file:px-4 file:py-2 file:font-semibold file:text-brand-muted" />
                            </label>
                            <label className="flex flex-col gap-1.5 text-sm font-medium text-brand-dark sm:col-span-2">
                                Por que você quer trabalhar na ImobiFaces?
                                <textarea rows={4} className={`${inputCls} h-auto py-3 resize-none`} />
                            </label>
                            <button type="submit" className="sm:col-span-2 mt-2 h-12 rounded-full bg-brand-muted font-bold text-white shadow-lg shadow-brand-muted/25 transition hover:bg-blue-700">
                                Enviar candidatura
                            </button>
                        </form>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default TrabalheConoscoPage
