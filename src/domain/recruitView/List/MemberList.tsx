import MemberCard from "@/components/Member/MemberCard";
import { MemberListLayout } from "./MemberList.style";

interface Prop {
    name: string;
    list: any[];
}

const MemberList = ({ name, list }: Prop) => {
    return (
        <MemberListLayout>
            <h1>{name}</h1>
            <div className="member-list">
                {list
                    ? list.map((mem, idx) => {
                          return (
                              <MemberCard
                                  key={"profile" + idx}
                                  width={"7rem"}
                                  member={mem ? mem.nickname : null}
                              />
                          );
                      })
                    : null}
            </div>
        </MemberListLayout>
    );
};

export default MemberList;
