import MyProfile from "@components/MyProfile/MyProfile";
import Recruit from "@components/Recruit/Card/Recruit";
import Review from "@components/Review/Card/Review";
const Landing = () => {
    return (
        <div style={{ width: "5rem" }}>
            <h1>Landing Page</h1>
            <Recruit recruit={null} />
            <Review title={"오픈소스"} />
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