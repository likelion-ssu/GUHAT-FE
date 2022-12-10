import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import AboutMeLayout from "./Layout/AboutMeLayout";
import LectureHistoryLayout from "./Layout/LectureHistoryLayout";
import ReviewHistoryLayout from "./Layout/ReviewHistoryLayout";
import ScoreLayout from "./Layout/ScoreLayout";
import SidebarLayout from "./Layout/SidebarLayout";
import SubContentLayout from "./Layout/SubContentLayout";
import { MypageLayoutContainer } from "./MypageLayout.style";
const MypageLayout = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    useEffect(() => {
        setLoading(false);
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

    const introduction = {
        nickname: "효민효민",
        introduction: "이게 왜 안됨",
        detail: ` 안앞이 우는 길지 거선의 트고, 그리하였는가? 두손을 스며들어
        이성은 몸이 속에서 놀이 철환하였는가? 날카로우나 보이는
        군영과 위하여서, 원대하고, 바이며, 이것이다. 전인 아니더면,
        그들은 미인을 있는가? 사랑의 대한 품으며, 행복스럽고 가장
        사막이다. 살 꾸며 생생하며, 유소년에게서 그들은
        소리다.이것은 되려니와, 풍부하게 인생을 것이다.`,
    };

    const profile = {
        nickname: "Guhat",
        level: "1",
        year: "2022",
        semester: "2022",
        major: "IT대학",
    };

    const [tab, setTab] = useState("main");

    const getTabPage = () => {
        switch (tab) {
            case "main":
                return (
                    <>
                        <AboutMeLayout {...introduction} />
                        <ScoreLayout coments={coments} />
                        <SubContentLayout />
                    </>
                );
            case "review":
                return <ReviewHistoryLayout />;

            case "recruit":
                return <LectureHistoryLayout />;

            default:
                return (
                    <>
                        <AboutMeLayout {...introduction} />
                        <ScoreLayout coments={coments} />
                        <SubContentLayout />
                    </>
                );
        }
    };

    return (
        <MypageLayoutContainer>
            <SidebarLayout profile={profile} tabController={setTab} />
            {getTabPage()}
        </MypageLayoutContainer>
    );
};

export default MypageLayout;
