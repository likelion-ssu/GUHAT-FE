import { ProfileImg, ProfileWrap } from "../../Recruit/Card/Profile.style";

interface Props {
    profileImg?: string | null;
    level: string | null;
    nickname: string | null;
}

const Profile = ({ profileImg, level, nickname }: Props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <ProfileWrap
                style={{ justifyContent: "right", marginRight: "0.5rem" }}
            >
                <p id="recruit-profile-level" style={{ textAlign: "right" }}>
                    {level}
                </p>
                <p id="recruit-profile-nickname" style={{ textAlign: "right" }}>
                    {nickname}
                </p>
            </ProfileWrap>
            <ProfileImg img={undefined} />
        </div>
    );
};

export default Profile;
