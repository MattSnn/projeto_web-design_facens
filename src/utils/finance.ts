export const brl = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
})
 
// "" ou texto inválido vira 0, assim a tela nunca mostra NaN
export const inputCls ="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-brand-dark"
 
// juros anuais -> juros mensais equivalentes
const taxaMensal = (anual: number) => Math.pow(1 + anual / 100, 1 / 12) - 1
 
// Tabela Price: todas as parcelas iguais
export function parcelaPrice(financiado: number, anual: number, meses: number): number {
    if (financiado <= 0 || meses <= 0) return 0
    const i = taxaMensal(anual)
    if (i === 0) return financiado / meses
    return (financiado * i) / (1 - Math.pow(1 + i, -meses))
}

// SAC: amortização fixa, parcelas decrescentes
export function simulaSac(financiado: number, anual: number, meses: number) {
    if (financiado <= 0 || meses <= 0) return { primeira: 0, total: 0 }
    const i = taxaMensal(anual)
    const amortizacao = financiado / meses
    return {
        primeira: amortizacao + financiado * i,
        total: financiado + (i * financiado * (meses + 1)) / 2,
    }
}


// preço como aparece nos cards: aluguel ganha o "/mês"
export function formatPreco(price: number, status: "À venda" | "Aluguel"): string {
    return status === "Aluguel" ? `${brl.format(price)}/mês` : brl.format(price)
}
