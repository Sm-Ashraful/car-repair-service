import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "./button";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    icon?: React.ReactNode;
    wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, icon, wrapperClassName, ...props }, ref) => {
        return (
            <div className={cn("relative flex items-center", wrapperClassName)}>
                {icon && (
                    <div className="absolute left-3 flex items-center pointer-events-none text-gray-400">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    className={cn(
                        "flex h-[3.875rem] w-[29.375rem] rounded-lg border border-border bg-transparent px-5 py-3 text-base  transition-colors  placeholder:text-input focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                        icon && "pl-10",
                        className
                    )}
                    ref={ref}
                    {...props}
                />

            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }
