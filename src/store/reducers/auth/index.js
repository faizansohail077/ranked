const initialState = {
    user: {},
    analytics: {},
    selectedValues: {},
    age_gender: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER':
            return { ...state, user: action.payload }
        case 'ANALYTICS':
            return { ...state, analytics: action.payload }
        case 'selectedValues':
            return { ...state, selectedValues: action.payload }
        case 'age_gender':
            return { ...state, age_gender: action.payload }
        default:
            return state
    }
}
