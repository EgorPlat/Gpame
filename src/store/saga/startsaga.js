import { call, put, takeEvery} from "redux-saga/effects";
import { 
    AUTH_LOGIN, 
    AUTH_REGISTER, 
    UPDATE_USER, 
    GET_MY_USER_DATA, 
    UPDATE_FRIEND_LIST,
    GET_MY_FRIENDS_DATA
} from '../redux/index';
import { 
    authenticationLogin, 
    authenticationRegister, 
    GetMyFriendsData, 
    GetMyUserData 
} from '../../api/requests';

function* authLoginSaga({ payload }) {
    const response = yield call(authenticationLogin, payload);
    if (response.data) {
        yield put({ type: UPDATE_USER, payload: response.data.profile.user });
        localStorage.setItem('access-token', response.data.auth.token);
        window.location.replace('/main');
    }
}

function* authRegisterSaga({ payload }) {
    const response = yield call(authenticationRegister, payload);
    if (response.data) {
        yield put({ type: UPDATE_USER, payload: response.data.profile.user });
        localStorage.setItem('access-token', response.data.auth.token);
        window.location.replace('/main');
    }
}

function* getMyUserDataSaga() {
    const response = yield call(GetMyUserData);
    if (response.data) {
        yield put({ type: UPDATE_USER, payload: response.data });
    }
}

function* getMyUserFriendsDataSaga() {
    const response = yield call(GetMyFriendsData);
    if (response.data) {
        yield put({ type: UPDATE_FRIEND_LIST, payload: response.data });
    }
}

export function* startWatcher() {
    yield takeEvery(AUTH_LOGIN, authLoginSaga);
    yield takeEvery(AUTH_REGISTER, authRegisterSaga);
    yield takeEvery(GET_MY_USER_DATA, getMyUserDataSaga);
    yield takeEvery(GET_MY_FRIENDS_DATA, getMyUserFriendsDataSaga);
}