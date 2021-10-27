import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header.jsx'
import SidebarContainer from './Components/Nav/SidebarContainer.jsx'
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <SidebarContainer/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <Dialogs/>}/>
                <Route path='/music' render={() => <Dialogs/>}/>
                <Route path='/settings' render={() => <Dialogs/>}/>
            </div>
        </div>
    );
}
export default App;