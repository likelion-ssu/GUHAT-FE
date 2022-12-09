import AboutMeLayout from "./AboutMeLayout";
import { MypageLayoutContainer } from "./MypageLayout.style";
import ScoreLayout from "./ScoreLayout";
import SidebarLayout from "./SidebarLayout";
import SubContentLayout from "./SubContentLayout";
const MypageLayout = () => {
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
    return (
        <MypageLayoutContainer>
            <SidebarLayout />
            <AboutMeLayout />
            <ScoreLayout coments={coments} />
            <SubContentLayout />
        </MypageLayoutContainer>
    );
};

export default MypageLayout;
