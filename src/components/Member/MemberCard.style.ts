import styled from "@emotion/styled";

export const MemberCardContainer = styled.button<{
    width?: string;
    member: any;
}>`
    background-color: ${({ member }) =>
        member !== null ? " #303644" : `#505b73`};
    /* background: #303644; */
    box-shadow: 4px 4px 0px #e6e6ee;
    border-radius: 0.8rem;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: ${({ width }) => (width ? width : "100%")};
    padding: 1rem;
    gap: 1rem;

    :active {
        box-shadow: none;
        filter: brightness(0.8);
    }
`;
