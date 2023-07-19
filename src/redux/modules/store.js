import { createStore, combineReducers } from 'redux';
import PostWrite from './reducers/PostWrite'; // PostWrite 리듀서 파일 경로에 맞게 수정해주세요.

const rootReducer = combineReducers({
    postWrite: PostWrite,
});

const store = createStore(rootReducer);

export default store;
