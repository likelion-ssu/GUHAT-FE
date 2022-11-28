import styled from "@emotion/styled";

export const ProgressContainer = styled.div`
    position: relative;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;
    height: calc(10px + 4rem);
`;
export const ProgressWrap = styled.div`
    height: 10px;
    background-color: grey;
    border-radius: 10px;
`;

export const Progress = styled.div<{ progress: number }>`
    width: ${({ progress }) => `${progress}%`};
    height: 100%;
    background-color: black;
    border-radius: 10px;
`;

export const ProgressText = styled.p`
    position: absolute;
    right: 0;
    margin-top: 0.5rem;
`;
