import styled from "@emotion/styled";
const SearchWrap = styled.div`
    z-index: 10;
    background-color: white;
    border-radius: 20px;
    border: 1px solid black;
    position: absolute;
    display: flex;
    left: calc(7% + 10rem);
    transform: translate(calc(-7% -10rem));
    min-width: 40vw;

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
    background-color: transparent;
    padding: 1rem;
    width: 80%;
`;

export { SearchWrap, SearchInput };
