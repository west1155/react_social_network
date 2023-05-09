import {
    follow,
    getUsersThunkCreator,
    setCurrentPage,
    unFollow
} from "../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {compose} from "redux";


class UserApiContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <Users pageSize={this.props.pageSize}
                   totalUsers={this.props.totalCount}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   setFollow={this.props.follow}
                   setUnfollow={this.props.unFollow}
                   onPageChange={this.onPageChange}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
    }
}

export default compose(connect(mapStateToProps, {follow, unFollow,
    setCurrentPage, getUsers: getUsersThunkCreator }),
    )(UserApiContainer)




