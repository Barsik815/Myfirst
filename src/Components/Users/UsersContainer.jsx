import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProcess,
    getUsers,
}
    from "../../Redux/UsersReducer";
import Users from "./Users";
import {Preloader} from "../Common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersClass extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);

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
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingProcess={this.props.followingProcess}
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
        followingProcess: state.usersPage.followingProcess,
        isAuth: state.auth.isAuth
    }
}
let AuthRedirectComponent = withAuthRedirect(UsersClass);

export default connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleFollowingProcess, getUsers: getUsers
    }
)
(AuthRedirectComponent)