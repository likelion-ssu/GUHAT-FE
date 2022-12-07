import Home from "@pages/Home";
import Landing from "@pages/Landing";
import routerType from "@_types/router.types";
import RecruitView from "../pages/RecruitView";
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

    {
        name: "RecruitView",
        path: "/recruit/:id",
        component: <RecruitView />,
    },

    {
        name: "RecruitPost",
        path: "/recruit/post",
        component: <RecruitView />,
=======
        name: "Notfound",
        path: "*",
        component: <h1>Notfound</h1>,
>>>>>>> 1c564d4... feat : 인증 redirect
    },
];

export default pagesData;
