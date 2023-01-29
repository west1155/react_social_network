
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../redux/users-reducer";




let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setFollow: userId => {dispatch(followActionCreator(userId))},
        setUnfollow: userId => {dispatch(unfollowActionCreator(userId))},
        setUsers: (users) => { dispatch(setUsersActionCreator(users))}
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;
