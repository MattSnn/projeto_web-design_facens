import MainCalculator from "../components/sections/MainCalculator"
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";
import type { Navigate } from "../utils/navigation";

interface CalculatorPageProps {
    navigate: Navigate
}

function CalculatorPage({ navigate }: CalculatorPageProps) {

    return (
        <div>
            <MainCalculator navigate={navigate} />
            <Contact />
            <Footer />
        </div>
    )
}

export default CalculatorPage
