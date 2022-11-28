import styled from "@emotion/styled";

export const ProfileWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    #recruit-profile-level {
        font-weight: 300;
        font-size: 10px;
    }
    #recruit-profile-nickname {
        font-weight: 700;
        font-size: 12px;
    }
`;

export const ProfileImg = styled.div<{ img: string | undefined }>`
    /* background-image: ${(img) => `url(${img})`}; */
    background-color: darkgray;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
`;
