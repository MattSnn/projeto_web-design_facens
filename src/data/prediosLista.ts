import predio1 from "../components/assets/predio-1.jpg";
import predio2 from "../components/assets/predio-1.jpg";


export type Predio = {
    name: string;
    img: string;
    info: string;
    area: string;
    location: string;
    price: number;
};

export const prediosLista: Predio[] = [
    {
        name: "Residencial Jardim",
        img: predio1,
        info: "Apartamento bonito e confortável",
        area: "45m²",
        location: "São Paulo",
        price: 325000
    },

    {
        name: "Edifício Central",
        img: predio2,
        info: "Apartamento moderno",
        area: "80m²",
        location: "Campinas",
        price: 690000
    },
    {
        name: "Residencial Jardim",
        img: predio1,
        info: "Apartamento bonito e confortável",
        area: "70m²",
        location: "São Paulo",
        price: 540000
    },

    {
        name: "Edifício Central",
        img: predio2,
        info: "Apartamento moderno",
        area: "80m²",
        location: "Campinas",
        price: 835000
    },
    {
        name: "Residencial Jardim",
        img: predio1,
        info: "Apartamento bonito e confortável",
        area: "70m²",
        location: "São Paulo",
        price: 610000
    },

    {
        name: "Edifício Central",
        img: predio2,
        info: "Apartamento moderno",
        area: "120m²",
        location: "Campinas",
        price: 1250000
    },
];

export default prediosLista;