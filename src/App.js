import React from 'react';
import {Preloader} from "./Components/Common/Preloader/Preloader";
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/AppReducer";
import Login from "./Components/Login/Login";
import './App.css';
import SidebarContainer from './Components/Nav/SidebarContainer.jsx';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import HeaderContainer from "./Components/Header/HeaderContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from './Components/Users/UsersContainer';
import store from "./Redux/ReduxStore";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <SidebarContainer/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);

const MainApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default MainApp;