import styled from "@emotion/styled";
import SearchIcon from "../../assets/Search.svg"

const HeaderWrap = styled.header`
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
    align-items: center;
    z-index: 100;
    margin: 0 0 0 -2.4rem;
    background-color: lightblue;
    padding: 0 2.4rem;
    width: calc(100% + 2.4rem);
    height: 5.6rem;
`;

const Title = styled.div`
    width: 10rem;
    position: absolute;
    left: 7%;
    transform: translate(-7%);
    margin: 0 auto;
    font-size: 2rem;
    font-weight: 600;
`;

const SearchWrap = styled.div`
    background-color: white;
    border-radius: 20px;
    border: 1px solid black;
    position: absolute;
    display: flex;
    left: calc(7% + 10rem);
    transform: translate(calc(-7% -10rem));

    img {
        height: 100%;
        src: SearchIcon;
    }
`;

const SearchInput = styled.input`
    background-color: transparent;
    padding: 1rem;
    width: 50%;
`;

export { HeaderWrap, Title, SearchWrap, SearchInput };
