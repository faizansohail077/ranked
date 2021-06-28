const initialState = {
    user: {},
    analytics:{}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER':
            return { ...state, user: action.payload }

        case 'ANALYTICS':
            return {...state,analytics:action.payload}
        default:
            return state
    }
}
