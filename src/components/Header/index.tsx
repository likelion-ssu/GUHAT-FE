import { useEffect, useState } from "react";

import ScheduleIcon from "@assets/Schedule.svg";
import { HeaderWrap, Title } from "./Header.style";
import PostButton from "./PostButton";
import SearchBar from "./SearchBar";

type HeaderProps = {
    title?: string | undefined;
    color?: string | undefined;
};

function Header({ title }: HeaderProps) {
    const [isSSR, setIsSSR] = useState(true);

    useEffect(() => {
        setIsSSR(false);
    }, []);

    return (
        <HeaderWrap>
            {!isSSR && (
                <>
                    {title && (
                        <>
                            <Title>{title}</Title>
                            <SearchBar />
                            <PostButton />
                            <img
                                id="header-schedule-btn"
                                src={ScheduleIcon}
                                alt="스케줄 아이콘"
                            />
                            <img
                                id="header-profile-btn"
                                src={ScheduleIcon}
                                alt="프로필 아이콘"
                            />
                        </>
                    )}
                </>
            )}
        </HeaderWrap>
    );
}

export default Header;
