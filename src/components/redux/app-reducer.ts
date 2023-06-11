const INIT_SUCCESS = 'INIT-SUCCESS';


export type InitialStateType = {   // Type for state
    initialized: boolean
}

let initialize : InitialStateType = {
    initialized: false
}


const appReducer = (state = initialize, action: any): InitialStateType => {
    switch (action.type ) {

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

export const initApp = () => (dispatch: any)=> {
    let promise = dispatch(initializeApp());
    promise.all([promise])
        .then(() => {
            dispatch(initializeApp());
        })
}

export default appReducer;