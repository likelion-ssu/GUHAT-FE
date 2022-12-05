import { modalState } from "@/storage/recoil/modalState";
import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { ModalBackgroundContainer, ModalContainer } from "./ModalLayout.style";
interface Prop {
    children?: ReactNode;
    closeListener?: () => void;
}
const ModalLayout = ({ children, closeListener }: Prop) => {
    const [isVisible, setVisible] = useRecoilState(modalState);

    return (
        <>
            (
            {isVisible ? (
                <ModalBackgroundContainer>
                    <ModalContainer>{children}</ModalContainer>
                </ModalBackgroundContainer>
            ) : null}
            )
        </>
    );
};

export default ModalLayout;
