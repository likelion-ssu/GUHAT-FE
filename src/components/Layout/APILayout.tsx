import MainLayout from "@components/Layout/MainLayout";
import { ReactNode } from "react";
import LoadingLayout from "./LoadingLayout";

const APILayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <LoadingLayout />
            <MainLayout>{children}</MainLayout>
        </>
    );
};

export default APILayout;
