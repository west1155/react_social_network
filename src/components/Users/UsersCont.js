import {
    follow, getUsers,
    unFollow
} from "../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    getCurrentPage,
    getUsersSuperSelector
} from "../redux/users-selectors";


class UserApiContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers()
    }
    render() {
        return <>
            <Users users={this.props.users}
                   setFollow={this.props.follow}
                   setUnfollow={this.props.unFollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        currentPage: getCurrentPage(state),
    }
}

export default compose(connect(mapStateToProps, {follow, unFollow, getUsers}),
    )(UserApiContainer)




