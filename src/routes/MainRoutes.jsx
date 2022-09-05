import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { Game } from "../pages/Game/Game";
import { Home } from "../pages/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./helpers/RoutesWithNotFound";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Home />} />
        <Route path="app/*" element={<MainLayout />}>
          <Route index element={<Game />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};
