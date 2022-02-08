import React from "react";
import s from './Users.module.css'
import userPhoto from '../Assets/Images/profile-icon-png-912.png'
import {NavLink} from "react-router-dom";

const User = ({user, followingProcess, follow, unfollow}) => {
    return (<div>
                    <span>
                        <div><NavLink to={'profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.avatar}
                                 alt={""}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingProcess.some(id => id === user.id)}
                                          onClick={() => {
                                              unfollow(user.id)
                                          }}>Unfollow</button>
                                : <button disabled={followingProcess.some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id)
                                          }}>Follow</button>
                            }
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                {/*<div>{user.location.country}</div>
                        <div>{user.location.city}</div>*/}
                <span>

                        </span>
                    </span>
        </div>
    )
}


export default User;
