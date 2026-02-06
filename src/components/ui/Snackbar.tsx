"use client";

import { useEffect, useState } from "react";
import { X, ShoppingCart, Heart, CheckCircle } from "lucide-react";

interface SnackbarProps {
  type: "cart" | "wishlist";
  message: string;
  onClose: () => void;
}

export default function Snackbar({ type, message, onClose }: SnackbarProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onClose, 400); // Wait for exit animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 400);
  };

  const config = {
    cart: {
      icon: ShoppingCart,
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
      border: "border-green-500",
      checkColor: "text-green-600",
    },
    wishlist: {
      icon: Heart,
      iconBg: "bg-red-50",
      iconColor: "text-red-600",
      border: "border-red-500",
      checkColor: "text-red-600",
    },
  };

  const settings = config[type];
  const Icon = settings.icon;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
        isExiting ? "translate-x-[120%] opacity-0" : "translate-x-0 opacity-100"
      }`}
      style={{
        animation: isExiting ? "none" : "slideInRight 0.5s ease-out",
      }}
    >
      <div
        className={`flex items-center gap-3 rounded-xl border-2 ${settings.border} bg-white px-5 py-2.5 shadow-2xl`}
        style={{ minWidth: "340px", maxWidth: "420px" }}
      >
        {/* Icon */}
        <div
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${settings.iconBg}`}
        >
          <Icon className={`h-4 w-4 ${settings.iconColor}`} />
        </div>

        {/* Message */}
        <div className="flex flex-1 items-center gap-2">
          <CheckCircle className={`h-4 w-4 ${settings.checkColor}`} />
          <span className="text-sm font-semibold text-gray-900">{message}</span>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="flex-shrink-0 rounded-lg p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Inline Animation Styles */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(120%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
