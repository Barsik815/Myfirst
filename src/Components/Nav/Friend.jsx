import React from 'react';
import s from './Nav.module.css'

const Friend =(props)=> {    
    return(<div className={s.friend}><img src={props.img} alt=""/>
            <p>{props.name}</p>
            </div>
)
}

export default Friend;