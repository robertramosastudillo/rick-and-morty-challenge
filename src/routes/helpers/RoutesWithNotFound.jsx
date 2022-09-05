import { NotFound } from "../../pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";

export const RoutesWithNotFound = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
