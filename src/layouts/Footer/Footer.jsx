import { FooterContainer, FooterText } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <a href="https://robertramosastudillo.com" target="_blank">Robert Ramos</a>Todos los derechos reservados © {new Date().getFullYear()}
      </FooterText>
    </FooterContainer>
  );
};
