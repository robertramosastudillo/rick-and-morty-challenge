import { Header } from "../Header/Header";
import { Main, MainLayoutContainer } from "./MainLayout.styled";
import { Outlet } from "react-router-dom";
import { Footer } from '../Footer/Footer';

export const MainLayout = () => {
  return (
    <MainLayoutContainer>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer/>
    </MainLayoutContainer>
  );
};
