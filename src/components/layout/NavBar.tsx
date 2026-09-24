function NavBar() {
    return (
        <nav className="bg-white w-full z-1 py-5 px-15 top-0 fixed flex items-center">
            <div className="font-black flex-1 text-lg md:text-2xl" >
                <a href="#inicio" className="text-black">Imobi</a>
                <a href="#inicio" className="text-brand-muted">Faces</a>
            </div>
            <div className="flex gap-4 font-bold text-[#55627a] ">
                <a href="">Início</a>
                <a href="">Oportunidades</a>
                <a href="">Sobre nós</a>
            </div>
            <div className="text-right flex flex-1 justify-end w-fullflex-wrap">
                <a href="#contato" className="bg-brand-muted font-bold text-white px-4 py-3 rounded-3xl">
                    Falar com um especialista</a>
            </div>
        </nav>
    )
}

export default NavBar;