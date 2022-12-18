import axios from "axios";
import { refresh, refreshErrorHandle } from "../lib/refresh";
console.log("base", process.env.REACT_APP_BASE_URL);
const Api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 30000,
    params: {},
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
});

Api.interceptors.request.use(refresh, refreshErrorHandle);

export default Api;
