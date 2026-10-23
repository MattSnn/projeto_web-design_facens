import type { ReactNode } from "react";

function Panel({ title, children, result }: { title: string; children: ReactNode; result: ReactNode }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-9">
                <h2 className="text-xl font-semibold text-brand-dark">{title}</h2>
                {children}
            </div>
            {result}
        </div>
    )
}

export default Panel