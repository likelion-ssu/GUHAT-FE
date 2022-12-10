import RecruitListItem from "@/components/Recruit/List/RecruitListItem";
import styled from "@emotion/styled";
const RecruitContainer = styled.div`
    width: 100%;
    position: relative;
    border-radius: 1rem;
    margin-top: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 6rem;
`;

const RecruitListLayout = ({ list }: { list: any[] }) => {
    return (
        <RecruitContainer>
            {list.map((item) => (
                <RecruitListItem {...item} />
            ))}
        </RecruitContainer>
    );
};

export default RecruitListLayout;
