import Profile from "@/components/MyPost/Card/Profile";
import {
    ReviewContainer,
    ReviewContent,
    ReviewLecturenWrap,
    ReviewLikeCount,
    ReviewLikeTagWrap,
    ReviewProfileInfo,
    ReviewTagThumb,
    ReviewTitle,
    ReviewTitleWrap,
} from "./Review.style";
const Review = () => {
    return (
        <ReviewContainer>
            <ReviewLikeTagWrap />
            <ReviewTagThumb />
            <ReviewLikeCount>+1</ReviewLikeCount>
            <ReviewTitleWrap>
                <ReviewTitle>사인페 팀플 후기 남깁니다</ReviewTitle>
                <ReviewLecturenWrap>
                    <p>사용자 인터페이스 및 실습 / </p>
                    <p>최지웅</p>
                </ReviewLecturenWrap>
            </ReviewTitleWrap>

            <ReviewContent>
                {"안녕하세요. 저는 나랏말싸미 듕귁에 달아 물자와로 서로 사맛디 아니할쎄 내 이를 어녀삐녀겨 새로 스물 여덟 글..." +
                    "안녕하세요. 저는 나랏말싸미 듕귁에 달아 물자와로 서로 사맛디 아니할쎄 내 이를 어녀삐녀겨 새로 스물 여덟 글..."}
            </ReviewContent>
            <ReviewProfileInfo>
                <p className="lecture-info">22학년도 2학기 수강자</p>
                <Profile level="LV2" nickname="닉네임" />
            </ReviewProfileInfo>
        </ReviewContainer>
    );
};

export default Review;
