import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LoaderImg = styled.img`
  animation: rotateLoader 2s linear infinite;

  @keyframes rotateLoader {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const LoaderText = styled.div`
  color: #efeff1;
  font-size: 26px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
`;
