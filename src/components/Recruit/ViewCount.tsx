import ViewCountIcon from "../../assets/viewCount.svg";
import { ViewCountWrap } from "./ViewCount.style";
const ViewCount = ({ count }: { count: number }) => {
    return (
        <ViewCountWrap>
            <img src={ViewCountIcon}></img>
            {count}
        </ViewCountWrap>
    );
};

export default ViewCount;
