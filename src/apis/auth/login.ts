import AuthApi from "@/apis/authApi";
export const login = async (id: string, pw: string) => {
    return await AuthApi.post("/auth/login", { userId: id, password: pw });
};
