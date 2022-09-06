import {
  HeaderContainer,
  Logo,
  LogoContainer,
  LogoText,
} from "./Header.styled";
import logo from "/assets/rickandmortyapi-white.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logo} alt="Logo Rick And Morty" />
      </LogoContainer>
      <LogoText>Rick And Morty Challenge</LogoText>
    </HeaderContainer>
  );
};
