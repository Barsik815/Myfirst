import React from "react";
import s from './Preloader.module.css'
import preloader from "../../Assets/Infinity-1.1s-200px.svg";

export const Preloader = (props) => {
    return <div className={s.div}><img src={preloader} className={s.Preloader}/></div>
}
