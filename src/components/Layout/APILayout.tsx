import MainLayout from "@components/Layout/MainLayout";
import { ReactNode } from "react";
import LoadingLayout from "./LoadingLayout";
import ModalLayout from "./ModalLayout";

const APILayout = ({
    children,
    modal,
}: {
    children: ReactNode;
    modal?: any;
}) => {
    return (
        <>
            <LoadingLayout />
            <ModalLayout>{modal}</ModalLayout>
            <MainLayout>
                {/* <ModalLayout> {modal}</ModalLayout> */}
                {children}
            </MainLayout>
        </>
    );
};

export default APILayout;
