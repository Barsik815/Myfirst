import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/Nav.jsx'
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Nav state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile
                     profileData={props.state.profilePage} 
                     addPost={props.addPost}
                     updatePostText={props.updatePostText}/> }/>
                    <Route path='/dialogs' render={ () => <Dialogs
                     state={props.state.dialogsPage}
                     sendMessage={props.sendMessage}
                     updateMessageText={props.updateMessageText}/>}/>
                    <Route path='/news' render={ () => <Dialogs/> }/>
                    <Route path='/music' render={ () => <Dialogs/> }/>
                    <Route path='/settings' render={ () => <Dialogs/> }/>
                </div>
            </div>
    );
}
export default App;