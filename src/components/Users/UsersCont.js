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
import {
    getCurrentPage,
    getPageSize,
    getTotalUsers,
    getUsersSuperSelector
} from "../redux/users-selectors";


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
            {console.log("USERS")}
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
    console.log("MapStateToProps")
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalCount: getTotalUsers(state),
        currentPage: getCurrentPage(state),
    }
}

export default compose(connect(mapStateToProps, {follow, unFollow,
    setCurrentPage, getUsers: getUsersThunkCreator }),
    )(UserApiContainer)




