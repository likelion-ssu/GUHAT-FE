import MainLayout from "@/components/Layout/MainLayout";
import SearchLectureLayout from "@/domain/search/Layout/SearchLectureLayout";
import QueryString from "qs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchDetail = () => {
    const location = useLocation();
    const [keyword, setKeyword] = useState("");
    useEffect(() => {
        const queryData = QueryString.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        if (queryData.keyword) setKeyword(queryData.keyword.toString());
        else setKeyword("");
    }, [keyword, location]);
    useEffect(() => {}, [keyword]);
    return (
        <MainLayout>
            <SearchLectureLayout
                lectureName={keyword ? keyword : "검색결과 없음"}
            />
        </MainLayout>
    );
};

export default SearchDetail;
