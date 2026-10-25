import { useEffect, useRef, useState } from "react"

// Conta de 0 até "alvo" quando o elemento aparece na tela
export function useCountUp<T extends HTMLElement>(alvo: number, duracao = 1600) {
    const ref = useRef<T>(null)
    // quem pediu menos movimento no sistema já vê o número final
    const [reduzido] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    const [valor, setValor] = useState(reduzido ? alvo : 0)

    useEffect(() => {
        const el = ref.current
        if (!el || reduzido) return

        let frame = 0
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return
            observer.disconnect()
            const inicio = performance.now()
            const passo = (agora: number) => {
                const t = Math.min((agora - inicio) / duracao, 1)
                const suave = 1 - Math.pow(1 - t, 3) // ease-out
                setValor(Math.round(alvo * suave))
                if (t < 1) frame = requestAnimationFrame(passo)
            }
            frame = requestAnimationFrame(passo)
        }, { threshold: 0.4 })

        observer.observe(el)
        return () => {
            observer.disconnect()
            cancelAnimationFrame(frame)
        }
    }, [alvo, duracao, reduzido])

    return { ref, valor }
}
