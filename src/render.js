import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updatePostText, updateMessageText, sendMessage } from './Redux/state';
import {BrowserRouter} from 'react-router-dom'


export let rerenderEntireTree = (state) =>{
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <App state={state} addPost={addPost} 
      sendMessage={sendMessage}
      updatePostText={updatePostText} 
      updateMessageText={updateMessageText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );  
}
