import { errorState, loadingState } from "@/storage/recoil/loadingState";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoadingContainer } from "./LoadingLayout.style";
const LoadingLayout = ({
    msg,
    error,
    success,
}: {
    msg?: string;
    error?: string;
    success?: boolean;
}) => {
    const [loading, setLoading] = useRecoilState(loadingState);
    const errorMsg = useRecoilValue(errorState);

    const [message, setMessage] = useState<string | null>(
        msg ? msg : "Loading..."
    );
    useEffect(() => {
        setTimeout(() => {
            setMessage("서버 요청이 많아 대기 시간이 길어지고 있습니다...");
        }, 5000);
    }, []);

    useEffect(() => {}, [errorMsg]);

    return (
        <>
            {loading || errorMsg ? (
                <LoadingContainer>
                    {errorMsg ? <h1>{errorMsg}</h1> : <h1>{message}</h1>}
                </LoadingContainer>
            ) : null}
        </>
    );
};

export default LoadingLayout;
