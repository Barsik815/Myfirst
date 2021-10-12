const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hey', likesnumber: '18' },
                { id: 2, message: "What's up?", likesnumber: '21' },
                { id: 3, message: 'BlaBla', likesnumber: '13' }
            ],
            postText: 'sth'
        },
        dialogsPage: {
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
                { id: 4, message: 'Are you there?' }
            ],
            messageText: 'sth'
        },
        sidebar: {
            qiuckfriends: [
                { id: 1, name: 'Andrew', img: 'https://flyclipart.com/thumb2/person-icons-131310.png' },
                { id: 2, name: 'Sveta', img: 'https://flyclipart.com/thumb2/person-icons-131310.png' },
                { id: 3, name: 'Vika', img: 'https://flyclipart.com/thumb2/person-icons-131310.png' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State...')
    },
    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.postText,
                    likesnumber: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.postText = '';
                this._callSubscriber(this._state);
                break;
            case UPDATE_POST_TEXT:
                this._state.profilePage.postText = action.newText;
                this._callSubscriber(this._state);
                break;
            case SEND_MESSAGE:
                let newMessage = {
                    id: 5,
                    message: this._state.dialogsPage.messageText
                };
                this._state.dialogsPage.messageData.push(newMessage);
                this._state.dialogsPage.messageText = '';
                this._callSubscriber(this._state);
                break;
            case UPDATE_MESSAGE_TEXT:
                this._state.dialogsPage.messageText = action.newText;
                this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updatePostTextActionCreator = (text) => ({
    type: UPDATE_POST_TEXT, newText: text
})
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
export const updateMessageTextActionCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT, newText: text
})

export default store;
window.store = store;