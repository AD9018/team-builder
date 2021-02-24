import React from "react";
import Member from "./Member";
export default function Members(props) {
  return (
    <div>
      {props.teamMembers.map((eachMemberObj, index) => (
        <Member key={index} eachMemberObj={eachMemberObj} />
      ))}
    </div>
  );
}
