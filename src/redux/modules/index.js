import { combineReducers } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effecs';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import PostWrtite, { writeSaga } from './PostWrite';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    PostWrtite,
});

export function* rootSaga() {
    yield all([authSaga(), userSaga(), writeSaga()]);
}

export default rootReducer;
