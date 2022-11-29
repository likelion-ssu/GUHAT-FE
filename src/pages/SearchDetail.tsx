import SearchLectureLayout from "@/domain/search/Layout/SearchLectureLayout";
import MainLayout from "@components/Layout/MainLayout";
import { useParams } from "react-router-dom";

const SearchDetail = () => {
    const { keyword } = useParams();
    return (
        <MainLayout>
            <SearchLectureLayout
                lectureName={keyword ? keyword : "검색결과 없음"}
            />
        </MainLayout>
    );
};

export default SearchDetail;
