import { takeEvery, call, put, fork } from 'redux-saga/effects';
import * as actions from '../loginActions';
import * as api from '../../../Utils/Api';

function* login() {
    try {
        const result = yield call(api.getUserDetails);
        yield put(actions.loginSuccess({
			user: result.data
		}));
    } catch (e) {
        yield put(actions.loginError({
            error: 'An error occurred when trying to login'
        }));
    }
}

function* watchLoginRequest() {
    yield takeEvery(actions.Types.LOGIN_REQUEST, login);
}

const LoginSagas = [
    fork(watchLoginRequest)
]

export default LoginSagas;