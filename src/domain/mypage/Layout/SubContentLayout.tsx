import SkillChip from "@/components/Chip/SkillChip";
import FileItem from "@/components/FileItem";
import styled from "@emotion/styled";
import TeamHistoryList from "../List/TeamHistoryList";
const SubContentLayoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: white;
    margin-left: calc(27rem);
    gap: 1rem;
    padding: 3rem;

    .content-label {
        font-weight: 700;
        margin-bottom: 1rem;
        font-size: 1.3rem;
    }
    .content-wrapper {
        width: calc(50% - 1rem);
        max-width: 50%;
    }
`;

const ChipLayout = styled.div`
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    gap: 0.8rem;
`;
const SubContentLayout = () => {
    const teamhistory = [
        {
            id: 1,
            endDate: "2022-08-09",
            title: "사용자 인터페이스 사람구함",
        },

        {
            id: 2,
            endDate: "2022-02-11",
            title: "창공 사람구함",
        },

        {
            id: 1,
            endDate: "2022-07-09",
            title: "사용자이터페이스 사람구함",
        },

        {
            id: 1,
            endDate: "2022-07-09",
            title: "사용자이터페이스 사람구함",
        },

        {
            id: 1,
            endDate: "2022-07-09",
            title: "사용자이터페이스 사람구함",
        },
    ];

    return (
        <SubContentLayoutContainer>
            <div className="content-wrapper">
                <h1 className="content-label">PORTFOLIO</h1>
                <FileItem file={1} />
                <FileItem />
            </div>
            <div className="content-wrapper">
                <h1 className="content-label">SKILL</h1>
                <ChipLayout>
                    {[1, 2, 3, 4, 5, 5, 6].map((i) => (
                        <SkillChip text={"리액트"} />
                    ))}
                </ChipLayout>
            </div>
            <div className="content-wrapper">
                <h1 className="content-label">TEAM HISTORY</h1>
                <TeamHistoryList list={teamhistory} />
            </div>
        </SubContentLayoutContainer>
    );
};

export default SubContentLayout;
