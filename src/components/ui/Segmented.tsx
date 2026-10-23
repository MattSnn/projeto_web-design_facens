interface SegmentedProps<T extends string> {
    options: { id: T; label: string }[]
    value: T
    onChange: (id: T) => void
}
 
function Segmented<T extends string>({ options, value, onChange }: SegmentedProps<T>) {
    return (
        <div className="inline-flex flex-wrap gap-1 rounded-full bg-slate-200 p-1">
            {options.map((o) => (
                <button
                    key={o.id}
                    type="button"
                    onClick={() => onChange(o.id)}
                    className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                        o.id === value
                            ? "bg-accent text-on-accent"
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