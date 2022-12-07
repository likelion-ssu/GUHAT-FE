import MyProfile from "@components/MyProfile/MyProfile";
import MyPostingList from "../List/MyPostingList";
import { MyInfoWrapper } from "./MyInfoLayout.style";

const MyInfoLayout = () => {
    const list = [1, 2, 3, 4, 5, 6, 7];
    return (
        <>
            <MyInfoWrapper>
                <MyProfile
                    nickName="닉네임1107"
                    name="홍길동"
                    semester="22년도 2학기 수강자"
                    major="컴퓨터학부"
                    univ="IT대학"
                />
                <MyPostingList postList={list} />
            </MyInfoWrapper>
        </>
    );
};

export default MyInfoLayout;
