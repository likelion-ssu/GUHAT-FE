import Landing from "pages/Landing";
import { ComponentType } from "react";
import routerType from "../types/router.types";

const pagesData: routerType[] = [
    {
        name: "Landing",
        path: "",
        component: <Landing />,
    },
];

export default pagesData;
