import styled from "@emotion/styled";

export const MyPostingContainer = styled.div`
    width: calc(100%);
    overflow: hidden;
    margin-top: 3rem;
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const MyPostingListWrapper = styled.div`
    max-width: calc(100%);
    overflow-x: scroll !important;
    display: flex;
    scrollbar-color: red;
    flex-direction: row;
    gap: 1rem;
    padding-right: 1rem;
`;
