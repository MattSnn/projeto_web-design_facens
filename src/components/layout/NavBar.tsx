import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import type { NavParams, PageId } from "../../utils/navigation";

export interface NavLink {
    id: string;
    label: string;
    // quando tem "page", o link troca de página em vez de rolar até a seção
    page?: PageId;
    params?: NavParams;
}

interface NavBarProps {
    activePage: PageId
    setActivePage: (page: PageId, params?: NavParams) => void
    LinkIDs: NavLink[]
}

const OUTRAS_PAGINAS: Array<{ page: PageId; label: string; desc: string }> = [
    { page: "initialPage", label: "Página Inicial", desc: "Destaques e novidades" },
    { page: "todosOsApartamentos", label: "Todos os imóveis", desc: "Compre ou alugue" },
    { page: "calculatorPage", label: "Planeje o seu Investimento", desc: "Simuladores de financiamento" },
]

function NavBar({ activePage, setActivePage, LinkIDs }: NavBarProps) {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const closeMenu = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // fecha a gaveta com Esc
    useEffect(() => {
        if (!isOpen) return
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false)
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [isOpen])

    // sombra na barra depois que a página rola
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    function goTo(e: MouseEvent, page: PageId, params?: NavParams) {
        e.preventDefault()
        closeMenu()
        setActivePage(page, params)
    }

    function handleLink(e: MouseEvent, link: NavLink) {
        closeMenu()
        if (link.page) goTo(e, link.page, link.params)
    }

    return (
        <div>
            <nav className={`w-full z-50 h-16 md:h-20 px-4 md:px-15 top-0 left-0 fixed flex items-center gap-3 border-b transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-sm" : "bg-white border-transparent"}`}>
                <div className="flex-1">
                    <a
                        href="./"
                        className="inline-flex items-center gap-2 font-display text-xl md:text-[1.7rem] font-semibold tracking-tight"
                        onClick={(e) => goTo(e, "initialPage")}
                    >
                        <img src="/favicon.svg" alt="" className="h-8 w-8 md:h-9 md:w-9" />
                        <span>
                            <span className="text-brand-dark">Imobi</span>
                            <span className="text-brand-muted">Faces</span>
                        </span>
                    </a>
                </div>
                <div className="hidden md:flex gap-1 text-sm font-semibold text-slate-600">
                    {LinkIDs.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleLink(e, link)}
                            className="rounded-full px-4 py-2 transition-colors hover:bg-brand-light/60 hover:text-brand-dark"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="hidden md:flex flex-1 justify-end">
                    <a
                        href="#contato"
                        className="bg-brand-muted font-bold text-white text-sm px-5 py-3 rounded-full whitespace-nowrap shadow-lg shadow-brand-muted/25 hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        Falar com um especialista
                    </a>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isOpen}
                    aria-controls="menu-lateral"
                    className="relative z-50 flex flex-col items-center justify-center gap-1.5 w-11 h-11 rounded-full transition-colors hover:bg-slate-100 md:ml-2"
                >
                    <span className={`block h-0.5 w-6 rounded bg-brand-dark transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`block h-0.5 w-6 rounded bg-brand-dark transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 w-6 rounded bg-brand-dark transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </button>
            </nav>
            <div
                onClick={closeMenu}
                aria-hidden="true"
                className={`fixed inset-0 z-30 bg-brand-full-dark/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* Gaveta lateral */}
            <aside
                id="menu-lateral"
                aria-label="Menu"
                inert={!isOpen}
                className={`fixed top-0 right-0 z-40 h-full w-80 max-w-[85vw] bg-white shadow-2xl px-6 pt-24 pb-6 flex flex-col gap-8 overflow-y-auto transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Links principais: só no celular, porque no PC já estão na barra */}
                <div className="flex flex-col gap-1 md:hidden">
                    <span className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Nesta página
                    </span>
                    {LinkIDs.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleLink(e, link)}
                            className="rounded-xl px-3 py-2.5 text-lg font-semibold text-slate-700 transition-colors hover:bg-slate-100"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Outras abas do site: aparecem em todas as telas */}
                <div className="flex flex-col gap-1">
                    <span className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                        Mais páginas
                    </span>
                    {OUTRAS_PAGINAS.map((item) => {
                        const active = activePage === item.page
                        return (
                            <a
                                key={item.page}
                                href="./"
                                onClick={(e) => goTo(e, item.page)}
                                aria-current={active ? "page" : undefined}
                                className={`flex flex-col rounded-xl px-3 py-2.5 transition-colors ${active ? "bg-brand-light/70" : "hover:bg-slate-100"}`}
                            >
                                <span className={`text-lg font-semibold ${active ? "text-brand-muted" : "text-slate-700"}`}>{item.label}</span>
                                <span className="text-sm text-slate-400">{item.desc}</span>
                            </a>
                        )
                    })}
                </div>

                {/* CTA no fim da gaveta */}
                <div className="mt-auto rounded-2xl bg-brand-dark p-5 text-white">
                    <p className="font-semibold">Precisa de ajuda?</p>
                    <p className="mt-1 text-sm text-brand-light/80">Nossos corretores respondem em poucos minutos.</p>
                    <a
                        href="#contato"
                        onClick={closeMenu}
                        className="mt-4 block rounded-full bg-accent px-4 py-3 text-center font-bold text-on-accent transition-colors hover:bg-accent-hover"
                    >
                        Falar com um especialista
                    </a>
                </div>
            </aside>
        </div >
    )
}

export default NavBar
