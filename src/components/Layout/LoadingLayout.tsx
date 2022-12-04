import { useEffect, useState } from "react";
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
    const [message, setMessage] = useState<string | null>(
        msg ? msg : "Loading..."
    );
    useEffect(() => {
        setTimeout(() => {
            setMessage("서버 요청이 많아 대기 시간이 길어지고 있습니다...");
        }, 5000);
        setTimeout(() => {
            setMessage(null);
        }, 6000);
    }, []);
    return (
        <>
            {message || success ? (
                <LoadingContainer>
                    {error ? <h1>{error}</h1> : <h1>{message}</h1>}
                </LoadingContainer>
            ) : null}
        </>
    );
};

export default LoadingLayout;
