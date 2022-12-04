import { IRecruitItem } from "@/types/recruitLecture.types";
import RecruitingList from "../List/RecruitingList";
import { RecruitingListLayoutWrapper } from "./RecruitingLayout.style";

interface Props {
    list: IRecruitItem[];
}

const RecruitingLayout = ({ list }: Props) => {
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
                    recruitingList={list.length > 4 ? list.slice(0, 4) : list}
                />
                <div style={{ width: "100%", position: "relative" }}>
                    <button className="recruiting-more">더보기</button>
                </div>
            </RecruitingListLayoutWrapper>
        </>
    );
};

export default RecruitingLayout;
