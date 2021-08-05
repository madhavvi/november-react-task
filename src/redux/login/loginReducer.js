import { Types } from './loginActions';

const INITIAL_STATE = {
    user: {},
};

export default function login(state = INITIAL_STATE, action){
    switch(action.type){
        case Types.LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload.user
            }
        }

        case Types.LOGIN_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }

        default: {
            return state;
        }
    }
}