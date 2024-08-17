import React from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  className,
}) => {
  return (
    <a href={href} onClick={onClick}>
      <button className="flex justify-center items-center text-white bg-black drop-shadow-md hover:bg-[#FFC23C]">
        {children}
      </button>
    </a>
  );
};

export default Button;
