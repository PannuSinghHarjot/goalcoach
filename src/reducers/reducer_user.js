import { SIGNED_IN } from '../constants';


let user = {
    email: null
}

export default (state = user, action) => {

    switch(action.type){
        case SIGNED_IN:
        //es5 email: action.email
        const { email } = action;
        user = {
            //es5 email :email
            //es6
            email
        }
        return user;
  
    default:
        return state;
    }
}