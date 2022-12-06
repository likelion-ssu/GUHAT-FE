import MemberDefault from "@assets/member_default.svg";
import { MemberCardContainer } from "./MemberCard.style";

interface Props {
    width?: string;
    member: string | null;
    id?: number;
    disabled?: boolean;
    clickListener?: () => any;
}

const MemberCard = ({ member, width, disabled, clickListener }: Props) => {
    return (
        <MemberCardContainer
            width={width}
            member={member}
            disabled={disabled}
            onClick={clickListener}
        >
            <img src={MemberDefault} className="member-img" />
            <div className="member-nickname">{member ? member : "모집중"}</div>
        </MemberCardContainer>
    );
};

export default MemberCard;
