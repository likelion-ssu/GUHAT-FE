import commentIcon from "../../../assets/comment.svg";
import ImgIcon from "../../../assets/ImageIcon.svg";
import thumbIcon from "../../../assets/thumbUp.svg";
import Profile from "./Profile";
import {
    ReviewContent,
    ReviewIconContainer,
    ReviewIconWrap,
    ReviewTitle,
    ReviewWrap,
} from "./Review.style";

interface Props {
    title: string;
    file?: string[];
    likeCount?: number | null;
    commentCount?: number | null;
}

const Review = ({ title, file, likeCount, commentCount }: Props) => {
    return (
        <ReviewWrap>
            <ReviewTitle>{title}</ReviewTitle>
            <ReviewIconWrap style={{ margin: "1rem" }}>
                <img src={ImgIcon} alt="좋아요" />
                <p>{file ? file.length : 0}</p>
            </ReviewIconWrap>
            <ReviewContent>
                {
                    "안녕하세요. 저는 나랏말싸미 듕귁에 달아 물자와로 서로 사맛디 아니할쎄 내 이를 어녀삐녀겨 새로 스물 여덟 글..."
                }
            </ReviewContent>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1rem",
                }}
            >
                <ReviewIconContainer>
                    <ReviewIconWrap>
                        <img src={thumbIcon} alt="좋아요" />
                        <p>{likeCount ? likeCount : 0}</p>
                    </ReviewIconWrap>
                    <ReviewIconWrap>
                        <img src={commentIcon} alt="좋아요" />
                        <p>{commentCount ? commentCount : 0}</p>
                    </ReviewIconWrap>
                </ReviewIconContainer>
                <Profile level="LV2" nickname="닉네임" />
            </div>
        </ReviewWrap>
    );
};

export default Review;
