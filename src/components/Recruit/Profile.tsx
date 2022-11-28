import { ProfileImg, ProfileWrap } from "./Profile.style";

interface Props {
    profileImg?: string | null;
    level: string | null;
    nickname: string | null;
}

const Profile = ({ profileImg, level, nickname }: Props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <ProfileImg img={undefined} />
            <ProfileWrap>
                <p id="recruit-profile-level">{level}</p>
                <p id="recruit-profile-nickname">{nickname}</p>
            </ProfileWrap>
        </div>
    );
};

export default Profile;
