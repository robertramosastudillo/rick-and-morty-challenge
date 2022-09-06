import styled from "styled-components";

export const BoardCardContainer = styled.div`
  cursor: pointer;
  aspect-ratio: 1 / 1;

  animation: shake-card 2s ease;

  @keyframes shake-card {
    from {
      transform: rotate(0deg);
    }
    4% {
      transform: rotate(5deg);
    }
    12.5% {
      transform: rotate(-5deg);
    }
    21% {
      transform: rotate(5deg);
    }
    29% {
      transform: rotate(-5deg);
    }
    37.5% {
      transform: rotate(5deg);
    }
    46% {
      transform: rotate(-5deg);
    }
    50%,
    to {
      transform: rotate(0deg);
    }
  }
`;

export const BoardCardAction = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ actionFlipped }) =>
    actionFlipped ? "rotateY(180deg)" : "none"};
`;

export const BoardCardOpen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 8px;
  overflow: hidden;
`;

export const BoardCardClose = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 8px;
  overflow: hidden;
  transform: rotateY(180deg);
  box-shadow: 5px 5px 10px 0px rgb(0 0 0 / 50%);
`;

export const BoardCardImage = styled.img`
  width: 100%;
  height: 100%;
`;
