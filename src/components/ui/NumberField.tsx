import Field from "./Field"
import { inputCls } from "../../utils/finance"
interface NumberFieldProps {
    label: string
    value: number
    onChange: (v: number) => void
    hint?: string
    step?: number
}

const num = (v: string) => Number(v) || 0
 
function NumberField({ label, value, onChange, hint, step = 1 }: NumberFieldProps) {
    return (
        <Field label={label} hint={hint}>
            <input
                type="number"
                min={0}
                step={step}
                value={value}
                onChange={(e) => onChange(num(e.target.value))}
                className={inputCls}
            />
        </Field>
    )
}

export default NumberField