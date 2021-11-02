import React from "react";
import {connect} from "react-redux";
import {follow, unfollow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, toggleFollowingProcess}
    from "../../Redux/UsersReducer";
import Users from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {getUsers} from "../../api/api";

class UsersClass extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        })

    }

    onPageChange = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        getUsers(pageNumber, this.props.pageSize).then((data) => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        })
    }

    render() {
        let totalPages = Math.ceil(this.props.usersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users}
                   pageSize={this.props.pageSize}
                   usersCount={this.props.usersCount}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingProcess={this.props.followingProcess}
                   toggleFollowingProcess={this.props.toggleFollowingProcess}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProcess: state.usersPage.followingProcess
    }
}

export default connect(mapStateToProps, {
        follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching, toggleFollowingProcess
    }
)
(UsersClass)