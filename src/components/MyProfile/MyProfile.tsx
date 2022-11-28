import {
    MyProfileBtnWrap,
    MyProfileImg,
    MyProfileInfoBtn,
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
    return (
        <MyProfileWrap>
            <MyProfileImg />
            <MyProfileMainText>{nickName}</MyProfileMainText>
            <MyProfileSubText>{name}</MyProfileSubText>
            <div style={{ marginTop: "1.5rem" }}>
                <MyProfileSubText>{semester}</MyProfileSubText>
                <MyProfileSubText>
                    {univ} {major}
                </MyProfileSubText>
            </div>
            <div style={{ margin: "2rem 0" }}>
                <MyProfileSubText>{level}</MyProfileSubText>
            </div>
            <MyProfileBtnWrap>
                <MyProfileInfoBtn>내정보</MyProfileInfoBtn>
                <MyProfileLogOutBtn>로그아웃</MyProfileLogOutBtn>
            </MyProfileBtnWrap>
        </MyProfileWrap>
    );
};

export default MyProfile;
