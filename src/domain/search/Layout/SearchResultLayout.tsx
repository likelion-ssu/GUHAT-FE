import LectureItem from "@/components/Lecture/LectureItem";
import SearchResultTab from "@/components/Tab/SearchResultTab/SearchResultTab";
import SearchIcon from "@assets/Search.svg";
import { useNavigate } from "react-router-dom";
import {
    ResultContainer,
    ResultItemListWrapper,
    ResultMoreButton,
    ResultTitleWrap,
} from "./SeachResultLayout.style";

interface Props {
    keyword: string;
}

const SearchResultLayout = ({ keyword }: Props) => {
    const navigator = useNavigate();
    const lectures = [
        { title: "현성서", professor: "유유유" },
        { title: "현성서", professor: "유유유" },
    ];

    const moveToLectureDetail = () => {
        navigator(`/search/${keyword}`);
    };

    return (
        <>
            <ResultContainer>
                <ResultTitleWrap>
                    <img src={SearchIcon} alt="검색" />
                    <p className="keyword"> "{keyword}"</p>
                    <p>에 대한 검색 결과</p>
                </ResultTitleWrap>
                <SearchResultTab title={"수업명"} count={21} />
                <ResultItemListWrapper>
                    {lectures.map((lecture, idx) => {
                        return (
                            <LectureItem
                                title={lecture.title}
                                professor={lecture.professor}
                            />
                        );
                    })}
                    <ResultMoreButton
                        onClick={() => {
                            moveToLectureDetail();
                        }}
                    >
                        더보기
                    </ResultMoreButton>
                </ResultItemListWrapper>
                <SearchResultTab title={"프로필"} count={2} />
            </ResultContainer>
        </>
    );
};

export default SearchResultLayout;
