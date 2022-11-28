import styled from "@emotion/styled";
export const ReviewWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 22vw;
    border-radius: 1rem;
    background-color: #f4f4f4;
    padding: 2rem;

    :active {
        filter: brightness(0.8);
    }
`;

export const ReviewTitle = styled.p`
    font-weight: 700;
    font-size: 1.8rem;
    align-items: center;
    margin: 1rem;
`;

export const ReviewContent = styled.p`
    font-weight: 400;
    font-size: 1.2rem;
    align-items: center;
    margin: 1rem;
    max-lines: 2;
    color: #9a9a9a;
`;

export const ReviewIconContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: flex-end;
    gap: 1rem;
`;

export const ReviewIconWrap = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.3rem;
    img {
        width: 1.5rem;
    }
    p {
        font-size: 1.2rem;
    }
`;
