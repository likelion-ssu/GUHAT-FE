import BackArrowBtn from "@/components/Button/BackArrow";
import MainLayout from "@/components/Layout/MainLayout";
import { StickBackBtn } from "@/domain/recruitView/RecruitViewLayout.style";
import CommentLayout from "@/domain/reviewView/Layout/CommentLayout";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
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
    const { id } = useParams();
    const review = {
        isOwner: true,
        title: "알고리즘 팀플",
        year: "2020",
        semester: "1학기",
        createdAt: "2022-12-12", //작성일

        writerId: "29292",
        nickname: "익명111",
        writerLevel: 2,
        memberNum: 4, //필요인원
        startDate: "1월",
        endDate: "2월",
        reviewLevel: "하",

        subject: "주제입니다",
        detail: "사아아ㅏ리멀덜먀ㅓ대ㅓㄹ매ㅓ댜ㅓㅐㅓㅐㅑㅓ",
        files: [],
    };

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
    return (
        <>
            <StickBackBtn>
                <BackArrowBtn clickListener={onClickBack} />
            </StickBackBtn>
            <MainLayout>
                <ReviewViewContainer>
                    <ReviewViewLayout {...review} />
                    <CommentLayout {...comment} reviewId={id ? id : 0} />
                </ReviewViewContainer>
            </MainLayout>
        </>
    );
};

export default ReviewView;
