import EditButton from "@/components/Button/EditButton";
import SkillChip from "@/components/Chip/SkillChip";
import FileItem from "@/components/FileItem";
import styled from "@emotion/styled";
import { useState } from "react";
import PersonalityList from "../List/PersonalityList";
import TeamHistoryList from "../List/TeamHistoryList";
const SubContentLayoutContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: white;
    margin-left: calc(22rem);
    gap: 2rem 1rem;
    padding: 3rem;
    margin-top: 2rem;
    margin-bottom: 5rem;

    .content-label {
        font-weight: 700;
        margin-bottom: 2rem;
        font-size: 1.3rem;
        margin-top: 2rem;
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

const PortfolioListcontainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0;
    max-height: 20rem;
    overflow-y: auto;
    position: relative;
    .file-content-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0;
        gap: 1rem;
    }
`;

const EditWrapper = styled.div`
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 2.4rem !important;
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

    const [personality, setPersonality] = useState([1, 2, 0]);
    const onClickPersonality = (progress: number, index: number) => {
        const newArray = [...personality];
        newArray[index] = progress;
        setPersonality(newArray);
    };

    return (
        <SubContentLayoutContainer>
            <EditWrapper>
                <EditButton />
            </EditWrapper>

            <div className="content-wrapper">
                <h1 className="content-label">PORTFOLIO</h1>
                <PortfolioListcontainer>
                    <div className="file-content-wrapper">
                        <FileItem file={1} />
                        <FileItem file={1} />
                        <FileItem file={1} />
                        <FileItem />
                    </div>
                </PortfolioListcontainer>
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
            <div className="content-wrapper">
                <h1 className="content-label">Personality</h1>
                <PersonalityList
                    progress={personality[0]}
                    option={["안전추구형", "모험추구형"]}
                    clickListener={(p) => {
                        onClickPersonality(p, 0);
                    }}
                />
                <PersonalityList
                    progress={personality[1]}
                    option={["업무중심형", "관계중심형"]}
                    clickListener={(p) => {
                        onClickPersonality(p, 1);
                    }}
                />
                <PersonalityList
                    progress={personality[2]}
                    option={["리더형", "팔로워형"]}
                    clickListener={(p) => {
                        onClickPersonality(p, 2);
                    }}
                />
            </div>
        </SubContentLayoutContainer>
    );
};

export default SubContentLayout;
