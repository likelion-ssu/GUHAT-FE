import styled from "@emotion/styled";

export const ResultContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ResultTitleWrap = styled.div`
    width: 100%;
    display: flex;
    font-size: 2rem;
    padding: 5rem;
    img {
        width: 4rem;
    }
    .keyword {
        font-weight: 700;
    }
`;

export const ResultItemListWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding: 1rem 5rem;
`;

export const ResultMoreButton = styled.button`
    width: 100%;
    text-align: right;
    font-weight: 700;

    :active {
        text-decoration: underline;
    }
`;
