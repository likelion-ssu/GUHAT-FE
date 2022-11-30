import commentIcon from "../../../assets/comment.svg";
import thumbIcon from "../../../assets/thumbUp.svg";
import {
    MyPostContent,
    MyPostIconContainer,
    MyPostingBgImg,
    MyPosTitle,
    MyPostLecturenWrap,
    MyPostWrap,
} from "./Myposting.style";
import Profile from "./Profile";

interface Props {
    title: string;
    file?: string[];
    likeCount?: number | null;
    commentCount?: number | null;
}
const Myposting = ({ title, file, likeCount, commentCount }: Props) => {
    return (
        <MyPostWrap>
            <MyPosTitle>{title}</MyPosTitle>
            <MyPostLecturenWrap>
                <p>사용자 인터페이스 및 실습 / </p>
                <p>최지웅</p>
            </MyPostLecturenWrap>
            <MyPostContent>
                {"안녕하세요. 저는 나랏말싸미 듕귁에 달아 물자와로 서로 사맛디 아니할쎄 내 이를 어녀삐녀겨 새로 스물 여덟 글..." +
                    "안녕하세요. 저는 나랏말싸미 듕귁에 달아 물자와로 서로 사맛디 아니할쎄 내 이를 어녀삐녀겨 새로 스물 여덟 글..."}
            </MyPostContent>
            <MyPostIconContainer>
                <MyPostLecturenWrap>
                    <img src={thumbIcon} alt="좋아요" />
                    <p>{likeCount ? likeCount : 0}</p>
                </MyPostLecturenWrap>
                <MyPostLecturenWrap>
                    <img src={commentIcon} alt="댓글" />
                    <p>{commentCount ? commentCount : 0}</p>
                </MyPostLecturenWrap>
            </MyPostIconContainer>
            <Profile level="LV2" nickname="닉네임" />
            <MyPostingBgImg type="elective" />
        </MyPostWrap>
    );
};

export default Myposting;
