// Navegação simples baseada na URL (?pagina=...), sem biblioteca de rotas.
// Assim o botão "voltar" do navegador, o F5 e links compartilhados funcionam.

export type PageId = "initialPage" | "todosOsApartamentos" | "imovelPage" | "calculatorPage" | "trabalheConosco"

export type NavParams = Record<string, string | number | undefined>

export type Navigate = (page: PageId, params?: NavParams, hash?: string) => void

const SLUGS: Record<PageId, string> = {
    initialPage: "",
    todosOsApartamentos: "imoveis",
    imovelPage: "imovel",
    calculatorPage: "simulador",
    trabalheConosco: "trabalhe-conosco",
}

export const PAGE_TITLES: Record<PageId, string> = {
    initialPage: "ImobiFaces | Encontre o imóvel ideal",
    todosOsApartamentos: "Imóveis à venda e para alugar | ImobiFaces",
    imovelPage: "Imóvel | ImobiFaces",
    calculatorPage: "Simuladores de financiamento | ImobiFaces",
    trabalheConosco: "Trabalhe conosco | ImobiFaces",
}

export interface Route {
    page: PageId
    search: string
}

export function readRoute(): Route {
    const query = new URLSearchParams(window.location.search)
    const slug = query.get("pagina") ?? ""
    const page = (Object.keys(SLUGS) as PageId[]).find((id) => SLUGS[id] === slug) ?? "initialPage"
    return { page, search: window.location.search }
}

export function buildUrl(page: PageId, params: NavParams = {}, hash?: string): string {
    const query = new URLSearchParams()
    if (SLUGS[page]) query.set("pagina", SLUGS[page])
    for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== "") query.set(key, String(value))
    }
    const search = query.toString()
    return `${window.location.pathname}${search ? `?${search}` : ""}${hash ? `#${hash}` : ""}`
}

export function getParam(search: string, key: string): string {
    return new URLSearchParams(search).get(key) ?? ""
}
