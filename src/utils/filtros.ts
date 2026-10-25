export type Tipo = "" | "venda" | "aluguel"
export type Ordem = "relevancia" | "menor-preco" | "maior-preco" | "maior-area"

export interface Filtros {
    busca: string
    tipo: Tipo
    quartos: number
    precoMax: number
    area: string
    ordem: Ordem
}

export const FILTROS_VAZIOS: Filtros = { busca: "", tipo: "", quartos: 0, precoMax: 0, area: "", ordem: "relevancia" }
