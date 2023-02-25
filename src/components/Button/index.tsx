import React, { ButtonHTMLAttributes, useEffect, useRef } from "react";
import { ButtonContainer, AngleRight } from "./styles";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CSSProperties } from "styled-components";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: "Primary" | "Secondary" | "Dashed" | "Link" | "Text";
  size?: "Large" | "Medium" | "Small";
  icon?: boolean;
  disabled?: boolean;
  dangerous?: boolean;
  circle?: boolean;
  square?: boolean;
  ghost?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  keyCode?: string;
  style?: CSSProperties | undefined;
  animation?: boolean;
  permission?: string[];
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  keyCode,
  animation = true,
  onClick,
  size = "Medium",
  permission,
  ...props
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (keyCode) {
      window.addEventListener("keydown", handleKeyDownButton, false);
    }
  }, [keyCode]);

  const handleKeyDownButton = (event: any) => {
    // if (event.defaultPrevented) return;
    if (event.key !== keyCode) return;
    event.preventDefault();
    if (event.key === keyCode) {
      buttonRef.current?.click?.();
    }
  };

  return (
    <ButtonContainer
      {...{ ...props, size, animation }}
      onClick={() => onClick?.()}
      ref={buttonRef}
    >
      {props.loading ? <AiOutlineLoading3Quarters /> : null}
      {children}
    </ButtonContainer>
  );
};

export default Button;
