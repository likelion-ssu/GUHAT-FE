import Review from "@/components/Review/Card/Review";
import { IReview } from "@/types/review.types";
import { ReviewListContainer, ReviewListWrapper } from "./ReviewList.style";

interface Props {
    reviewList?: IReview[];
}

const ReviewList = ({ reviewList }: Props) => {
    return (
        <ReviewListContainer>
            <ReviewListWrapper>
                {reviewList
                    ? reviewList.map((review, idx) => {
                          return (
                              <Review review={review} key={"review " + idx} />
                          );
                      })
                    : null}
            </ReviewListWrapper>
        </ReviewListContainer>
    );
};

export default ReviewList;
