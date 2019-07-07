import { CLICK_UPDATE_VALUE, CLICK_CLEAR_VALUE }  from './actionTypes';

export const clickButton = value => (
    {
        type: CLICK_UPDATE_VALUE,
        newValue: value
    }
);
