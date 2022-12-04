import FilledBox from "@/components/InputBox/FilledBox";
import LabelFilledBox from "@/components/InputBox/LabelFilledBox";
import { RecruitViewResponse } from "@/types/recruitLecture.types";
import {
    RecruitViewInfoContainer,
    RecruitViewInfoGroup,
} from "./RecruitViewInfo.style";

interface Props {
    res?: RecruitViewResponse | any;
}
type Group = {
    title: string;
    member: string[] | null[];
};

const RecruitViewInfo = ({ res }: Props) => {
    return (
        <>
            <RecruitViewInfoContainer>
                <div className="recruit-info-content">
                    <LabelFilledBox
                        label={"수업 이름"}
                        text={`${res?.lecture.name} / ${res?.lecture.professor}`}
                    />
                </div>
                <div className="recruit-info-content">
                    <LabelFilledBox
                        label={"수업 시간"}
                        text={`${res.lecture.time}`}
                    />
                </div>
                <div className="recruit-info-content">
                    <LabelFilledBox
                        label={"모집 마감"}
                        text={`${res.endDate}`}
                    />

                    <FilledBox text="D-3" mode="dark" />
                </div>
                <div className="recruit-info-content">
                    <LabelFilledBox
                        label={"예상 기간"}
                        text={`${res.duration}`}
                    />
                </div>
                <RecruitViewInfoGroup>
                    <p>모집 인원</p>
                    <div className="recruit-info-group">
                        {res.group
                            ? res.group.map((g: Group, i: number) => {
                                  return (
                                      <div className="recruit-info-item">
                                          <FilledBox
                                              text={g.title}
                                              key={"recruit-info-item" + i}
                                          />
                                          <h1>{g.member.length}명</h1>
                                      </div>
                                  );
                              })
                            : null}
                    </div>
                </RecruitViewInfoGroup>
            </RecruitViewInfoContainer>
        </>
    );
};

export default RecruitViewInfo;
