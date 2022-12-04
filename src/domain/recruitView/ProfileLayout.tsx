import EditButton from "@/components/Button/EditButton";
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
    isOwner: boolean;
}

const ProfileLayout = ({ ...props }: Props) => {
    const onClickEdit = () => {};
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
            <div style={{ marginLeft: "1rem" }}>
                {props.isOwner ? (
                    <EditButton clickListener={onClickEdit} />
                ) : null}
            </div>
        </ProfileLayoutContainer>
    );
};

export default ProfileLayout;
