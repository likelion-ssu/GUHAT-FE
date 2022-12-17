import Banner from "@/assets/banner.png";
import styled from "@emotion/styled";
export const BannerWrap = styled.div`
    position: relative;
    width: 100%;
    height: 40vh;
    overflow: hidden;
    padding: 5rem;
    margin: 0rem;
    margin-top: 6rem;
    border-radius: 1rem;

    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    background-image: url(${Banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -10%;

    .more-btn {
        position: absolute;
        bottom: 4rem;
        right: 8rem;
        padding: 0.8rem 2.2rem;
        background-color: #2496ff;
        color: white;
        border-radius: 2rem;
        background-image: none;
    }
`;
