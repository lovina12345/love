import React, { useEffect, useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import {connect} from "react-redux";
import {getAllUsers} from "./actions/userAction"

function App(Props) {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    Props.getAllUsers();
  }, 
  []);
  

  function addUser(user) {
    setUsers([...users, user]);
  }

  return (
    <div className="App">
      <UserForm addUser={addUser} />
      <UserList data={users} />
    </div>
  );
}
const mapDispatchToProps ={
  getAllUsers,
}

export default connect(null,mapDispatchToProps) (App);
