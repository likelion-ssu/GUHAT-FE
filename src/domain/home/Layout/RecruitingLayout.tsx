import RecruitingList from "../List/RecruitingList";
import { RecruitingListLayoutWrapper } from "./RecruitingLayout.style";
const RecruitingLayout = () => {
    const list = [
        { name: "사인페", type: "major", total: 5, current: 1 },
        { name: "현성서", type: "elective", total: 5, current: 3 },
        { name: "캠스톤", type: "major", total: 6, current: 2 },
    ];
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

                <RecruitingList
                    recruitingList={list.length > 3 ? list.slice(0, 3) : list}
                />
                <div style={{ width: "100%", position: "relative" }}>
                    <button className="recruiting-more">더보기</button>
                </div>
            </RecruitingListLayoutWrapper>
        </>
    );
};

export default RecruitingLayout;
