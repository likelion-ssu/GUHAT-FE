import axios from "axios";
import { useQuery } from "react-query";

const getResultByKeyword = async (keyword: string) => {
    const data = await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            const result: any = [];
            res.data.map((context: any, idx: number) => {
                if (context.body.slice(0, 20).includes(keyword))
                    result.push(context.body.slice(0, 20));
            });

            return result;
        })
        .catch((error) => {
            console.log("error", error);
        });

    return data;
};

export const useResults = (keyword: string) => {
    return useQuery(["keyword", keyword], () => getResultByKeyword(keyword), {
        enabled: !!keyword,
        select: (data) => data.slice(0, 10),
    });
};
