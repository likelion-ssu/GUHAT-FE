import Api from "../index";
export const uploadFile = async (file: FormData) => {
    try {
        const { data } = await Api.post("/upload", file);
        return data;
    } catch (e) {
        console.log(e);
    }
};
