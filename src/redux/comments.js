import * as ActionTypes from './ActionTypes'

export const Comments = (state = {
    errmess:'',
    comments:[]
    },action)=>{
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log('Comments: ' ,comment);
            return state.comments.concat(comment)
            
        case ActionTypes.ADD_COMMENTS:
            return {...state,errmess:null,comments:action.payload}
        case ActionTypes.COMMENTS_FAILED:
            return {...state,errmess:action.payload,}

        default:
            return state;
    }
}