import { SearchResultItem, SearchResultWrapper } from "./SearchResult.style";
interface Props {
    list: string[] | null;
    clickListener: (keyword: string) => void;
}
const SearchResult = ({ list, clickListener }: Props) => {
    return (
        <SearchResultWrapper>
            {list && list.length > 0 ? (
                list.map((result, idx) => {
                    return (
                        <SearchResultItem
                            key={result}
                            onClick={() => {
                                clickListener(result);
                            }}
                        >
                            {result}
                        </SearchResultItem>
                    );
                })
            ) : (
                <li id="search-empty">검색결과 없음</li>
            )}
        </SearchResultWrapper>
    );
};

export default SearchResult;
