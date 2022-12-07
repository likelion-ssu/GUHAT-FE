import { errorState, loadingState } from "@/storage/recoil/loadingState";
import { Route, Routes } from "react-router-dom";
import { useResetRecoilState, useSetRecoilState } from "recoil";

import { Navigate } from "react-router-dom";

import routerType from "../types/router.types";
import pageData from "./pageData";

import { getCookieToken } from "@/storage/cookie";

export const Router = () => {
    const pageRoutes = pageData.map(({ name, path, component }: routerType) => {
        return (
            <Route
                key={name}
                path={`/${path}`}
                element={
                    path.includes("login") ? (
                        component
                    ) : (
                        <PrivateRoute Component={component} />
                    )
                }
            />
        );
    });
    return <Routes>{pageRoutes}</Routes>;
};

export default Router;

export function PrivateRoute({ Component }: React.ReactNode | any) {
    // useResetRecoilState(errorState);
    // useResetRecoilState(loadingState);
    const setErrorState = useSetRecoilState(errorState);
    const setLoadingState = useSetRecoilState(loadingState);
    setLoadingState(true);
    setErrorState(null);

    const auth = getCookieToken();

    console.log("isAuthentic", auth);
    if (!auth) {
        alert("로그인이 필요합니다");
    }
    return auth ? Component : <Navigate to="/login" />;
}
