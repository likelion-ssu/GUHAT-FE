import DownloadIcon from "@/assets/download.svg";
import PDFIcon from "@/assets/pdfIcon.svg";
import styled from "@emotion/styled";
const FileItemLayout = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;
    border: 2px solid gray;
    border-radius: 1rem;
    background: #f6f6f6;
    border: 2px solid #bcbcbc;
    align-items: center;
    .file-content {
        width: 100%;
        display: flex;
        flex-direction: column;

        h1 {
            font-weight: 700;
            font-size: 1.2rem;
        }
        p {
            color: darkgray;
            font-size: 0.8rem;
        }
    }
`;
const FileItem = ({ file }: { file?: any }) => {
    return (
        <FileItemLayout>
            {file ? (
                <>
                    <img src={PDFIcon} alt="pdf 아이콘" />
                    <div className="file-content">
                        <h1>파일 이름</h1>
                        <p>3MB</p>
                    </div>
                    <img src={DownloadIcon} alt="pdf 아이콘" />
                </>
            ) : (
                <>
                    <h1>파일 업로드</h1>
                    <img src={DownloadIcon} alt="pdf 아이콘" />
                </>
            )}
        </FileItemLayout>
    );
};

export default FileItem;
