import styled from "@emotion/styled";

export const MemberCardContainer = styled.button<{
    width?: string;
    member: any;
    disabled?: boolean;
}>`
    color: white;
    font-size: 0.9rem;
    /* background-color: ${({ member }) =>
        member !== null ? " " : `#505b73`}; */
    ${({ member }) =>
        member !== null
            ? "background-color : none; background-image: linear-gradient(to top, #09203f 0%, #537895 100%);"
            : `background-color : #fcfafa ; color : black; border : 1px solid darkgray;  background-image : none;`}

    /* background: #303644; */
    box-shadow: 4px 4px 0px #e6e6ee;
    border-radius: 0.8rem;

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

    :disabled {
        opacity: 1;
    }
`;
