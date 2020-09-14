import { FETCH_WEATHER} from '../actions';
const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case FETCH_WEATHER:
            return {...state, [action.payload.id]: action.payload}

        default:
            return state;
    }
}