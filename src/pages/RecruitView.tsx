import { useGetRecruitPost } from "@/apis/recruit/view";
import BackArrowBtn from "@/components/Button/BackArrow";
import APILayout from "@/components/Layout/APILayout";
import RecruitApplyModal from "@/components/Modal/RecruitApplyModal";
import RecruitMemberModal from "@/components/Modal/RecruitMemberModal";
import RecruitViewLayout from "@/domain/recruitView/RecruitViewLayout";
import {
    StickBackBtn,
    StickRecruitkBtn,
} from "@/domain/recruitView/RecruitViewLayout.style";
import { modalState } from "@/storage/recoil/modalState";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loadingState } from "../storage/recoil/loadingState";

const RecruitView = () => {
    const { id } = useParams();
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const { status, data } = useGetRecruitPost(id ? id : 0);

    useEffect(() => {
        setLoading(false);
        setModalVisible(false);
    }, []);

    const [applyState, setApplyState] = useState(
        data ? (data.isOwner ? false : data.isApply) : true
    );

    useEffect(() => {
        if (status === "success") {
            setApplyState(data.isOwner ? false : data.isApply);
        }
    }, [status]);

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
            {data ? (
                <>
                    {" "}
                    <APILayout
                        modal={
                            data.isOwner ? (
                                <RecruitMemberModal members={data.Roles} />
                            ) : (
                                <RecruitApplyModal
                                    list={data.Roles.map(
                                        (g: any, i: number) => {
                                            return {
                                                roleId: g.id,
                                                title: g.name,
                                            };
                                        }
                                    )}
                                />
                            )
                        }
                    >
                        <RecruitViewLayout recruit={data} />
                        <div style={{ height: "6rem" }}></div>
                    </APILayout>
                    <StickRecruitkBtn
                        onClick={onClickApply}
                        disabled={applyState}
                    >
                        {!data.isOwner
                            ? applyState
                                ? "지원완료"
                                : "지원하기"
                            : "지원받기"}
                    </StickRecruitkBtn>{" "}
                </>
            ) : null}
        </>
    );
};

export default RecruitView;
