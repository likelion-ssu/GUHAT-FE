import Review from "@components/Review/Card/Review";
import { MyPostingContainer, MyPostingListWrapper } from "./MyPosting.style";

interface Props {
    postList?: any[];
}
const MyPostingList = ({ postList }: Props) => {
    return (
        <MyPostingContainer>
            <div style={{ display: "flex" }}>
                <p className="myinfo" id="myinfo-nickname">
                    닉네임님
                </p>
                <p className="myinfo">이 올린 글</p>
            </div>

            <MyPostingListWrapper>
                {postList
                    ? postList.map((post, idx) => {
                          return <Review title={idx.toString()} />;
                      })
                    : null}
            </MyPostingListWrapper>
        </MyPostingContainer>
    );
};

export default MyPostingList;
