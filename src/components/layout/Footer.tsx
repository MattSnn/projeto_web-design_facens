import type { MouseEvent } from "react"
import { buildUrl, goTo } from "../../utils/navigation"
import type { NavParams, PageId } from "../../utils/navigation"

const COLUNAS: Array<{ titulo: string; links: Array<{ label: string; page: PageId; params?: NavParams }> }> = [
    {
        titulo: "Navegação",
        links: [
            { label: "Página inicial", page: "initialPage" },
            { label: "Todos os imóveis", page: "todosOsApartamentos" },
            { label: "Simuladores", page: "calculatorPage" },
            { label: "Trabalhe conosco", page: "trabalheConosco" },
        ],
    },
    {
        titulo: "Imóveis",
        links: [
            { label: "Comprar", page: "todosOsApartamentos", params: { tipo: "venda" } },
            { label: "Alugar", page: "todosOsApartamentos", params: { tipo: "aluguel" } },
            { label: "São Paulo", page: "todosOsApartamentos", params: { busca: "São Paulo" } },
            { label: "Campinas", page: "todosOsApartamentos", params: { busca: "Campinas" } },
            { label: "Sorocaba", page: "todosOsApartamentos", params: { busca: "Sorocaba" } },
            { label: "Santos", page: "todosOsApartamentos", params: { busca: "Santos" } },
        ],
    },
]

const EQUIPE = ["Mateus Sonnenberg", "Pedro Wagner", "Rodrigo Vieira", "Jhonny Walter"]

const REDES = [
    { nome: "Instagram", href: "https://instagram.com", d: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5.5-1.5h.01" },
    { nome: "Facebook", href: "https://facebook.com", d: "M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8Z" },
    { nome: "LinkedIn", href: "https://linkedin.com", d: "M4 9h4v11H4V9Zm2-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm5 5h4v1.6A4 4 0 0 1 18.5 9 3.5 3.5 0 0 1 22 12.5V20h-4v-6.5a1.5 1.5 0 0 0-3 0V20h-4V9Z" },
]

function Footer() {
    function abrir(e: MouseEvent, page: PageId, params?: NavParams) {
        e.preventDefault()
        goTo(page, params)
    }

    return (
        <footer className="bg-brand-full-dark w-full text-brand-light px-5 md:px-15 pt-16 pb-8">
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10">
                    <div className="col-span-2 lg:col-span-1">
                        <a
                            href={buildUrl("initialPage")}
                            onClick={(e) => abrir(e, "initialPage")}
                            className="inline-flex items-center gap-2 font-display text-2xl font-semibold"
                        >
                            <img src="/favicon.svg" alt="" className="h-9 w-9" />
                            <span><span className="text-white">Imobi</span><span className="text-accent">Faces</span></span>
                        </a>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-light/60">
                            Encontre o imóvel ideal com segurança e agilidade. Atendimento em São Paulo, Campinas, Sorocaba e Santos.
                        </p>
                        <div className="mt-6 flex gap-3">
                            {REDES.map((rede) => (
                                <a
                                    key={rede.nome}
                                    href={rede.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={rede.nome}
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-brand-light/80 ring-1 ring-white/10 transition hover:bg-accent hover:text-on-accent"
                                >
                                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d={rede.d} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {COLUNAS.map((coluna) => (
                        <nav key={coluna.titulo} aria-label={coluna.titulo}>
                            <h2 className="text-sm font-bold uppercase tracking-wider text-white">{coluna.titulo}</h2>
                            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
                                {coluna.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={buildUrl(link.page, link.params)}
                                            onClick={(e) => abrir(e, link.page, link.params)}
                                            className="text-brand-light/60 transition-colors hover:text-accent"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}

                    <div className="col-span-2 lg:col-span-1">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contato</h2>
                        <ul className="mt-4 flex flex-col gap-2.5 text-sm text-brand-light/60">
                            <li><a href="tel:+551133334444" className="hover:text-accent">(11) 3333-4444</a></li>
                            <li><a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="hover:text-accent">WhatsApp (11) 99999-9999</a></li>
                            <li><a href="mailto:imobifaces@gmail.com" className="hover:text-accent">imobifaces@gmail.com</a></li>
                            <li>Seg. a sex. 9h–18h · Sáb. 9h–13h</li>
                        </ul>
                        <h2 className="mt-8 text-sm font-bold uppercase tracking-wider text-white">Desenvolvido por</h2>
                        <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-brand-light/60">
                            {EQUIPE.map((nome) => <li key={nome}>{nome}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="mt-14 flex flex-col md:flex-row gap-3 justify-between border-t border-white/10 pt-6 text-xs text-brand-light/45">
                    <p>&copy; 2026 ImobiFaces. Todos os direitos reservados. Projeto acadêmico de Web Design · Facens.</p>
                    <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }} className="hover:text-accent">
                        Voltar ao topo ↑
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
