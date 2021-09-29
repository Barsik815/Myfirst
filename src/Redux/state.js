import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            {id:1, message:'Hey', likesnumber:'18'},
            {id:2, message:"What's up?", likesnumber:'21'},  
            {id:3, message:'BlaBla', likesnumber:'13'}
        ],
        postText: 'sth'
    },
    dialogsPage:{
        personData: [
            {id:1, name:'Maksim', img: 'https://flyclipart.com/thumb2/person-icons-131310.png'},
            {id:2, name:'Ivan', img: 'https://flyclipart.com/thumb2/person-icons-131310.png'},
            {id:3, name:'Katya', img: 'https://flyclipart.com/thumb2/person-icons-131310.png'},
            {id:4, name:'Bogdan', img: 'https://flyclipart.com/thumb2/person-icons-131310.png'},
            {id:5, name:'Diana', img: 'https://flyclipart.com/thumb2/person-icons-131310.png'},
            {id:6, name:'Ellie', img: 'https://flyclipart.com/thumb2/person-icons-131310.png'},
            {id:7, name:'Sasha', img: 'https://flyclipart.com/thumb2/person-icons-131310.png'}
           ],
        messageData: [
            {id:1, message:'Hey!'},
            {id:2, message:'How do you do?'},
            {id:3, message: "I've just arrived to Ukraine!"},
            {id:4, message:'Are you there?'}
           ],
        messageText: 'sth'
    },
    sidebar: {
        qiuckfriends:   [
        {id:1, name: 'Andrew', img: 'https://flyclipart.com/thumb2/person-icons-131310.png'},
        {id:2, name: 'Sveta', img: 'https://flyclipart.com/thumb2/person-icons-131310.png'},
        {id:3, name: 'Vika', img: 'https://flyclipart.com/thumb2/person-icons-131310.png'}
        ]
    }
}

export let addPost  = () => {
    let newPost ={
        id:5,
        message: state.profilePage.postText,
        likesnumber: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.postText='';
    rerenderEntireTree(state);
}

export let updatePostText  = (newText) => {
    state.profilePage.postText = newText;
    rerenderEntireTree(state);
}

export let sendMessage  = () => {
    let newMessage ={
        id:5,
        message: state.dialogsPage.messageText
    };
    state.dialogsPage.messageData.push(newMessage);
    state.dialogsPage.messageText='';
    rerenderEntireTree(state);
}

export let updateMessageText  = (newText) => {
    state.dialogsPage.messageText = newText;
    rerenderEntireTree(state);
}

export default state;