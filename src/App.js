import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/Nav.jsx'
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";


const App = () => {
    return (<BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={Dialogs}/>
                    <Route path='/music' component={Dialogs}/>
                    <Route path='/settings' component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;