import * as ActionTypes from './ActionTypes';


export const Comments = (state = {
    isLoading: false, comments: [], errMess: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS: {
            return {...state, isLoading: false, errMess: null, comments: action.payload}
        }
        case ActionTypes.COMMENTS_LOADING: {
            return {...state, isLoading: true, errMess: null, comments: []}
        }
        case ActionTypes.COMMENTS_FAILED: {
            return {...state, isLoading: false, errMess: action.payload}
        }
        case ActionTypes.ADD_COMMENT: {
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment);
        }
        default: return state
    }
}