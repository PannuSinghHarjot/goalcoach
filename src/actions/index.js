import { SIGNED_IN, SET_GOALS, COMPLETE_GOALS} from '../constants';

export function logUser(email){
    const action ={
        type:SIGNED_IN,
        //es5 email: email;
        //es6 key:value === only specify one
        email
    }
    return action;  
}

export function setGoals(goals){
    const action = {
        type:SET_GOALS,
        goals
    }

    return action;
}
