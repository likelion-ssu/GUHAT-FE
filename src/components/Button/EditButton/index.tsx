import Edit from "@assets/edit.svg";
import styled from "@emotion/styled";
export const EditBtnContainer = styled.button`
    border: 1px solid black;
    color: black;
    border-radius: 0.6rem;
    padding: 0.3rem 0.5rem;
    font-size: 0.9rem;
    img {
        margin-left: 0.3rem;
        width: 1rem;
    }
    :hover,
    :active {
        background-color: black;
        color: white;

        img {
            filter: brightness(0) saturate(100%) invert(100%) sepia(0%)
                saturate(0%) hue-rotate(131deg) brightness(105%) contrast(102%);
        }
    }
    :active {
        filter: brightness(0.8);
    }
`;

const EditButton = ({ clickListener }: { clickListener?: () => void }) => {
    return (
        <EditBtnContainer>
            수정하기
            <img src={Edit} onClick={clickListener} />
        </EditBtnContainer>
    );
};

export default EditButton;
