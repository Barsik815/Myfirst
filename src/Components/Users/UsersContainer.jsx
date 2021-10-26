import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../Redux/UsersReducer';
import Users from './Users'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (usersId) => {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)