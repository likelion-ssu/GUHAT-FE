import MainButton from "@/components/Button";
import LabelFilledBox from "@/components/InputBox/LabelFilledBox";
import APILayout from "@/components/Layout/APILayout";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const Landing = () => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    useEffect(() => {
        setLoading(false);
        setModalVisible(false);
    }, []);

    return (
        <APILayout modal={null}>
            <div>
                <LabelFilledBox label={"ID"} text={"id"} />
                {/* <InputFiled value={id} handler={setId} /> */}
                <MainButton width="7rem">로그인</MainButton>
            </div>
        </APILayout>
    );
};

export default Landing;
