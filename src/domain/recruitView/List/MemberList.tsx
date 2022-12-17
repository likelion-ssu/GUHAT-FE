import MemberCard from "@/components/Member/MemberCard";
import { useEffect, useState } from "react";
import { MemberListLayout } from "./MemberList.style";

interface Prop {
    name: string;
    list: any[];
    max: number;
}

const MemberList = ({ name, list, max }: Prop) => {
    const [members, setMembers] = useState<any | null>([]);
    useEffect(() => {
        const init = Array.from({ length: max }, () => null);

        list.forEach((i, idx) => {
            init[idx] = i;
        });

        setMembers(init);
    }, []);
    return (
        <MemberListLayout>
            <h1>{name}</h1>
            <div className="member-list">
                {members
                    ? members.map((mem: any, idx: number) => {
                          return (
                              <MemberCard
                                  key={"profile" + idx}
                                  width={"7rem"}
                                  member={
                                      mem && mem.status === "success"
                                          ? mem.user.nickname
                                          : null
                                  }
                                  profileImg={
                                      mem && mem.status === "success"
                                          ? mem.user.profileImg
                                          : null
                                  }
                              />
                          );
                      })
                    : null}
            </div>
        </MemberListLayout>
    );
};

export default MemberList;
