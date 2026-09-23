interface InfoCardProps {
    name: string
    value: string
    image: string
}



function InfoCard({ name, value, image }: InfoCardProps) {
    return (
        <div
            className="relative w-80 h-48 overflow-hidden rounded-xl bg-cover bg-center shadow-lg"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-linear-to-tr from-blue-950 via-blue-950/70 to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 text-white">

                <p className="mt-1 text-md font-medium text-blue-200">
                    {name}
                </p>

                <p className="mt-1 text-3xl font-bold">
                    {value}
                </p>
            </div>
        </div>
    )

}

export default InfoCard;