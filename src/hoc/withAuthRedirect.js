import React from "react";
import {Navigate} from "react-router-dom";


const withAuthRedirect = (Component, path) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={path}/>
            return <Component {...this.props}/>

        }
    }

    return RedirectComponent;
}


export default withAuthRedirect;