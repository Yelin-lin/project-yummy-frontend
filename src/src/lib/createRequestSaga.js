import {call, put} from 'redux-saga/effects'
import {startLoding, finishLoading} from '/modules/loading';

export const createRequestActionTypes =type => {
    const SUCCESS= `${type}_SUCCESS`;
    const FAILURE= `${type}_FAILURE`;
    return [type, SUCCESS, FAILURE];
};
 
export default function createRequestSaga (type,request){
    
}