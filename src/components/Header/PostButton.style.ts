import styled from "@emotion/styled";
import themes from "@styles/themes";

export const PostBtnWrap = styled.button`
    background: linear-gradient(103.01deg, #0f3472 12.26%, #303644 59.38%);
    color: ${themes.colors.gray_100};
    border-radius: 20px;
    border: 1px solid black;
    display: flex;
    width: 70%;
    justify-content: center;
    align-items: center;
    padding: 0.9rem 1.6rem;
    gap: 0.5rem;
    margin: 0.25rem;

    p {
        line-height: 100%;
        text-align: center;
        font-size: 1.3rem;
    }

    img {
        height: 1.2rem;
    }

    :active {
        filter: brightness(0.8);
    }
`;
