import React from "react";

interface ButtonProps {
  primary?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ primary, onClick, children }) => {
  return (
    <button
      style={{
        backgroundColor: primary ? "red" : "blue",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
