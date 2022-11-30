import RecruitingList from "../List/RecruitingList";
import { RecruitingListLayoutWrapper } from "./RecruitingLayout.style";
const RecruitingLayout = () => {
    const list = [1, 2, 3, 4, 5, 6];
    return (
        <>
            <RecruitingListLayoutWrapper>
                <div
                    className="recruiting-title"
                    style={{ display: "flex", gap: "0.5rem" }}
                >
                    <p>방금 올라온 </p>
                    <h1>강의 팀플 </h1>
                    <p>모집글이에요!</p>
                </div>

                <RecruitingList recruitingList={list} />
                <div style={{ width: "100%", position: "relative" }}>
                    <button className="recruiting-more">더보기</button>
                </div>
            </RecruitingListLayoutWrapper>
        </>
    );
};

export default RecruitingLayout;
