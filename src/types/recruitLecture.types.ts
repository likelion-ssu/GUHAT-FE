import { lectureType } from "./lecture.types";
import { user } from "./user.type";
export interface recuritLecture {
    lecture: lectureType | null;
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

export interface RecruitViewResponse {
    isApply: boolean;
    title: string;
    writer: any;
    date: string;
    lecture: object;
    duration: string;
    endDate: string;
    group: any[];
    detail: string;
    piriority: string;
}
