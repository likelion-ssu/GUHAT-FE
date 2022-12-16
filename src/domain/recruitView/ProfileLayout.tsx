import EditButton from "@/components/Button/EditButton";
import {
    ProfileImg,
    ProfileImgBgCircle,
    ProfileImgWrap,
} from "@/components/Recruit/Card/Profile.style";
import { displayLevel } from "../../util/displayLevel";
import { ProfileLayoutContainer } from "./ProfileLayout.style";

interface Props {
    profileImg?: string;
    nickname: string;
    id: string | number;
    level: string | number;
    endDate: string;
    isOwner: boolean;
    editClickListener?: () => void;
}

const ProfileLayout = ({ ...props }: Props) => {
    const onClickEdit = () => {
        props.editClickListener?.();
    };
    return (
        <ProfileLayoutContainer>
            <ProfileImgWrap>
                <ProfileImgBgCircle />
                <ProfileImg img={props.profileImg} />
            </ProfileImgWrap>
            <div style={{ marginLeft: "1rem" }}>
                <p className="nickname">{props.nickname}</p>
            </div>
            <p className="level">{displayLevel(props.level)}</p>
            {props.endDate ? (
                <>
                    {" "}
                    <p className="day">|</p>
                    <p className="day">{props.endDate}</p>
                </>
            ) : null}

            <div style={{ marginLeft: "1rem" }}>
                {props.isOwner ? (
                    <EditButton clickListener={onClickEdit} />
                ) : null}
            </div>
        </ProfileLayoutContainer>
    );
};

export default ProfileLayout;
