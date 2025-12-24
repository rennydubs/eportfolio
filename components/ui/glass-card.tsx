import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface GlassCardProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export default GlassCard;
