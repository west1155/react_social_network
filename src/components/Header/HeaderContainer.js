import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../redux/auth";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <div><Header isAuth={this.props.isAuth}
                            login={this.props.login}
                            logout={this.props.logout}
                            withAuthRedirect={this.props.withAuthRedirect}
        /></div>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


HeaderContainer = connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)


export default HeaderContainer