import styled, { css, keyframes } from "styled-components";
import { ButtonProps } from ".";

const buttonAnimation = keyframes`
from{
    top:-50vh;
    transform: rotateX(90deg);
    opacity:0;
  }
  to{
    top:0;
    transform: rotateX(0deg) ;
    opacity:1;
}
`;

const loadingAnimation = keyframes`

from{

  transform: rotate(0deg);
}

to{
  transform: rotate(360deg);

}

`;

export const primaryButton = css<ButtonProps>`
  ${(props) => {
    if (props.dangerous) {
      return css`
        background: ${({ theme }) => theme.colors.alert_failure};
        color: ${({ theme }) => theme.colors.white};
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
        border: 1px solid ${({ theme }) => theme.colors.alert_failure};
        &:hover {
          background: rgba(255, 120, 117, 1);
        }
      `;
    }
    if (props.ghost) {
      return css`
        color: ${({ theme }) => theme.colors.blue_700};
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
        border: 1px solid;
        &:hover {
          color: ${({ theme }) => theme.colors.blue_600};
          border-color: ${({ theme }) => theme.colors.blue_600};
        }
      `;
    } else {
      return css`
        background: ${({ theme }) => theme.colors.blue_600};
        color: ${({ theme }) => theme.colors.white};
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
        &:hover {
          background: ${({ theme }) => theme.colors.blue_800};
        }
      `;
    }
  }}
`;
export const secondaryButton = css<ButtonProps>`
  ${(props) => {
    if (props.dangerous) {
      return css`
        border: 1px solid ${({ theme }) => theme.colors.alert_failure};
        border-style: ${props.buttonStyle === "Dashed" && "dashed"};
        color: ${({ theme }) => theme.colors.alert_failure};
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
        &:hover {
          color: rgba(255, 120, 117, 1);
          border-color: rgba(255, 120, 117, 1);
        }
      `;
    }
    if (props.ghost) {
      return css`
        color: ${({ theme }) => theme.colors.white};
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
        border: 1px solid;
        &:hover {
          color: ${({ theme }) => theme.white};
          border-color: ${({ theme }) => theme.white};
        }
      `;
    } else {
      return css`
        border: 1px solid ${({ theme }) => theme.colors.blue_600};
        border-style: ${props.buttonStyle === "Dashed" && "dashed"};
        color: ${({ theme }) => theme.colors.blue_600};
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
        &:hover {
          border-color: ${({ theme }) => theme.colors.blue_800};
          color: ${({ theme }) => theme.colors.blue_800};
        }
      `;
    }
  }}
`;
export const linkButton = css<ButtonProps>`
  ${(props) => {
    if (props.dangerous) {
      return css`
        color: ${({ theme }) => theme.colors.alert_failure};
        &:hover {
          color: rgba(255, 120, 117, 1);
        }
      `;
    }
    if (props.ghost) {
      return css`
        color: ${props.buttonStyle === "Text"
          ? ({ theme }) => theme.colors.white
          : ({ theme }) => theme.colors.blue_600};
        &:hover {
          color: ${props.buttonStyle === "Text"
            ? ({ theme }) => theme.colors.cold_grey_800
            : ({ theme }) => theme.colors.blue_600};
          background: ${props.buttonStyle === "Text"
            ? ({ theme }) => theme.colors.cold_grey_50
            : null};
        }
      `;
    } else {
      return css`
        color: ${props.buttonStyle === "Text"
          ? ({ theme }) => theme.colors.cold_grey_800
          : ({ theme }) => theme.colors.blue_600};
        &:hover {
          color: ${props.buttonStyle === "Text"
            ? ({ theme }) => theme.colors.cold_grey_800
            : ({ theme }) => theme.colors.blue_600};
        }
      `;
    }
  }}
`;

export const buttonSizes = {
  Large: "8px 16px",
  Medium: "5px 16px",
  Small: "1px 8px",
};

export const buttonStyles = {
  Primary: primaryButton,
  Secondary: secondaryButton,
  Dashed: secondaryButton,
  Link: linkButton,
  Text: linkButton,
};

const buttonColorDisabled = (param: string) => {
  if (param === "Primary" || param === "Secondary") return "#f5f5f5";
  else return "";
};

const disabledButton = css<ButtonProps>`
  background: ${(props) => buttonColorDisabled(props.buttonStyle)};
  color: ${({ theme }) => theme.colors.grey_200};
  border-color: ${({ theme }) => theme.colors.grey_200};
  cursor: no-drop;
  opacity: 0.4;

  &:hover {
    background: ${(props) => buttonColorDisabled(props.buttonStyle)};
    color: ${({ theme }) => theme.colors.grey_200};
    border-color: ${({ theme }) => theme.colors.grey_200};
  }
`;

export const ButtonContainer = styled.button.attrs<ButtonProps>(({ type }) => ({
  type: type || "button",
}))<ButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transition: 0.3s;
  animation: ${(props) => props.animation && buttonAnimation} 0.6s ease;
  padding: ${(props) =>
    props.circle || props.square ? "9px 13px" : buttonSizes[props.size ?? 'Medium']};
  border-radius: ${(props) => (props.circle ? "99px" : "8px")};
  ${({ theme }) => theme.fonts.mulish.body_bold};
  ${(props) => buttonStyles[props.buttonStyle]};
  ${(props) => props.disabled && disabledButton};
  ${(props) =>
    props.loading &&
    css`
      opacity: 0.7;
      cursor: no-drop;
      pointer-events: none;
      svg {
        animation: 1s ${loadingAnimation} infinite ease;
      }
    `}
`;

export const AngleRight = styled.img`
  width: 12px;
  height: 12px;
`;
