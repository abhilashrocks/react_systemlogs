import { GET_TECHS, TECHS_ERROR, DELETE_TECH, ADD_TECH, SET_LOADING } from '../actions/types';
import { act } from 'react-dom/test-utils';
const initialState = {
    techs: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            }
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            }
        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload.id),
                loading: false
            }
        case TECHS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}