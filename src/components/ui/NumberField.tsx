import Field from "./Field"
import { inputCls } from "../../utils/finance"
interface NumberFieldProps {
    label: string
    value: number
    onChange: (v: number) => void
    hint?: string
    step?: number
}

// "" ou texto inválido vira 0 e negativos não entram
const num = (v: string) => Math.max(Number(v) || 0, 0)
 
function NumberField({ label, value, onChange, hint, step = 1 }: NumberFieldProps) {
    return (
        <Field label={label} hint={hint}>
            <input
                type="number"
                min={0}
                inputMode="decimal"
                step={step}
                value={value}
                onChange={(e) => onChange(num(e.target.value))}
                className={inputCls}
            />
        </Field>
    )
}

export default NumberField