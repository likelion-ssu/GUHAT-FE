import styled from "@emotion/styled";

export const RecruitWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 21vw;
    border-radius: 1rem;
    background-color: #f4f4f4;
    padding-top: 4rem;
    margin-top: 4rem;

    :active {
        filter: brightness(0.8);
    }
`;

export const RecruitLectureTitle = styled.p`
    font-weight: 700;
    font-size: 1.8rem;
    text-align: center;
    align-items: center;
    margin: 1rem;
`;

export const RecruitSubTitle = styled.p`
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
    align-items: center;
    color: #9a9a9a;
`;

export const RecruitViewCount = styled.p`
    font-weight: 700;
    text-align: center;
    align-items: center;
    color: #c4b8b8;
`;
