import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./Form";
import Members from "./Members";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div>
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      <Members teamMembers={teamMembers} />
    </div>
  );
}

export default App;
