import BackArrowBtn from "@/components/Button/BackArrow";
import APILayout from "@/components/Layout/APILayout";
import RecruitApplyModal from "@/components/Modal/RecruitApplyModal";
import RecruitMemModal from "@/components/Modal/RecruitMemModal";
import RecruitViewLayout from "@/domain/recruitView/RecruitViewLayout";
import {
    StickBackBtn,
    StickRecruitkBtn,
} from "@/domain/recruitView/RecruitViewLayout.style";
import { modalState } from "@/storage/recoil/modalState";
import { RecruitViewResponse } from "@/types/recruitLecture.types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loadingState } from "../storage/recoil/loadingState";

const RecruitView = () => {
    const { id } = useParams();
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    useEffect(() => {
        setLoading(false);
        setModalVisible(false);
    }, []);
    const dummyRes: RecruitViewResponse = {
        isOwner: true,
        isApply: false,
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
                roleId: 1,
                title: "프론트",
                member: [
                    {
                        id: "202222221",
                        nickname: "닉네임1f",
                    },
                    {
                        id: "20222322",
                        nickname: "닉네임3f",
                    },
                    {
                        id: "20222323",
                        nickname: "닉네임6f",
                    },
                    null,
                    null,
                ],
            },
            {
                roleId: 31,
                title: "기획",
                member: [
                    {
                        id: "202222221",
                        nickname: "닉네임1f",
                    },
                    {
                        id: "20222322",
                        nickname: "닉네임3f",
                    },

                    null,
                ],
            },
            {
                roleId: 2,
                title: "백엔드",
                member: [
                    {
                        id: "20222222",
                        nickname: "닉네임1b",
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

    const [applyState, setApplyState] = useState(
        dummyRes.isOwner ? false : dummyRes.isApply
    );

    const onClickBack = () => {
        window.history.back();
    };

    const onClickApply = () => {
        setModalVisible(true);
    };

    return (
        <>
            <StickBackBtn>
                <BackArrowBtn clickListener={onClickBack} />
            </StickBackBtn>

            <APILayout
                modal={
                    dummyRes.isOwner ? (
                        <RecruitMemModal
                            members={dummyRes.group.map((g, titleIndex) => {
                                return {
                                    roleId: g.roleId,
                                    title: g.title,
                                    member: g.member.map((m: any) => {
                                        return m
                                            ? { ...m, isNew: false }
                                            : null;
                                    }),
                                };
                            })}

                            // members={dummyRes.group.map((g, titleIndex) => {
                            //     return {
                            //         roleId: g.roleId,
                            //         title: g.title,
                            //         member: g.member.filter(
                            //             (m: any, index: number) => m === null
                            //         ),
                            //         isNew: false,
                            //     };
                            // })}
                        />
                    ) : (
                        <RecruitApplyModal
                            list={dummyRes.group.map((g, i) => {
                                return { roleId: g.roleId, title: g.title };
                            })}
                        />
                    )
                }
            >
                <RecruitViewLayout recruit={dummyRes} />
                <div style={{ height: "6rem" }}></div>
            </APILayout>

            <StickRecruitkBtn onClick={onClickApply} disabled={applyState}>
                {!dummyRes.isOwner
                    ? applyState
                        ? "지원완료"
                        : "지원하기"
                    : "지원받기"}
            </StickRecruitkBtn>
        </>
    );
};

export default RecruitView;
