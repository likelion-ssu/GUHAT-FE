import {
    LectureItemDetail,
    LectureItemSubTitle,
    LectureItemTitle,
    LectureItemWrap,
    LectureMoreButton,
} from "./LectureItem.style";

interface Props {
    id: string | number;
    title: string;
    professor?: string[] | string;
    year: string;
    semester: string;
    time: string[] | string;
    place: string;
}

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
];
const LectureItem = ({ ...props }: Props) => {
    return (
        <LectureItemWrap>
            <LectureItemTitle>{props.title}</LectureItemTitle>
            <LectureItemSubTitle>{props.professor}</LectureItemSubTitle>
            <LectureItemDetail>
                {props.year}년도 {props.semester}
            </LectureItemDetail>
            <LectureItemDetail>
                {props.time} [ {props.place} ]
            </LectureItemDetail>
            <LectureMoreButton>더보기</LectureMoreButton>
        </LectureItemWrap>
    );
};

export default LectureItem;
