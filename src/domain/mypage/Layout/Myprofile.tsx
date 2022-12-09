import themes from "@/styles/themes";
import styled from "@emotion/styled";

const MyProfileWrapper = styled.div`
    padding: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    // background: ${themes.colors.black_500};
    background: rgba(230, 230, 238, 0.1);
    border-radius: 20px;
    min-height: 4rem;
    color: white;

    .nickname-content {
        font-size: 1.2rem;
        margin: 1rem 0;
        margin-top: 2rem;
    }
    .sub-content {
        color: ${themes.colors.gray_500};
    }
`;

const MyProfileImgWrapper = styled.div`
    position: relative;
    height: 5rem;

    .circle {
        width: 5rem;
        height: 5rem;
    }
    .main-circle {
        position: absolute;
        left: 0;
        background: #f4f4f4;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 80px;
    }
    .sub-circle {
        position: absolute;
        left: 1.5rem;
        background: rgba(198, 231, 250, 0.6);
        border-radius: 80px;
    }

    .level-content {
        position: absolute;
        bottom: 0;
        left: 7rem;
        color: white;
    }
`;

interface Props {
    profileImg?: string;
    level: string | number;
    nickname: string;
    year: string;
    semester: string;
    major: string;
}

const Myprofile = ({ ...props }: Props) => {
    return (
        <MyProfileWrapper>
            <MyProfileImgWrapper>
                <div className="circle sub-circle"></div>
                <div className="circle main-circle"></div>
                <p className="level-content">{props.level}</p>
            </MyProfileImgWrapper>
            <p className="nickname-content">{props.nickname}</p>
            <p className="sub-content">
                {props.year}/{props.semester}
            </p>
            <p className="sub-content">{props.major}</p>
        </MyProfileWrapper>
    );
};

export default Myprofile;
