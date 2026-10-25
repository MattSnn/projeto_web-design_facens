// Ícones em SVG (traço) usados nos cards e na página do imóvel, no lugar dos emojis.
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>

function Base({ children, ...props }: IconProps) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            {children}
        </svg>
    )
}

export const BedIcon = (p: IconProps) => (
    <Base {...p}><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M3 18v2M21 18v2M6 10V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3M12 10V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" /></Base>
)

export const AreaIcon = (p: IconProps) => (
    <Base {...p}><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></Base>
)

export const CarIcon = (p: IconProps) => (
    <Base {...p}><path d="M5 17h14M5 17a2 2 0 0 1-2-2v-3l2-5a2 2 0 0 1 1.9-1.4h10.2A2 2 0 0 1 19 7l2 5v3a2 2 0 0 1-2 2M5 17v2M19 17v2M7 13h.01M17 13h.01" /></Base>
)

export const BathIcon = (p: IconProps) => (
    <Base {...p}><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3ZM6 12V6a2 2 0 0 1 3.5-1.3M7 19l-1 2M17 19l1 2" /></Base>
)

export const FloorIcon = (p: IconProps) => (
    <Base {...p}><path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16M14 9h5a1 1 0 0 1 1 1v11M3 21h18M8 8h2M8 12h2M8 16h2" /></Base>
)

export const PinIcon = (p: IconProps) => (
    <Base {...p}><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></Base>
)

export const ArrowRightIcon = (p: IconProps) => (
    <Base {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Base>
)

export const ArrowLeftIcon = (p: IconProps) => (
    <Base {...p}><path d="M19 12H5M11 6l-6 6 6 6" /></Base>
)

export const CheckIcon = (p: IconProps) => (
    <Base {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></Base>
)

export const CloseIcon = (p: IconProps) => (
    <Base {...p}><path d="M6 6l12 12M18 6 6 18" /></Base>
)

export const PhoneIcon = (p: IconProps) => (
    <Base {...p}><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></Base>
)

export const MailIcon = (p: IconProps) => (
    <Base {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Base>
)

export const WhatsAppIcon = (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" />
    </svg>
)
