import { errorState, loadingState } from "@/storage/recoil/loadingState";
import { Route, Routes } from "react-router-dom";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import routerType from "../types/router.types";
import pageData from "./pageData";

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
