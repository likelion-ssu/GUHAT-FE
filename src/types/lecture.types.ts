export interface lectureType {
    lectureId: number;
    lectureTitle?: string;
    professors?: string[] | null;
    semester?: string | null;
    univ?: string | null;
    major?: string | null;
    group?: string | null;
    schedule?: lectureSchedule | null;
}

interface lectureSchedule {
    day?: string[] | null;
    time?: string | null;
    place?: string;
}
