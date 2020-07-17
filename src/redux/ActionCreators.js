import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    console.log(dishId, rating, author, comment)
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString()
    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credetials: 'same-origin'
    }).then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error '+ response.status + response.statusText);
            error.response = response;
            console.log(response.status)
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        console.log(error.message)
        throw errmess;
    }).then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => {console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message)})
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading());
    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error '+ response.status + response.statusText);
            error.response = response;
            console.log(response.status)
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        console.log(error.message)
        throw errmess;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)))
};

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})

export const dishesFailed = (message) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: message
})


export const fetchComments = () => (dispatch) => {
    dispatch(commentsLoading());
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
            return response
        } else {
            var error = new Error('Error '+ response.status + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)))
};

export const commentsLoading = () => ({
    type: ActionTypes.COMMENTS_LOADING
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const commentsFailed = (message) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: message
});

export const fetchPromotions = () => (dispatch) => {
    dispatch(promotionsLoading());
    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
            return response
        } else {
            var error = new Error('Error '+ response.status + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(promotions => dispatch(addPromotions(promotions)))
    .catch(error => dispatch(promotionsFailed(error.message)))
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const addPromotions = (promotions) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promotions
})

export const promotionsFailed = (message) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: message
})

export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading());
    return fetch(baseUrl + 'leaders')
    .then(response => {
        if (response.ok) {
            return response
        } else {
            var error = new Error('Error '+ response.status + response.statusText);
            error.response = response;
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addLeaders(comments)))
    .catch(error => dispatch(leadersFailed(error.message)))
};

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const leadersFailed = (message) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: message
});

export const addFeedback = (feedback) => ({
    type: ActionTypes.ADD_FEEDBACK,
    payload: feedback
})

export const postFeedback = (firstname, lastname, telnum, agree, contactType, message) => (dispatch) => {
    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        agree: agree,
        contactType: contactType,
        message: message
    }
    newFeedback.date = new Date().toISOString()
    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credetials: 'same-origin'
    }).then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error '+ response.status + response.statusText);
            error.response = response;
            console.log(response.status)
            throw error;
        }
    }, 
    error => {
        var errmess = new Error(error.message);
        console.log(error.message)
        throw errmess;
    }).then(response => response.json())
    .then(response => dispatch(addFeedback(response)))
    .catch(error => {console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message)})
}