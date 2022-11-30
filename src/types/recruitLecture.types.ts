import { lecture } from "./lecture.types";
import { user } from "./user.type";
export interface recuritLecture {
    lecture: lecture | null;
    writerId: string;
    writer: user | null;
    recruitTitle: string;
    endDate: string | null;
    detail: string | null;
    status: string | null;
    viewCount: number | null;
    totalMember: number | null;
    currentMember: number | null;
}
