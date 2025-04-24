"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  className,
  appName,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={className}
      style={{
        borderRadius: 8,
        padding: 10,
        margin: 10,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
