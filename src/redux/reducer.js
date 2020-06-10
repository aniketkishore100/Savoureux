import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
    dishes: DISHES,
    leaders: LEADERS,
    promotions: PROMOTIONS,
    comments: COMMENTS
};

export const Reducer = (state= initialState,action) =>{
    // state= initialState statement sets the state default to initialState ie when the Store calls the reducer calls state for the first time then this default value will be used
    return state;
}