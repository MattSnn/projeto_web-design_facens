import { useState } from "react"
import Field from "./Field"
import { inputCls } from "../../utils/finance"
interface NumberFieldProps {
    label: string
    value: number
    onChange: (v: number) => void
    hint?: string
    step?: number
    min?: number
    max?: number
}

// "" ou texto inválido vira o mínimo, e o valor fica sempre entre min e max
// (evita resultados negativos ou números gigantes quebrando o layout)
const num = (v: string, min: number, max: number) => Math.min(Math.max(Number(v) || 0, min), max)

function NumberField({ label, value, onChange, hint, step = 1, min = 0, max = 1_000_000_000 }: NumberFieldProps) {
    // o campo guarda o texto digitado, assim dá para apagar tudo e digitar de novo
    // sem o React colocar um "0" na frente
    const [texto, setTexto] = useState(String(value))
    const [ultimoValor, setUltimoValor] = useState(value)
    if (value !== ultimoValor) {
        setUltimoValor(value)
        setTexto(String(value))
    }

    return (
        <Field label={label} hint={hint}>
            <input
                type="number"
                min={min}
                max={max}
                inputMode="decimal"
                step={step}
                value={texto}
                onChange={(e) => {
                    const novo = num(e.target.value, min, max)
                    const bruto = Number(e.target.value)
                    // fora dos limites (ex.: 150% de taxa) o campo já mostra o limite
                    setTexto(e.target.value !== "" && (bruto > max || bruto < min) ? String(novo) : e.target.value)
                    setUltimoValor(novo)
                    onChange(novo)
                }}
                // ao sair do campo, mostra o valor que realmente está sendo usado na conta
                onBlur={() => setTexto(String(value))}
                className={inputCls}
            />
        </Field>
    )
}

export default NumberField
