import Star from "@/assets/star.svg";
import UnsmileEmoji from "@/assets/unsmile_emoji.png";
import { CommentContainer, EmojiContainer } from "./Comment.style";

interface Props {
    day: string;
    emoji: string;
    score: string | number;
    content: string;
}

const Comment = ({ ...props }: Props) => {
    return (
        <CommentContainer>
            <EmojiContainer>
                <img
                    className="emoji-img"
                    src={UnsmileEmoji || props.emoji}
                    alt="이모지"
                ></img>
                <div className="star-wrapper">
                    <img className="star-img" src={Star}></img>
                    <p>1</p>
                </div>
            </EmojiContainer>
            <p className="day-label">{props.day}전</p>
            <p>{props.content}</p>
        </CommentContainer>
    );
};

export default Comment;
