import styled from "@emotion/styled";
import themes from "@styles/themes";

const SearchWrap = styled.div<{ isFocused?: boolean }>`
    z-index: 10;
    background-color: ${(props) =>
        props.isFocused ? themes.colors.gray_300 : "white"};
    border-radius: 12px;
    border: 1px solid ${themes.colors.gray_500};
    position: absolute;
    display: flex;
    left: calc(8rem + 6rem);
    transform: translate(calc(8rem + 6rem));
    min-width: 35vw;

    img {
        z-index: 10;
        width: 10%;
        height: 2.2rem;
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translate(1rem, -50%);
        margin: 0 auto;
    }
    img:active {
        filter: brightness(0.8);
    }
`;

const SearchInput = styled.input`
    z-index: 20;
    background-color: transparent;
    padding: 1rem 2rem;
    width: 80%;
`;

export { SearchWrap, SearchInput };
