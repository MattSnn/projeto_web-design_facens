import predio1 from "../components/assets/predio-1.jpg";

// export type Corretor = {
//     name: string;
//     role: string;
//     rating: number;
//     reviews: number;
//     phone: string; // formato para wa.me: 55 + DDD + número
// };

export type Proximidade = {
    label: string;
    distance: string;
};

export type Predio = {
    id: number;
    name: string;
    mainImg: string;
    info: string;
    area: string;
    location: string; // cidade
    price: number; // venda: valor total | aluguel: valor por mês
    images: string[];
    planta: string;
    description: string;

    // --- campos novos (página do imóvel) ---
    status: "À venda" | "Aluguel";
    tag: string; // selo ao lado do status (ex: "Alto padrão")
    address: string; // rua e número
    neighborhood: string; // bairro (usado no breadcrumb)
    bedrooms: number;
    suites: number;
    parking: number;
    floor: number;
    condoFee: number; // por mês
    iptu: number; // por ano
    amenities: string[];
    nearby: Proximidade[];
    // corretor: Corretor;
};

// const carlos: Corretor = {
//     name: "Carlos Mendes",
//     role: "Especialista em imóveis de alto padrão",
//     rating: 4.9,
//     reviews: 127,
//     phone: "5511999990001",
// };

// const ana: Corretor = {
//     name: "Ana Beatriz Souza",
//     role: "Especialista em imóveis residenciais",
//     rating: 4.8,
//     reviews: 96,
//     phone: "5519999990002",
// };

// const rafael: Corretor = {
//     name: "Rafael Lima",
//     role: "Corretor em Sorocaba e região",
//     rating: 4.7,
//     reviews: 64,
//     phone: "5515999990003",
// };

export const prediosLista: Predio[] = [
    {
        id: 0,
        name: "Residencial Jardim Aurora",
        mainImg: predio1,
        info: "2 dormitórios",
        area: "45m²",
        location: "São  Paulo",
        price: 325000,
        images: [predio1],
        planta: "Planta de 45m²",
        description:
            "Apartamento compacto e bem aproveitado, perfeito para quem está comprando o primeiro imóvel. Ambientes integrados, boa iluminação natural e um condomínio com lazer completo a poucos passos do metrô.",
        status: "À venda",
        tag: "Compacto",
        address: "Rua das Acácias, 120",
        neighborhood: "Vila Mariana",
        bedrooms: 2,
        suites: 0,
        parking: 1,
        floor: 5,
        condoFee: 520,
        iptu: 1100,
        amenities: ["Piscina", "Academia", "Salão de festas", "Playground", "Segurança 24h", "Bicicletário"],
        nearby: [
            { label: "Escola", distance: "300m" },
            { label: "Mercado", distance: "150m" },
            { label: "Metrô", distance: "700m" },
        ],
        // corretor: ana,
    },
    {
        id: 1,
        name: "Edifício Central Park",
        mainImg: predio1,
        info: "3 dormitórios (1 suíte)",
        area: "80m²",
        location: "Campinas",
        price: 690000,
        images: [predio1],
        planta: "Planta de 80m²",
        description:
            "Apartamento moderno no coração do Cambuí, com ambientes bem distribuídos e varanda integrada à sala. O prédio oferece coworking e academia, ideal para quem une moradia e rotina de trabalho.",
        status: "À venda",
        tag: "Moderno",
        address: "Av. Brasil, 845",
        neighborhood: "Cambuí",
        bedrooms: 3,
        suites: 1,
        parking: 2,
        floor: 9,
        condoFee: 890,
        iptu: 2400,
        amenities: ["Academia", "Piscina", "Coworking", "Segurança 24h", "Wi-Fi nas áreas comuns", "Pet friendly"],
        nearby: [
            { label: "Escola", distance: "500m" },
            { label: "Mercado", distance: "250m" },
            { label: "Shopping", distance: "1,2km" },
        ],
        // corretor: ana,
    },
    {
        id: 2,
        name: "Residencial Jardim Verde",
        mainImg: predio1,
        info: "3 dormitórios (1 suíte)",
        area: "70m²",
        location: "São Paulo",
        price: 540000,
        images: [predio1],
        planta: "Planta de 70m²",
        description:
            "Apartamento espaçoso pensado para a família, em condomínio cercado de áreas verdes. Conta com churrasqueira, brinquedoteca e playground, e está a poucos metros de escola e mercado.",
        status: "À venda",
        tag: "Família",
        address: "Rua dos Ipês, 78",
        neighborhood: "Mooca",
        bedrooms: 3,
        suites: 1,
        parking: 2,
        floor: 7,
        condoFee: 760,
        iptu: 1900,
        amenities: ["Playground", "Churrasqueira", "Salão de festas", "Área verde", "Segurança 24h", "Brinquedoteca"],
        nearby: [
            { label: "Escola", distance: "200m" },
            { label: "Mercado", distance: "300m" },
            { label: "Parque", distance: "450m" },
        ],
        // corretor: ana,
    },
    {
        id: 3,
        name: "Edifício Praça Nova",
        mainImg: predio1,
        info: "3 dormitórios (1 suíte)",
        area: "80m²",
        location: "Campinas",
        price: 835000,
        images: [predio1],
        planta: "Planta de 80m²",
        description:
            "Apartamento moderno no Taquaral, com acabamento refinado e sala ampla voltada para a área verde. Perto da Lagoa do Taquaral, é ótimo para quem gosta de caminhar e ter qualidade de vida no dia a dia.",
        status: "À venda",
        tag: "Alto padrão",
        address: "Rua Barão de Itapura, 410",
        neighborhood: "Taquaral",
        bedrooms: 3,
        suites: 1,
        parking: 2,
        floor: 12,
        condoFee: 1050,
        iptu: 2900,
        amenities: [
            "Academia",
            "Piscina",
            "Salão de festas",
            "Área verde",
            "Segurança 24h",
            "Pet friendly",
            "Wi-Fi nas áreas comuns",
            "Bicicletário",
        ],
        nearby: [
            { label: "Escola", distance: "350m" },
            { label: "Mercado", distance: "200m" },
            { label: "Lagoa", distance: "600m" },
        ],
        // corretor: carlos,
    },
    {
        id: 4,
        name: "Residencial Jardim dos Ipês",
        mainImg: predio1,
        info: "3 dormitórios (1 suíte)",
        area: "70m²",
        location: "São Paulo",
        price: 610000,
        images: [predio1],
        planta: "Planta de 70m²",
        description:
            "Apartamento amplo, ideal para famílias que querem conforto sem abrir mão da praticidade. Fica perto do metrô e do comércio local, em um condomínio tranquilo e com ótima estrutura de lazer.",
        status: "À venda",
        tag: "Família",
        address: "Rua das Magnólias, 233",
        neighborhood: "Saúde",
        bedrooms: 3,
        suites: 1,
        parking: 2,
        floor: 6,
        condoFee: 800,
        iptu: 2100,
        amenities: ["Piscina", "Playground", "Churrasqueira", "Área verde", "Segurança 24h", "Salão de festas"],
        nearby: [
            { label: "Escola", distance: "250m" },
            { label: "Mercado", distance: "180m" },
            { label: "Metrô", distance: "500m" },
        ],
        // corretor: ana,
    },
    {
        id: 5,
        name: "Edifício Central Tower",
        mainImg: predio1,
        info: "4 dormitórios (3 suítes)",
        area: "120m²",
        location: "Campinas",
        price: 1250000,
        images: [predio1],
        planta: "Planta de 120m²",
        description:
            "Apartamento de alto padrão em andar alto, com vista aberta e três suítes. Espaço de sobra para toda a família receber bem, em um prédio com lazer completo e segurança 24 horas.",
        status: "À venda",
        tag: "Alto padrão",
        address: "Av. Norte-Sul, 1500",
        neighborhood: "Cambuí",
        bedrooms: 4,
        suites: 3,
        parking: 3,
        floor: 18,
        condoFee: 1650,
        iptu: 5200,
        amenities: [
            "Academia",
            "Piscina",
            "Salão de festas",
            "Coworking",
            "Segurança 24h",
            "Área verde",
            "Pet friendly",
            "Wi-Fi nas áreas comuns",
        ],
        nearby: [
            { label: "Escola", distance: "400m" },
            { label: "Mercado", distance: "300m" },
            { label: "Shopping", distance: "900m" },
        ],
        // corretor: carlos,
    },
    {
        id: 6,
        name: "Boa Vista Towers",
        mainImg: predio1,
        info: "3 dormitórios (1 suíte)",
        area: "78m²",
        location: "São Paulo",
        price: 890000,
        images: [predio1],
        planta: "Planta de 78m²",
        description:
            "O Boa Vista Towers é um empreendimento de alto padrão localizado no coração do Alto da Boa Vista. Com acabamentos premium, amplas janelas e vista panorâmica da cidade, este apartamento foi projetado para quem busca conforto, sofisticação e qualidade de vida. O empreendimento conta com estrutura completa de lazer e segurança, garantindo tranquilidade para toda a família.",
        status: "À venda",
        tag: "Alto padrão",
        address: "Rua das Palmeiras, 350",
        neighborhood: "Alto da Boa Vista",
        bedrooms: 3,
        suites: 1,
        parking: 2,
        floor: 14,
        condoFee: 980,
        iptu: 3200,
        amenities: [
            "Academia",
            "Piscina",
            "Segurança 24h",
            "Área verde",
            "Salão de festas",
            "Wi-Fi nas áreas comuns",
            "Pet friendly",
            "Bicicletário",
        ],
        nearby: [
            { label: "Escola", distance: "400m" },
            { label: "Mercado", distance: "200m" },
            { label: "Metrô", distance: "600m" },
        ],
        // corretor: carlos,
    },
    {
        id: 7,
        name: "Residencial Vista do Parque",
        mainImg: predio1,
        info: "2 dormitórios (1 suíte)",
        area: "62m²",
        location: "Sorocaba",
        price: 480000,
        images: [predio1],
        planta: "Planta de 62m²",
        description:
            "Apartamento bem localizado no Campolim, com suíte, sacada e ótima ventilação. O condomínio tem lazer completo e fica a poucos minutos de parques, escolas e do comércio do bairro.",
        status: "À venda",
        tag: "Oportunidade",
        address: "Rua Arthur Gomes, 95",
        neighborhood: "Campolim",
        bedrooms: 2,
        suites: 1,
        parking: 1,
        floor: 8,
        condoFee: 610,
        iptu: 1500,
        amenities: ["Piscina", "Academia", "Playground", "Segurança 24h", "Pet friendly", "Área verde"],
        nearby: [
            { label: "Escola", distance: "350m" },
            { label: "Mercado", distance: "220m" },
            { label: "Parque", distance: "500m" },
        ],
        // corretor: rafael,
    },
    {
        id: 8,
        name: "Studio Urbano 21",
        mainImg: predio1,
        info: "1 dormitório",
        area: "32m²",
        location: "São Paulo",
        price: 3200,
        images: [predio1],
        planta: "Planta de 32m²",
        description:
            "Studio mobiliado e pronto para morar, em prédio com coworking e lavanderia compartilhada. Ideal para quem trabalha ou estuda na região e quer praticidade, com metrô e mercado praticamente na porta.",
        status: "Aluguel",
        tag: "Mobiliado",
        address: "Rua das Figueiras, 21",
        neighborhood: "Pinheiros",
        bedrooms: 1,
        suites: 0,
        parking: 1,
        floor: 11,
        condoFee: 650,
        iptu: 900,
        amenities: ["Academia", "Coworking", "Lavanderia", "Wi-Fi nas áreas comuns", "Segurança 24h", "Bicicletário"],
        nearby: [
            { label: "Metrô", distance: "250m" },
            { label: "Mercado", distance: "100m" },
            { label: "Praça", distance: "400m" },
        ],
        // corretor: ana,
    },
    {
        id: 9,
        name: "Edifício Alameda Real",
        mainImg: predio1,
        info: "3 dormitórios (1 suíte)",
        area: "95m²",
        location: "Campinas",
        price: 5800,
        images: [predio1],
        planta: "Planta de 95m²",
        description:
            "Apartamento amplo para locação, em condomínio que aceita pets e tem área verde generosa. Cozinha planejada, três dormitórios e fácil acesso à Lagoa do Taquaral.",
        status: "Aluguel",
        tag: "Pet friendly",
        address: "Alameda das Rosas, 305",
        neighborhood: "Taquaral",
        bedrooms: 3,
        suites: 1,
        parking: 2,
        floor: 10,
        condoFee: 1200,
        iptu: 2600,
        amenities: ["Piscina", "Academia", "Pet friendly", "Salão de festas", "Segurança 24h", "Área verde"],
        nearby: [
            { label: "Escola", distance: "300m" },
            { label: "Mercado", distance: "200m" },
            { label: "Lagoa", distance: "800m" },
        ],
        // corretor: ana,
    },
    {
        id: 10,
        name: "Edifício Bosque Sul",
        mainImg: predio1,
        info: "2 dormitórios",
        area: "54m²",
        location: "Sorocaba",
        price: 2400,
        images: [predio1],
        planta: "Planta de 54m²",
        description:
            "Apartamento de dois dormitórios em condomínio tranquilo, com churrasqueira e playground. Boa opção de locação para casais e pequenas famílias, perto de escola, mercado e transporte.",
        status: "Aluguel",
        tag: "Compacto",
        address: "Rua das Paineiras, 150",
        neighborhood: "Jardim Europa",
        bedrooms: 2,
        suites: 0,
        parking: 1,
        floor: 3,
        condoFee: 480,
        iptu: 800,
        amenities: ["Playground", "Churrasqueira", "Área verde", "Segurança 24h", "Salão de festas"],
        nearby: [
            { label: "Escola", distance: "200m" },
            { label: "Mercado", distance: "150m" },
            { label: "Terminal", distance: "700m" },
        ],
        // corretor: rafael,
    },
    {
        id: 11,
        name: "Residencial Mirante do Lago",
        mainImg: predio1,
        info: "4 dormitórios (3 suítes)",
        area: "150m²",
        location: "Sorocaba",
        price: 1480000,
        images: [predio1],
        planta: "Planta de 150m²",
        description:
            "Cobertura de alto padrão com terraço amplo e vista aberta para o lago. Quatro dormitórios, três suítes e quatro vagas, em um prédio com coworking, piscina e estrutura completa de lazer.",
        status: "À venda",
        tag: "Cobertura",
        address: "Rua do Mirante, 1800",
        neighborhood: "Campolim",
        bedrooms: 4,
        suites: 3,
        parking: 4,
        floor: 22,
        condoFee: 2100,
        iptu: 6800,
        amenities: [
            "Piscina",
            "Academia",
            "Salão de festas",
            "Coworking",
            "Segurança 24h",
            "Área verde",
            "Pet friendly",
            "Wi-Fi nas áreas comuns",
            "Bicicletário",
        ],
        nearby: [
            { label: "Escola", distance: "500m" },
            { label: "Mercado", distance: "400m" },
            { label: "Shopping", distance: "1,5km" },
        ],
        // corretor: rafael,
    },
    {
        id: 12,
        name: "Terraço Santos",
        mainImg: predio1,
        info: "3 dormitórios (1 suíte)",
        area: "88m²",
        location: "Santos",
        price: 760000,
        images: [predio1],
        planta: "Planta de 88m²",
        description:
            "Apartamento a poucos passos da praia, com varanda e vista para o mar. Três dormitórios bem distribuídos e condomínio com piscina e academia, perfeito para morar ou como imóvel de temporada.",
        status: "À venda",
        tag: "Vista mar",
        address: "Rua da Orla, 400",
        neighborhood: "Gonzaga",
        bedrooms: 3,
        suites: 1,
        parking: 2,
        floor: 13,
        condoFee: 1100,
        iptu: 2700,
        amenities: ["Piscina", "Academia", "Salão de festas", "Segurança 24h", "Bicicletário", "Pet friendly"],
        nearby: [
            { label: "Praia", distance: "300m" },
            { label: "Mercado", distance: "200m" },
            { label: "Escola", distance: "450m" },
        ],
        // corretor: ana,
    },
];

export default prediosLista;