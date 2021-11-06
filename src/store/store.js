import {createStore, applyMiddleware, compose} from "redux";
import UsersReducer from "../reducers/UsersReducer";
import firebase from "../firebase/Config";
import { getFirebase, reduxReactFirebase } from "react-redux-firebase";
import{getFirestore, reduxFirestore} from "redux-firestore";
import thunk from "redux-thunk";

var store = createStore(
UsersReducer, 
    compose(
applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
reduxReactFirebase(firebase),
reduxFirestore(firebase)
    )
    );

export default store;