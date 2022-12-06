import MainLayout from "@components/Layout/MainLayout";
import { ReactNode, useEffect } from "react";
import LoadingLayout from "./LoadingLayout";
import ModalLayout from "./ModalLayout";

const APILayout = ({
    children,
    modal,
}: {
    children: ReactNode;
    modal?: any;
}) => {
    useEffect(() => {
        console.log("api state triger");
    }, []);

    return (
        <>
            <LoadingLayout />
            <ModalLayout>{modal}</ModalLayout>
            <MainLayout>{children}</MainLayout>
        </>
    );
};

export default APILayout;
