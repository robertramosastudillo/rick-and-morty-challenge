import styled from "styled-components";
import { device } from "../../styles/device";
import * as palette from "../../styles/variables";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${palette.blackOpacity};
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  backdrop-filter: blur(1px);
  animation: BottomHeader 0.8s ease-in-out;

  @media ${device.laptop} {
    justify-content: flex-start;
  }

  @media ${device.laptopL} {
    height: 84px;
  }
`;

export const LogoContainer = styled.div`
  width: 44px;
  height: 44px;

  @media ${device.laptop} {
    margin-left: 40px;
  }

  @media ${device.laptopL} {
    width: 50px;
    height: 50px;
  }
`;

export const Logo = styled.img`
  width: 100%;
`;
export const LogoText = styled.div`
  color: ${palette.primaryColorText};
  font-weight: ${palette.BoldFont};

  @media ${device.laptopL} {
    font-size: 22px;
  }
`;
