import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-amber-800 text-white hover:bg-amber-900 focus:ring-amber-800",
  secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-600",
  outline:
    "bg-transparent border border-amber-800 text-amber-800 hover:bg-amber-50 focus:ring-amber-800",
  ghost: "bg-transparent hover:bg-amber-50 text-amber-800 focus:ring-amber-800",
  link: "bg-transparent text-amber-800 hover:underline p-0 focus:ring-0",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs px-3 py-1.5 rounded",
  md: "text-sm px-4 py-2 rounded-md",
  lg: "text-base px-5 py-2.5 rounded-md",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  iconPosition = "left",
  isLoading = false,
  className = "",
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        inline-flex items-center justify-center font-medium transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {icon && iconPosition === "left" && !isLoading && (
        <span className="mr-2">{icon}</span>
      )}

      {children}

      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};
