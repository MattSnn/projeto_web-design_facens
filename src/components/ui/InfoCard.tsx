import { useCountUp } from "../../hooks/useCountUp"

interface InfoCardProps {
    name: string
    value: number
    suffix?: string
    image: string
}

function InfoCard({ name, value, suffix = "", image }: InfoCardProps) {
    const { ref, valor } = useCountUp<HTMLDivElement>(value)

    return (
        <div
            ref={ref}
            className="group relative w-full h-52 md:h-60 overflow-hidden rounded-3xl shadow-lg"
        >
            <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-brand-full-dark via-brand-full-dark/60 to-brand-full-dark/10" />

            <div className="absolute bottom-0 left-0 p-5 md:p-6 text-white">
                <p className="text-3xl md:text-5xl font-bold tracking-tight tabular-nums">
                    {valor.toLocaleString("pt-BR")}{suffix}
                </p>
                <p className="mt-1 text-sm md:text-base font-medium text-brand-light/85">
                    {name}
                </p>
            </div>
        </div>
    )

}

export default InfoCard;
