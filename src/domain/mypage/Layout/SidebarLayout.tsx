import themes from "@/styles/themes";
import styled from "@emotion/styled";
import IconList from "../../../assets/profile_my_work.png";
import IconReview from "../../../assets/profile_review_icon.png";
import MyProfile from "./Myprofile";

const SidebarLayoutContainer = styled.div`
    position: absolute;
    left: 10%;
    background: ${themes.colors.black_500};
    min-height: 60vh;
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    padding: 6rem 0rem;

    .sub-label {
        width: 100%;
        padding-right: 3rem;
        background: none;
        display: flex;
        justify-content: right;
        color: white;
        gap: 0.5rem;
        margin-top: 1rem;
        font-size: 1.1rem;
    }
`;

const SidebarLabel = styled.div`
    margin-top: 8rem;
    margin-bottom: 1rem;
    background: rgba(230, 230, 238, 0.1);
    width: 100%;
    padding: 1.5rem;
    color: white;
`;

const SidebarLayout = () => {
    const profile = {
        nickname: "Guhat",
        level: "1",
        year: "2022",
        semester: "2022",
        major: "IT대학",
    };
    return (
        <SidebarLayoutContainer>
            <div style={{ padding: "0rem 2rem", width: "90%" }}>
                <MyProfile {...profile} />
            </div>
            <SidebarLabel>참여이력</SidebarLabel>

            <div className="sub-label">
                <img src={IconReview} alt="내팀플"></img>강의팀플
            </div>

            <div className="sub-label">
                <img src={IconList} alt="리뷰아이콘"></img>팀플리뷰
            </div>
            <SidebarLabel>참여이력</SidebarLabel>
        </SidebarLayoutContainer>
    );
};

export default SidebarLayout;
