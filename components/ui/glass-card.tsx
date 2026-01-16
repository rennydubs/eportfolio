import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface GlassCardProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "bg-slate-950/50 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-2xl overflow-hidden hover:border-white/40 transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export default GlassCard;
