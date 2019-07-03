import {
    CREATE_STREAM,
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM
} from '../actions/types';
import _ from 'lodash'

const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
    const { type, payload} = action;
    switch(type) {
        case FETCH_STREAM:
            return { ...state, [payload.id]:payload}
        case CREATE_STREAM:
            return {...state, [payload.id]:payload}
        case EDIT_STREAM:
            return { ...state, [payload.id]:payload}
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(payload, 'id')}
        case DELETE_STREAM:
            return _.omit(state, payload)
        default:
            return state
    }
}