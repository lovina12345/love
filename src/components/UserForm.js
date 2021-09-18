import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setgen] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email && name) {
    let newUser = {
      name: name,
      email: email,
      gen: gen,
      id: uuid(),

    };


    props.addUser(newUser);


    setName("");
    setEmail("");
    setgen("");
  }
}

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="gen"
        name="gen"
        value={gen}
        onChange={(e) => setgen(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
export default UserForm;