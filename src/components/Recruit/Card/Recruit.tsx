import { IRecruitItem } from "@/types/recruitLecture.types";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import ProgressBar from "./ProgressBar";
import {
    RecruitBgPogress,
    RecruitLectureTitle,
    RecruitSubTitle,
    RecruitWrap,
} from "./Recruit.style";
import RecruitContent from "./RecruitContent";
import { RecruitContentChip } from "./RecruitContent.style";
import ViewCount from "./ViewCount";

const Recruit = ({ recruit }: { recruit: IRecruitItem }) => {
    const navigator = useNavigate();

    const onClickRecruitCard = () => {
        navigator("/recruit/" + recruit.id);
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
        <RecruitWrap lectureType={recruit.type} onClick={onClickRecruitCard}>
            <RecruitBgPogress progress={recruit.current / recruit.total} />
            <RecruitContentChip type={recruit.type} />
            <RecruitLectureTitle>{recruit.title}</RecruitLectureTitle>
            <RecruitSubTitle>
                {recruit.lecture.schedule?.map((s, i) => {
                    if (i === 0) return s;
                    else return ` / ${s}`;
                })}
            </RecruitSubTitle>
            <RecruitSubTitle>
                {recruit.lecture.professors?.map((s, i) => {
                    if (i === 0) return s;
                    else return ` / ${s}`;
                })}
            </RecruitSubTitle>
            <ViewCount count={recruit.viewCount} type={recruit.type} />
            <ProgressBar total={recruit.total} current={recruit.current} />
            <RecruitContent
                title="최지웅 사인페 버스 운영합니다"
                detail={
                    "안녕하세요. 저는 나랏말싸미 듕귁에 달아 물자와로 서로 사맛디 아니할쎄 내 이를 어녀삐녀겨 새로 스물 여덟 글..."
                }
                endDate={calculateDate(recruit.endDate)}
            >
                <Profile level={"Lv1.새내기"} nickname={"닉네임107"} />
            </RecruitContent>
        </RecruitWrap>
    );
};

export default Recruit;
