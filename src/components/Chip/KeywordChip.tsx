import { KeywordChipWrapper } from "./KeywordChip.style";
interface Props {
    keyword?: string;
}
const KeywordChip = ({ keyword }: Props) => {
    return <KeywordChipWrapper>{keyword}</KeywordChipWrapper>;
};

export default KeywordChip;
