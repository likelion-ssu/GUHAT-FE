import styled from "@emotion/styled";

export const LoadingContainer = styled.div`
    z-index: 100;
    position: fixed;
    top: 0;
    background-color: black;
    width: 100%;
    height: 100%;
    overflow: hidden !important;
    opacity: 0.6;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-weight: 500;
        font-size: 2rem;
        color: white;
    }
`;
