import styled from "@emotion/styled";

export const SearchResultWrapper = styled.ul`
    position: absolute;
    top: calc(6rem);
    min-width: calc(35vw);
    padding: 2rem;
    padding-bottom: 0;
    flex-direction: column;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
        rgba(0, 0, 0, 0.22) 0px 10px 10px;

    #search-empty {
        font-size: 1.2rem;
        font-weight: 400;
    }
    hr {
        margin-top: 1rem;
        height: 2px;
        background-color: #d9d9d9;
    }
    .close-btn {
        width: 100%;
        text-align: right;
        align-items: center;
        padding: 1rem;
        color: #999999;
    }
`;

export const SearchResultItem = styled.li`
    position: relative;
    list-style: none;
    display: inline-block;
    width: 100%;
    display: flex;
    color: black;
    padding: 1.5rem;
    margin: 0;
    line-height: 100%;
    align-items: center;
    font-size: 1.5rem;
    justify-content: flex-start;

    #search-icon {
        position: absolute;
        left: 0;
        width: 3rem;
        height: 1.5rem;
    }
    .result-item {
        position: absolute;
        left: 4rem;
    }
    .search-key {
        font-weight: bold;
    }

    :active {
        filter: brightness(0.9);
    }
`;
