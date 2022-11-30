import styled from "@emotion/styled";

export const RecomandkeywordsWrapper = styled.div`
    z-index: -1;
    position: absolute;
    top: calc(3.3rem);
    min-width: calc(40vw - 3rem);
    padding: 2rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: white;
    border: 1px solid black;

    h1 {
        width: 100%;
        font-weight: 700;
        font-size: 1.8rem;
    }
`;

export const RecomandkeywordList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
`;
