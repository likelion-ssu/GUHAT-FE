import {
    LectureItemDetail,
    LectureItemTitle,
    LectureItemWrap,
} from "./LectureItem.style";

interface Props {
    title: string;
    professor?: string;
}
const LectureItem = ({ title, professor }: Props) => {
    return (
        <LectureItemWrap>
            <LectureItemTitle>{title}</LectureItemTitle>
            <LectureItemDetail>{professor}</LectureItemDetail>
        </LectureItemWrap>
    );
};

export default LectureItem;
