import './App.css';
import React from 'react';
import NavBar from "../NavBar/NavBar.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogContainer from "../Dialogs/DialogContainer.js";
import UsersContainer from "../Users/UsersCont.js";
import ProfileContainer from "../Profile/ProfileContainer.js";
import HeaderContainer from "../Header/HeaderContainer.js";
import Login from "../Login/Login.js";
import {connect} from "react-redux";
import {initApp} from "../redux/app-reducer.ts";

class App extends React.Component {

    render() {
        //if (!this.props.initialized) {<div>LOADING</div>}


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

