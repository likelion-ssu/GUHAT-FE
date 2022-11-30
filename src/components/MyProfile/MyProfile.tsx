import LevelProgress from "./LevelProgress";
import {
    MyProfileBgProgress,
    MyProfileBtnWrap,
    MyProfileImg,
    MyProfileInfoBtn,
    MyProfileInfoContainer,
    MyprofileinfoWrap,
    MyProfileLogOutBtn,
    MyProfileMainText,
    MyProfileSubText,
    MyProfileWrap,
} from "./MyProfile.style";

interface Props {
    nickName: string;
    name: string;
    semester: string;
    univ: string;
    major: string;
    level?: string;
}

const MyProfile = ({ nickName, name, semester, univ, major, level }: Props) => {
    const total = 300;
    const current = 159;

    return (
        <MyProfileWrap>
            <MyProfileBgProgress progress={current / total} />

            <MyProfileInfoContainer>
                <MyProfileImg />
                <MyprofileinfoWrap>
                    <p className="profile-number">3</p>
                    <p className="profile-label">진행중인 팀플</p>
                </MyprofileinfoWrap>
                <MyprofileinfoWrap>
                    <p className="profile-number">4,4</p>
                    <p className="profile-label">팀원들의 평가</p>
                </MyprofileinfoWrap>
            </MyProfileInfoContainer>

            <MyProfileMainText>{nickName}</MyProfileMainText>
            <MyProfileSubText>{name}</MyProfileSubText>
            <div style={{ marginTop: "1.5rem" }}>
                <MyProfileSubText>{semester}</MyProfileSubText>
                <MyProfileSubText>
                    {univ} {major}
                </MyProfileSubText>
            </div>
            <div style={{ marginTop: "2rem" }}>
                <MyProfileSubText>{level}</MyProfileSubText>
            </div>
            <LevelProgress total={total} current={current} />
            <MyProfileBtnWrap>
                <MyProfileInfoBtn>내정보</MyProfileInfoBtn>
                <MyProfileLogOutBtn>로그아웃</MyProfileLogOutBtn>
            </MyProfileBtnWrap>
        </MyProfileWrap>
    );
};

export default MyProfile;
