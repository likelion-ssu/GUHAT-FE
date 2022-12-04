import ReviewList from "../List/ReviewList";
import { RecruitingListLayoutWrapper } from "./RecruitingLayout.style";

const ReviewLayout = () => {
    const list = [
        { name: "사인페", type: "major", total: 5, current: 1 },
        { name: "현성서", type: "elective", total: 5, current: 3 },
        { name: "캡스톤", type: "major", total: 6, current: 2 },
    ];
    return (
        <>
            <RecruitingListLayoutWrapper>
                <div
                    className="recruiting-title"
                    style={{
                        display: "flex",
                        gap: "0.5rem",
                        marginBottom: "1rem",
                    }}
                >
                    <p>방금 올라온 </p>
                    <h1>팀플 리뷰 </h1>
                    <p>에요!</p>
                </div>

                <ReviewList
                    reviewList={list.length > 3 ? list.slice(0, 3) : list}
                />
                <div style={{ width: "100%", position: "relative" }}>
                    <button className="recruiting-more">더보기</button>
                </div>
            </RecruitingListLayoutWrapper>
        </>
    );
};

export default ReviewLayout;
