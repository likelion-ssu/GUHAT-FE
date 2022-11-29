import SearchIcon from "@assets/Search.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RecomandKeywords from "./RecomandKeywords";
import { SearchInput, SearchWrap } from "./SearchBar.style";
import SearchResult from "./SearchResult";

const SearchBar = () => {
    const navigator = useNavigate();
    const [search, setSearch] = useState<string>("");
    const [searchResult, setSeachResult] = useState<string[] | null>([]);
    const [submitted, setSubmitted] = useState<boolean>(true);
    const [keywordList, setKeywordList] = useState<string[] | null>([
        "refaef",
        "efafefaf",
        "2qrwq",
        "909re0",
        "9w09r0e",
    ]);

    const searchKeyword = (search: string) => {
        //TODO 검색 API
        console.log("search", search);
        setSeachResult(
            [
                {
                    region: "Girardot",
                },
                {
                    region: "Tuguegarao",
                },
                {
                    region: "Betim",
                },
                {
                    region: "Novgorod",
                },
                {
                    region: "Norderstedt",
                },
            ]
                .map((r, i) => r.region)
                .concat([search])
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        console.log("submit", search);
    };

    const handleReset = () => {
        setSeachResult([]);
        setSubmitted(false);
        setSearch("");
        // this.search(this.state.searchKeyword);
    };

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (search.length <= 0 && submitted) {
            return handleReset();
        }
        setSearch(e.target.value);
        //TODO search API & Delay
        searchKeyword(e.target.value);
    };

    const moveToResultPage = (searchKeyword: string) => {
        setSearch(searchKeyword);
        setSubmitted(true);
        navigator(`/search?keyword=${searchKeyword}`);
    };

    return (
        <SearchWrap>
            {!submitted && search.length === 0 ? (
                <RecomandKeywords
                    keywords={[
                        "refaef",
                        "efafefaf",
                        "2qrwq",
                        "909re0",
                        "9w09r0e",
                    ]}
                />
            ) : null}
            {search.length !== 0 && !submitted ? (
                // <SearchResult list={searchResult ? searchResult : []} />
                <SearchResult
                    list={searchResult}
                    clickListener={moveToResultPage}
                />
            ) : null}
            <form
                onSubmit={(event) => handleSubmit(event)}
                onReset={() => handleReset()}
            >
                <SearchInput
                    value={search ? search : ""}
                    onChange={inputHandler}
                    onFocus={(e) => {
                        setSubmitted(false);
                    }}
                />
            </form>

            <img
                alt="검색"
                src={SearchIcon}
                onClick={() => (search ? moveToResultPage(search) : null)}
            />
        </SearchWrap>
    );
};

export default SearchBar;
