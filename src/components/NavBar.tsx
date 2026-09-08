function NavBar()
{
    return(
        <nav className="bg-brand-dark w-full z-1 py-4 px-4 top-0 fixed flex">
            <a href="#inicio" className="font-black text-on-brand text-lg md:text-2xl" >Imobiliaria</a>
            <div className="text-right flex justify-end w-full gap-2 md:gap-5 text-shadow-brand-dark text-sm md:text-lg font-bold flex-wrap">
                <a href="#oportunidades">Oportunidades</a>
                <a href="#contato">Contato</a>
            </div>
        </nav>
    )
}

export default NavBar;