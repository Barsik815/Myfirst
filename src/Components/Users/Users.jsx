import React from "react";
import s from './Users.module.css'
import userPhoto from '../Assets/Images/profile-icon-png-912.png'

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
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.avatar}/>
                        </div>
                        <div>
                            <button
                                onClick={() => props.following(u.id)}>{u.followed ? "UNFOLLOW" : "FOLLOW"}</button> </div>
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
