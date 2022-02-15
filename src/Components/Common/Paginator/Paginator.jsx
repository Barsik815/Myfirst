import React, {useState} from "react";
import s from './Paginator.module.css';
import cn from 'classnames';


const Paginator = ({itemsCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
    let totalPages = Math.ceil(itemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(totalPages / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>←</button>}
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
            return <span className={cn({
                [s.selectedPage]: currentPage ===p},
                s.pageNumber
            )}
                         onClick={() => onPageChange(p)}>{p} </span>
        })}{portionNumber < portionCount && <button onClick={() =>
        setPortionNumber(portionNumber + 1)}>→</button>}
    </div>
}
export default Paginator;
