import styled from "styled-components";
import img from "../../assets/bg.jpg";

export const MainLayoutContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const Main = styled.div`
  margin: 20px auto;
`;
