import Review from "@/components/Review/Card/Review";
import { ReviewListContainer, ReviewListWrapper } from "./ReviewList.style";

interface Props {
    reviewList?: any[];
}

const ReviewList = ({ reviewList }: Props) => {
    return (
        <ReviewListContainer>
            <ReviewListWrapper>
                {reviewList
                    ? reviewList.map((review, idx) => {
                          return <Review />;
                      })
                    : null}
            </ReviewListWrapper>
        </ReviewListContainer>
    );
};

export default ReviewList;
