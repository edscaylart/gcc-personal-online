import styled, { keyframes } from "styled-components";

const entranceLogin = keyframes`
0%{
transform:translate( -100% , -100%) rotate(-45deg);

}
100%{
  transform:translate(0%, 0%) rotate(0deg);

}

`;

const entranceLogin2 = keyframes`
0%{
transform:translate(100%, 100%) rotate(45deg);

}
100%{
  transform:translate(0%, 0%) rotate(0deg);


}

`;

const loading = keyframes`
0%{
  opacity:0 ;
  transform:scale(1.1);
  
}
100%{
  opacity:1 ;
    transform:scale(1);
}

`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  z-index: 9999;

  &::after,
  &::before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    animation: ${entranceLogin} 1.6s ease;
    background: ${({ theme }) => theme.colors.cold_grey_900};
  }

  &::before {
    animation: ${entranceLogin2} 1.6s ease;
  }

  img {
    max-width: 150px;
    opacity: 0;
    animation: 0.8s ${loading} infinite alternate;
    animation-delay: 0.7s;
    filter: drop-shadow(0 2px 1.5em rgba(0, 0, 0, 0.8));
    z-index: 9999;
  }
`;
