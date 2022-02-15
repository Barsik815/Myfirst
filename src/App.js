import React from 'react';
import {Preloader} from "./Components/Common/Preloader/Preloader";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/AppReducer";
import Login from "./Components/Login/Login";
import './App.css';
import SidebarContainer from './Components/Nav/SidebarContainer.jsx';
import HeaderContainer from "./Components/Header/HeaderContainer";
import UsersContainer from './Components/Users/UsersContainer';
import store from "./Redux/ReduxStore";
import {withSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));

class App extends React.Component {
    catchAllUnhandledErrors =(reason, promise)=>{
        alert("Some error occurred: ")
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
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