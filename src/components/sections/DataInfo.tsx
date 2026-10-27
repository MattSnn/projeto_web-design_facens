import InfoCard from "../ui/InfoCard";
import casa1 from "../assets/casa-card-1.jpg"
import Corretores from "../assets/corretor.jpg"
import Familias from "../assets/FamiliasAtendidas.jpg"
import ImobiFaces from "../assets/ImobiFacens.jpg"
import juliana from "../assets/clientes/juliana.jpg"
import marcos from "../assets/clientes/marcos.jpg"
import camila from "../assets/clientes/camila.jpg"
import { CheckIcon } from "../ui/Icons";

const CARDS_INFO = [
    {
        name: "Imóveis vendidos",
        value: 3450,
        suffix: "+",
        image: casa1
    },
    {
        name: "Famílias atendidas",
        value: 5200,
        suffix: "+",
        image: Familias
    },
    {
        name: "Anos de mercado",
        value: 15,
        image: ImobiFaces
    },
    {
        name: "Corretores especialistas",
        value: 25,
        image: Corretores
    }
]

const DIFERENCIAIS = [
    "Imóveis vistoriados e documentação conferida",
    "Corretor dedicado do primeiro contato até as chaves",
    "Apoio no financiamento com os principais bancos",
]

const DEPOIMENTOS = [
    {
        nome: "Juliana Prado",
        info: "Comprou no Residencial Jardim Aurora",
        foto: juliana,
        texto: "Era nosso primeiro imóvel e estávamos perdidos com a papelada. A Ana explicou cada etapa e conseguimos o financiamento em menos de um mês.",
    },
    {
        nome: "Marcos Oliveira",
        info: "Alugou no Edifício Alameda Real",
        foto: marcos,
        texto: "Visitei três apartamentos em uma tarde e fechei o contrato no mesmo dia. Atendimento rápido e sem enrolação, recomendo demais.",
    },
    {
        nome: "Camila Ferreira",
        info: "Comprou no Residencial Mirante do Lago",
        foto: camila,
        texto: "O Rafael entendeu exatamente o que a gente procurava. Mostrou só imóveis que faziam sentido e negociou muito bem o valor final.",
    },
]

function DataInfo() {
    return (
        <section id="sobre-nos" className="relative isolate w-full px-5 md:px-15 py-20 md:py-28 bg-white">
            <div className="mx-auto max-w-screen-2xl">

                {/* Sobre nós */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-dark">
                            Sobre a ImobiFaces
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-slate-600">
                            A ImobiFaces nasceu em Sorocaba com uma ideia simples: tratar cada cliente como se fosse da família.
                            Hoje atuamos em quatro cidades, com uma equipe de corretores que conhece cada bairro de perto.
                        </p>
                        <ul className="mt-8 flex flex-col gap-3">
                            {DIFERENCIAIS.map((item) => (
                                <li key={item} className="flex items-center gap-3 font-medium text-brand-dark">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-muted text-white">
                                        <CheckIcon className="h-4 w-4" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 md:gap-5">
                        {CARDS_INFO.map((card, index) => (
                            <div key={card.name} className={index % 2 === 1 ? "translate-y-6 md:translate-y-10" : ""}>
                                <InfoCard
                                    name={card.name}
                                    value={card.value}
                                    suffix={card.suffix}
                                    image={card.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Depoimentos */}
                <div className="mt-28 md:mt-36">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">O que dizem nossos clientes</h2>
                    </div>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                        {DEPOIMENTOS.map((d) => (
                            <figure key={d.nome} className="flex flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                                <blockquote className="flex-1 leading-relaxed text-slate-600">“{d.texto}”</blockquote>
                                <figcaption className="mt-6 flex items-center gap-3">
                                    <img src={d.foto} alt="" loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                                    <span>
                                        <span className="block font-bold text-brand-dark">{d.nome}</span>
                                        <span className="block text-sm text-slate-500">{d.info}</span>
                                    </span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DataInfo;
