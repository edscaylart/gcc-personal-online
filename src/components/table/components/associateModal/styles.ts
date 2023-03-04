import styled from "styled-components";

export const Container = styled.div`
  min-width: 900px;
  max-width: 1000px;

  header {
    border-bottom: 1px solid grey;
    margin-top: 10px;
    padding: 10px 0;

    p {
      ${({ theme }) => theme.fonts.mulish.body_regular};
      color: ${({ theme }) => theme.colors.cold_grey_800};

      span {
        ${({ theme }) => theme.fonts.mulish.body_regular};
      }
    }
  }

  .error-message {
    ${({ theme }) => theme.fonts.mulish.small_regular};
    color: ${({ theme }) => theme.colors.alert_failure};
    margin-top: 10px;
  }

  .class-state {
    ${({ theme }) => theme.fonts.mulish.body_bold};
  }

  .open.open.open.open {
    color: #fac739;
  }
  .closed.closed.closed.closed {
    color: #5ad660;
  }

  .associates-list {
    margin-top: 20px;
    display: grid;
    gap: 20px;
    li {
      background-color: ${({ theme }) => theme.colors.cold_grey_50};
      display: flex;
      padding-left: 12px;
      border-radius: 12px;

      label {
        width: 100%;
        cursor: pointer;
        padding: 10px 12px;
        ${({ theme }) => theme.fonts.mulish.body_regular};
        color: ${({ theme }) => theme.colors.cold_grey_800};
      }
    }
  }

  .buttons-container {
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const CloseClassContainer = styled.section`
  .title {
    width: 100%;
    text-align: center;
    ${({ theme }) => theme.fonts.mulish.h5_semibold};
    color: ${({ theme }) => theme.colors.cold_grey_800};
    margin: 30px 0px;
  }

  .buttons-container {
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .done-icon {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.alert_sucess};
  }

  p {
    width: 100%;
    text-align: center;
    ${({ theme }) => theme.fonts.mulish.body_regular};

    color: ${({ theme }) => theme.colors.cold_grey_800};
  }

  .split-title {
    max-width: 500px;
  }

  .students-list {
    p {
      text-align: left;
    }
  }
`;
