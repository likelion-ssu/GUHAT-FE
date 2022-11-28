import SearchIcon from "@assets/Search.svg";

import { useState } from "react";
import { SearchInput, SearchWrap } from "./SearchBar.style";

const SearchBar = () => {
    const [search, setSearch] = useState<string | undefined | null>("");
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const onClickSearch = () => {
        //TODO 검색 API
        setSearch("");
    };
    return (
        <SearchWrap>
            <SearchInput value={search ? search : ""} onChange={inputHandler} />
            <img alt="검색" src={SearchIcon} onClick={() => onClickSearch()} />
        </SearchWrap>
    );
};

export default SearchBar;
