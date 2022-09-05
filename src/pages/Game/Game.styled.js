import styled from "styled-components";
import { device } from "../../styles/device";

export const GameContainer = styled.div`
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1440px;
  margin: auto;

  @media ${device.laptop} {
    flex-direction: row;
    height: 100vh;
  }

  @media ${device.laptopL} {
    gap: 80px;
  }
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.laptop} {
    width: 55%;
  }
`;

export const OptionsMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media ${device.laptop} {
    width: 45%;
  }
`;

export const OptionsMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  gap: 10px;
  width: 100%;
`;

export const Movements = styled.div`
  color: #efeff1;
  font-weight: 500;
`;

export const TimerGame = styled.div`
  color: #efeff1;
  font-weight: 500;
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
  font-weight: 600;
  cursor: pointer;
  color: #efeff1;
  background-color: #12a533;

  &:hover {
    background-color: #128e2d;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
`;
