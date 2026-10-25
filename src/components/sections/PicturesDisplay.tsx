import { useEffect, useState } from "react"
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from "../ui/Icons"

interface PicturesDisplayProps {
    pictures: string[]
    name: string
}

function PicturesDisplay({ pictures, name }: PicturesDisplayProps) {
    // índice da foto aberta no lightbox (null = fechado)
    const [aberta, setAberta] = useState<number | null>(null)
    const total = pictures.length

    const anterior = () => setAberta((i) => (i === null ? i : (i - 1 + total) % total))
    const proxima = () => setAberta((i) => (i === null ? i : (i + 1) % total))

    useEffect(() => {
        if (aberta === null) return
        document.body.style.overflow = "hidden"
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setAberta(null)
            if (e.key === "ArrowLeft") setAberta((i) => (i === null ? i : (i - 1 + total) % total))
            if (e.key === "ArrowRight") setAberta((i) => (i === null ? i : (i + 1) % total))
        }
        window.addEventListener("keydown", onKey)
        return () => {
            document.body.style.overflow = ""
            window.removeEventListener("keydown", onKey)
        }
    }, [aberta, total])

    if (total === 0) return null

    const [principal, ...resto] = pictures
    const miniaturas = resto.slice(0, 4)

    return (
        <>
            <div id="fotos" className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6">
                <button
                    type="button"
                    className="group relative h-64 sm:h-80 md:h-[28rem] w-full overflow-hidden rounded-3xl text-white"
                    onClick={() => setAberta(0)}
                >
                    <img
                        src={principal}
                        alt={`Foto principal do ${name}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-4 left-4 rounded-full bg-black/55 px-4 py-2 text-sm font-semibold backdrop-blur md:hidden">
                        Ver {total} fotos
                    </span>
                </button>

                <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-3 h-[28rem]">
                    {miniaturas.map((foto, index) => {
                        const ultima = index === miniaturas.length - 1
                        return (
                            <button
                                key={foto}
                                type="button"
                                className="group relative h-full w-full overflow-hidden rounded-3xl text-white"
                                onClick={() => setAberta(index + 1)}
                            >
                                <img src={foto} alt={`Foto ${index + 2} do ${name}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                {ultima && (
                                    <>
                                        <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-brand-full-dark/85 via-brand-full-dark/30 to-transparent" />
                                        <span className="absolute inset-x-0 bottom-0 p-4 text-right text-lg font-semibold">
                                            Ver todas as {total} fotos →
                                        </span>
                                    </>
                                )}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Lightbox */}
            {aberta !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Fotos do ${name}`}
                    className="fixed inset-0 z-[60] flex flex-col bg-brand-full-dark/95 backdrop-blur-sm"
                    onClick={() => setAberta(null)}
                >
                    <div className="flex items-center justify-between px-4 md:px-8 py-4 text-white">
                        <p className="text-sm md:text-base font-medium">
                            {name} <span className="text-white/50">· {aberta + 1} de {total}</span>
                        </p>
                        <button
                            type="button"
                            aria-label="Fechar galeria"
                            autoFocus
                            onClick={() => setAberta(null)}
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                        >
                            <CloseIcon className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="relative flex flex-1 items-center justify-center px-4 md:px-20 min-h-0">
                        <img
                            key={pictures[aberta]}
                            src={pictures[aberta]}
                            alt={`Foto ${aberta + 1} do ${name}`}
                            onClick={(e) => e.stopPropagation()}
                            className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl starting:opacity-0 transition-opacity duration-300"
                        />
                        {total > 1 && (
                            <>
                                <button
                                    type="button"
                                    aria-label="Foto anterior"
                                    onClick={(e) => { e.stopPropagation(); anterior() }}
                                    className="absolute left-2 md:left-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 md:bg-white/10 text-white transition hover:bg-white/25"
                                >
                                    <ArrowLeftIcon className="h-6 w-6" />
                                </button>
                                <button
                                    type="button"
                                    aria-label="Próxima foto"
                                    onClick={(e) => { e.stopPropagation(); proxima() }}
                                    className="absolute right-2 md:right-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/50 md:bg-white/10 text-white transition hover:bg-white/25"
                                >
                                    <ArrowRightIcon className="h-6 w-6" />
                                </button>
                            </>
                        )}
                    </div>

                    <div className="no-scrollbar overflow-x-auto px-4 py-4" onClick={(e) => e.stopPropagation()}>
                        <div className="mx-auto flex w-max gap-2">
                        {pictures.map((foto, index) => (
                            <button
                                key={foto}
                                type="button"
                                aria-label={`Ver foto ${index + 1}`}
                                aria-current={index === aberta}
                                onClick={() => setAberta(index)}
                                className={`h-14 w-20 md:h-16 md:w-24 shrink-0 overflow-hidden rounded-lg ring-2 transition ${index === aberta ? "ring-accent opacity-100" : "ring-transparent opacity-50 hover:opacity-90"}`}
                            >
                                <img src={foto} alt="" className="h-full w-full object-cover" />
                            </button>
                        ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PicturesDisplay
