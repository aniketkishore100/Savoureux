import * as ActionTypes from './ActionTypes'

export const InitialFeedback ={
    firstname: "",
    lastname: "",
    telnum: "",
    email:"",
    agree: false,
    contactType:"Tel.",
    message: ""
}

export const Feedback = (state = {feedback:InitialFeedback},action)=>{
    switch(action.type){
        case ActionTypes.POST_FEEDBACK:
            var new_feedback = action.payload;
            return {...state, feedback:state.feedback.concat(new_feedback)}
        default:
            return state
    }
}