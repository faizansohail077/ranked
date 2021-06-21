const initialState = {
    user: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER':
            return { ...state, user: action.payload }

        default:
            return state

    }
}
