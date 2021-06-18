const initialState = {
    user: {}
}

export const authReducer = (state = initialState, action) => {
    console.log("TCL ~ file: index.js ~ line 6 ~ authReducer ~ state", state)
    switch (action.type) {
        case 'USER':
            return { ...state, user: action.payload }

        default:
            return state

    }
}
