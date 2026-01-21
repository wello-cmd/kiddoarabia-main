/**
 * ENHANCED BUTTON COMPONENT v2.0
 * Elite-tier button with micro-interactions and accessibility
 * Matches Apple.com, Stripe.com interaction standards
 */

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Elite variants with micro-interactions
        premium: "bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transform-gpu",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 hover:border-white/30",
        magnetic: "bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300 ease-out",
        shine: "bg-primary text-primary-foreground shadow-md relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-9 w-9",
      },
      state: {
        default: "",
        loading: "cursor-not-allowed",
        success: "bg-green-600 text-white",
        error: "bg-red-600 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      state: "default",
    },
  }
);

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  (
    {
      className,
      variant,
      size,
      state,
      asChild = false,
      loading = false,
      loadingText,
      icon,
      iconPosition = "left",
      disabled,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const isLoading = loading || state === "loading";
    const isDisabled = disabled || isLoading;

    const content = (
      <>
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!isLoading && icon && iconPosition === "left" && icon}
        <span>{isLoading ? loadingText || "Loading..." : children}</span>
        {!isLoading && icon && iconPosition === "right" && icon}
      </>
    );

    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(buttonVariants({ variant, size, state, className }))}
          onClick={onClick}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, state, className }))}
        onClick={onClick}
        disabled={isDisabled}
        {...props}
      >
        {content}
      </button>
    );
  }
);

EnhancedButton.displayName = "EnhancedButton";

export { EnhancedButton, buttonVariants };