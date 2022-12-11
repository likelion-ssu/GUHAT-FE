import { useQuery } from "react-query";
import Api from "..";

export const getHomeRecruitList = async () => {
    return await Api.get("/home/lecture");
};

export const getRecentRecruitList = async (page: number) => {
    return await Api.get(
        `/posting/lecture/all?sort={latest}&page=${page}`
    ).then((res) => res.data.data);
};

export const useRecentRecruit = (page: number) => {
    return useQuery(["recentRecruit", page], () => getRecentRecruitList(page), {
        enabled: !!page,
        select: (data: any[]) =>
            data.map((item: any, idx: number) => {
                return {
                    id: item.id,
                    isOwner: item.isMine,
                    title: item.title,
                    detail: item.detail,
                    total: item.total,
                    current: item.current,
                    endDate: item.endDate,
                    createdAt: "들어올거야 나중에",
                    lectureName: item.lecture.title,
                    professor: item.lecture.professors,
                };
            }),
    });
};
