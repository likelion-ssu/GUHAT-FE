import { login } from "@/apis/auth/login";
import MainButton from "@/components/Button";
import InputFiled from "@/components/InputBox/InputFiled";
import APILayout from "@/components/Layout/APILayout";
import { accessTokenState } from "@/storage/atom/tokenState";
import { setRefreshToken } from "@/storage/cookie";
import { loadingState } from "@/storage/recoil/loadingState";
import { modalState } from "@/storage/recoil/modalState";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { refreshTokenType } from "../types/token.type";

const Landing = () => {
    const navigator = useNavigate();
    const [loading, setLoading] = useRecoilState(loadingState);
    const [modalVisible, setModalVisible] = useRecoilState(modalState);
    const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    useEffect(() => {
        setLoading(false);
        setModalVisible(false);
    }, []);

    const onClickLogin = () => {
        if (id && pw && !loading) {
            setLoading(true);
            login(id, pw)
                .then((res) => {
                    alert("로그인 성공");
                    successLogin(
                        res.data.data.accesToken,
                        res.data.data.refreshToken
                    );
                    setTimeout(() => {
                        setLoading(false);
                        navigator("/");
                    }, 1000);
                })
                .catch((error) => {
                    if (error.response.status > 400) {
                        alert(error.response.data.message);
                    }
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                });
        }
    };

    const successLogin = (access: string, refresh: refreshTokenType) => {
        setRefreshToken(refresh);
        setAccessToken(access);
    };

    return (
        <APILayout modal={null}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    onClickLogin();
                }}
            >
                <div
                    style={{
                        display: "flex",
                        height: "80vh",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "30rem",
                        gap: "1rem",
                        margin: "0 auto",
                    }}
                >
                    <InputFiled text={id} handler={setId} hint="Usaint ID" />
                    <InputFiled
                        text={pw}
                        handler={setPw}
                        hint="Usaint Password"
                        type="password"
                    />

                    <MainButton
                        width="100%"
                        clickListener={onClickLogin}
                        disabled={!id && !pw}
                    >
                        로그인
                    </MainButton>
                </div>
            </form>
        </APILayout>
    );
};

export default Landing;
