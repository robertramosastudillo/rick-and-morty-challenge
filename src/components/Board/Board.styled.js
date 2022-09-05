import styled from "styled-components";
import { device } from "../../styles/device";

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 100%;

  @media ${device.tablet} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
