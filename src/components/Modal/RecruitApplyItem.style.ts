import styled from "@emotion/styled";
import themes from "@styles/themes";

export const RecruitApplyItemContainer = styled.button`
    display: flex;
    width: 100%;
    padding: 1rem;
    background-color: white;
    border-radius: 0.5rem;
    align-items: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    :hover {
        //border: 2px solid #374765;
        //color: white !important;
        transform: scale(1.1);
    }
`;

export const RecruitApplyImg = styled.div`
    min-width: 3.5rem;
    min-height: 3.5rem;
    border-radius: 5rem;
    background-color: ${themes.colors.gray_500};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 2rem;
`;

export const RecruitApplyItemWrap = styled.div`
    display: flex;
    min-height: 4rem;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    text-align: left;
    font-weight: 300;
    color: ${themes.colors.gray_700};
    padding: 0.5rem 0;
    font-size: 0.6rem;
    .apply-nickname {
        font-weight: 500;
        font-size: 1.2rem;
        color: black;
    }
`;
