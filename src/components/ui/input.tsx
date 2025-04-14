import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & {
  icon?: React.ReactNode;
  iconPosition?: "prefix" | "suffix";
};

function Input({
  className,
  type,
  icon,
  iconPosition = "prefix",
  ...props
}: InputProps) {

  return (
    <div
      className={cn(
        "flex items-center h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none",
        "border-input dark:bg-input/30",
        "focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {icon && iconPosition === "prefix" && (
        <span className="mr-2 text-muted-foreground">{icon}</span>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          "bg-transparent w-full min-w-0 outline-none text-base md:text-sm placeholder:text-muted-foreground file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        )}
        {...props}
      />
      {icon && iconPosition === "suffix" && (
        <span className="ml-2 text-muted-foreground">{icon}</span>
      )}
    </div>
  );
}

export { Input };
