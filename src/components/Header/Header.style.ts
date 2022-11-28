import styled from "@emotion/styled";
const HeaderWrap = styled.header`
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
    align-items: center;
    z-index: 100;
    margin: 0 0 0 -2.4rem;
    background-color: lightblue;
    padding: 0 2.4rem;
    width: calc(100% + 2.4rem);
    height: 7rem;

    #header-schedule-btn {
        position: absolute;
        right: 6%;
        transform: translate(6%);
        height: 60%;
    }

    #header-profile-btn {
        position: absolute;
        right: 10%;
        transform: translate(10%);
        height: 60%;
    }
`;

const Title = styled.div`
    width: 10rem;
    position: absolute;
    left: 7%;
    transform: translate(-7%);
    margin: 0 auto;
    font-size: 2rem;
    font-weight: 700;
`;

export { HeaderWrap, Title };
