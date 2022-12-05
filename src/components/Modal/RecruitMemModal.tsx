import {
    RecruitMemCardList,
    RecruitMemCardWrapper,
    RecruitMemModalContainer,
    RecruitMemModalGroups,
    RecruitMemModalList,
} from "./RecruitMemModal.style";

import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import CloseIcon from "@assets/close.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getApplicants, updateMember } from "../../apis/recruit/member";
import MemberCard from "../Member/MemberCard";
import RecruitApplyItem from "./RecruitApplyItem";

interface checkedMem {
    title: string;
    titleIndex: number;
    index: number;
    id?: string;
    nickname?: string;
    level?: string;
    isNew?: boolean;
}

const RecruitMemModal = ({ members }: { members: any[] }) => {
    const { id } = useParams();
    const data = getApplicants(id ? id : 0); //url validation

    const [loading, setLoading] = useRecoilState(loadingState);

    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const [checkedMem, setCheckedMem] = useState<checkedMem | null>(null);
    const [applicantList, setApplicantList] = useState(data); //보여지는 리스트
    const [selecteMember, setSelectedMember] = useState([...members]);

    useEffect(() => {
        //TODO 지원자 받기
        console.log("applicant", applicantList);
    }, [applicantList]);

    useEffect(() => {}, [checkedMem]);

    useEffect(() => {}, [selecteMember]);

    const onClickSubmit = () => {
        setLoading(true);
        const submit = selecteMember.map(
            (group: { title: string; member: any }, idx) => {
                let member = group.member.map((m: any) => {
                    return m ? m.id : null;
                });
                return { title: group?.title.toString(), member: member };
            }
        );

        const res = updateMember(submit);
        console.log(res);

        setTimeout(() => {
            setLoading(false);
        }, 4000);
    };

    const addMember = (mem: any) => {
        const group = [...selecteMember[mem.titleIndex].member];
        const addIndex = group.indexOf(null);
        if (addIndex) {
            group[addIndex] = {
                id: mem.id,
                nickname: mem.nickname,
                level: mem.level,
                isNew: true,
            };
        }
        const newState = [...selecteMember];
        newState[mem.titleIndex].member = group;
        setCheckedMem({ ...mem });
        setSelectedMember(newState);
    };

    const setMember = (mem: any) => {
        const group = [...selecteMember[mem.titleIndex].member];
        const deleteIndex = group.findIndex((g) => g.id === checkedMem?.id);
        group[deleteIndex] = { ...mem, isNew: true };
        const newState = [...selecteMember];
        newState[mem.titleIndex].member = group;
        setSelectedMember(newState);
    };

    const deleteApplicant = (mem: any) => {
        if (checkedMem?.id) {
            const reGroup = [...applicantList];
            const newItem = {
                id: checkedMem.id,
                nickname: checkedMem.nickname,
                level: checkedMem.level,
            };

            const deleteIndex = reGroup[
                checkedMem?.titleIndex
            ].applicant.findIndex((g: any) => g && g.id === mem?.id);

            if (deleteIndex !== -1)
                reGroup[checkedMem?.titleIndex].applicant.splice(
                    deleteIndex,
                    1
                );
            reGroup[checkedMem?.titleIndex].applicant.push(newItem);
            setApplicantList(reGroup);
        }
    };

    const onClickApplyItem = (clickedApplicant: any) => {
        if (
            applicantList[clickedApplicant.titleIndex].applicant.length > 0 &&
            checkedMem?.id
        ) {
            //남는 자리가 없음
            console.log("leak");
            //지원리스트 재추가
            deleteApplicant(clickedApplicant);

            const changeInfo = { ...checkedMem };
            changeInfo.id = clickedApplicant.id;
            changeInfo.nickname = clickedApplicant.nickname;
            changeInfo.level = clickedApplicant.level;
            setCheckedMem(changeInfo);
            setMember(changeInfo);

            return;
        }

        const curApplyGroup = [
            ...applicantList[clickedApplicant.titleIndex].applicant,
        ];

        curApplyGroup.splice(clickedApplicant.index, 1);

        const newState = [...applicantList];
        newState[clickedApplicant.titleIndex].applicant = [...curApplyGroup];
        setApplicantList(newState);
        addMember(clickedApplicant);
    };

    const checkValidation = (member: any, title: string): boolean => {
        if (checkedMem === null || checkedMem.title === title) return true;
        // if (checkedMem.title !== title) return false;
        if (member?.isNew !== undefined && member?.isNew) return true;
        else {
            if (checkedMem.id === undefined) {
                return false;
            }
            return checkedMem?.id === member?.id;
        }
    };

    return (
        <RecruitMemModalContainer>
            <button
                className="modal-close-btn"
                style={{ backgroundImage: `url(${CloseIcon})` }}
                onClick={() => {
                    setModalVisible(false);
                }}
            ></button>
            <RecruitMemModalList>
                <h1 className="list-label">지원자 목록</h1>
                {checkedMem && applicantList ? (
                    applicantList[
                        checkedMem ? checkedMem.titleIndex : 0
                    ].applicant.map((a: any, idx: number) => {
                        return (
                            <RecruitApplyItem
                                key={"recruit-modal-apply-item" + a.title + idx}
                                nickname={a.nickname}
                                id={a.id}
                                level={a.level}
                                clickListener={() => {
                                    onClickApplyItem({
                                        titleIndex: checkedMem.titleIndex,
                                        index: idx,
                                        id: a.id,
                                        ...a,
                                    });
                                }}
                            />
                        );
                    })
                ) : (
                    <div className="recruit-modal-empty-state">
                        <h2>오른쪽 팀 현황 박스에서 추가하고 </h2>
                        <h2>싶은 빈자리를 선택해주세요.</h2>
                    </div>
                )}
            </RecruitMemModalList>
            <div className="modal-recuit-content">
                <RecruitMemModalGroups>
                    {selecteMember?.map((mem, idx) => {
                        return (
                            <RecruitMemCardList
                                key={idx + "modal-recruit-list"}
                            >
                                <h1 className="modal-recuit-group-label">
                                    {mem.title}
                                </h1>
                                {mem.member
                                    ? mem.member?.map(
                                          (m: any, index: number) => {
                                              return (
                                                  <RecruitMemCardWrapper
                                                      key={
                                                          "mem-card" +
                                                          mem.title +
                                                          index
                                                      }
                                                      checked={checkValidation(
                                                          m,
                                                          mem.title
                                                      )}
                                                  >
                                                      <MemberCard
                                                          member={
                                                              m
                                                                  ? m.nickname
                                                                  : null
                                                          }
                                                          id={m ? m.id : null}
                                                          disabled={
                                                              m !== null &&
                                                              !m.isNew
                                                          }
                                                          clickListener={() => {
                                                              console.log(m);
                                                              m === null
                                                                  ? setCheckedMem(
                                                                        {
                                                                            title: mem.title,
                                                                            titleIndex:
                                                                                idx,
                                                                            index: index,
                                                                        }
                                                                    )
                                                                  : setCheckedMem(
                                                                        {
                                                                            title: mem.title,
                                                                            titleIndex:
                                                                                idx,
                                                                            index: index,
                                                                            nickname:
                                                                                m.nickname,
                                                                            id: m.id,
                                                                            level: m.level,
                                                                        }
                                                                    );
                                                          }}
                                                      />
                                                  </RecruitMemCardWrapper>
                                              );
                                          }
                                      )
                                    : null}
                            </RecruitMemCardList>
                        );
                    })}
                </RecruitMemModalGroups>
                <button
                    className="modal-recuit-group-button"
                    onClick={onClickSubmit}
                >
                    모집현황 저장
                </button>
            </div>
        </RecruitMemModalContainer>
    );
};

export default RecruitMemModal;
