import { getFirebase } from "react-redux-firebase";

export const addUser =(user) => {
    // console.log("addUser", user);
    return(dispatch,state, {getFirestore}) => {
        getFirestore()
        .collection("users")
        .add(user)
        .then(
            () => {},
            () => {}
        );
    };
    //  type: "ADD_USER",
    // payload: user,

}

export const deleteUser =(userId) =>{
    return{
        type :"DELETE_USER",
        payload: userId,
    }
};

export const editUser =(userId,updatedUser) =>{
    return{
        type :"EDIT_USER",
        payload: {userId,updatedUser}
    }
};

export const getAllUsers =() => {
    return(dispatch,state, {getFirestore}) => {
 getFirestore().collection("users").onSnapshot((snapshot)=>{
     let users =[];
     snapshot.forEach((doc)=>{  
         users.push(doc.data())
     })
     dispatch({
         type: "GET_ALL_USERS",
         payload: users,
     });

 })
    }

}