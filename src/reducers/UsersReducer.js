


var initialState = {
    users: [
       

    ]
}

 var UsersReducer=(state=initialState,action)=>{
     switch (action.type) {
         case "ADD_USER":
           return {...state,users: [...state.users,action.payload]}

case "DELETE_USER":
    const filteredUsers = state.users.filter((user)=>{
        if(user.id !== action.payload){
           return user; 
        }
    });
    return {...state, users: filteredUsers };

case "EDIT_USER":
    const updatedUsers = state.users.map((user) => {
       if(user.id === action.payload.userId ) {
        
           return action.payload.updatedUser;

       }
    });
    return {...state, users: updatedUsers};

    
     
     default:
return state
     }
};

export default UsersReducer;