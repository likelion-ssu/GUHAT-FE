import KeywordChip from "../Chip/KeywordChip";
import {
    RecomandkeywordList,
    RecomandkeywordsWrapper,
} from "./RecomandKeywords.style";

interface Props {
    keywords?: string[];
    clickListener?: (keyword: string) => void;
}

const RecomandKeywords = ({ keywords, clickListener }: Props) => {
    return (
        <RecomandkeywordsWrapper>
            <h1>추천 검색어</h1>
            <RecomandkeywordList>
                {keywords
                    ? keywords.map((keyword, idx) => {
                          return (
                              <KeywordChip
                                  key={idx}
                                  keyword={keyword}
                                  clickListener={clickListener}
                              ></KeywordChip>
                          );
                      })
                    : null}
            </RecomandkeywordList>
        </RecomandkeywordsWrapper>
    );
};

export default RecomandKeywords;
