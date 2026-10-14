import predio1 from "../components/assets/predio-1.jpg";

export type Predio = {
    id: number;
    name: string;
    mainImg: string;
    info: string;
    area: string;
    location: string;
    price: number;
    images: string[];
    planta: string;
    description: string;
};

export const prediosLista: Predio[] = [
    {
        id: 0,
        name: "Residencial Jardim",
        mainImg: predio1,
        info: "Apartamento bonito e confortável",
        area: "45m²",
        location: "São Paulo",
        price: 325000,
        images: [predio1],
        planta: "Planta de 45m²",
        description: "Apartamento confortável em uma localização tranquila.",
    },
    {
        id:1,
        name: "Edifício Central",
        mainImg: predio1,
        info: "Apartamento moderno",
        area: "80m²",
        location: "Campinas",
        price: 690000,
        images: [predio1],
        planta: "Planta de 80m²",
        description: "Apartamento moderno próximo aos principais serviços."
    },
    {
        id: 2,
        name: "Residencial Jardim",
        mainImg: predio1,
        info: "Apartamento bonito e confortável",
        area: "70m²",
        location: "São Paulo",
        price: 540000,
        images: [predio1],
        planta: "Planta de 70m²",
        description: "Apartamento espaçoso em uma localização tranquila."
    },
    {
        id: 3,
        name: "Edifício Central",
        mainImg: predio1,
        info: "Apartamento moderno",
        area: "80m²",
        location: "Campinas",
        price: 835000,
        images: [predio1],
        planta: "Planta de 80m²",
        description: "Apartamento moderno com ambientes bem distribuídos."
    },
    {
        id: 4,
        name: "Residencial Jardim",
        mainImg: predio1,
        info: "Apartamento bonito e confortável",
        area: "70m²",
        location: "São Paulo",
        price: 610000,
        images: [predio1],
        planta: "Planta de 70m²",
        description: "Apartamento amplo, ideal para famílias."
    },
    {
        id: 5,
        name: "Edifício Central",
        mainImg: predio1,
        info: "Apartamento moderno",
        area: "120m²",
        location: "Campinas",
        price: 1250000,
        images: [predio1],
        planta: "Planta de 120m²",
        description: "Apartamento amplo com espaço para toda a família."
    },
];

export default prediosLista;