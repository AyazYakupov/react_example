import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
})

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