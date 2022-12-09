import MainButton from "@/components/Button";
import FileItem from "@/components/FileItem";
import styled from "@emotion/styled";

import UploadImg from "@/assets/upload.svg";
import { useRef, useState } from "react";

const PortfolioListcontainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0;
    margin-bottom: 1rem;
    max-height: 20rem;
    overflow-y: auto;
    position: relative;
    .file-content-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: left;
        padding: 0;
        gap: 1rem;
    }
`;

interface Props {
    mode: number;
    files?: any[];
}

const PortFolioLayout = ({ mode, files }: Props) => {
    const fileRef = useRef<HTMLInputElement>(null);
    const [fileList, setFileList] = useState(files ? files : []);
    const [sendFile, setSendFile] = useState<FormData>();

    const onClickUplod = () => {
        alert("파일업로드");
        if (fileRef) fileRef.current!!.click();
    };

    const fileHandleChange = (e: any) => {
        console.log(e.target.files);
        const newFiles = [...fileList];
        const files = [...e.target.files];
        const form = new FormData();
        files.forEach((element: File) => {
            newFiles.push(element);
            form.append("file", element);
        });
        setSendFile(form);
        setFileList(newFiles);
    };

    return (
        <div>
            <PortfolioListcontainer>
                <div className="file-content-wrapper">
                    {fileList?.map((file) => (
                        <FileItem file={file} />
                    ))}
                </div>
            </PortfolioListcontainer>
            {mode ? (
                <>
                    <MainButton width="50%" clickListener={onClickUplod}>
                        파일 업로드
                        <img
                            src={UploadImg}
                            alt="업로드이미지"
                            style={{
                                width: "1.3rem",
                                marginLeft: "1rem",
                            }}
                        />
                    </MainButton>
                    <input
                        multiple
                        ref={fileRef}
                        type="file"
                        style={{ display: "none" }}
                        onChange={fileHandleChange}
                    />
                </>
            ) : null}
        </div>
    );
};

export default PortFolioLayout;
