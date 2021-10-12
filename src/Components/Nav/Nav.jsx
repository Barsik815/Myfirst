import React from 'react'
import s from './Nav.module.css'
import { NavLink } from "react-router-dom";
import Friend from './Friend';

const Nav = (props) => {

    let quicklist = props.state.qiuckfriends.map(f => <Friend name={f.name} id={f.id} img={f.img} />)

    return (<nav className={s.nav}>
        <div>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <br />
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div><div>
                <div>Friends</div>
                <div className={s.list}>{quicklist}</div>
            </div>
        </div>
    </nav>
    )
}
export default Nav;