import EditButton from "@/components/Button/EditButton";
import styled from "@emotion/styled";

const AboutmeContainer = styled.div`
    margin-top: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-left: calc(27rem);
    padding: 0rem 6rem;

    .aboutme-nickname {
        width: 100%;
        margin-left: 10rem;
        left: 10rem;
        font-size: 3rem;
        font-family: 500;
    }
    .aboutme-comment {
        margin-left: 10rem;
        margin-top: 1rem;
        font-size: 1.5rem;
        font-family: 500;
    }
    .aboutme-label {
        width: 100%;
        margin-top: 3rem;
        font-size: 1.5rem;
        font-family: 500;
    }
    .aboutme-content {
        margin-top: 1rem;
        width: 100%;
        font-size: 1.2rem;
        margin-bottom: 5rem;
    }
`;
const MyProfileImgWrapper = styled.div`
    position: relative;
    height: 7rem;
    top: 5rem;

    .circle {
        width: 6rem;
        height: 6rem;
    }
    .main-circle {
        position: absolute;
        left: 0;
        background: #f4f4f4;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8rem;
    }
    .sub-circle {
        width: 3rem;
        height: 3rem;
        position: absolute;
        bottom: 1rem;
        left: 5rem;
        background: rgba(198, 231, 250, 1);
        border-radius: 8rem;
    }
`;
const EditWrapper = styled.div`
    position: absolute;
    right: 1rem;
    top: 1rem;
`;

const AboutMeLayout = () => {
    return (
        <AboutmeContainer>
            <EditWrapper>
                <EditButton />
            </EditWrapper>
            <MyProfileImgWrapper>
                <div className="circle sub-circle"></div>
                <div className="circle main-circle"></div>
            </MyProfileImgWrapper>
            <div className="aboutme-nickname"> 닉네임1109</div>
            <div className="aboutme-comment">"안되면 되게 하라"</div>
            <div className="aboutme-label">ABOUT ME</div>
            <div className="aboutme-content">
                {" "}
                안앞이 우는 길지 거선의 트고, 그리하였는가? 두손을 스며들어
                이성은 몸이 속에서 놀이 철환하였는가? 날카로우나 보이는 군영과
                위하여서, 원대하고, 바이며, 이것이다. 전인 아니더면, 그들은
                미인을 있는가? 사랑의 대한 품으며, 행복스럽고 가장 사막이다. 살
                꾸며 생생하며, 유소년에게서 그들은 소리다.이것은 되려니와,
                풍부하게 인생을 것이다.
            </div>
        </AboutmeContainer>
    );
};

export default AboutMeLayout;
