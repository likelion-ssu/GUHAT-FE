import { calculateData } from "@/util/calculateData";
import Edit from "@assets/edit.svg";
import {
    LectureHistoryContainer,
    LectureProgressContainer,
    Progress,
    ProgressWrapper,
} from "./LectureHistory.style";

interface Props {
    isOwner: boolean;
    id: number | string;
    title: string;
    nickname?: string;
    level?: string | number;
    endDate: string;
    lectureName: string;
    time?: string | string[] | null;
    type: string | "major" | "elective";
    professor: string | string[];
    detail: string;
    createdAt: string;
    total: number;
    current: number;
}

const LectureHistory = ({ ...props }: Props) => {
    return (
        <LectureHistoryContainer>
            <div className="recruit-title">
                <p> {props.title}</p>
                <img className="edit-img" src={Edit} alt="편집 아이콘" />
            </div>
            <div className="recruit-sub-title">
                <h1>{calculateData(props.createdAt)}</h1>
                <p>
                    {props.lectureName}/{props.professor}
                </p>
            </div>
            <div className="recruit-content">{props.detail}</div>
            <LectureProgressContainer major={props.type === "major"}>
                <p className="recruit-day">작성일 : {props.createdAt}</p>
                <ProgressWrapper major={props.type === "major"}>
                    <div className="progress-label">
                        <p>3</p>
                        <p className="total">/</p>
                        <p className="total">5</p>
                    </div>
                    <Progress percent={props.current / props.total} />
                </ProgressWrapper>
            </LectureProgressContainer>
        </LectureHistoryContainer>
    );
};

export default LectureHistory;
