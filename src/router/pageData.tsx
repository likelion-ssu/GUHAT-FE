import Landing from "@pages/Landing";
import routerType from "@_types/router.types";
import Search from "../pages/Search";
const pagesData: routerType[] = [
    {
        name: "Landing",
        path: "",
        component: <Landing />,
    },
    {
        name: "Landing",
        path: "/search",
        component: <Search />,
    },
];

export default pagesData;
