import themes from "@/styles/themes";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const MainButtonContainer = styled.button<{ width?: string }>`
    padding: 1rem;
    background-color: ${themes.colors.black_500};
    border-radius: 1rem;
    color: white;
    width: ${({ width }) => (width ? `${width}` : null)};
`;

const MainButton = ({
    children,
    width,
}: {
    children?: ReactNode;
    width?: string;
}) => {
    return <MainButtonContainer width={width}>{children}</MainButtonContainer>;
};

export default MainButton;
