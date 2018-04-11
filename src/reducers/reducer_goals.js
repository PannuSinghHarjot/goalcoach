import { SET_GOALS } from '../constants';


export default (state = [], action) => {

    switch(action.type){
        case SET_GOALS:
        //es5 email: action.email
        const { goals } = action;
        
        return goals;
  
    default:
        return state;
    }
}