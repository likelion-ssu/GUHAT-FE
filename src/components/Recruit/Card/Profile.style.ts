import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const ProfileWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;

    justify-content: center;
    #recruit-profile-level {
        font-weight: 300;
        font-size: 10px;
    }
    #recruit-profile-nickname {
        font-weight: 700;
        font-size: 12px;
    }
`;

export const ProfileImgWrap = styled.div`
    position: relative;
    width: 4rem;
    height: 4rem;
`;

export const ProfileImgBgCircle = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #c6e7fa;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 3.5rem;
`;

export const ProfileImg = styled.div<{ img: string | undefined }>`
    /* background-image: ${(img) => `url(${img})`}; */
    position: absolute;
    background-color: ${themes.colors.gray_600};
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 3.5rem;
`;
