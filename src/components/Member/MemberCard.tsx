import MemberDefault from "@assets/member_default.svg";
import { MemberCardContainer } from "./MemberCard.style";

interface Props {
    width?: string;
    member: any;
}

const MemberCard = ({ member, width }: Props) => {
    return (
        <MemberCardContainer width={width} member={member}>
            <img src={MemberDefault} className="member-img" />
            <p>{member ? member : "모집중"}</p>
        </MemberCardContainer>
    );
};

export default MemberCard;
