import React from "react";
import clsx from "clsx";
import { Link } from "react-router";

interface Props {
  variant?:
    | "default"
    | "primary"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "icon";
  size?: "default" | "sm" | "lg" | "icon" | "full";
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  ariaLabel: string;
  ref?: React.LegacyRef<HTMLButtonElement>;
  to?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  target?: "_blank" | "_parent" | "_self" | "_top";
}

const Button: React.FC<Props> = ({
  variant = "default",
  size = "default",
  onClick,
  disabled = false,
  children,
  className,
  ariaLabel,
  ref,
  to,
  type,
  style,
  target,
}) => {
  const baseStyles =
    "inline-flex gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 items-center justify-center";

  const variantStyles = {
    default: "",
    primary:
      "bg-purple-purple-darkest hover:bg-purple-purple-darkest/10 dark:bg-purple-purple-intense hover:dark:bg-purple-purple-intense/80 text-purple-50 hover:text-white",
    destructive:
      "bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",
    outline: "border bg-transparent",
    secondary:
      "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
    ghost:
      "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-purple-900/90 dark:hover:text-zinc-50 text-white dark:text-white",
    link: "hover:underline hover:underline-offset-4",
    icon: "rounded-full p-2",
  };

  const sizeStyles = {
    default: "h-10 px-4 py-2 items-center justify-center",
    sm: "h-9 rounded-md px-3 items-center justify-center",
    lg: "h-11 rounded-md px-8 items-center justify-center",
    icon: "h-10 w-10 ",
    full: "h-10 w-full",
  };

  return (
    <>
      {variant === "link" ? (
        <Link
          target={target}
          className={clsx(
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            className
          )}
          onClick={onClick}
          aria-label={
            ariaLabel
              ? ariaLabel
              : typeof children === "string"
              ? children
              : undefined
          }
          to={to ? to : ""}
        >
          {children}
        </Link>
      ) : (
        <button
          style={style}
          type={type}
          className={clsx(
            baseStyles,
            variantStyles[variant],
            sizeStyles[size],
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
          onClick={onClick}
          disabled={disabled}
          aria-label={
            ariaLabel
              ? ariaLabel
              : typeof children === "string"
              ? children
              : undefined
          }
          ref={ref}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
