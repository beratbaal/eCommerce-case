import React from "react";
import { FaShoppingCart, FaEye, FaSpinner } from "react-icons/fa";
import classNames from "classnames";

interface ButtonProps {
  text: string;
  onClick: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  variant?: "addToCart" | "viewDetails" | "default";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  isLoading = false,
  isDisabled = false,
  icon,
  variant = "default",
}) => {
  const buttonClasses = classNames(
    "flex items-center justify-center py-2 px-4 rounded-lg transition-all duration-200",
    {
      "bg-blue-600 text-white hover:bg-blue-700":
        variant === "default" && !isDisabled,
      "bg-green-600 text-white hover:bg-green-700":
        variant === "addToCart" && !isDisabled,
      "bg-yellow-600 text-white hover:bg-yellow-700":
        variant === "viewDetails" && !isDisabled,
      "bg-gray-400 text-gray-600 cursor-not-allowed": isDisabled,
      "cursor-pointer": !isDisabled,
    }
  );

  return (
    <button
      onClick={!isDisabled && !isLoading ? onClick : undefined}
      className={buttonClasses}
      disabled={isDisabled}
    >
      {isLoading ? (
        <FaSpinner className="animate-spin mr-2" />
      ) : (
        icon && <span className="mr-2">{icon}</span>
      )}
      {text}
    </button>
  );
};

export default Button;
