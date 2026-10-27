// Regras compartilhadas pelos formulários (contato e trabalhe conosco)

// (11) 98765-4321
export function mascaraTelefone(valor: string) {
    let d = valor.replace(/\D/g, "")
    // número colado com o código do país (+55 11 98765-4321)
    if (d.length > 11 && d.startsWith("55")) d = d.slice(2)
    d = d.slice(0, 11)
    if (d.length <= 2) return d.length ? `(${d}` : ""
    if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
    if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export const nomeValido = (nome: string) => nome.trim().length >= 3
export const emailValido = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
export const telefoneValido = (telefone: string) => telefone.replace(/\D/g, "").length >= 10
