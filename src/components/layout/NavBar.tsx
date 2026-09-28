import { useState, useEffect } from "react";

function NavBar() {

    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <div>
            <nav className="bg-white w-full z-50 py-3 px-4 md:py-5 md:px-15 top-0 left-0 fixed flex items-center gap-3">
                <div className="font-black flex-1 text-lg md:text-2xl">
                    <a href="#inicio" className="text-black">Imobi</a>
                    <a href="#inicio" className="text-brand-muted">Faces</a>
                </div>
                <div className="hidden md:flex gap-4 lg:gap-6 font-bold text-[#55627a]">
                    <a href="">Início</a>
                    <a href="">Oportunidades</a>
                    <a href="">Sobre nós</a>
                </div>
                <div className="hidden md:flex flex-1 justify-end">
                    <a
                        href="#contato"
                        className="bg-brand-muted font-bold text-white text-sm md:text-base px-3 py-2 md:px-4 md:py-3 rounded-3xl whitespace-nowrap"
                    >
                        Falar com um especialista
                    </a>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    aria-label="Abrir menu"
                    className="flex flex-col items-center justify-center gap-1.5 w-10 h-10 md:ml-2"
                >
                    <span className="block h-0.5 w-6 bg-black" />
                    <span className="block h-0.5 w-6 bg-black" />
                    <span className="block h-0.5 w-6 bg-black" />
                </button>
            </nav>
            <div
                onClick={closeMenu}
                aria-hidden="true"
                className={`fixed inset-0 z-30 bg-black/40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* Gaveta lateral */}
            <aside
                aria-hidden={!isOpen}
                className={`fixed top-0 right-0 z-40 h-full w-64 md:w-80 bg-white shadow-xl px-6 pt-24 pb-6 flex flex-col gap-6 font-bold text-[#55627a] transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Links principais: só no celular, porque no PC já estão na barra */}
                <div className="flex flex-col gap-6 md:hidden">
                    <a href="#inicio" className="text-lg">Início</a>
                    <a href="#oportunidades" className="text-lg">Oportunidades</a>
                    <a href="#sobre" className="text-lg">Sobre nós</a>
                </div>

                {/* Outras abas do site: aparecem em todas as telas */}
                <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 md:border-t-0 md:pt-0">
                    <span className="text-xs uppercase tracking-wider text-gray-400">
                        Mais páginas
                    </span>
                    <a href="#blog" className="text-lg">Blog</a>
                    <a href="#faq" className="text-lg">Perguntas frequentes</a>
                    <a href="#carreiras" className="text-lg">Trabalhe conosco</a>
                </div>

                {/* CTA no fim da gaveta: só no celular */}
                <a
                    href="#contato"
                    className="mt-auto bg-brand-muted text-white text-center px-4 py-3 rounded-3xl md:hidden"
                >
                    Falar com um especialista
                </a>
            </aside>
        </div >
    )
}

export default NavBar