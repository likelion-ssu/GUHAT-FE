import styled from "@emotion/styled";

export const MyPostingContainer = styled.div`
    width: calc(100% - 20vw);
    margin-top: 1rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow: scroll !important;
`;

export const MyPostingListWrapper = styled.div`
    max-width: calc(100%);
    display: flex;
    scrollbar-color: red;
    flex-direction: row;
    gap: 2rem;
    padding: 1rem;
`;
