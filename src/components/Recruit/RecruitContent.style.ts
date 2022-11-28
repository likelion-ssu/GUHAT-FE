import styled from "@emotion/styled";

export const RecruitContentWrap = styled.div`
    position: relative;
    width: 100%;
    padding: 2.5rem;
    background-color: lightgray;
    border-radius: 0 0 1rem 1rem;
`;

export const RecruitContentChip = styled.div`
    position: absolute;
    top: -2.5rem;
    left: 50%;
    transform: translate(-50%);
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    background-color: gray;
`;

export const RecruitContentTitle = styled.p`
    font-weight: 700;
    font-size: 18px;
`;

export const RecruitContentDetail = styled.p`
    font-size: 12px;
    margin-top: 1rem;
    margin-bottom: 2rem;
    max-lines: 2;
`;

export const RecruitContentDDay = styled.p`
    position: absolute;
    font-size: 1.6rem;
    font-weight: 700;
    right: 2.5rem;
    bottom: calc(2rem + 0.4rem);
`;
