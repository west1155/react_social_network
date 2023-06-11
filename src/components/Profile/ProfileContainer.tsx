import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../redux/profile-reducer";

class ProfileContainer extends React.Component<any, any> {


    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {userId = 2}
        this.props.getProfile(userId)
        this.props.getUserStatus(userId)
    }

    render () {

        return (
           <Profile {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
           />
        );
    }

}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth
})




// @ts-ignore

export default connect(mapStateToProps, {getProfile: getUserProfile, getUserStatus, updateUserStatus})(ProfileContainer)






