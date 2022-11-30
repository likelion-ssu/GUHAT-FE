import { useEffect, useState } from "react";

import ProfileIcon from "@/assets/header_profile.svg";
import ScheduleIcon from "@/assets/header_schedule.svg";
import { HeaderIcon, HeaderWrap, IconWrapper, Title } from "./Header.style";
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
                            <IconWrapper>
                                <HeaderIcon img={ProfileIcon} />
                                <HeaderIcon img={ScheduleIcon} />

                                <PostButton />
                            </IconWrapper>
                        </>
                    )}
                </>
            )}
        </HeaderWrap>
    );
}

export default Header;
