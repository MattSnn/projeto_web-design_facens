interface SegmentedProps<T extends string> {
    options: { id: T; label: string }[]
    value: T
    onChange: (id: T) => void
}
 
function Segmented<T extends string>({ options, value, onChange }: SegmentedProps<T>) {
    return (
        <div className="inline-flex flex-wrap self-start gap-1 rounded-3xl bg-white p-1 ring-1 ring-slate-200 shadow-sm">
            {options.map((o) => (
                <button
                    key={o.id}
                    type="button"
                    aria-pressed={o.id === value}
                    onClick={() => onChange(o.id)}
                    className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                        o.id === value
                            ? "bg-brand-dark text-white shadow"
                            : "text-slate-600 hover:text-brand-dark"
                    }`}
                >
                    {o.label}
                </button>
            ))}
        </div>
    )
}

export default Segmented