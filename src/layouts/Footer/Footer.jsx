import { FooterContainer, FooterText } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Todos los derechos reservados © {new Date().getFullYear()}</FooterText>
    </FooterContainer>
  );
};
