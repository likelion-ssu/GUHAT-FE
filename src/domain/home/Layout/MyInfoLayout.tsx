import { userState } from "@/storage/recoil/userState";
import MyProfile from "@components/MyProfile/MyProfile";
import { useRecoilValue } from "recoil";
import MyPostingList from "../List/MyPostingList";
import { MyInfoWrapper } from "./MyInfoLayout.style";

const MyInfoLayout = () => {
    const list = [1, 2, 3, 4, 5, 6, 7];
    const userInfo = useRecoilValue(userState);
    return (
        <>
            {userInfo ? (
                <MyInfoWrapper>
                    <MyProfile
                        nickName={userInfo?.nickname}
                        name={userInfo?.name!!}
                        semester={`${userInfo.grade}학년 ${userInfo.semester}학기 수강자`}
                        major={`${userInfo.major}`}
                        univ={`${userInfo.univ}`}
                        {...userInfo}
                    />
                    <MyPostingList postList={list} />
                </MyInfoWrapper>
            ) : null}
        </>
    );
};

export default MyInfoLayout;
