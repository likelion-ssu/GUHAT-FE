import AddButton from "@assets/header_post_add.svg";
import { PostBtnWrap } from "./PostButton.style";
const PostButton = () => {
    return (
        <PostBtnWrap>
            <p>모집글 작성</p>
            <img src={AddButton} alt="모집글 plus" />
        </PostBtnWrap>
    );
};

export default PostButton;
