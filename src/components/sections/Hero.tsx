import buildings from "../assets/buildings.png";

function Hero() {
    return (
        <section className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${buildings})` }}>
            <div>
                <div className="absolute inset-0 bg-linear-to-b from-black to-transparent" >
                    <div className="flex h-screen">
                        <div className="flex-1 flex items-center text-center justify-center">
                            <h1></h1>
                        </div>
                        <div className="flex-1 flex items-center text-center justify-center">
                            <h1></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero