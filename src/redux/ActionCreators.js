import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error:  ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        },
            (error) => {
                var errmess = new Error(error.message)
                throw errmess;
            })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('post comments', error.message);
            alert('Your comment could not be posted\nError:' + error.message);
        })

}

//thunk function which basically intercepts an action in btw and modifies it
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))
    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                //this error is when there is a problem with the data recieved from the server
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response

                throw error
            }
        },

            (error) => {
                var errmess = new Error(error.message)
                throw errmess
            }
        )
        .then(response => response.json())
        .then(data => dispatch(addDishes(data)))
        .catch(error => dispatch(dishesFailed(error.message)))
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

//we will not implement commentsLoading as they will be loaded when the server is started
export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                //this error is when there is a problem with the data recieved from the server
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error;
            }
        },
            //this error is when the server has some problem to connect with
            error => {
                var errmess = new Error(error.message)
                throw errmess
            }
        )

        .then(response => response.json())
        .then(data => dispatch(addComments(data)))
        .catch(error => dispatch(commentsFailed(error.message)))
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading());
    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                //this error is when there is a problem with the data recieved from the server
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        },
            //this error is when the server has some problem to connect with
            (error) => {
                var errmess = new Error(error.message)
                throw errmess;
            })
        .then(response => response.json())
        .then(data => dispatch(addPromos(data)))
        .catch(error => dispatch(promosFailed(error.message)))
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING,
})
export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
})
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})


export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true))
    return fetch(baseUrl + 'leaders')
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
                var errmess = new Error('Error: ' + response.status + ': ' + response.statusText)
                errmess.response = response;
                throw errmess
            }
        },
            (error) => {
                var errmess = new Error(error.message);
                throw errmess
            })
        .then(response => response.json())
        .then(data => dispatch(addLeaders(data)))
        .catch(error => dispatch(leadersFailed(error.message)))
}

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
})
export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
})
export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
})

export const postFeedback = (firstname,lastname,telnum,email,agree,contactType,message) =>(dispatch)=>{
    const newFeedback = {
        firstname:firstname,
        lastname:lastname,
        telnum:telnum,
        email:email,
        agree:agree,
        contactType:contactType,
        message:message
    }
    newFeedback.date = new Date().toISOString();
    return fetch(baseUrl+'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response=>response.json()) 
    .then(response=>alert('Thanks for your Feedback! \n'+ JSON.stringify(response)))
}