import {
    Progress,
    ProgressContainer,
    ProgressInfo,
    ProgressWrap,
} from "./LevelProgress.style";

interface Props {
    total?: number;
    current?: number;
}

const LevelProgress = ({ total, current }: Props) => {
    return (
        <ProgressContainer>
            <ProgressWrap>
                {total && current ? (
                    <Progress
                        progress={
                            current < total ? (current / total) * 100 : 100
                        }
                    />
                ) : null}
            </ProgressWrap>
            <ProgressInfo>
                <p>Lv.0고딩</p>
                <div style={{ display: "flex" }}>
                    <p className="profile-point">235 </p>
                    <p> Points</p>
                </div>
            </ProgressInfo>
        </ProgressContainer>
    );
};

export default LevelProgress;
