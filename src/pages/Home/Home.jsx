import {
  Button,
  HomeContainer,
  Logo,
  LogoContainer,
  TextContainer,
  Title,
} from "./Home.styled";
import logo from "../../assets/home-bg.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const goToGame = () => navigate("/app");

  return (
    <HomeContainer>
      <LogoContainer>
        <Logo src={logo} alt="Logo" />
      </LogoContainer>
      <TextContainer>
        <Title>Rick And Morty Challenge</Title>
        <Button onClick={goToGame}>Jugar de nuevo</Button>
      </TextContainer>
    </HomeContainer>
  );
};
