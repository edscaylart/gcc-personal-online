import styled from "styled-components";

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: 6px 44px;
  position: sticky;
  bottom: 0px;
  z-index: 3;
  span {
    color: ${({ theme }) => theme.colors.grey_800};
    ${({ theme }) => theme.fonts.mulish.small_regular};
  }
`;
