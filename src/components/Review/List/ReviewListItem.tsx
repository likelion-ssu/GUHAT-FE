import fileIcon from "@/assets/file-icon.svg";
import thumbIcon from "@/assets/thumbUp.svg";
import viewIcon from "@/assets/viewCount.svg";
import { MyPostLecturenWrap } from "@/components/MyPost/Card/Myposting.style";
import { useNavigate } from "react-router-dom";
import { ReviewItemContainer } from "./ReviewListItem.style";

interface Props {
    isOwner?: boolean;
    id: number | string;
    title: string;
    year: string;
    semester: string;
    fileCnt: number | string;
    memberNum: number | string;
    reviewLevel: string;
    detail: string;
    createdAt: string;
    nickname: string;
    writerLevel: string | number;
    viewCnt: number | string;
    likeCnt: number | string;
}
const ReviewListItem = ({ ...props }: Props) => {
    const navigator = useNavigate();
    const onClickItem = () => {
        navigator("/review/" + props.id);
    };
    return (
        <ReviewItemContainer onClick={onClickItem}>
            <div className="title-wrapper content-wrapper">
                <p className="lecture-title bold"> {props.title}</p>
                <p>
                    {props.year}년도 {props.semester} 수강자
                </p>
                <div className="file-icon">
                    <img
                        className="file-icon"
                        src={fileIcon}
                        alt="파일아이콘"
                    />
                    <p> {props.fileCnt}</p>
                </div>
            </div>
            <div className="content-wrapper">
                <p>필요인원</p>
                <p className="bold">{props.memberNum}명</p>
                <p>난이도</p>
                <p className="bold">{props.reviewLevel}</p>
            </div>
            <div className="text-wrapper">{props.detail}</div>

            <div className="content-wrapper">
                <p>{props.createdAt}</p>
                <p className="bold">{props.nickname}</p>
                <p className="level">{props.writerLevel}</p>
            </div>
            <div className="count-wrapper">
                <MyPostLecturenWrap>
                    <img src={viewIcon} alt="조회수" />
                    <p>{props.viewCnt}</p>
                </MyPostLecturenWrap>
                <MyPostLecturenWrap>
                    <img src={thumbIcon} alt="좋아요" />
                    <p>{props.likeCnt}</p>
                </MyPostLecturenWrap>
            </div>
        </ReviewItemContainer>
    );
};

export default ReviewListItem;
