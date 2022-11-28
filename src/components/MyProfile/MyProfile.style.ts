import styled from "@emotion/styled";

export const MyProfileWrap = styled.div`
    display: flex;
    width: 22rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 0rem;
    padding-bottom: 0;
    background-color: gray;
`;

export const MyProfileImg = styled.div<{ img?: string }>`
    width: 8rem;
    height: 8rem;
    border-radius: 6.25rem;
    background-image: ${(img) => (img ? `url(${img})` : null)};
    background-color: lightgray;
    margin-bottom: 2rem;
`;

export const MyProfileMainText = styled.p`
    font-size: 18px;
    font-weight: 700;
`;

export const MyProfileSubText = styled.p`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
`;

export const MyProfileBtnWrap = styled.div`
    width: 100%;
    display: flex;
`;

export const MyProfileInfoBtn = styled.div`
    width: 50%;
    padding: 0.8rem;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    background-color: lightgray;
    :active {
        filter: brightness(0.9);
    }
`;

export const MyProfileLogOutBtn = styled(MyProfileInfoBtn)`
    background-color: darkgray;
`;
