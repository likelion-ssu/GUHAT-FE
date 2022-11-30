import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const SearchResultWrapper = styled.ul`
    position: absolute;
    top: calc(5.5rem);
    min-width: calc(35vw);
    padding: 2rem;
    display: flex;
    flex-direction: column;

    background-color: white;

    #search-empty {
        font-size: 1rem;
        font-weight: 400;
    }
`;

export const SearchResultItem = styled.li`
    width: 100%;
    color: black;
    border-bottom: 1px solid ${themes.colors.gray_500};
    padding: 1.2rem;
    line-height: 100%;
    align-items: center;

    :active {
        filter: brightness(0.9);
    }
`;
