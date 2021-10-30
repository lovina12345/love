import {createStore, applyMiddleware, compose} from "redux";
import UsersReducer from "../reducers/UsersReducer";
import firebase from "../firebase/Config";
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import{getFirestore, reduxFirestore} from "react-redux-firebase";
import thunk from "redux-thunk";

var store = createStore(
UsersReducer, 
    compose(
applyMiddleware(thunk.withExtraArgument(getFirestore, getfirebase)),
reduxReactFirebase(firebase),
reduxFirestore(firebase)
    )
    );

export default store;