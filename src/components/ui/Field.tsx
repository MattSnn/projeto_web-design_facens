import type { ReactNode } from "react";

function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
    return (
        <label className="flex flex-col gap-2 text-sm text-slate-500">
            <span className="flex justify-between gap-2">
                {label}
                {hint && <strong className="text-brand-dark">{hint}</strong>}
            </span>
            {children}
        </label>
    )
}

export default Field