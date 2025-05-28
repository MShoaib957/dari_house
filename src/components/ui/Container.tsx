import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  as: Component = "div",
}) => {
  return (
    <Component
      className={`mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ${className}`}
    >
      {children}
    </Component>
  );
};
