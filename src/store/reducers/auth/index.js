const initialState = {
    user: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'value':
            return { ...state, user: action.payload }

        default:
            return state

    }
}