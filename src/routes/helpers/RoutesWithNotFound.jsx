import { Navigate, Route, Routes } from "react-router-dom";

export const RoutesWithNotFound = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to="app" replace />} />
    </Routes>
  );
};
