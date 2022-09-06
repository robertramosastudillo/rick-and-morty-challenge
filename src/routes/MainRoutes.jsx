import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { Game } from "../pages/Game/Game";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./helpers/RoutesWithNotFound";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to="app" replace />} />
        <Route path="app/*" element={<MainLayout />}>
          <Route index element={<Game />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};
