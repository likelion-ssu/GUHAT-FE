import Home from "@pages/Home";
import Landing from "@pages/Landing";
import Search from "@pages/Search";
import SearchDetail from "@pages/SearchDetail";
import routerType from "@_types/router.types";
import RecruitView from "../pages/RecruitView";
import Search from "../pages/Search";
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

    {
        name: "RecruitView",
        path: "/recruit/:id",
        component: <RecruitView />,
    },

    {
        name: "RecruitPost",
        path: "/recruit/post",
        component: <RecruitView />,
    },
];

export default pagesData;
