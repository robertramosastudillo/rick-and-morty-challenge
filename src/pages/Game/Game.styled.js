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
  position: relative;

  @media ${device.laptop} {
    flex-direction: row;
    height: 100vh;
  }

  @media ${device.laptopL} {
    gap: 80px;
  }

  animation: fadeIn 0.8s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      /* transform: translateX(-80px); */
    }
    100% {
      opacity: 1;
      /* transform: translateX(0px); */
    }
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

  animation: TopOptionsMenu 0.8s ease-in-out;

  @keyframes TopOptionsMenu {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
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
  backdrop-filter: blur(1px);

  @media ${device.laptopL} {
    font-size: 22px;
  }
`;

export const Movements = styled.div`
  color: #efeff1;
  font-weight: 700;
`;

export const TimerGame = styled.div`
  color: #efeff1;
  font-weight: 700;
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
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: #128e2d;
  }

  @media ${device.laptopL} {
    font-size: 22px;
    height: 60px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
`;
export const WinnerBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ winner }) => (winner ? "1" : "0")};
  transition: 1s;
  z-index: 10;
  pointer-events: none;
  backdrop-filter: blur(2px);
`;

export const WinnerText = styled.div`
  font-size: 36px;
  color: #efeff1;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 30px 60px;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  animation: ${({ winner }) =>
    winner ? "modal-winner 1s ease-in-out;" : "none"};

  @keyframes modal-winner {
    0% {
      opacity: 0;
      transform: translateY(200px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
