import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";

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
            messageText: 'sth',
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);       
        }
    }


export default store;
window.store = store;