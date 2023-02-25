import styled from "styled-components";

export const Container = styled.div`
  margin: 30px auto 0;
  max-width: 800px;

  .list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    .filter {
      display: flex;
      align-items: center;
      gap: 20px;

      button {
        ${({ theme }) => theme.fonts.mulish.small_regular};
      }
    }

    .counter {
      ${({ theme }) => theme.fonts.mulish.small_regular};
      color: ${({ theme }) => theme.colors.cold_grey_800};
    }
  }

  .table-description {
    display: flex;
    align-items: center;
    margin-top: 30px;
    gap: 20px;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      div {
        width: 20px;
        height: 20px;
        border-radius: 99px;

        background: ${({ theme }) => theme.colors.cold_grey_800};
      }

      .open {
        background: yellow;
      }
      .ended {
        background: green;
      }

      p {
        ${({ theme }) => theme.fonts.mulish.small_regular};
        color: ${({ theme }) => theme.colors.cold_grey_800};
      }
    }
  }
`;

export const TableList = styled.ul`
  display: grid;
  max-height: 75vh;
  overflow-y: auto;
  padding: 10px 20px;
  gap: 20px;

  li {
    display: flex;
    align-items: center;

    .list-btn.list-btn.list-btn {
      width: 100%;
      padding: 20px;
      gap: 10px;
      justify-content: flex-start;
      background: ${({ theme }) => theme.colors.white};
      border-radius: 20px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.09);
      text-align: left;
      position: relative;
      &:hover {
        background: ${({ theme }) => theme.colors.blue_400};
      }
    }

    .open.open.open.open {
      background: #fac739;

      h4 {
        &:nth-child(1) {
          border-right: 1px solid white;
        }
      }
      &::after {
        content: "EM ABERTO";
        display: inline-block;
        margin-left: auto;
        color: white;
      }
    }
    .closed.closed.closed.closed {
      background: #5ad660;

      h4 {
        &:nth-child(1) {
          border-right: 1px solid white;
        }
      }
      &::after {
        content: "AULA ENCERRADA";
        display: inline-block;
        margin-left: auto;
        color: white;
      }
    }

    h4 {
      ${({ theme }) => theme.fonts.mulish.body_bold};
      color: ${({ theme }) => theme.colors.cold_grey_800};

      &:nth-child(1) {
        width: 60px;
        border-right: 1px solid #c4c4c4;
      }
    }
  }
`;
