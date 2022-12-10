import Edit from "@assets/edit.svg";
import {
    LectureHistoryContainer,
    LectureProgressContainer,
    Progress,
    ProgressWrapper,
} from "./LectureHistory.style";
const LectureHistory = ({ type }: { type: string }) => {
    const total = 5;
    const current = 3;
    return (
        <LectureHistoryContainer>
            <div className="recruit-title">
                <p> 팀플 글 제목</p>
                <img className="edit-img" src={Edit} alt="편집 아이콘" />
            </div>
            <div className="recruit-sub-title">
                <h1>D-3</h1>
                <p>과목명/교수님</p>
            </div>
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
                바이며, 이것이다. 전인 아니더면 ... 앞이 우는 길지 거선
            </div>
            <LectureProgressContainer major={type === "major"}>
                <p className="recruit-day">작성일 : 2022-02-02</p>
                <ProgressWrapper major={type === "major"}>
                    <div className="progress-label">
                        <p>3</p>
                        <p className="total">/</p>
                        <p className="total">5</p>
                    </div>
                    <Progress percent={current / total} />
                </ProgressWrapper>
            </LectureProgressContainer>
        </LectureHistoryContainer>
    );
};

export default LectureHistory;
