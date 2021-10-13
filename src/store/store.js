import {createStore} from "redux"
import UsersReducer from "../reducers/UsersReducer"

var store = createStore(UsersReducer)



export default store;