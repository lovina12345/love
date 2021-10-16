


var initialState = {
    users: [
        {
            name:"nana",
        gen:"23"
    },

    {
        name:"nana",
    gen:"23"
},

    ]
}

 var UsersReducer=(state=initialState,action)=>{
     switch (action.type) {
         case "ADD_USER":
           return {...state,users: [...state.users,action.payload]}
     
     default:
return state
     }
}

export default UsersReducer;