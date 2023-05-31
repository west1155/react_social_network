type InitializeType = {
    testik: Array<{id: number, name: string}>,
}



let initialize = {
    testik:
    [{id:1, name: "pupsik"}],
}


const navbarReducer = (state = initialize, action: any): InitializeType => {
    switch (action.type) {
        default:
            return state;
    }
}


export default navbarReducer;