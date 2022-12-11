import Home from "@pages/Home";
import Landing from "@pages/Landing";
import Search from "@pages/Search";
import SearchDetail from "@pages/SearchDetail";
import routerType from "@_types/router.types";
import Lecture from "../pages/Lecture";
import MyPage from "../pages/MyPage";
import RecruitPost from "../pages/RecruitPost";
import RecruitView from "../pages/RecruitView";
import ReviewPost from "../pages/ReviewPost";
import ReviewView from "../pages/ReviewView";
const pagesData: routerType[] = [
    {
        name: "Home",
        path: "",
        component: <Home />,
        exact: false,
    },
    {
        name: "Landing",
        path: "/login",
        component: <Landing />,
        exact: true,
    },
    {
        name: "Mypage",
        path: "/mypage",
        component: <MyPage />,
        exact: true,
    },
    {
        name: "Seach",
        path: "/search",
        component: <Search />,
        exact: true,
    },
    {
        name: "Seach",
        path: "/search/lecture/",
        component: <SearchDetail />,
        exact: true,
    },

    {
        name: "RecruitView",
        path: "/recruit/:id",
        component: <RecruitView />,
        exact: false,
    },

    {
        name: "RecruitPost",
        path: "/recruit/post",
        component: <RecruitPost />,
        exact: false,
    },

    {
        name: "Lecture",
        path: "/lecture/:id",
        component: <Lecture />,
        exact: false,
    },

    {
        name: "ReviewPost",
        path: "/review/post",
        component: <ReviewPost />,
        exact: false,
    },

    {
        name: "ReviewView",
        path: "/review/:id",
        component: <ReviewView />,
        exact: false,
    },

    {
        name: "Notfound",
        path: "*",
        component: <h1>Notfound</h1>,
    },
];

export default pagesData;
