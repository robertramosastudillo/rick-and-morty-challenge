import styled from "styled-components";
import { device } from "../../styles/device";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 72px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  backdrop-filter: blur(1px);

  @media ${device.laptop} {
    justify-content: flex-start;
  }
`;

export const LogoContainer = styled.div`
  width: 44px;
  height: 44px;
  @media ${device.laptop} {
    margin-left: 40px;
  }
`;

export const Logo = styled.img`
  width: 100%;
`;
export const LogoText = styled.div`
  color: white;
  font-weight: 700;
`;
