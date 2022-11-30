import { recuritLecture } from "@_types/recruitLecture.types";
import { useCallback } from "react";
import Profile from "./Profile";
import ProgressBar from "./ProgressBar";
import {
    RecruitLectureTitle,
    RecruitSubTitle,
    RecruitWrap,
} from "./Recruit.style";
import RecruitContent from "./RecruitContent";
import { RecruitContentChip } from "./RecruitContent.style";
import ViewCount from "./ViewCount";

const Recruit = ({
    recruit,
}: {
    recruit: recuritLecture | undefined | null;
}) => {
    const recruitData = {
        lectureTitle: "사용자 인터페이스 및 실습",
        schedule: ["월 10:30", "수 13:30"],
        professor: "최지웅",
        endDate: "2022-12-31",
    };

    const calculateDate = useCallback<(endDate: string) => string>(
        (endDate) => {
            const endTime: any = new Date(endDate);
            const nowTime: any = new Date();
            const diff = endTime - nowTime;
            const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
            return diffDay;
        },
        []
    );

    return (
        <RecruitWrap>
            <RecruitContentChip />
            <RecruitLectureTitle>
                {recruitData.lectureTitle}
            </RecruitLectureTitle>
            <RecruitSubTitle>{recruitData.schedule.join()}</RecruitSubTitle>
            <RecruitSubTitle>{recruitData.professor}</RecruitSubTitle>
            <ViewCount count={1} />
            <ProgressBar total={5} current={3} />
            <RecruitContent
                title="최지웅 사인페 버스 운영합니다"
                detail={
                    "안녕하세요. 저는 나랏말싸미 듕귁에 달아 물자와로 서로 사맛디 아니할쎄 내 이를 어녀삐녀겨 새로 스물 여덟 글..."
                }
                endDate={calculateDate(recruitData.endDate)}
            >
                <Profile level={"Lv1.새내기"} nickname={"닉네임107"} />
            </RecruitContent>
        </RecruitWrap>
    );
};

export default Recruit;