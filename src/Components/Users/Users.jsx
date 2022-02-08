import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = ({users, currentPage, usersCount, onPageChange, pageSize, followingProcess, follow, unfollow}) => {
    return (<div>
            <Paginator currentPage={currentPage} usersCount={usersCount} onPageChange={onPageChange}
                       pageSize={pageSize}
            />
            {users.map(u => <User user={u} key={u.id} followingProcess={followingProcess} follow={follow}
                                  unfollow={unfollow}/>
            )}
        </div>
    )
}

export default Users;
