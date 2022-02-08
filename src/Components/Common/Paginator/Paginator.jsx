import React from "react";
import s from './Paginator.module.css'

const Paginator = ({usersCount, pageSize, currentPage, onPageChange}) => {
    let totalPages = Math.ceil(usersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    debugger
    return (

        <div>
            {pages.map(p => {
                return <span className={currentPage === p && s.selectedPage}
                             onClick={() => onPageChange(p)}>{p} </span>
            })}
        </div>)
}
export default Paginator;
