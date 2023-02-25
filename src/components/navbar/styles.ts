import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  padding: 8px 40px;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #5392ca;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .module-indicator {
    button {
      display: flex;
      align-items: center;
      gap: 14px;
      text-decoration: none;
      span {
        ${({ theme }) => theme.fonts.mulish.small_semibold};
        color: ${({ theme }) => theme.colors.grey_700};
      }
      svg {
        color: ${({ theme }) => theme.colors.turquoise_500};
        font-size: 32px;
      }
    }
  }
`;

export const logoutButtonStyle = css`
  ${({ theme }) => theme.fonts.mulish.small_regular};
  color: ${({ theme }) => theme.colors.grey_700};
  gap: 12px;
`;

export const LogOutContainer = styled.div`
  p {
    text-align: center;
    margin: 0 0 20px;
    ${({ theme }) => theme.fonts.mulish.body_regular};
    color: ${({ theme }) => theme.colors.grey_700};
  }

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const LogoIcon = styled.img`
  width: 34px;
  margin: auto 60px auto 0px;
  display: block;
`;

export const UserContainer = styled.div`
  width: fit-content;
  height: min-content;
  display: flex;
  justify-content: space-between;
  margin-left: auto;

  .user-information {
    display: flex;
    align-items: center;
    gap: 12px;

    img {
      width: 45px;
      height: 45px;
      border-radius: 99px;
      object-fit: cover;
    }

    span {
      ${({ theme }) => theme.fonts.mulish.small_semibold};
      color: ${({ theme }) => theme.colors.grey_700};
    }
  }

  button {
    ${logoutButtonStyle};
    svg {
      color: ${({ theme }) => theme.colors.blue_700};
    }
  }
`;

export const ShortcutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  background: ${({ theme }) => theme.colors.white};
  padding: 8px 40px;
  border-bottom: 1px solid #5392ca;

  .shortcut-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    margin: 0;
  }
`;

export const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .sistem-notify {
    ${({ theme }) => theme.fonts.mulish.small_semibold};
    font-size: 10px;
    line-height: 1em;
    color: ${({ theme }) => theme.colors.grey_800};
  }

  p {
    ${({ theme }) => theme.fonts.mulish.small_semibold};
    line-height: 1em;
    color: ${({ theme }) => theme.colors.grey_700};
  }

  small {
    ${({ theme }) => theme.fonts.mulish.body_regular};
    line-height: 1em;
    color: ${({ theme }) => theme.colors.grey_700};
  }

  ul {
    li {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-top: 8px;

      & + li {
        margin-top: 14px;
      }
    }
  }
`;
