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

  animation: BottomHeader .8s ease-in-out;

  @keyframes BottomHeader {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
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
