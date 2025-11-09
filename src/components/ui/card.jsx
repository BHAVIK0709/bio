import React from "react";

export function Card({ className = "", children }) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}
export function CardHeader({ className = "", children }) {
  return <div className={`px-4 sm:px-6 pt-4 sm:pt-6 ${className}`}>{children}</div>;
}
export function CardTitle({ className = "", children }) {
  return <h3 className={`text-lg sm:text-xl font-semibold ${className}`}>{children}</h3>;
}
export function CardContent({ className = "", children }) {
  return <div className={`px-4 sm:px-6 pb-4 sm:pb-6 ${className}`}>{children}</div>;
}
