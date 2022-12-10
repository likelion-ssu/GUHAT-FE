import Edit from "@assets/edit.svg";
import {
    ReviewHistoryContainer,
    ReviewLikeCount,
    ReviewLikeTagWrap,
    ReviewTagThumb,
} from "./ReviewHistory.style";
const ReviewHistory = () => {
    return (
        <ReviewHistoryContainer>
            <div className="recruit-title">
                <p> 팀플 글 제목</p>
                <img className="edit-img" src={Edit} alt="편집 아이콘" />
            </div>
            <div className="recruit-sub-title">
                <p>과목명/교수님</p>
            </div>
            <p className="recruit-day">작성일 : 2022-09-09</p>
            <div className="recruit-content">
                앞이 우는 길지 거선의 트고, 그리하였는가? 두손을 스며들어 이성은
                몸이 속에서 놀이 철환하였는가? 날카로우나 보이는 군영과
                위하여서, 원대하고, 바이며, 이것이다. 전인 아니더면 ... 앞이
                우는 길지 거선의 트고, 그리하였는가? 두손을 스며들어 이성은 몸이
                속에서 놀이 철환하였는가? 날카로우나 보이는 군영과 위하여서,
                원대하고, 바이며, 이것이다. 전인 아니더면 ... 앞이 우는 길지
                거선의 트고, 그리하였는가? 두손을 스며들어 이성은 몸이 속에서
                놀이 철환하였는가? 날카로우나 보이는 군영과 위하여서, 원대하고,
                바이며, 이것이다. 전인 아니더면 ... 앞이 우는 길지 거선의 트고,
                그리하였는가? 두손을 스며들어 이성은 몸이 속에서 놀이
                철환하였는가? 날카로우나 보이는 군영과 위하여서, 원대하고,
                바이며, 이것이다. 전인 아니더면 ... 앞이 우는 길지 거선의 트고,
                그리하였는가? 두손을 스며들어 이성은 몸이 속에서 놀이
                철환하였는가? 날카로우나 보이는 군영과 위하여서, 원대하고,
                바이며, 이것이다. 전인 아니더면 ... 앞이 우는 길지 거선의 트고,
                그리하였는가? 두손을 스며들어 이성은 몸이 속에서 놀이
                철환하였는가? 날카로우나 보이는 군영과 위하여서, 원대하고,
                바이며, 이것이다. 전인 아니더면 ... 앞이 우는 길지 거선의 트고,
                그리하였는가? 두손을 스며들어 이성은 몸이 속에서 놀이
                철환하였는가? 날카로우나 보이는 군영과 위하여서, 원대하고,
                바이며, 이것이다. 전인 아니더면 ... 앞이 우는 길지 거선의 트고,
                그리하였는가? 두손을 스며들어 이성은 몸이 속에서 놀이
                철환하였는가? 날카로우나 보이는 군영과 위하여서, 원대하고,
                바이며, 이것이다. 전인 아니더면 ...
            </div>
            <ReviewLikeTagWrap></ReviewLikeTagWrap>
            <ReviewTagThumb />
            <ReviewLikeCount>+100</ReviewLikeCount>
        </ReviewHistoryContainer>
    );
};

export default ReviewHistory;
