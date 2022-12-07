import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useKeywordResults } from "../../apis/search/keyword/index";

import RecomandKeywords from "./RecomandKeywords";
import {
    SearchInput,
    SearchKeyword,
    SearchKeywordOption,
    SearchWrap,
} from "./SearchBar.style";
import SearchResult from "./SearchResult";

import { debounce } from "@/util/debounce";
import SearchIcon from "@assets/Search.svg";

const SearchBar = () => {
    const navigator = useNavigate();
    const inputRef: React.RefObject<HTMLDivElement> = useRef(null);

    const options = ["수업명", "교수님", "스택"];

    const [active, setActive] = useState(false);
    const [option, setOption] = useState(options[0]);

    const [search, setSearch] = useState<string>("");
    const [apiQuery, setApiQuery] = useState<string>("");
    const [searchResult, setSeachResult] = useState<string[] | null>([]);
    const [submitted, setSubmitted] = useState<boolean>(true);
    const [keywordList, setKeywordList] = useState<string[]>([
        "refaef",
        "efafefaf",
        "2qrwq",
        "909re0",
        "9w09r0e",
    ]);

    const { status, data } = useKeywordResults(apiQuery);

    useEffect(() => {
        document.addEventListener("mousedown", clickInputOutside);

        return () => {
            document.removeEventListener("mousedown", clickInputOutside);
        };
    });

    const clickInputOutside = (event: any) => {
        if (inputRef.current && !inputRef.current.contains(event.target)) {
            setSubmitted(true);
            setActive(false);
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
                                keyword={search}
                                clickListener={moveToResultPage}
                                closeListener={() => {
                                    setSubmitted(true);
                                }}
                            />
                        ) : null}
                    </>
                );
            }
        }
    };

    return (
        <>
            <SearchKeyword
                active={active}
                onClick={() => {
                    setActive((prev) => !prev);
                }}
            >
                {option}
            </SearchKeyword>
            {active ? (
                <SearchKeywordOption>
                    {options.map((op, index) => {
                        return (
                            <li
                                onClick={(e: any) => {
                                    setActive((prev) => !prev);
                                    setOption(e.target.innerText);
                                }}
                            >
                                {op}
                            </li>
                        );
                    })}{" "}
                </SearchKeywordOption>
            ) : null}

            <SearchWrap isFocused={!submitted} ref={inputRef}>
                {!submitted && search.length === 0 ? (
                    <RecomandKeywords
                        keywords={keywordList}
                        clickListener={(keyword) => {
                            moveToResultPage(keyword);
                        }}
                        closeListener={() => {
                            setSubmitted(true);
                        }}
                    />
                ) : null}
                {data ? getDataByStatus() : null}

                <form
                    style={{ width: "100%", position: "relative" }}
                    onSubmit={(event) => handleSubmit(event)}
                    onReset={() => handleReset()}
                >
                    <SearchInput
                        placeholder="Search"
                        value={search ? search : ""}
                        onChange={inputHandler}
                        onFocus={(e) => {
                            setSubmitted(false);
                        }}
                    />
                </form>

                <img
                    alt="검색"
                    className="header-search"
                    src={SearchIcon}
                    onClick={() => (search ? moveToResultPage(search) : null)}
                />
            </SearchWrap>
        </>
    );
};

export default SearchBar;
