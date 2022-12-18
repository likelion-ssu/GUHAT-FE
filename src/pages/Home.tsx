import { getHomeRecruitList } from "@/apis/recruit/list";
import { getRecentReviews } from "@/apis/review";
import APILayout from "@/components/Layout/APILayout";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import { userState } from "@/storage/recoil/userState";
import Banner from "@domain/home/Banner/Banner";
import MyInfoLayout from "@domain/home/Layout/MyInfoLayout";
import { useEffect } from "react";
import { useQueries } from "react-query";
import { useRecoilState } from "recoil";
import { getProfile } from "../apis/profile/index";
import RecruitingLayout from "../domain/home/Layout/RecruitingLayout";
import ReviewLayout from "../domain/home/Layout/ReviewLayout";

const Home = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const [userInfo, setUserInfo] = useRecoilState(userState);
    const result = useQueries([
        {
            queryKey: ["getRecruits"],
            queryFn: () => getHomeRecruitList(),
        },

        {
            queryKey: ["getUserinfo"],
            queryFn: () => getProfile(),
            onSuccess: (data: any) => {
                setUserInfo(data);
            },
        },
        {
            queryKey: ["getReviews"],
            queryFn: () => getRecentReviews(),
        },
    ]);
    console.log(result[0].data);

    useEffect(() => {
        setModalVisible(false);
        console.log(process.env.REACT_APP_BASE_URL);
    }, []);

    setLoading(result.some((result) => result.isLoading));

    return (
        <>
            <APILayout>
                <Banner />
                {!loading ? (
                    <>
                        {" "}
                        <MyInfoLayout />
                        <div style={{ width: "100%", height: "7vh" }}></div>
                        {result[0].data ? (
                            <RecruitingLayout
                                list={result[0].data?.data.data}
                            />
                        ) : null}
                        <div style={{ width: "100%", height: "5vh" }}></div>
                        <ReviewLayout list={result[2].data?.data.data} />
                        <div style={{ width: "100%", height: "10vh" }}></div>
                    </>
                ) : null}
            </APILayout>
        </>
    );
};

export default Home;
