import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../actions/types";


const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CREATE_STREAM:
            // const newState =  {...state };
            // newState[action.payload.id] = action.payload;
            // return newState;
            return {...state, [action.payload.id]: action.payload}
        default:
            return state;
    }
};
