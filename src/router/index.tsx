import { Route, Routes } from "react-router-dom";

import routerType from "../types/router.types";
import pageData from "./pageData";

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
    // const setErrorState = useSetRecoilState(errorState);
    // const setLoadingState = useSetRecoilState(loadingState);
    // setLoadingState(true);
    // setErrorState(null);

    // const auth = getCookieToken();

    // console.log("isAuthentic", auth);
    // if (!auth) {
    //     alert("로그인이 필요합니다");
    // }
    return Component;
    //return auth ? Component : <Navigate to="/login" />;
}
