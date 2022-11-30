import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useResults } from "../../apis/search/index";

import RecomandKeywords from "./RecomandKeywords";
import { SearchInput, SearchWrap } from "./SearchBar.style";
import SearchResult from "./SearchResult";

import { debounce } from "@/util/debounce";
import SearchIcon from "@assets/Search.svg";

const SearchBar = () => {
    const navigator = useNavigate();
    const inputRef: React.RefObject<HTMLDivElement> = useRef(null);

    const [search, setSearch] = useState<string>("");
    const [searchResult, setSeachResult] = useState<string[] | null>([]);
    const [submitted, setSubmitted] = useState<boolean>(true);
    const [keywordList, setKeywordList] = useState<string[]>([
        "refaef",
        "efafefaf",
        "2qrwq",
        "909re0",
        "9w09r0e",
    ]);

    const { status, data } = useResults(search);

    useEffect(() => {
        document.addEventListener("mousedown", clickInputOutside);

        return () => {
            document.removeEventListener("mousedown", clickInputOutside);
        };
    });

    const clickInputOutside = (event: any) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setSubmitted(true);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        moveToResultPage(search);
        console.log("submit", search);
    };

    const handleReset = () => {
        setSeachResult([]);
        setSubmitted(false);
        setSearch("");
        // this.search(this.state.searchKeyword);
    };

    const inputHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            if (e.target.value.length <= 0 && submitted) {
                return handleReset();
            }
            debounce(setSearch(e.target.value), 2000);
            //TODO search API & Delay
        },
        [search]
    );

    const moveToResultPage = (searchKeyword: string) => {
        setSearch(searchKeyword);
        setSubmitted(true);
        navigator(`/search?keyword=${searchKeyword}`);
    };

    const getDataByStatus = () => {
        switch (status) {
            case "loading":
                return <div>Loading</div>;
            case "error":
                return <span>Error: {status}</span>;
            default: {
                return (
                    <>
                        {search.length !== 0 && !submitted ? (
                            <SearchResult
                                list={data}
                                clickListener={moveToResultPage}
                            />
                        ) : null}
                    </>
                );
            }
        }
    };

    return (
        <SearchWrap ref={inputRef}>
            {!submitted && search.length === 0 ? (
                <RecomandKeywords
                    keywords={keywordList}
                    clickListener={(keyword) => {
                        moveToResultPage(keyword);
                    }}
                />
            ) : null}
            {data ? getDataByStatus() : null}
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
