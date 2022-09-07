import styled from "styled-components";
import * as palette from "../../styles/variables";

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const LoaderImg = styled.img`
  animation: rotateLoader 2s linear infinite;
`;

export const LoaderText = styled.div`
  color: ${palette.blackOpacity};
  font-size: 26px;
  font-weight: ${palette.BoldFont};
  font-family: ${palette.primaryFont}, sans-serif;
`;
