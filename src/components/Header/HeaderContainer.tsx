import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../redux/auth";


class HeaderContainer extends React.Component<React, React> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


HeaderContainer = connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)


export default HeaderContainer