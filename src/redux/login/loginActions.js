export const Types = {
    LOGIN_REQUEST: 'login/LOGIN_REQUEST',
    LOGIN_SUCCESS: 'login/LOGIN_SUCCESS',
    LOGIN_ERROR: 'login/LOGIN_ERROR'
}

export const login = () => ({
    type: Types.LOGIN_REQUEST
})

export const loginSuccess = ({user}) => ({
    type: Types.LOGIN_SUCCESS,
    payload: {
        user: user
    }
})

export const loginError = ({error}) => ({
    type: Types.LOGIN_ERROR,
    payload: {
        error
    }
});

