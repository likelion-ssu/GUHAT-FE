import { errorState, loadingState } from "@/storage/recoil/loadingState";
import { useLectureResults } from "@apis/search/lecture/index";
import SearchIcon from "@assets/Search.svg";
import LectureItem from "@components/Lecture/LectureItem";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
    ResultItemContentWrapper,
    ResultItemListWrapper,
    ResultTitleWrap,
} from "./SeachResultLayout.style";

interface Props {
    lectureName: string;
}

const SearchLectureLayout = ({ lectureName }: Props) => {
    
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

    return (
        <>
            <ResultItemListWrapper>
                <ResultTitleWrap>
                    <img src={SearchIcon} alt="검색" />
                    <p className="keyword"> "{lectureName}"</p>
                    <p>에 대한 검색 결과</p>
                </ResultTitleWrap>
                <ResultItemContentWrapper>
                    {faker.map((item, idx) => {
                        return <LectureItem {...item} />;
                    })}
                </ResultItemContentWrapper>
            </ResultItemListWrapper>
        </>
    );
};

export default SearchLectureLayout;
