import QueryString from "qs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
    const location = useLocation();

    const [keyword, setKeyword] = useState<string | null>("");

    useEffect(() => {
        const queryData = QueryString.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        if (queryData.keyword) setKeyword(queryData.keyword.toString());
        else setKeyword("");
    }, [keyword, location]);

    return (
        <>
            <div>SearchPage {keyword ? keyword : ""} </div>
        </>
    );
};

export default Search;
