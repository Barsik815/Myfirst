import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/Nav.jsx'
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";


const App = (props) => {

    

    return (<BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile posts={props.posts} /> }/>
                    <Route path='/dialogs' render={ () => <Dialogs persondata={props.persondata} messagedata={props.messagedata}/>}/>
                    <Route path='/news' render={ () => <Dialogs/> }/>
                    <Route path='/music' render={ () => <Dialogs/> }/>
                    <Route path='/settings' render={ () => <Dialogs/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;