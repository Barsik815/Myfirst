import React from 'react'
import style from './Nav.module.css'

const Nav =() =>{
    return (    <nav className={style.nav}>
            <div className={style.item}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
                <br/>
            <div>
                <a>Settings</a>
            </div>
                </div>
        </nav>
    )
}
export default Nav;