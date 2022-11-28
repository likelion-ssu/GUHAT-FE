import {
    RecruitContentDDay,
    RecruitContentDetail,
    RecruitContentTitle,
    RecruitContentWrap,
} from "./RecruitContent.style";

interface Props {
    title: string;
    detail: string;
    children: React.ReactNode;
}

const RecruitContent = ({ title, detail, children }: Props) => {
    return (
        <RecruitContentWrap>
            <RecruitContentTitle>{title}</RecruitContentTitle>
            <RecruitContentDetail>{detail}</RecruitContentDetail>
            {children}
            <RecruitContentDDay>D-3</RecruitContentDDay>
        </RecruitContentWrap>
    );
};

export default RecruitContent;
