import React from "react";

export default function Button({
    children,
    type = "submit",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg hover:bg-blue-500 ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}