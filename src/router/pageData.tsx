import Home from "@pages/Home";
import Landing from "@pages/Landing";
import routerType from "@_types/router.types";
const pagesData: routerType[] = [
    {
        name: "Landing",
        path: "/login",
        component: <Landing />,
    },

    {
        name: "Home",
        path: "",
        component: <Home />,
    },
];

export default pagesData;
