import React, { useState } from "react";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setgen] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    
    let user = {
      name: name,
      email: email,
      gen: gen,
    };


    props.addUser(user);


    setName("");
    setEmail("");
    setgen("");
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