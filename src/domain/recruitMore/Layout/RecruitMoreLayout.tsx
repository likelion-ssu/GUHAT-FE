import { useRecentRecruit } from "@/apis/recruit/list";
import LectureHistory from "@/components/History/LectureHistory";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const RecruitMoreContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 0 5rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 6rem;
    padding-bottom: 6rem;

    .navigate-bar {
        display: flex;
        width: 60%;
        justify-content: center;
        gap: 2rem;
    }

    .navigate-btn {
        font-weight: 500;
        font-size: 1.3rem;
        color: gray;
    }
`;

export const RecruitNavigateBtn = styled.button<{ check: boolean }>`
    font-weight: 500;
    font-size: 1.3rem;
    ${({ check }) => (check ? `color:black;` : `color :gray`)}
`;

const RecruitMoreLayout = () => {
    const [focusPage, setFocusPage] = useState(1);
    const { status, data } = useRecentRecruit(focusPage);

    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);

    const [posts, setPosts] = useState(data ? data : []);
    const [focusPosts, setFocusPosts] = useState<any[]>(data ? data : []);

    useEffect(() => {
        setModalVisible(false);
    }, []);
    useEffect(() => {
        console.log("status", status);
        if (status === "success") {
            setLoading(false);
            setPosts(data);
        }
    }, [status]);

    const res = [
        {
            id: 1, //postId
            isOwner: true, //내가 작성한건지
            type: "major",
            title: "팀플 제목1",
            detail: "상세글",
            total: 5, // 모집 총 인원
            current: 3, // 현재 모집된 인원
            endDate: "2022-12-31 12:40:40",
            createdAt: "2022-02-02", // 작성일,
            lectureName: "현대인과성서",
            professor: ["김명배"],
        },
        {
            id: 1, //postId
            isOwner: true, //내가 작성한건지
            type: "elective",
            title: "팀플 제목2",
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
            title: "팀플 제목3",
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
            type: "major",
            title: "팀플 제목4",
            detail: "상세글",
            total: 5, // 모집 총 인원
            current: 3, // 현재 모집된 인원
            endDate: "2022-12-31 12:40:40",
            createdAt: "2022-02-02", // 작성일,
            lectureName: "현대인과성서",
            professor: ["김명배"],
        },
        {
            id: 1, //postId
            isOwner: true, //내가 작성한건지
            type: "elective",
            title: "팀플 제목5",
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
            title: "팀플 제목6",
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
            type: "major",
            title: "팀플 제목7",
            detail: "상세글",
            total: 5, // 모집 총 인원
            current: 3, // 현재 모집된 인원
            endDate: "2022-12-31 12:40:40",
            createdAt: "2022-02-02", // 작성일,
            lectureName: "현대인과성서",
            professor: ["김명배"],
        },
        {
            id: 1, //postId
            isOwner: true, //내가 작성한건지
            type: "elective8",
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
            type: "elective9",
            title: "팀플 제목9",
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
            type: "major",
            title: "팀플 제목10",
            detail: "상세글",
            total: 5, // 모집 총 인원
            current: 3, // 현재 모집된 인원
            endDate: "2022-12-31 12:40:40",
            createdAt: "2022-02-02", // 작성일,
            lectureName: "현대인과성서",
            professor: ["김명배"],
        },
        {
            id: 1, //postId
            isOwner: true, //내가 작성한건지
            type: "elective",
            title: "팀플 제목11",
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
            title: "팀플 제목12",
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
            type: "major",
            title: "팀플 제목13",
            detail: "상세글",
            total: 5, // 모집 총 인원
            current: 3, // 현재 모집된 인원
            endDate: "2022-12-31 12:40:40",
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
            title: "팀플 제목14",
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
            type: "major",
            title: "팀플 제목15",
            detail: "상세글",
            total: 5, // 모집 총 인원
            current: 3, // 현재 모집된 인원
            endDate: "2022-12-31 12:40:40",
            createdAt: "2022-02-02", // 작성일,
            lectureName: "현대인과성서",
            professor: ["김명배"],
        },
        {
            id: 1, //postId
            isOwner: true, //내가 작성한건지
            type: "elective",
            title: "팀플 제목16",
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
            type: "elective17",
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
            type: "elective17",
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
            type: "elective17",
            title: "팀플 제목20",
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
            type: "elective17",
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
            type: "elective17",
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
            type: "elective17",
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
            type: "elective25",
            title: "팀플 제목25",
            detail: "상세글",
            total: 5, // 모집 총 인원
            current: 3, // 현재 모집된 인원
            endDate: "2022-12-31",
            createdAt: "2022-02-02", // 작성일,
            lectureName: "현대인과성서",
            professor: ["김명배"],
        },
    ];

    const onClickPage = (page: number) => {
        // setFocusPosts(posts.slice(10 * page - 10, 10 * page));
        setFocusPage(page);
    };

    const getFetchData = () => {
        switch (status) {
            case "success":
                return (
                    <RecruitMoreContainer>
                        {posts.map((post: any) => (
                            <LectureHistory key={post.title} {...post} />
                        ))}
                        <div className="navigate-bar">
                            {posts.length > 10 ? (
                                [
                                    ...Array(Math.floor(posts.length / 10) + 1),
                                ].map((m, i) => {
                                    return (
                                        <RecruitNavigateBtn
                                            key={i}
                                            check={focusPage === i + 1}
                                            onClick={() => {
                                                onClickPage(i + 1);
                                            }}
                                        >
                                            {i + 1}
                                        </RecruitNavigateBtn>
                                    );
                                })
                            ) : (
                                <RecruitNavigateBtn key={1} check={true}>
                                    1
                                </RecruitNavigateBtn>
                            )}
                        </div>
                    </RecruitMoreContainer>
                );
            case "error":
                return <h1>Error 발생 </h1>;
        }
    };

    return <>{getFetchData()}</>;
};

export default RecruitMoreLayout;
