import * as types from '../constants';

export const validateUser = () => {
    console.log("action called")
    return {type: types.VALIDATE_USER}
}