import styled from "@emotion/styled";

export const LectureItemWrap = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: beige;
    border-radius: 1rem;

    :active {
        filter: brightness(0.9);
    }
`;

export const LectureItemTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
`;

export const LectureItemDetail = styled.p`
    color: darkgray;
`;
