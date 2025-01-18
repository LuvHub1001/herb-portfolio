import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { withCommonLayout } from "../hoc";

const MainPage = lazy(() => import("../pages/MainPage"));
const WrappedMainPage = withCommonLayout(MainPage);

function PublicRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WrappedMainPage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRouter;
