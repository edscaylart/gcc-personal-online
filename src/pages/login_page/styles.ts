import styled from "styled-components";
import Background from "../../assets/academia.jpg";

export const Container = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    top: -10px;
    bottom: -10px;
    right: -10px;
    left: -10px;
    position: absolute;
    background: url(${Background});
    background-size: cover;
    z-index: 1;
    filter: blur(3px) brightness(0.7);
  }
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 30px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 36px;
  box-shadow: 0px 1px 1em rgba(0, 0, 0, 0.4);
  z-index: 2;

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    padding-bottom: 16px;
    gap: 20px;

    img {
      width: 100%;
      max-width: 50px;
    }

    .header-title {
      h4 {
        ${({ theme }) => theme.fonts.mulish.h4}
        color:${({ theme }) => theme.colors.cold_grey_800};
        margin-bottom: 8px;
      }
    }
  }

  form {
    max-width: 270px;
    margin: 42px auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .footer {
    max-width: 270px;
    margin: 0 auto;
    p {
      ${({ theme }) => theme.fonts.mulish.body_regular}
      color:${({ theme }) => theme.colors.cold_grey_800};
      text-align: center;

      a {
        color: ${({ theme }) => theme.colors.blue_600};
        text-decoration: underline;
      }
    }
  }
`;
