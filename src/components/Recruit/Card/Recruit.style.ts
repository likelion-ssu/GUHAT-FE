import themes from "@/styles/themes";
import styled from "@emotion/styled";

export const RecruitWrap = styled.button<{ lectureType?: string }>`
    position: relative;
    display: flex block;
    flex-direction: column;
    justify-content: center;
    width: calc(100% / 3);
    border-radius: 1rem;
    color: ${({ lectureType }) =>
        lectureType === "major"
            ? ` ${themes.colors.gray_300}`
            : ` ${themes.colors.black_500}`};
    box-shadow: 10px 10px 0px #999999;
    padding-top: 4rem;
    margin-top: 4rem;
    background: ${({ lectureType }) =>
        lectureType === "major" ? "#303644;" : " #C6E7FA"};
    :active {
        filter: brightness(0.8);
    }
    :hover {
        transition-duration: 0.4s;
        transform: translate(0, -20px) scale(1.01);
    }
`;

export const RecruitBgPogress = styled.div<{
    progress?: number;
    type?: string;
}>`
    width: ${({ progress }) =>
        progress
            ? progress === 1
                ? `100%`
                : `calc((100% - 4rem) * ${progress} + 2rem)`
            : `0%`};
    max-width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;

    top: 0;
    background: linear-gradient(
            269.66deg,
            rgba(255, 255, 255, 0.1) -48.44%,
            rgba(255, 255, 255, 0) 61.89%
        )
        rgba(15, 52, 114, 0.05);
    box-shadow: none;
`;

export const RecruitLectureTitle = styled.p`
    font-weight: 700;
    font-size: 1.8rem;
    text-align: center;
    align-items: center;
    margin: 1rem;
`;

export const RecruitSubTitle = styled.p<{ type?: string }>`
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    align-items: center;
    color: #9a9a9a;
`;

export const RecruitViewCount = styled.p<{ type?: string }>`
    font-weight: 700;
    text-align: center;
    align-items: center;
    color: ${({ type }) => (type === "major" ? `white` : ` black`)};
`;
