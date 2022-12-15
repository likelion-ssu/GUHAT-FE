import { useQuery } from "react-query";
import Api from "../index";
export const uploadFile = async (file: FormData) => {
    try {
        const { data } = await Api.post("/upload", file);
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const getMyRecruitPost = async (page: number) => {
    return await Api.get(`/profile/lecture/my?page=${page}`)
        .then((res) => res.data.data)
        .catch((e) => console.log(e));
};

export const useGetMyRecruitPost = (page: number) => {
    return useQuery(
        ["profile-recentRecruit", page],
        () => getMyRecruitPost(page),
        {
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
                        lectureName: item.lecture.name,
                        professor: item.lecture.professors,
                    };
                }),
        }
    );
};

export const uploadFiiles = (profile: FormData) => {
    return Api.post("profile/file", profile, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const deleteProfile = (path: string) => {
    console.log(path);
    return Api.post("profile/file/delete", { file: path });
};
