import {
    LectureProgressContainer,
    Progress,
    ProgressWrapper,
} from "@/components/History/LectureHistory.style";
import { calculateData } from "../../../util/calculateData";
import { RecruitItemContainer } from "./RecruitListItem.style";

interface Props {
    isOwner?: boolean;
    id: number | string;
    title: string;
    nickname?: string;
    level: string | number;
    lectureName: string;
    year: string;
    semester: string;
    time: string | string[] | null;
    type: string | "major" | "elective";
    professor: string | string[];
    detail: string;
    createdAt: string;
    endDate: string;
    total: number;
    current: number;
}

const RecruitListItem = ({ ...props }: Props) => {
    return (
        <RecruitItemContainer>
            <div className="title-wrapper content-wrapper">
                <p className="lecture-title bold">{props.title}</p>
                <p>
                    {props.year}년도 {props.semester}
                </p>
            </div>
            <div className="content-wrapper bold">
                <p>{props.time}</p>
            </div>
            <div className="text-wrapper">{props.detail}</div>

            <div className="content-wrapper">
                <p className="bold">D-{calculateData(props.endDate)}</p>
                <p className="bold">{props.nickname}</p>
                <p className="level">{props.level}</p>
            </div>
            <p
                className="day-wrapper"
                style={
                    props.type === "major"
                        ? { color: "white" }
                        : { color: "gray" }
                }
            >
                작성일 : {props.createdAt}
            </p>

            <LectureProgressContainer major={props.type === "major"}>
                <ProgressWrapper major={props.type === "major"}>
                    <div className="progress-label">
                        <p>{props.current}</p>
                        <p className="total">/</p>
                        <p className="total">{props.total}</p>
                    </div>
                    <Progress percent={props.current / props.total} />
                </ProgressWrapper>
            </LectureProgressContainer>
        </RecruitItemContainer>
    );
};

export default RecruitListItem;
