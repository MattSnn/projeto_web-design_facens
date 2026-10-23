interface ResultCardProps {
    label: string
    value: string
    suffix?: string
    bar?: { pct: number; left: string; right: string }
    rows: { label: string; value: string }[]
    note: string
    cta: string
}

function ResultCard({ label, value, suffix, bar, rows, note, cta }: ResultCardProps) {
    return (
        <aside className="flex flex-col gap-5 rounded-3xl bg-brand-dark p-6 md:p-9 text-white">
            <p className="text-xs uppercase tracking-widest text-slate-300">{label}</p>
            <p className="text-4xl md:text-5xl font-bold tracking-tight">
                {value}
                {suffix && <span className="text-lg font-medium text-slate-300">{suffix}</span>}
            </p>
 
            {bar && (
                <div>
                    <div className="flex h-3 overflow-hidden rounded-full bg-white/20">
                        <div className="bg-sky-400" style={{ width: `${100 - bar.pct}%` }} />
                        <div className="bg-amber-400" style={{ width: `${bar.pct}%` }} />
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-slate-300">
                        <span>{bar.left} {100 - bar.pct}%</span>
                        <span>{bar.right} {bar.pct}%</span>
                    </div>
                </div>
            )}
 
            <dl className="flex flex-col gap-3 border-t border-white/20 pt-5 text-sm">
                {rows.map((r) => (
                    <div key={r.label} className="flex justify-between gap-4">
                        <dt className="text-slate-300">{r.label}</dt>
                        <dd className="font-bold text-right">{r.value}</dd>
                    </div>
                ))}
            </dl>
 
            <a
                href="#contato"
                className="mt-auto flex h-12 items-center justify-center rounded-full bg-white font-bold text-brand-dark hover:bg-slate-100 transition"
            >
                {cta}
            </a>
            <p className="text-xs text-slate-400">{note}</p>
        </aside>
    )
}

export default ResultCard