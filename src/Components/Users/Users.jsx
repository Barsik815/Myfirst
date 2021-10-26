import React from "react";
import s from './Users.module.css'

let Users = (props) => {
if (props.users.length===0)
    {
        props.setUsers([
            { id: 1, following: true, fullname: 'Dmitry', status: 'Boss', location: { country: 'Belarus', city: 'Minsk' }, photoUrl: 'https://www.biography.com/.image/t_share/MTE5NTU2MzE2MTgxNjYxMTk1/anton-chekhov-9245947-1-402.jpg', },
            { id: 2, following: false, fullname: 'Sasha', status: 'Boss', location: { country: 'Russia', city: 'Moscow' }, photoUrl: 'https://www.biography.com/.image/t_share/MTE5NTU2MzE2MTgxNjYxMTk1/anton-chekhov-9245947-1-402.jpg', },
            { id: 3, following: true, fullname: 'Lena', status: 'Boss', location: { country: 'Ukrain', city: 'Kiew' }, photoUrl: 'https://www.biography.com/.image/t_share/MTE5NTU2MzE2MTgxNjYxMTk1/anton-chekhov-9245947-1-402.jpg', },
        ])
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.avatar} />
                        </div>
                        <div> {u.following ?
                            <button onClick={() => { props.unfollow(u.id) }}>UNFOLLOW</button> :
                            <button onClick={() => { props.follow(u.id) }}>FOLLOW</button>}</div>
                    </span>

                    <span>
                        <span>
                            <div>{u.fullname}</div>
                            <div>{u.status}</div>
                        </span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
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