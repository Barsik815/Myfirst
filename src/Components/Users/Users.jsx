import React from "react";
import s from './Users.module.css'
import userPhoto from '../Assets/Images/profile-icon-png-912.png'
import {NavLink, Redirect} from "react-router-dom";

const Users = (props) => {
    let totalPages = Math.ceil(props.usersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={() => props.onPageChange(p)}>{p} </span>
            })}
            {props.users.map(u => <div key={u.id}>
                    <span>
                        <div><NavLink to={'profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingProcess.some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id)
                                          }}>Unfollow</button>
                                : <button disabled={props.followingProcess.some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id)
                                          }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        {/*<div>{u.location.country}</div>
                        <div>{u.location.city}</div>*/}
                        <span>

                        </span>
                    </span>
                </div>
            )
            }
        </div>
    )
}


export default Users;
