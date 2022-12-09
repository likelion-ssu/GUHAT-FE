import styled from "@emotion/styled";
import themes from "@styles/themes";

const SkillChipWrapper = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    border: 0px solid gray;
    background-color: ${themes.colors.blue_500};
    color: white;
    display: flex;
    font-size: 0.9rem;
    .tag {
        color: ${themes.colors.gray_100};
    }
`;

const SkillChip = ({ text }: { text: string }) => {
    return (
        <SkillChipWrapper>
            <p className="tag">#</p>

            {text}
        </SkillChipWrapper>
    );
};

export default SkillChip;
