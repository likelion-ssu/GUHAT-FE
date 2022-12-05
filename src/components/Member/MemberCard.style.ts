import styled from "@emotion/styled";

export const MemberCardContainer = styled.button<{
    width?: string;
    member: any;
    disabled?: boolean;
}>`
    font-size: 0.9rem;
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
    cursor: ${({ disabled }) =>
        (disabled ? "not-allowed" : "click") + "!important"};
    :active {
        box-shadow: none;
        filter: brightness(0.8);
    }

    .member-nickname {
        height: 2rem;
        text-align: center;
        align-items: center;
        display: flex;
    }
`;
