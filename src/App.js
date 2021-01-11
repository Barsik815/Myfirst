import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/Nav.jsx'
import Profile from "./Components/Profile/Profile";

const App = () => {
    return (    <div className='app-wrapper'>
            <Header />
            <Nav />
            <Profile />
        </div>
    );
}
export default App;