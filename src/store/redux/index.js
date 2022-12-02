import { applyMiddleware, combineReducers, createStore } from "redux"
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga/index";

const inithialState = {
    count: 0,
}

export const ASYNCINCREMENT = "ASYNC-INCREMENT";
export const INCREMENT = "INCREMENT";

export default function mainReducer (state = inithialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1}
        default:
            return state;
    }
}

export const AsyncIncrementCountActionCreator = () => ({type: ASYNCINCREMENT});




const sagaMiddleWare = createSagaMiddleware();
export const rootReducer = combineReducers({
    main: mainReducer 
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootWatcher);