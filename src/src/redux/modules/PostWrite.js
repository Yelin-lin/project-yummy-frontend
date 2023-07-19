import React from 'react';

function PostWrite() {
    return <div>PostWrite</div>;
}

export default PostWrite; // import { createAction, handleActions } from 'react-actions';
// import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
// import * as postsAPI from './lib/api/posts';
// import { takeLatest } from 'redux-saga/effects';

// const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
// const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
// const [WRITE_POST, WRITE_POST_SUCCESS, WRITE_POST_FAILURE] = createRequestActionTypes('write/WRITE_POST'); // 포스트 작성

// export const initialize = createAction(INITIALIZE);
// export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
//     key,
//     value,
// }));

// export const writePost = createAction(
//     WRITE_POST,
//     ({ shopname, id, region, sort, address, content, imgurl, username, writes }) => ({
//         shopname,
//         id,
//         region,
//         sort,
//         address,
//         content,
//         imgurl,
//         username,
//         writes,
//     }));

// // 사가 생성

// const writePostSaga = createRequestSaga (WRITE_POST, postsAPI.writePost);
// export funtion* writeSaga() {
//     yield takeLatest (WRITE_POST, writePostSaga);
// }

// const initialState = {
//     id: 0,
//     shopname: '',
//     region: '',
//     sort: '',
//     username: 'username',
//     address: '',
//     content: '',
//     writes : [],
//     imgurl: '',
//     post : null,
//     postError : null,
// };

// const PostWrtite = handleActions(
//     {
//         [INITIALIZE]: state => initialState, // initialState 를 넣으면 초기 상태로 바뀜
//         [CHANGE_FIELD]: (stat, { payload: { key, value } }) => ({
//             ...stat,
//             [key]: value, // 특정 key 값을 업데이트
//         }),
//         [WRITE_POST] : state => ({
//             ...state,
//             post : null,
//             postError : null,
//         }),
//         // 포스트 작성 성공
//           [WRITE_POST_SUCCESS] : (state, {payload: post}) => ({
//             ...state,
//             post,
//           }),
//           [WRITE_POST_FAILURE] : (state,{payload: postError}) => ({
//             ...state,
//             postError,
//           }),
//     },
//     initialState,
// );
// export default PostWrtite;
