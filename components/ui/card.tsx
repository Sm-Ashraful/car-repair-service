import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    width?: string;
    variant?: "primary" | "default";
}

export function Card({
    children,
    className,
    width = "max-w-[951px]",
    variant = "primary"
}: CardProps) {
    return (
        <div className={cn(width, "mx-auto")}>
            <div className={cn(
                "rounded-[32px] p-[3.125rem]",
                variant === "primary" && "bg-primary text-white",
                variant === "default" && "bg-white text-foreground",
                className
            )}>
                {children}
            </div>
        </div>
    );
}

