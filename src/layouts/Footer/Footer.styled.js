import styled from "styled-components";
import { device } from "../../styles/device";
import * as palette from "../../styles/variables";

export const FooterContainer = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${palette.blackOpacity};
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  backdrop-filter: blur(1px);
  animation: topFooter 0.8s ease-in-out;

  @media ${device.laptopL} {
    height: 84px;
  }
`;

export const FooterText = styled.div`
  color: ${palette.primaryColorText};
  font-weight: ${palette.BoldFont};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;

  a {
    color: ${palette.primaryColorText};
    cursor: pointer;
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid ${palette.primaryColorText};
    }
  }

  @media ${device.laptopL} {
    font-size: 22px;
  }
`;
