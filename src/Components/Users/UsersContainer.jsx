import React from 'react';
import {connect} from 'react-redux';
import {followingAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from '../../Redux/UsersReducer';
import * as axios from "axios";
import Users from "./Users";

class UsersClass extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let totalPages = Math.ceil(this.props.usersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return <Users users={this.props.users}
                      pageSize={this.props.pageSize}
                      usersCount={this.props.usersCount}
                      currentPage={this.props.currentPage}
                      onPageChange={this.onPageChange}
                      following={this.props.following}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        following: (usersId) => {
            dispatch(followingAC(usersId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass)