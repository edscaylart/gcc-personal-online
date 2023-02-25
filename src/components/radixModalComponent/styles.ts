import styled, { css, keyframes } from "styled-components";

import * as Dialog from "@radix-ui/react-alert-dialog";

const entranceAnimation = keyframes`
from{
    top:-50vh;
    transform: rotateX(90deg);
    opacity:0.6;    
  }
  to{
    top:0;
    transform: rotateX(0deg) ;
    opacity:1;
}
`;

export const ModalRoot = styled(Dialog.Root)``;
export const ModalPortal = styled(Dialog.Portal)``;

export const StyledModalTrigger = styled(Dialog.Trigger)`
  cursor: pointer;
`;

export const ModalTriggerClose = styled(Dialog.Cancel)`
  width: 31px;
  height: 31px;
  position: absolute;
  right: 42px;
  top: 42px;
  cursor: pointer;
  z-index: 9;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 99px;
  svg {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.blue_700};
  }
`;

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: 0.3s;
`;

export const ModalBody = styled.main`
  max-width: 1000px;
  min-width: 450px;
  padding: 20px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  position: relative;
  transition: 0.3s;
  animation: 0.7s ${entranceAnimation} ease;
  overflow: hidden;
`;

interface props {
  scrollBarchange?: boolean;
}

export const StyledModalContent = styled(Dialog.Content)<props>`
  width: 100%;
  max-height: 94vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;
  transition: 0.3s;

  ${(prop) => {
    if (prop.scrollBarchange) {
      return css`
        &::-webkit-scrollbar {
          width: 24px !important;
          border-radius: 0px;
        }

        &::-webkit-scrollbar-track {
          border-radius: 0px;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 0px;
        }
      `;
    }
  }}
`;

export const ModalTitle = styled.div`
  max-width: 1536px;
  display: flex;
  align-items: center;
  gap: 24px;
  .element-contgainer {
    margin-right: 10%;
  }
  h2 {
    ${({ theme }) => theme.fonts.mulish.h4};
    color: ${({ theme }) => theme.colors.cold_grey_800};
    margin-right: 50px;
  }
`;
