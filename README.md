# ImobiFaces

Site de uma imobiliária fictícia, feito para a disciplina de Web Design da Facens. Tem imóveis para comprar e alugar, simuladores de financiamento e um canal de contato com os corretores.

## Funcionalidades

- **Página inicial**: hero com busca rápida (comprar/alugar + cidade), carrossel de imóveis em destaque, seção "Sobre nós" com números animados, depoimentos e formulário de contato.
- **Lista de imóveis**: busca por nome, bairro ou cidade (sem diferenciar acentos), filtros de tipo, quartos, metragem e preço, ordenação e botão de limpar. Os filtros ficam na URL, então a busca pode ser compartilhada.
- **Página do imóvel**: galeria com lightbox (setas do teclado e Esc), ficha técnica, comodidades, mapa do Google Maps, planta ilustrativa gerada em SVG, simulador de financiamento, corretor responsável com WhatsApp e imóveis semelhantes.
- **Simuladores**: financiamento (Price e SAC), consórcio, aluguel e rentabilidade para quem quer anunciar. Os botões dos resultados abrem a lista já filtrada pelo valor simulado.
- **Trabalhe conosco**: benefícios, vagas abertas e formulário de candidatura.
- Navegação pela URL (`?pagina=...`): o botão voltar do navegador, o F5 e os links compartilhados funcionam.
- Layout responsivo (celular, tablet e desktop), foco visível para navegação pelo teclado e respeito à opção de reduzir animações.

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Como rodar

```bash
npm install
npm run dev      # servidor de desenvolvimento em http://localhost:5173
npm run build    # gera a versão de produção em dist/
npm run preview  # testa a versão de produção
npm run lint     # verifica o código com o ESLint
```

## Estrutura

```
src/
├── App.tsx                 # páginas, links da navbar e navegação pela URL
├── pages/                  # uma página por arquivo (inicial, lista, imóvel, simulador, trabalhe conosco)
├── components/
│   ├── layout/             # NavBar, Footer e FilterBar
│   ├── sections/           # blocos grandes das páginas (Hero, Contact, ImovelDetails, painéis do simulador...)
│   ├── ui/                 # peças reutilizáveis (cards, ícones, campos, planta)
│   └── assets/             # imagens
├── data/prediosLista.ts    # imóveis e corretores
├── hooks/                  # useCountUp (números animados)
└── utils/                  # navegação, filtros e cálculos financeiros
```

## Equipe

- Mateus Sonnenberg
- Pedro Wagner
- Rodrigo Vieira
- Jhonny Walter

## Créditos das imagens

As fotos dos imóveis, dos corretores, da equipe e dos depoimentos são do [Unsplash](https://unsplash.com/) e seguem a [licença do Unsplash](https://unsplash.com/license), que permite o uso gratuito. As pessoas e os dados que aparecem no site são fictícios.
