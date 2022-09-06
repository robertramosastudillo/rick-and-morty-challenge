import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 72px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  backdrop-filter: blur(1px);

  animation: topFooter 0.8s ease-in-out;

  @keyframes topFooter {
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

export const FooterText = styled.div`
  color: white;
  font-weight: 700;
`;
