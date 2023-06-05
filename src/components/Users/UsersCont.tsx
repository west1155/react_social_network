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
import {AppStateType} from "../redux/redux-store";
import {MapDispatchPropsType, MapStatePropsType} from "../../types/types";


class UserApiContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return <>
            <Users
                users={this.props.users}
                setFollow={this.props.follow}
                setUnfollow={this.props.unFollow}
            />

        </>
    }

}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsersSuperSelector(state),
        currentPage: getCurrentPage(state)
    }
}

export default compose(connect<MapDispatchPropsType, MapStatePropsType>(mapStateToProps, {follow, unFollow, getUsers}),
)(UserApiContainer)




