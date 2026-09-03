function NavBar()
{
    return(
        <nav className="bg-green-400 w-full py-4 px-4 top-0 fixed flex">
            <a href="#inicio" className="font-black text-emerald-900 text-lg md:text-2xl" >Imobiliaria</a>
            <div className="text-right flex justify-end w-full gap-2 md:gap-5 text-shadow-emerald-950 text-sm md:text-lg font-bold flex-wrap">
                <a href="#oportunidades">Oportunidades</a>
                <a href="#contato">Contato</a>
            </div>
        </nav>
    )
}

export default NavBar