

const INIT_SUCCESS = 'INIT-SUCCESS';


let initialize = {
    initialized: false
}

const appReducer = (state = initialize, action) => {
    switch (action.type) {

        case INIT_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}


export const initializeApp = () => ({type: INIT_SUCCESS});

export const initApp = () => (dispatch) => {
   /*let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializeApp())
    })
    */
}

export default appReducer;