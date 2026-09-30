import predio1 from "../components/assets/predio-1.jpg";
import predio2 from "../components/assets/predio-1.jpg";


export type Predio = {
    name: string;
    img: string;
    info: string;
    area: string;
    location: string;
};

export const prediosLista: Predio[] = [
    {
        name: "Residencial Jardim",
        img: predio1,
        info: "Apartamento bonito e confortável",
        area: "70m²",
        location: "São Paulo"
    },

    {
        name: "Edifício Central",
        img: predio2,
        info: "Apartamento moderno",
        area: "80m²",
        location: "Campinas"
    }
];

export default prediosLista;