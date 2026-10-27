import { useState } from "react";
import type { FormEvent } from "react";
import { CheckIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "../ui/Icons";
import { emailValido, mascaraTelefone, nomeValido, telefoneValido } from "../../utils/formulario";

const WHATSAPP = "5511999999999"

const CANAIS = [
    { icon: WhatsAppIcon, titulo: "WhatsApp", valor: "(11) 99999-9999", href: `https://wa.me/${WHATSAPP}`, externo: true },
    { icon: PhoneIcon, titulo: "Telefone", valor: "(11) 3333-4444", href: "tel:+551133334444", externo: false },
    { icon: MailIcon, titulo: "E-mail", valor: "imobifaces@gmail.com", href: "mailto:imobifaces@gmail.com", externo: false },
    { icon: PinIcon, titulo: "Escritório", valor: "Rod. Senador José Ermírio de Moraes, 1425 · Sorocaba", href: "https://maps.google.com/?q=Facens+Sorocaba", externo: true },
]

interface Form {
    nome: string
    email: string
    telefone: string
    interesse: string
    mensagem: string
}

const VAZIO: Form = { nome: "", email: "", telefone: "", interesse: "Comprar", mensagem: "" }

function validar(form: Form) {
    const erros: Partial<Record<keyof Form, string>> = {}
    if (!nomeValido(form.nome)) erros.nome = "Informe seu nome completo."
    if (!emailValido(form.email)) erros.email = "Informe um e-mail válido."
    if (!telefoneValido(form.telefone)) erros.telefone = "Informe um telefone com DDD."
    if (form.mensagem.trim().length < 10) erros.mensagem = "Conte um pouco mais (mínimo 10 caracteres)."
    return erros
}

const inputCls = "h-12 w-full rounded-xl border bg-white px-4 text-sm text-brand-dark outline-none transition focus:border-brand-muted focus:ring-4 focus:ring-brand-muted/15"

function Contact() {
    const [form, setForm] = useState<Form>(VAZIO)
    const [tentouEnviar, setTentouEnviar] = useState(false)
    const [status, setStatus] = useState<"idle" | "enviando" | "enviado">("idle")

    const erros = validar(form)
    const mostrarErro = (campo: keyof Form) => tentouEnviar && erros[campo]

    const set = (campo: keyof Form, valor: string) => setForm({ ...form, [campo]: valor })

    function enviar(e: FormEvent) {
        e.preventDefault()
        setTentouEnviar(true)
        if (Object.keys(erros).length > 0) return
        // ainda não temos backend: simulamos o envio
        setStatus("enviando")
        setTimeout(() => setStatus("enviado"), 900)
    }

    function novaMensagem() {
        setForm(VAZIO)
        setTentouEnviar(false)
        setStatus("idle")
    }

    const borda = (campo: keyof Form) => (mostrarErro(campo) ? "border-red-400" : "border-slate-200")

    return (
        <section id="contato" className="bg-brand-dark px-5 md:px-15 py-20 md:py-28 text-white">
            <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">

                {/* Canais */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Fale com um corretor
                    </h2>
                    <p className="mt-4 max-w-md text-brand-light/75">
                        Mande uma mensagem ou escolha um dos canais abaixo. Um especialista responde em até 1 hora útil.
                    </p>

                    <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {CANAIS.map(({ icon: Icon, titulo, valor, href, externo }) => (
                            <li key={titulo}>
                                <a
                                    href={href}
                                    target={externo ? "_blank" : undefined}
                                    rel={externo ? "noreferrer" : undefined}
                                    className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-accent/50 hover:bg-white/10"
                                >
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <span className="min-w-0">
                                        <span className="block text-sm font-semibold">{titulo}</span>
                                        <span className="block text-sm text-brand-light/70 break-words">{valor}</span>
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <p className="mt-6 text-sm text-brand-light/50">Atendimento de segunda a sexta, das 9h às 18h, e sábados das 9h às 13h.</p>
                </div>

                {/* Formulário */}
                <div className="rounded-3xl bg-white p-6 md:p-9 text-brand-dark shadow-2xl shadow-black/30">
                    {status === "enviado" ? (
                        <div className="flex flex-col items-center py-10 text-center" role="status">
                            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <CheckIcon className="h-8 w-8" />
                            </span>
                            <h3 className="mt-5 text-2xl font-bold">Mensagem enviada!</h3>
                            <p className="mt-2 max-w-sm text-slate-500">
                                Obrigado, {form.nome.trim().split(/\s+/)[0]}. Um especialista vai entrar em contato pelo e-mail ou telefone informado.
                            </p>
                            <button type="button" onClick={novaMensagem} className="mt-6 font-semibold text-brand-muted hover:underline">
                                Enviar outra mensagem
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={enviar} noValidate className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold">Envie uma mensagem</h3>

                            <label className="flex flex-col gap-1.5 text-sm font-medium">
                                Nome
                                <input value={form.nome} onChange={(e) => set("nome", e.target.value)} autoComplete="name" placeholder="Seu nome completo" className={`${inputCls} ${borda("nome")}`} aria-invalid={!!mostrarErro("nome")} />
                                {mostrarErro("nome") && <span className="text-xs text-red-500">{erros.nome}</span>}
                            </label>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <label className="flex flex-col gap-1.5 text-sm font-medium">
                                    E-mail
                                    <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" placeholder="voce@email.com" className={`${inputCls} ${borda("email")}`} aria-invalid={!!mostrarErro("email")} />
                                    {mostrarErro("email") && <span className="text-xs text-red-500">{erros.email}</span>}
                                </label>
                                <label className="flex flex-col gap-1.5 text-sm font-medium">
                                    Telefone
                                    <input type="tel" value={form.telefone} onChange={(e) => set("telefone", mascaraTelefone(e.target.value))} autoComplete="tel" placeholder="(11) 99999-9999" className={`${inputCls} ${borda("telefone")}`} aria-invalid={!!mostrarErro("telefone")} />
                                    {mostrarErro("telefone") && <span className="text-xs text-red-500">{erros.telefone}</span>}
                                </label>
                            </div>

                            <fieldset className="flex flex-col gap-1.5 text-sm font-medium">
                                <legend className="mb-1.5">Tenho interesse em</legend>
                                <div className="flex flex-wrap gap-2">
                                    {["Comprar", "Alugar", "Anunciar", "Outro"].map((opcao) => (
                                        <button
                                            key={opcao}
                                            type="button"
                                            aria-pressed={form.interesse === opcao}
                                            onClick={() => set("interesse", opcao)}
                                            className={`rounded-full border px-4 py-2 transition ${form.interesse === opcao ? "border-brand-muted bg-brand-muted text-white" : "border-slate-200 text-slate-600 hover:border-brand-muted"}`}
                                        >
                                            {opcao}
                                        </button>
                                    ))}
                                </div>
                            </fieldset>

                            <label className="flex flex-col gap-1.5 text-sm font-medium">
                                Mensagem
                                <textarea value={form.mensagem} onChange={(e) => set("mensagem", e.target.value)} rows={4} placeholder="Conte o que você procura: bairro, quartos, faixa de preço..." className={`${inputCls} h-auto py-3 resize-none ${borda("mensagem")}`} aria-invalid={!!mostrarErro("mensagem")} />
                                {mostrarErro("mensagem") && <span className="text-xs text-red-500">{erros.mensagem}</span>}
                            </label>

                            <button
                                type="submit"
                                disabled={status === "enviando"}
                                className="mt-2 flex h-12 items-center justify-center gap-2 rounded-full bg-brand-muted font-bold text-white shadow-lg shadow-brand-muted/25 transition hover:bg-blue-700 disabled:opacity-70"
                            >
                                {status === "enviando" && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />}
                                {status === "enviando" ? "Enviando..." : "Enviar mensagem"}
                            </button>
                            <p className="text-center text-xs text-slate-400">
                                Seus dados são usados apenas para retornarmos o contato.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Contact;
