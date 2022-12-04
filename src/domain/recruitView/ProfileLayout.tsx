import {
    ProfileImg,
    ProfileImgBgCircle,
    ProfileImgWrap,
} from "@/components/Recruit/Card/Profile.style";
import { ProfileLayoutContainer } from "./ProfileLayout.style";

interface Props {
    profileImg?: string;
    nickname: string;
    id: string;
    level: string;
    endDate: string;
}

const ProfileLayout = ({ ...props }: Props) => {
    return (
        <ProfileLayoutContainer>
            <ProfileImgWrap>
                <ProfileImgBgCircle />
                <ProfileImg img={undefined} />
            </ProfileImgWrap>
            <div style={{ marginLeft: "1rem" }}>
                <p className="nickname">{props.nickname}</p>
            </div>
            <p className="level">{props.level}</p>
            <p className="day">|</p>
            <p className="day">{"202020"}</p>
        </ProfileLayoutContainer>
    );
};

export default ProfileLayout;
