const initialState = {
    user: {},
    analytics: {},
    selectedValues: {}

}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER':
            return { ...state, user: action.payload }
        case 'ANALYTICS':
            return { ...state, analytics: action.payload }
        case 'selectedValues':
            return { ...state, selectedValues: action.payload }
        default:
            return state
    }
}
