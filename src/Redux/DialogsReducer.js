const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    personData: [
        { id: 1, name: 'Maksim', img: 'https://flyclipart.com/thumb2/person-icons-131310.png' },
        { id: 2, name: 'Ivan', img: 'https://flyclipart.com/thumb2/person-icons-131310.png' },
        { id: 3, name: 'Katya', img: 'https://flyclipart.com/thumb2/person-icons-131310.png' },
        { id: 4, name: 'Bogdan', img: 'https://flyclipart.com/thumb2/person-icons-131310.png' },
        { id: 5, name: 'Diana', img: 'https://flyclipart.com/thumb2/person-icons-131310.png' },
        { id: 6, name: 'Ellie', img: 'https://flyclipart.com/thumb2/person-icons-131310.png' },
        { id: 7, name: 'Sasha', img: 'https://flyclipart.com/thumb2/person-icons-131310.png' }
    ],
    messageData: [
        { id: 1, message: 'Hey!' },
        { id: 2, message: 'How do you do?' },
        { id: 3, message: "I've just arrived to Ukraine!" },
        { id: 4, message: 'Are you here?' }
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messageData: [...state.messageData, { id: 6, message: action.newMessageBody }],
            };
        default: return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;