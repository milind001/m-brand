import { UserActionTypes } from './user-types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRET_USER,
    payload: user  
});