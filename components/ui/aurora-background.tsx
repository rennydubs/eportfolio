"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    return (
        <>
            {/* Fixed Aurora Background Layer */}
            <div className="fixed inset-0 -z-10 bg-zinc-950">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className={cn(
                            `absolute -inset-[10px] opacity-50`,
                            `[--aurora:repeating-linear-gradient(100deg,var(--indigo-500)_10%,var(--purple-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--indigo-400)_30%)]`,
                            `[background-image:var(--aurora)]`,
                            `[background-size:300%_200%]`,
                            `[background-position:50%_50%]`,
                            `animate-aurora`,
                            `filter blur-[100px]`,
                            `after:content-[''] after:absolute after:inset-0`,
                            `after:[background-image:var(--aurora)]`,
                            `after:[background-size:200%_100%]`,
                            `after:animate-aurora after:[background-attachment:fixed]`,
                            `after:mix-blend-difference`
                        )}
                    />
                    {showRadialGradient && (
                        <div className="absolute inset-0 bg-zinc-950 [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]" />
                    )}
                </div>
            </div>
            {/* Content Layer */}
            <div className={cn("relative z-0", className)} {...props}>
                {children}
            </div>
        </>
    );
};

export default AuroraBackground;

