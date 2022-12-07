<<<<<<< HEAD
import { errorState, loadingState } from "@/storage/recoil/loadingState";
import { Route, Routes } from "react-router-dom";
import { useResetRecoilState, useSetRecoilState } from "recoil";
=======
import { Navigate, Route, Routes } from "react-router-dom";

>>>>>>> 1c564d4... feat : 인증 redirect
import routerType from "../types/router.types";
import pageData from "./pageData";

import { getCookieToken } from "@/storage/cookie";

const Router = () => {
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

export function PrivateRoute({ Component }: React.ReactNode | any) {
    const auth = getCookieToken();

    console.log("isAuthentic", auth);
    if (!auth) {
        alert("로그인이 필요합니다");
    }
    return auth ? Component : <Navigate to="/login" />;
}

export default Router;

export function PrivateRoute({ Component }: React.ReactNode | any) {
    useResetRecoilState(errorState);
    useResetRecoilState(loadingState);
    const setErrorState = useSetRecoilState(errorState);
    const setLoadingState = useSetRecoilState(loadingState);
    setLoadingState(true);
    setErrorState(null);

    console.log("reset state");
    return Component;
}
