import { Fetch_USER_FAIL, Fetch_USER_INIT, Fetch_USER_SUCCESS } from "./actionTypes"
import axios from "axios"

export const fetchUserInit = () => {
    return {
        type: Fetch_USER_INIT
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: Fetch_USER_SUCCESS,
        data: users
    }
}

export const fetchUserFail = (error) => {
    return {
        type: Fetch_USER_FAIL,
        error: error
    }
}

export const fetchUser = (token) => {
    return function (dispatch) {
        dispatch(fetchUserInit());
        axios.get("https://instacart-server-xck1.onrender.com/api/getuser", {
            headers: {
                "x-token": token
            }
        }).then((res) => dispatch(fetchUserSuccess(res.data))).catch(err => dispatch(fetchUserFail(err)))
    }
}