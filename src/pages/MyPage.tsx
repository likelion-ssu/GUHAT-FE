import MypageLayout from "@/domain/mypage/MypageLayout";
import APILayout from "../components/Layout/APILayout";

const MyPage = () => {
    return (
        <APILayout modal={null}>
            <MypageLayout />
        </APILayout>
    );
};

export default MyPage;
