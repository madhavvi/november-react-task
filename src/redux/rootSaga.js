import LoginSagas from './login/sagas/login';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        ...LoginSagas,
    ])
}