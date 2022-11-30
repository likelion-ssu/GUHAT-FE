import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const RecomandkeywordsWrapper = styled.div`
    z-index: -1;
    position: absolute;
    top: calc(5.5rem);
    min-width: calc(35vw);
    display: flex;
    flex-direction: column;
    background-color: white;

    h1 {
        padding-left: 2rem;
        padding-top: 2rem;
        width: 100%;
        font-weight: 500;
        font-size: 1rem;
        color: ${themes.colors.gray_900};
    }
    hr {
        margin-top: 1rem;
        height: 2px;
    }
    .close-btn {
        width: 100%;
        text-align: right;
        align-items: center;
        padding: 1rem;
    }
`;

export const RecomandkeywordList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1.5rem 2rem;
`;
