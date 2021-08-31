import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id:1, message:'Hey', likesnumber:'18'},
  {id:2, message:"What's up?", likesnumber:'21'},  
  {id:3, message:'BlaBla', likesnumber:'13'}
]

let persondata = [
  {id:1, name:'Maksim'},
  {id:2, name:'Ivan'},
  {id:3, name:'Katya'},
  {id:4, name:'Bogdan'},
  {id:5, name:'Diana'},
  {id:6, name:'Ellie'},
  {id:7, name:'Sasha'}
]

let messagedata = [
  {id:1, message:'Hey!'},
  {id:2, message:'How do you do?'},
  {id:3, message: "I've just arrived to Ukraine!"},
  {id:4, message:'Are you there?'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} persondata={persondata} messagedata={messagedata}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
