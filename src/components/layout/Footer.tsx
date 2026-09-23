function Footer() {
    return (
        <footer className="bg-brand-dark w-full text-brand-light py-4 px-4 mt-10 bottom-0">
            <div className="max-w-6xl mx-auto">
                <div className="md:flex w-full">
                    <div className="flex-1">
                        <a href="#inicio" className="font-black text-on-brand text-2xl" >Imobiliária</a>
                        <p className="text-xs text-brand">Encontre o imóvel ideal com seguraça e agilidade</p>
                    </div>
                    <div className="flex-1 mt-5 md:mt-3 text-brand-light flex flex-col md:items-end mb-5">
                        <div>
                            <h1 className="font-bold  text-brand text-sm">DESENVOLVIDO POR</h1>
                            <div className="grid grid-cols-2 md:gap-x-5 max-w-xs text-xs">
                                <h2>Mateus Sonnenberg</h2>
                                <h2>Pedro Wagner</h2>
                                <h2>Rodrigo Boava</h2>
                                <h2>Jhonny Walter</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-brand-border" />
                <div className="md:flex w-full justify-between mt-5 text-brand-muted">
                    <p className="text-xs items-start">&copy; 2026 Imobiliária. Todos os direitos reservados.</p>
                    <p className="text-xs items-end mt-2 md:mt-0 ">Design & Performance</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer