import styled from "styled-components";
import { device } from "../../styles/device";

export const HomeContainer = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%;
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow: hidden;

  @media ${device.laptop} {
    height: 100vh;
    flex-direction: row;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  @media ${device.laptop} {
    width: 50%;
  }
`;

export const Logo = styled.img`
  width: 100%;
`;

export const TextContainer = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  padding: 60px;
  @media ${device.laptop} {
    width: 45%;
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 26px;
  color: #efeff1;
  margin: 40px auto;
  font-weight: 700;

  @media ${device.laptop} {
    font-size: 36px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  padding: 0.8rem 1rem;
  border-radius: 0.8rem;
  outline: none;
  border: none;
  height: 54px;
  min-width: 140px;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  color: #efeff1;
  background-color: #12a533;

  &:hover {
    background-color: #128e2d;
  }
`;
