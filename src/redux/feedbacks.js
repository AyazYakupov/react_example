import * as ActionTypes from './ActionTypes'
export const Leaders = (state = {isLoading: false, feedbacks: [], errMess: null}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK: {
            var feedback = action.payload;
            return {...state, feedbacks: state.feedbacks.concat(feedback)};
        }
        default: return state
    }
}