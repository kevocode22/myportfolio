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
  const baseStyles = "buttonHero flex justify-center items-center text-white";
  const styles = "h-[7vh] bg-[#100F0F]"; // Estilos comunes para todos los botones

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        <button className={styles}>{children}</button>
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${styles}${className}`}>
      {children}
    </button>
  );
};

export default Button;
