import * as ActionTypes from './ActionTypes'

export const Promotions = (state={isLoading:true,errmess:'',promotions:[]},action) =>{
    switch(action.type){
        case ActionTypes.ADD_PROMOS:
            return{...state,isLoading:false,errmess:null,promotions:action.payload}
        case ActionTypes.PROMOS_FAILED:
            return{...state,isLoading:false,errmess:action.payload,promotions:[]}
        case ActionTypes.PROMOS_LOADING:
            return{...state,isLoading:true,errmess:null,promotions:[]}
        default:
            return state
    }
}