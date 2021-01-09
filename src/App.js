import React from 'react';
import './App.css';
import Header from './Components/Header.jsx'
import Nav from './Components/Nav.jsx'
import Profile from "./Components/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Nav />
            <Profile />
        </div>
    );
}
export default App;