import type { Corretor } from "../../data/prediosLista"
import { PhoneIcon, WhatsAppIcon } from "./Icons"

interface CorretorCardProps {
    corretor: Corretor
    imovel: string
}

function CorretorCard({ corretor, imovel }: CorretorCardProps) {
    const mensagem = encodeURIComponent(`Olá, ${corretor.name.split(" ")[0]}! Tenho interesse no imóvel "${imovel}" que vi no site da ImobiFaces.`)
    const telefone = `+${corretor.phone.slice(0, 2)} (${corretor.phone.slice(2, 4)}) ${corretor.phone.slice(4, 9)}-${corretor.phone.slice(9)}`

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Corretor responsável</p>
            <div className="mt-4 flex items-center gap-4">
                <img src={corretor.photo} alt={corretor.name} loading="lazy" className="h-16 w-16 rounded-full object-cover ring-4 ring-brand-light" />
                <div className="min-w-0">
                    <p className="font-bold text-brand-dark">{corretor.name}</p>
                    <p className="text-sm text-slate-500">{corretor.role}</p>
                    <p className="mt-1 text-sm text-slate-600">
                        <span className="text-amber-400" aria-hidden="true">★</span> <strong>{corretor.rating.toFixed(1).replace(".", ",")}</strong>
                        <span className="text-slate-400"> · {corretor.reviews} avaliações</span>
                    </p>
                </div>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-2">
                <a
                    href={`https://wa.me/${corretor.phone}?text=${mensagem}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] font-bold text-white transition hover:brightness-95"
                >
                    <WhatsAppIcon className="h-5 w-5" /> Conversar no WhatsApp
                </a>
                <a
                    href={`tel:+${corretor.phone}`}
                    className="flex h-12 items-center justify-center gap-2 rounded-full border border-slate-300 font-semibold text-brand-dark transition hover:bg-slate-50"
                >
                    <PhoneIcon className="h-5 w-5" /> {telefone}
                </a>
            </div>
        </div>
    )
}

export default CorretorCard
