import Home from "@pages/Home";
import Landing from "@pages/Landing";
import routerType from "@_types/router.types";
import Search from "../pages/Search";
const pagesData: routerType[] = [
    {
        name: "Landing",
        path: "/login",
        component: <Landing />,
    },
    {
        name: "Seach",
        path: "/search",
        component: <Search />,
    },

    {
        name: "Home",
        path: "",
        component: <Home />,
    },
];

export default pagesData;
