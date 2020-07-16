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
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
};

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})


export const fetchComments = () => (dispatch) => {
    dispatch(commentsLoading());
    return fetch(baseUrl + 'comments')
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
};

export const commentsLoading = () => ({
    type: ActionTypes.COMMENTS_LOADING
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const fetchPromotions = () => (dispatch) => {
    dispatch(promotionsLoading());
    return fetch(baseUrl + 'promotions')
    .then((response) => response.json())
    .then((promotions) => dispatch(addPromotions(promotions)))
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const addPromotions = (promotions) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promotions
})