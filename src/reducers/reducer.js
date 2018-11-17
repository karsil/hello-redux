import {INCREMENT, INCREMENTBY} from '../actions/actions';

export default (state = {counter: 0}, {type, payload}) => {
    switch(type){
        case INCREMENT: {
            return {...state, counter: state.counter + 1}
        }
        case INCREMENTBY: {
            return {...state, counter: state.counter + payload.incValue}
        }
        default:
            return state	
    }    
}