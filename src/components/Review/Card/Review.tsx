import Profile from "@/components/MyPost/Card/Profile";
import { IReview } from "../../../types/review.types";
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
const Review = ({ review }: { review: IReview }) => {
    return (
        <ReviewContainer>
            <ReviewLikeTagWrap />
            <ReviewTagThumb />
            <ReviewLikeCount>+1</ReviewLikeCount>
            <ReviewTitleWrap>
                <ReviewTitle>{review.title}</ReviewTitle>
                <ReviewLecturenWrap>
                    <p>{review.lecture.name} / </p>
                    <p>
                        {review.lecture.professors?.map((p, i) => {
                            if (i === 0) return p;
                            else return ` / ${p}`;
                        })}
                    </p>
                </ReviewLecturenWrap>
            </ReviewTitleWrap>
            <ReviewContent>{review.detail}</ReviewContent>
            <ReviewProfileInfo>
                <p className="lecture-info">
                    {`${review.lecture.year?.substring(2, 4)} 년도 ${
                        review.lecture.semester
                    } `}
                    수강자
                </p>
                <Profile
                    level={
                        review.writer.level?.toString()
                            ? review.writer.level?.toString()
                            : "0"
                    }
                    nickname={review.writer.nickname}
                />
            </ReviewProfileInfo>
        </ReviewContainer>
    );
};

export default Review;
