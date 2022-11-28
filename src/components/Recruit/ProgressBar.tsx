import {
    Progress,
    ProgressContainer,
    ProgressText,
    ProgressWrap,
} from "./ProgressBar.style";

interface Props {
    total?: number;
    current?: number;
}

const ProgressBar = ({ total, current }: Props) => {
    return (
        <ProgressContainer>
            <ProgressWrap>
                {total && current ? (
                    <Progress progress={(current / total) * 100} />
                ) : null}
            </ProgressWrap>
            <ProgressText>{current}명 남았어요!</ProgressText>
        </ProgressContainer>
    );
};

export default ProgressBar;
