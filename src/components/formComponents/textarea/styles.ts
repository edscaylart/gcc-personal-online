import styled from "styled-components";
import { disabledColor, disabledFontColor, errorColor } from "../input/styles";

interface ContainerProp {
  maxWidth?: number;
  required?: boolean;
  minWidth?: number;
}

export const Container = styled.div<ContainerProp>`
  width: 100%;
  max-width: ${(prop) => prop.maxWidth || 9999}px;
  min-width: ${(prop) => prop.minWidth || 10}px;
  label {
    display: block;
    margin-bottom: 8px;

    ${({ theme }) => theme.fonts.mulish.small_regular}
    color:${({ theme }) => theme.colors.cold_grey_800};

    &::after {
      content: "*";
      display: ${(prop) => (!prop.required ? "none" : "inline-block")};
      color: red;
      margin-left: 4px;
      font-size: 18px;
    }
  }

  p {
    color: ${errorColor};
    ${({ theme }) => theme.fonts.mulish.small_regular}
  }
`;

interface InputProps {
  error?: any;
  disabled?: boolean;
}

export const TextAreaContainer = styled.div<InputProps>`
  width: 100%;
  min-height: 120px;
  height: auto;
  display: flex;
  background: ${(prop) => prop.disabled && disabledColor};
  border-radius: 8px;

  * {
    pointer-events: ${(prop) => prop.disabled && "none"};
    color: ${(prop) => prop.disabled && disabledFontColor};
  }

  textarea {
    width: 100%;
    ${({ theme }) => theme.fonts.mulish.small_regular};
    color: ${({ theme }) => theme.colors.cold_grey_800};
    padding: 5px 12px;
    border-radius: 8px;
    resize: vertical;
    border: 1px solid ${(props) => (props.error ? errorColor : "#e0e0e0")};

    &:focus {
      outline: 1px solid ${({ theme }) => theme.colors.blue_600};
      box-shadow: 0px 0px 0px 2px rgba(24, 144, 255, 0.2);
    }
  }
`;
