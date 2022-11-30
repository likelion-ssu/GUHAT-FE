import styled from "@emotion/styled";

export const SearchResultWrapper = styled.ul`
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
    #search-empty {
        font-size: 1.5rem;
        font-weight: 700;
    }
`;

export const SearchResultItem = styled.li`
    width: 100%;
    color: black;
    background-color: beige;
    padding: 1rem;

    :active {
        filter: brightness(0.9);
    }
`;
