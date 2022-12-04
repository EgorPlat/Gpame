import { applyMiddleware, combineReducers, createStore } from "redux"
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga/index";

const inithialState = {
    user: {},
    friendList: [],
}

export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_REGISTER = "AUTH_REGISTER";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_FRIEND_LIST = "UPDATE_FRIEND_LIST";
export const GET_MY_USER_DATA = "GET_MY_USER_DATA";
export const GET_MY_FRIENDS_DATA = "GET_MY_FRIENDS_DATA";

export default function mainReducer (state = inithialState, action) {
    switch(action.type) {
        case UPDATE_USER:
            return {...state, user: action.payload}
        case UPDATE_FRIEND_LIST:
            return {...state, friendList: action.payload}
        default:
            return state;
    }
}

export const AuthLoginAction = (payload) => ({ type: AUTH_LOGIN, payload: payload });
export const AuthRegisterAction = (payload) => ({ type: AUTH_REGISTER, payload: payload });
export const GetMyUserDataAction = () => ({ type: GET_MY_USER_DATA });
export const GetMyFriendsDataAction = () => ({ type: GET_MY_FRIENDS_DATA });

const sagaMiddleWare = createSagaMiddleware();
export const rootReducer = combineReducers({
    main: mainReducer 
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootWatcher);