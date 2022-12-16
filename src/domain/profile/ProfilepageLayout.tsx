import { getProfile } from "@/apis/profile";
import MainButton from "@/components/Button";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import { userState } from "@/storage/recoil/userState";
import { useEffect, useState } from "react";
import { useQueries } from "react-query";
import { useRecoilState } from "recoil";
import { getPortfolio } from "../../apis/profile/index";
import AboutMeLayout from "./Layout/AboutMeLayout";
import CommentLayout from "./Layout/CommentLayout";
import LectureHistoryLayout from "./Layout/LectureHistoryLayout";
import ReviewHistoryLayout from "./Layout/ReviewHistoryLayout";
import ScoreLayout from "./Layout/ScoreLayout";
import SubContentLayout from "./Layout/SubContentLayout";
import {
    MypageContentLayout,
    MypageLayoutContainer,
} from "./ProfilepageLayout.style";
const ProfilePageLayout = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const [userInfo, setUserInfo] = useRecoilState(userState);
    const [myProfile, setProfile] = useState(null);

    const result = useQueries([
        {
            queryKey: ["my-portfolio"],
            queryFn: () => getPortfolio(),
            onSuccess: (data: any) => {
                setProfile(data);
            },
        },

        {
            queryKey: ["getUserinfo"],
            queryFn: () => getProfile(),
            onSuccess: (data: any) => {
                setUserInfo(data);
            },
        },
    ]);
    useEffect(() => {
        setLoading(result.some((result) => result.isLoading));
    }, [result]);
    useEffect(() => {
        setModalVisible(false);
    }, []);

    const UnsmileEmoji = "../../assets/unsmile_emoji.png";
    const coments: any[] = [
        {
            day: "8일",
            score: 5,
            content: "최고에요",
            emoji: UnsmileEmoji,
        },
        {
            day: "8일",
            score: 5,
            content: "최고에요",
            emoji: UnsmileEmoji,
        },
        {
            day: "8일",
            score: 2,
            content: "최고에요",
            emoji: UnsmileEmoji,
        },
        {
            day: "8일",
            score: 3,
            content: "최고에요",
            emoji: UnsmileEmoji,
        },
    ];
    const review = {
        isOwner: true,
        title: "알고리즘 팀플",
        year: "2020",
        semester: "1학기",
        createdAt: "2022-12-12", //작성일

        writerId: "29292",
        nickname: "익명111",
        writerLevel: 2,
        memberNum: 4, //필요인원
        startDate: "1월",
        endDate: "2월",
        reviewLevel: "하",

        subject: "주제입니다",
        detail: "사아아ㅏ리멀덜먀ㅓ대ㅓㄹ매ㅓ댜ㅓㅐㅓㅐㅑㅓ",
        files: [],
    };

    const comment = {
        canWrite: true, //해당 팀플 팀원일때만 & 작성자가 아닐때

        comments: [
            {
                isLike: true,
                year: "2022",
                semester: "1학기",
                createdAt: "2022-02-01 08:12:40", //yyyy-mm-dd hh:mm:ss 형식
                comment: "내용내요요요애뇽",
            },
            {
                isLike: false,
                year: "2022",
                semester: "1학기",
                createdAt: "2022-01-01 12:40:00",
                comment: "내용내요요요애뇽",
            },
            {
                isLike: true,
                year: "2022",
                semester: "1학기",
                createdAt: "2022-12-11 12:40:00",
                comment: "내용내요요요애뇽",
            },
            {
                isLike: false,
                year: "2022",
                semester: "1학기",
                createdAt: "2022-12-01 12:40:00",
                comment: "내용내요요요애뇽",
            },
        ],
    };
    const [tab, setTab] = useState("main");

    const getTabPage = () => {
        switch (tab) {
            case "main":
                return (
                    <>
                        <MypageContentLayout>
                            <AboutMeLayout
                                {...result[0].data}
                                nickname={userInfo?.nickname}
                            />
                            <ScoreLayout coments={coments} />
                            <SubContentLayout {...result[0].data} />
                            <CommentLayout {...comment} reviewId={0} />
                        </MypageContentLayout>
                    </>
                );
            case "review":
                return <ReviewHistoryLayout />;

            case "recruit":
                return <LectureHistoryLayout />;
        }
    };

    return (
        <>
            {userInfo !== null && myProfile !== null ? (
                <MypageLayoutContainer>
                    <MypageContentLayout>
                        <AboutMeLayout
                            {...result[0].data}
                            nickname={userInfo?.nickname}
                        />
                        <ScoreLayout coments={coments} />
                        <SubContentLayout {...result[0].data} />
                        <div className="review-btn">
                            <MainButton
                                width="100%"
                                clickListener={() => {
                                    setModalVisible(true);
                                }}
                            >
                                리뷰 남기기
                            </MainButton>
                        </div>
                        {/* <CommentLayout {...comment} reviewId={0} /> */}
                    </MypageContentLayout>
                </MypageLayoutContainer>
            ) : null}
        </>
    );
};

export default ProfilePageLayout;
