import { getCookieToken } from "@/storage/cookie";
import axios from "axios";
import { setRefreshToken } from "../../storage/cookie";

// @ts-ignore
const getAccessToekn = async () => {
    const refreshToken = getCookieToken();

    let token = "";

    if (refreshToken) {
        const body = {
            refreshToken: refreshToken,
        };
        // 토큰 갱신 서버통신
        token = await axios
            .post(`/auth/token`, body, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
                withCredentials: true,
                baseURL: "http://localhost:8003",
            })
            .then((res) => {
                console.log(res.data.data);
                let res_refreshToken = res.data.data.refreshToken;

                if (res_refreshToken && refreshToken !== res_refreshToken)
                    setRefreshToken(refreshToken);
                return res.data.data.accessToken;
            })
            .catch((error) => {
                console.log(error);
            });
        return token;
    } else return token;
};

export { getAccessToekn };
