import React from "react";

export function Button({ children, className = "", variant = "default", size = "md", ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl font-medium transition active:scale-[.98]";
  const sizes = { sm: "text-sm px-3 py-1.5", md: "text-base px-4 py-2", lg: "text-base px-5 py-2.5" };
  const variants = {
    default: "bg-black text-white hover:opacity-90",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-50"
  };
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
