function Footer() {
    return (
        <footer className="bg-emerald-950 w-full text-emerald-100 py-4 px-4 fixed bottom-0">
            <div className="max-w-6xl mx-auto">
                <div className="flex w-full">
                    <div className="flex-1">
                        <a href="#inicio" className="font-black text-white text-2xl" >Imobiliária</a>
                        <p className="text-xs text-emerald-500">Encontre o imóvel ideal com seguraça e agilidade</p>
                    </div>
                    <div className="flex-1 mt-3 text-emerald-100 flex flex-col items-end mb-5">
                        <div>
                            <h1 className="font-bold  text-emerald-500">DESENVOLVIDO POR</h1>
                            <div className="grid grid-cols-2 gap-x-8 max-w-xs text-xs">
                                <h2>Mateus Sonnenberg</h2>
                                <h2>Pedro Wagner</h2>
                                <h2>Rodrigo Boava</h2>
                                <h2>Jhonny Walter</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-emerald-800" />
                <div className="flex w-full justify-between mt-5 text-emerald-600">
                    <p className="text-xs items-start">&copy; 2026 Imobiliária. Todos os direitos reservados.</p>
                    <p className="text-xs items-end">Design & Performance</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer