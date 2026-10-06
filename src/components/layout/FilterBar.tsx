interface FilterBarProps {
    setSearch: (search: string) => void;
    setPrice: (price: string) => void;
    setArea: (area: string) => void;
}

function FilterBar({ setSearch, setPrice, setArea }: FilterBarProps) {
    return (
        <div className="bg-indigo-900 p-5 flex flex-col md:flex-row text-white justify-around">

            <div className="w-full md:w-1/4 flex items-center mb-2 md:mb-0">
                <input type="text" placeholder="  Pesquisar por nome..."
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-white border  text-black border-gray-300 rounded-lg w-full" />
            </div>

            <div className="flex gap-3 md:contents">
                <div className="flex-col items-center gap-2">
                    <label htmlFor="" className="m-2 font-bold">Metragem:</label>
                    <select id="filter-type"
                        className="border-2 border-gray-200 rounded-lg text-sm p-1"
                        onChange={(e) => setArea(e.target.value)}
                    >
                        <div className="text-black text-sm">
                            <option value="">Todos</option>
                            <option value="<50">Menor que 50m²</option>
                            <option value="50-100">Entre 50m² e 100m²</option>
                            <option value=">100">Acima de 100m²</option>
                        </div>
                    </select>
                </div>

                <div className="flex-col items-center gap-2">
                    <label htmlFor="" className="m-2 font-bold">Preço:</label>
                    <select id="filter-price"
                        className="border-2 border-gray-200 rounded-lg text-sm p-1"
                        onChange={(e) => setPrice(e.target.value)}
                    >
                        <div className="text-black text-sm">
                            <option value="">Todos</option>
                            <option value="<500000">Até R$ 500.000</option>
                            <option value="500000-1000000">R$500.000 - 1.000.000</option>
                            <option value=">1000000">Acima de R$ 1.000.000</option>
                        </div>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FilterBar