import Home from "@pages/Home";
import Landing from "@pages/Landing";
import Search from "@pages/Search";
import SearchDetail from "@pages/SearchDetail";
import routerType from "@_types/router.types";
const pagesData: routerType[] = [
    {
        name: "Home",
        path: "",
        component: <Home />,
    },
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
        name: "Seach",
        path: "/search/:keyword",
        component: <SearchDetail />,
    },
];

export default pagesData;
