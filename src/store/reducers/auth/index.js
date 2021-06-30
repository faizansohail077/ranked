const initialState = {
    user: {},
    analytics: {},
    selectedValues: {}

}

export const authReducer = (state = initialState, action) => {
    console.log("TCL ~ file: index.js ~ line 9 ~ authReducer ~ state", state)
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
