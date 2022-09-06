import styled from "styled-components";
import { device } from "../../styles/device";

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 100%;

  animation: LeftBoard 0.8s ease-in-out;

  @keyframes LeftBoard {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
