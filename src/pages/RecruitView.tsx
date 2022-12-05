import BackArrowBtn from "@/components/Button/BackArrow";
import APILayout from "@/components/Layout/APILayout";
import RecruitViewLayout from "@/domain/recruitView/RecruitViewLayout";
import {
    StickBackBtn,
    StickRecruitkBtn,
} from "@/domain/recruitView/RecruitViewLayout.style";
import { RecruitViewResponse } from "@/types/recruitLecture.types";
import { useState } from "react";
import { useParams } from "react-router-dom";

const RecruitView = () => {
    const { id } = useParams();

    const dummyRes: RecruitViewResponse = {
        isOwner: true,
        isApply: true,
        title: "최지웅 사인페 운영",
        writer: {
            id: "2022222",
            nickname: "익명 990",
            level: 1,
        },
        date: "2020-12-12",
        lecture: {
            id: "280",
            name: "사용자인터페이스",
            professor: "최지웅",
            time: "월 수 12-000",
        },
        endDate: "2022-12-31",
        duration: "3개월",
        group: [
            {
                title: "프론트",
                member: [
                    {
                        id: "20222222",
                        nickname: "닉네임1",
                    },
                    {
                        id: "2022232",
                        nickname: "닉네임3",
                    },
                    {
                        id: "2022232",
                        nickname: "닉네임6",
                    },
                    null,
                    null,
                ],
            },

            {
                title: "백엔드",
                member: [
                    {
                        id: "20222222",
                        nickname: "닉네임1",
                    },
                    null,
                ],
            },
        ],
        detail: `
        앞이 우는 길지 거선의 트고, 그리하였는가? 두손을 스며들어 이성은
        몸이 속에서 놀이 철환하였는가? 날카로우나 보이는 군영과
        위하여서, 원대하고, 바이며, 이것이다. 전인 아니더면, 그들은
        미인을 있는가? 사랑의 대한 품으며, 행복스럽고 가장 사막이다. 살
        꾸며 생생하며, 유소년에게서 그들은 소리다.이것은 되려니와,
        풍부하게 인생을 것이다. 것은 방지하는 이상 그들은 이
        철환하였는가? 이상의 없으면 생생하며, 별과 사람은 타오르고
        운다.그들의 어디 청춘의 인생에 것이다. 무엇을 것은 속에서 예수는
        거선의 보이는 가치를 사랑의 미인을 있다. 역사를 인류의 원질이
        끓는다. 바이며, 예수는 시들어 같으며, 트고, 인생을 예가 살 싸인
        교향악이다. 어디 위하여서, 끝에 날카로우나 이것이다. 눈이
        없으면, 곳이 운다. 그들의 그것은 시들어 아니한 것은 아름다우냐?
        인생에 풀이 가지에 그들의 것이다.
        `,
        piriority: "학점 4.5",
    };

    const [applyState, setApplyState] = useState(dummyRes.isApply);

    const onClickBack = () => {
        window.history.back();
    };

    const onClickApply = () => {
        alert("지원완료");
        setApplyState(true);
    };

    return (
        <>
            <StickBackBtn>
                <BackArrowBtn clickListener={onClickBack} />
            </StickBackBtn>
            <APILayout>
                <RecruitViewLayout recruit={dummyRes} />
                <div style={{ height: "6rem" }}></div>
            </APILayout>

            <StickRecruitkBtn onClick={onClickApply} disabled={applyState}>
                {applyState ? "지원완료" : "지원하기"}
            </StickRecruitkBtn>
        </>
    );
};

export default RecruitView;
