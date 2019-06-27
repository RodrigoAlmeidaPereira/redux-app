import { CLICK_CLEAR_VALUE }  from './../actions/actionTypes';

const initialState = {
    newValue: ''
};

export const clickClearReducer = (state=initialState, action) => {
    switch(action.type) {
        case CLICK_CLEAR_VALUE:
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
};