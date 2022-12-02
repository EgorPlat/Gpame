import { put, takeEvery} from "redux-saga/effects";
import { ASYNCINCREMENT } from '../redux/index';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* incrementWorker() {
    yield delay(1000);
    yield put({type: "INCREMENT"})
}

export function* startWatcher() {
    yield takeEvery(ASYNCINCREMENT, incrementWorker)
}