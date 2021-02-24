import React from "react";

export default function Member(props) {
  console.log(props);
  return <div>{props.eachMemberObj.userName}</div>;
}
