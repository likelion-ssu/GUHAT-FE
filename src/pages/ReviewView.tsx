import BackArrowBtn from "@/components/Button/BackArrow";
import APILayout from "@/components/Layout/APILayout";
import { StickBackBtn } from "@/domain/recruitView/RecruitViewLayout.style";
import CommentLayout from "@/domain/reviewView/Layout/CommentLayout";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getReview } from "../apis/review/index";
import ReviewViewLayout from "../domain/reviewView/Layout/ReviewViewLayout";

const ReviewViewContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 3rem;
    padding-bottom: 6rem;
    display: flex;
    flex-direction: column;
`;

const ReviewView = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const { id, lectureId } = useParams();
    const { status, data } = useQuery(["reviewPost", id], () =>
        getReview(id!!, lectureId!!)
    );
    useEffect(() => {
        setModalVisible(false);
    }, []);
    setLoading(status !== "success");

    const comment = {
        canWrite: true, //해당 팀플 팀원일때만 & 작성자가 아닐때

        comments: [
            {
                isLike: true,
                year: "2022",
                semester: "1학기",
                createdAt: "2022-02-01 08:12:40", //yyyy-mm-dd hh:mm:ss 형식
                comment: "내용내요요요애뇽",
            },
            {
                isLike: false,
                year: "2022",
                semester: "1학기",
                createdAt: "2022-01-01 12:40:00",
                comment: "내용내요요요애뇽",
            },
            {
                isLike: true,
                year: "2022",
                semester: "1학기",
                createdAt: "2022-12-11 12:40:00",
                comment: "내용내요요요애뇽",
            },
            {
                isLike: false,
                year: "2022",
                semester: "1학기",
                createdAt: "2022-12-01 12:40:00",
                comment: "내용내요요요애뇽",
            },
        ],
    };
    const onClickBack = () => {
        window.history.back();
    };
    console.log(data);
    return (
        <>
            <StickBackBtn>
                <BackArrowBtn clickListener={onClickBack} />
            </StickBackBtn>
            <APILayout modal={null}>
                {data ? (
                    <ReviewViewContainer>
                        <ReviewViewLayout {...data.data.data} />
                        <CommentLayout {...comment} reviewId={id ? id : 0} />
                    </ReviewViewContainer>
                ) : null}
            </APILayout>
        </>
    );
};

export default ReviewView;
