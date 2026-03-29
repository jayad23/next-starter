import { cn } from "@/lib/utils";
import Button from "../components/Button"
import { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  children: React.ReactNode;
}

export default function CustomButton({ isOpen, children, className, ...props }: CustomButtonProps) {
  return (
    <Button
      {...props}
      size="small"
      type="button"
      id="options-menu"
      aria-expanded={isOpen}
      className={cn("text-destructive inline-flex items-center justify-between gap-3", className)}
    >
      {children}
    </Button>
  )
}