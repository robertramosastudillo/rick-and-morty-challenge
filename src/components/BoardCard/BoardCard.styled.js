import styled from "styled-components";

export const BoardCardContainer = styled.div`
  cursor: pointer;
  aspect-ratio: 1 / 1;
`;

export const BoardCardAction = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ actionFlipped }) => actionFlipped ? "rotateY(180deg)" : "none"};
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
