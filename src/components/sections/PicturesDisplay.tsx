import foto1 from "../assets/predio-1.jpg"

// interface PicturesDisplayProps {
    // pictures: [];
// }

function PicturesDisplay() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-52 md:h-96">
            <button
                className="group relative h-64 md:h-full w-full overflow-hidden rounded-2xl text-white"
                onClick={() => alert("Ver mais fotos")}
            >
                <img
                    src={foto1}
                    alt="Main Picture"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </button>

            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-52 md:h-96">
                <button
                    className="group relative h-full w-full overflow-hidden rounded-2xl text-white"
                    onClick={() => alert("Ver mais fotos")}
                >
                    <img src={foto1} alt="Picture 1" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </button>

                <button
                    className="group relative h-full w-full overflow-hidden rounded-2xl text-white"
                    onClick={() => alert("Ver mais fotos")}
                >
                    <img src={foto1} alt="Picture 2" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </button>

                <button
                    className="group relative h-full w-full overflow-hidden rounded-2xl text-white"
                    onClick={() => alert("Ver mais fotos")}
                >
                    <img src={foto1} alt="Picture 3" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </button>

                <button
                    className="group relative h-full w-full overflow-hidden rounded-2xl text-white"
                    onClick={() => alert("Ver mais fotos")}
                >
                    <img src={foto1} alt="Picture 4" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-indigo-950/80 via-indigo-950/15 to-transparent" />
                    <span className="absolute inset-x-0 bottom-0 text-right text-lg p-3">
                        Ver mais fotos
                    </span>
                </button>
            </div>
        </div>
    )
}

export default PicturesDisplay