import MyProfile from "@components/MyProfile/MyProfile";
const Landing = () => {
    return (
        <div style={{ width: "5rem" }}>
            <h1>Landing Page</h1>

            <MyProfile
                nickName="닉네임1107"
                name="홍길동"
                semester="22년도 2학기 수강자"
                major="컴퓨터학부"
                univ="IT대학"
            />
        </div>
    );
};

export default Landing;
