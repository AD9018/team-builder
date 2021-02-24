import React, { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (
      name.length < 2 ||
      !email ||
      !email.includes("@") ||
      !email.includes(".") ||
      roles === "Role" ||
      roles === ""
    ) {
      let str = `${name.length < 2 ? "name" : ""} ${
        email
          ? email.includes("@")
            ? email.includes(".")
              ? ""
              : "email"
            : "email"
          : "email"
      } ${roles === "Role" || roles === "" ? "roles" : ""}`;

      let arr = str.split(" ");

      alert(`Following Fields needs to be filled out: ${arr.join(",")}`);
    } else {
      const userObj = {
        userName: name,
        emailHandle: email,
        position: roles,
      };
      props.setTeamMembers([...props.teamMembers, userObj]);
    }
  };

  return (
    <form>
      <input
        name="Name"
        type="text"
        placeholder="Name Here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="Email"
        type="email"
        placeholder="E-mail Here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select onChange={(e) => setRoles(e.target.value)}>
        <option selected disabled hidden value="">
          Role
        </option>
        <option
          disabled={roles === "Back-End Engineer" ? true : false}
          value="Back-End Engineer"
        >
          Back-End Engineer
        </option>
        <option
          disabled={roles === "Front-End Engineer" ? true : false}
          value="Front-End Engineer"
        >
          Front-End Engineer
        </option>
        <option
          disabled={roles === "Full-Stack Web Developer" ? true : false}
          value="Full-Stack Web Developer"
        >
          Full-Stack Web Developer
        </option>
        <option
          disabled={roles === "UX/UI Designer" ? true : false}
          value="UX/UI Designer"
        >
          {" "}
          UX/UI Designer
        </option>
      </select>
      <button onClick={(e) => submitForm(e)}>Submit</button>
    </form>
  );
}
