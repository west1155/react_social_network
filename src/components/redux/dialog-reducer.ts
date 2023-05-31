const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}


let initialize = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 7, message: 'Dzin'}
    ] as Array<MessageType>,
    newMessageBody: '',

}


export type initialStateType = typeof initialize;

const dialogReducer = (state = initialize, action:any): initialStateType => {
    switch (action.type) {

        case SEND_MESSAGE: {
            let stateCopy = {
                ...state,
                dialogs: [...state.dialogs],
                messages: [...state.messages, {id: 6, message: state.newMessageBody}],
                newMessageBody: action.postMessage

            }
            return stateCopy;
        }
        default:
            return state;


    }
}



type sendMessageActionCreatorType = {
    type: typeof SEND_MESSAGE,
    postMessage: string
}

export const sendMessageActionCreator = (postMessage):sendMessageActionCreatorType => ({type: SEND_MESSAGE, postMessage});

export default dialogReducer;