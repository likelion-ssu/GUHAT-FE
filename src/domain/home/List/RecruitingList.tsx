import Recruit from "@components/Recruit/Card/Recruit";
import {
    RecruitingListContainer,
    RecruitingListWrapper,
} from "./RecruitingList.style";

interface Props {
    recruitingList?: any[];
}
const RecruitingList = ({ recruitingList }: Props) => {
    return (
        <RecruitingListContainer>
            <RecruitingListWrapper>
                {recruitingList
                    ? recruitingList.map((recruit, idx) => {
                          return <Recruit recruit={null} />;
                      })
                    : null}
            </RecruitingListWrapper>
        </RecruitingListContainer>
    );
};

export default RecruitingList;
