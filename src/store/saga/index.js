import { all } from "redux-saga/effects";
import { startWatcher } from "./startsaga";


export function* rootWatcher() {
    yield all([startWatcher()]);
}