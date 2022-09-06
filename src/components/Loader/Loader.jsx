import React from "react";
import { LoaderContainer, LoaderImg, LoaderText } from "./Loader.styled";
import loader from "/assets/loader.png";

export const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderImg src={loader} alt="Loading" />
      <LoaderText>Cargando...</LoaderText>
    </LoaderContainer>
  );
};
