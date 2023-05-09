import './App.css';
import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogContainer from "./components/Dialogs/DialogContainer";
import UsersContainer from "./components/Users/UsersCont";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initApp} from "./components/redux/app-reducer";

class App extends React.Component {

    render() {
        if (!this.props.initialized) {<div>LOADING</div>}


        return (
            <BrowserRouter>

                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavBar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path='/dialogs' element={<DialogContainer/>}/>
                            <Route path='/profile' element={<ProfileContainer/>}/>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<Login/>}/>

                        </Routes>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}
let mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})
export default connect(mapStateToProps, {initApp})(App)

