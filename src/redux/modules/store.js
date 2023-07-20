import { createStore, combineReducers } from 'redux';
import PostWrite from './reducers/PostWrite'; // PostWrite 리듀서 파일 경로에 맞게 수정해주세요.
import Post from '../../pages/post/Post';
import DetailPage from '../../pages/detailPage/DetailPage';

const rootReducer = combineReducers({
    postWrite: PostWrite,
    Post,
    DetailPage,
});

const store = createStore(rootReducer);

export default store;
