import { getHomeRecruitList } from "@/apis/recruit/list";
import { getRecentReviews } from "@/apis/review";
import APILayout from "@/components/Layout/APILayout";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import { userState } from "@/storage/recoil/userState";
import { IReview } from "@/types/review.types";
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
    }, []);

    setLoading(result.some((result) => result.isLoading));

    const reviews: IReview[] = [
        {
            id: 1,
            lecture: {
                lectureId: 18,
                name: "수업이름",
                professors: ["교수님1", "2"],
                year: "2022",
                semester: "1학기",
                schedule: ["월 10:30"],
            },

            writer: {
                studentId: 7,
                name: "실명",
                nickname: "닉네임",
                level: 1,
                profileImg: null,
            },
            title: "리뷰 제목입니다",
            detail: "상세글은 여기",
            likeCount: 10,
        },
        {
            id: 1,
            lecture: {
                lectureId: 18,
                name: "수업이름",
                professors: ["교수님1", "2"],
                year: "2022",
                semester: "1학기",
                schedule: ["월 10:30"],
            },

            writer: {
                studentId: 7,
                name: "실명",
                nickname: "닉네임",
                level: 1,
            },
            title: "리뷰 제목입니다",
            detail: "상세글은 여기",
            likeCount: 10,
        },
        {
            id: 1,
            lecture: {
                lectureId: 18,
                name: "수업이름",
                professors: ["교수님1", "2"],
                year: "2022",
                semester: "1학기",
                schedule: ["월 10:30"],
            },

            writer: {
                studentId: 7,
                name: "실명",
                nickname: "닉네임",
                level: 1,
            },
            title: "리뷰 제목입니다",
            detail: "상세글은 여기",
            likeCount: 10,
        },
    ];
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
