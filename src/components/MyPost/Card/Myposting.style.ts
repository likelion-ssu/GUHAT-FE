import themes from "@/styles/themes";
import styled from "@emotion/styled";

import RecruitBg from "@assets/myposting_recruit.svg";
import ReviewBg from "@assets/myposting_review.svg";
export const MyPostWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 25vw;
    border-radius: 1rem;
    background-color: white;
    padding: 2.54rem;
    box-shadow: 12px 12px 0px #999999;
    :active {
        filter: brightness(0.8);
    }
`;

export const MyPosTitle = styled.p`
    font-weight: 700;
    font-size: 1.8rem;
    align-items: center;
`;

export const MyPostContent = styled.p`
    font-weight: 400;
    font-size: 1.4rem;
    align-items: center;
    height: 5rem;
    overflow: hidden;
    color: #9a9a9a;
`;

export const MyPostIconContainer = styled.div`
    display: flex;
    justify-content: right;
    align-items: flex-end;
    padding: 1rem 0;
    gap: 1rem;
`;

export const MyPostLecturenWrap = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.3rem;
    margin: 1rem 0;
    font-size: 1.2rem;
    color: ${themes.colors.gray_700};

    img {
        filter: brightness(0) saturate(100%) invert(66%) sepia(0%) saturate(3%)
            hue-rotate(192deg) brightness(94%) contrast(84%);
        width: 1.5rem;
    }
`;

export const MyPostingBgImg = styled.div<{ type?: string }>`
    z-index: 0;
    position: absolute;
    bottom: 0rem;
    left: 0;
    min-width: 13rem;
    height: 10rem;
    background-image: ${({ type }) =>
        type === "major" ? `url(${ReviewBg})` : `url(${RecruitBg})`};
    background-size: cover;
    background-repeat: no-repeat;
`;
