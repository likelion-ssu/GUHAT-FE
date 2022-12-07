/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: "development" | "production" | "test";
        PUBLIC_URL: string;
        REACT_APP_TEST: string;
        BASE_URL: string;
        AUTH_BASE_URL: string;
    }
}
