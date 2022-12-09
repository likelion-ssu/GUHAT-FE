import { useState } from "react";
import {
    CheckItem,
    PersonalityContainer,
    PersonalityWrapper,
} from "./PersonalityList.style";
const PersonalityList = ({
    progress,
    option,
    clickListener,
}: {
    progress: number;
    option: string[];
    clickListener?: (check: any) => any | void;
}) => {
    const [check, setChecked] = useState(0);
    return (
        <PersonalityContainer>
            <p>{option[0]}</p>
            <PersonalityWrapper>
                <CheckItem
                    checked={0 === progress}
                    progress={0}
                    onClick={() => {
                        clickListener?.(0);
                    }}
                />
                <CheckItem
                    checked={1 === progress}
                    progress={1}
                    onClick={() => {
                        clickListener?.(1);
                    }}
                />
                <CheckItem
                    checked={2 === progress}
                    progress={2}
                    onClick={() => {
                        clickListener?.(2);
                    }}
                />
                <CheckItem
                    checked={3 === progress}
                    progress={3}
                    onClick={() => {
                        clickListener?.(3);
                    }}
                />
            </PersonalityWrapper>
            <p>{option[1]}</p>
        </PersonalityContainer>
    );
};

export default PersonalityList;
