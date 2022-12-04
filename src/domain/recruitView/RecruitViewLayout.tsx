import { RecruitViewResponse } from "@/types/recruitLecture.types";
import MemberList from "./List/MemberList";
import ProfileLayout from "./ProfileLayout";
import RecruitViewInfo from "./RecruitViewInfo";
import { RecruitViewNowInfo } from "./RecruitViewInfo.style";
import { RecruitViewContainer } from "./RecruitViewLayout.style";

interface Props {
    recruit?: RecruitViewResponse;
}

const RecruitViewLayout = ({ recruit }: Props) => {
    const res = { ...recruit };

    return (
        <RecruitViewContainer>
            <h1 className="title">{res.title}</h1>
            <div className="content">
                <ProfileLayout
                    nickname={res.writer.nickname}
                    id={res.writer.id}
                    level={res.writer.level}
                    endDate={res.endDate ? res.endDate : "기간제한 없음"}
                    isOwner={res.isOwner ? true : false}
                ></ProfileLayout>
            </div>
            <hr />
            <div className="content">
                <RecruitViewInfo res={res} />
            </div>
            <hr />
            <h2 className="subtitle">팀원리스트</h2>
            <div className="content">
                <RecruitViewNowInfo>
                    {res?.group
                        ? res.group.map((g, i) => {
                              return (
                                  <MemberList list={g.member} name={g.title} />
                              );
                          })
                        : null}
                </RecruitViewNowInfo>
            </div>
            <hr />
            <h2 className="subtitle">상세 설명</h2>
            <div className="text-content">{recruit?.detail}</div>
            <hr />
            <h2 className="subtitle">우대 사항</h2>
            <div className="text-content">{recruit?.piriority}</div>
        </RecruitViewContainer>
    );
};

export default RecruitViewLayout;
