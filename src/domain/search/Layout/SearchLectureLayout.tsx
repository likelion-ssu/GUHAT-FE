import { useLectureResults } from "@apis/search/lecture/index";
import SearchIcon from "@assets/Search.svg";
import LectureItem from "@components/Lecture/LectureItem";
import {
    ResultItemListWrapper,
    ResultTitleWrap,
} from "./SeachResultLayout.style";

interface Props {
    lectureName: string;
}

const SearchLectureLayout = ({ lectureName }: Props) => {
    const { status, data } = useLectureResults(
        new Date().getMinutes().toString()
    );
    const faker = [
        { title: "현성서", professor: "유유유" },
        { title: "현성서", professor: "유유유" },
        { title: "현성서", professor: "유유유" },
        { title: "현성서", professor: "유유유" },
        { title: "현성서", professor: "유유유" },
        { title: "현성서", professor: "유유유" },
        { title: "현성서", professor: "유유유" },
        { title: "현성서", professor: "유유유" },
    ];
    const getFetchData = () => {
        switch (status) {
            case "loading":
                return <div>Loading</div>;
            case "error":
                return <span>Error: {status}</span>;
            default: {
                return (
                    <>
                        <ResultItemListWrapper>
                            <ResultTitleWrap>
                                <img src={SearchIcon} alt="검색" />
                                <p className="keyword"> "{lectureName}"</p>
                                <p>에 대한 검색 결과</p>
                            </ResultTitleWrap>
                            {faker.map((item, idx) => {
                                return (
                                    <LectureItem
                                        title={item.title}
                                        professor={item.professor}
                                    />
                                );
                            })}
                        </ResultItemListWrapper>
                    </>
                );
            }
        }
    };

    return <>{getFetchData()}</>;
};

export default SearchLectureLayout;
