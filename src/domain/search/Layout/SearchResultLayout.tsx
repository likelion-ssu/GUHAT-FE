import { useLectureResults } from "@/apis/search/lecture";
import LectureItem from "@/components/Lecture/LectureItem";
import SearchResultTab from "@/components/Tab/SearchResultTab/SearchResultTab";
import { errorState, loadingState } from "@/storage/recoil/loadingState";
import SearchIcon from "@assets/Search.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
    ResultContainer,
    ResultItemListWrapper,
    ResultMoreButton,
    ResultTitleWrap,
} from "./SeachResultLayout.style";

interface Props {
    keyword: string;
    option: string;
}

const SearchResultLayout = ({ keyword, option }: Props) => {
    const navigator = useNavigate();
    const [loading, setLoading] = useRecoilState(loadingState);
    const [error, setError] = useRecoilState(errorState);
    const { status, data } = useLectureResults(
        new Date().getMinutes().toString()
    );
    const faker = [
        {
            id: 1, // 과목id
            title: "수업이름",
            professor: ["교수명"],
            year: "2022",
            semester: "2학기",
            time: "월 수 10:30",
            place: "진리관",
        },
        {
            id: 1, // 과목id
            title: "수업이름",
            professor: ["교수명"],
            year: "2022",
            semester: "2학기",
            time: "월 수 10:30",
            place: "진리관",
        },
        {
            id: 1, // 과목id
            title: "수업이름",
            professor: ["교수명"],
            year: "2022",
            semester: "2학기",
            time: "월 수 10:30",
            place: "진리관",
        },
        {
            id: 1, // 과목id
            title: "수업이름",
            professor: ["교수명"],
            year: "2022",
            semester: "2학기",
            time: "월 수 10:30",
            place: "진리관",
        },
        {
            id: 1, // 과목id
            title: "수업이름",
            professor: ["교수명"],
            year: "2022",
            semester: "2학기",
            time: "월 수 10:30",
            place: "진리관",
        },
        {
            id: 1, // 과목id
            title: "수업이름",
            professor: ["교수명"],
            year: "2022",
            semester: "2학기",
            time: "월 수 10:30",
            place: "진리관",
        },
        {
            id: 1, // 과목id
            title: "수업이름",
            professor: ["교수명"],
            year: "2022",
            semester: "2학기",
            time: "월 수 10:30",
            place: "진리관",
        },
    ];

    useEffect(() => {
        getFetchData();
    }, []);

    const getFetchData = () => {
        if (status === "loading") {
            setLoading(true);
        } else if (status === "error") {
            setError(status);
        } else {
            setLoading(false);
        }
    };
    const moveToLectureDetail = () => {
        console.log("moving here");
        navigator(`/search/lecture?keyword=${keyword}`);
    };

    return (
        <>
            <ResultContainer>
                <ResultTitleWrap>
                    <img src={SearchIcon} alt="검색" />
                    <p> {option} </p>
                    <p className="keyword"> "{keyword}"</p>
                    <p> 에 대한 검색 결과</p>
                </ResultTitleWrap>
                <SearchResultTab title={"수업명"} count={faker.length} />
                <ResultItemListWrapper>
                    {faker.slice(0, 6).map((item, index) => {
                        return (
                            <LectureItem
                                {...item}
                                clickListener={() => {
                                    alert("click");
                                    navigator("/lecture/" + item.id);
                                }}
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
