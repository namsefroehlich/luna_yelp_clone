import {authentication, USER_LOGIN, USER_TOKEN} from "../constants";


export const userLoginAction = user => ({
    type: USER_LOGIN,
    payload: user
})

export const userLogin = data => async (dispatch, getState) => {
    const headers = new Headers({
        'Content-Type':'application/json'
    });

    const body = JSON.stringify(data)

    const config = {
        headers,
        body,
        method: 'POST'
    }

    const response = await fetch(`${ authentication }`, config);
    const user = await response.json();
    const { access } = user;

    // console.log(access)

    if (access) {
        localStorage.setItem("token", access)
        dispatch(userLoginAction({ user: user, authenticated: true}));
    }
    else {
        dispatch(userLoginAction({ user: "", authenticated: false}));
    }
    return user
}

export const saveToken = token => ({
    type: USER_TOKEN,
    payload: token,
})
