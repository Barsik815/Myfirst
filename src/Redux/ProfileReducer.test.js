import profileReducer, {addPostActionCreator, deletePost} from "./ProfileReducer";
let state = {
    posts: [
        {id: 1, message: 'Hey', likesnumber: 18},
        {id: 2, message: "What's up?", likesnumber: 21},
        {id: 3, message: 'BlaBla', likesnumber: 13}
    ]
}
test('new post should be added', () => {
    let action = addPostActionCreator("test")
   let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4)
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator("test")
   let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4)
});
test('after deleting length of messages should be decremented', () => {
    let action = deletePost(1)
   let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2)
});