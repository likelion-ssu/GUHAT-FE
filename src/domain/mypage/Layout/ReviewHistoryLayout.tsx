import ReviewHistory from "@/components/History/ReviewHistory";
import styled from "@emotion/styled";
const ReviewContainer = styled.div`
    position: relative;
    border-radius: 1rem;
    margin-top: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: calc(26rem);
    gap: 2rem;
`;

const ReviewHistoryLayout = () => {
    return (
        <ReviewContainer>
            <ReviewHistory />;
        </ReviewContainer>
    );
};

export default ReviewHistoryLayout;
