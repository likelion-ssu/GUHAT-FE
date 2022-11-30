import { Route, Routes } from "react-router-dom";
import routerType from "../types/router.types";
import pageData from "./pageData";

const Router = () => {
    const pageRoutes = pageData.map(({ name, path, component }: routerType) => {
        return <Route key={name} path={`/${path}`} element={component} />;
    });

    return <Routes>{pageRoutes}</Routes>;
};

export default Router;
