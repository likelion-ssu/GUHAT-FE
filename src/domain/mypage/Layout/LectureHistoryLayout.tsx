import LectureHistory from "@/components/History/LectureHistory";
import styled from "@emotion/styled";

const LectureContainer = styled.div`
    position: relative;
    border-radius: 1rem;
    margin-top: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: calc(26rem);
    gap: 2rem;
`;

const LectureHistoryLayout = () => {
    const posts = [
        {
            id: 1, //postId
            isOwner: true, //내가 작성한건지
            type: "major",
            title: "팀플 제목",
            detail: "상세글",
            total: 5, // 모집 총 인원
            current: 3, // 현재 모집된 인원
            endDate: "2022-12-31",
            createdAt: "2022-02-02", // 작성일,
            lectureName: "현대인과성서",
            professor: ["김명배"],
        },
        {
            id: 1, //postId
            isOwner: true, //내가 작성한건지
            type: "elective",
            title: "팀플 제목",
            detail: "상세글",
            total: 5, // 모집 총 인원
            current: 3, // 현재 모집된 인원
            endDate: "2022-12-31",
            createdAt: "2022-02-02", // 작성일,
            lectureName: "현대인과성서",
            professor: ["김명배"],
        },
        {
            id: 1, //postId
            isOwner: true, //내가 작성한건지
            type: "elective",
            title: "팀플 제목",
            detail: "상세글",
            total: 5, // 모집 총 인원
            current: 3, // 현재 모집된 인원
            endDate: "2022-12-31",
            createdAt: "2022-02-02", // 작성일,
            lectureName: "현대인과성서",
            professor: ["김명배"],
        },
    ];

    return (
        <LectureContainer>
            <LectureHistory {...posts[0]} />
        </LectureContainer>
    );
};

export default LectureHistoryLayout;
