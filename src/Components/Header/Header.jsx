import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (<header className={s.header}>
            <img src="https://www.designyourway.net/blog/wp-content/uploads/2018/04/gray_wolf_games_-_logo.jpg"/>
            {props.isAuth ?
                <div className={s.UserName}>{props.login} <button onClick={props.logout}>Log out</button></div>
                :
                <NavLink to={'/login'}>
                    <div className={s.loginBlock}>Log in</div>
                </NavLink>}
        </header>
    )
}

export default Header;