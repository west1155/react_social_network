import './App.css';
import React from 'react';
import NavBar from "../NavBar/NavBar.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogContainer from "../Dialogs/DialogContainer.ts";
import UsersContainer from "../Users/UsersCont.tsx";
import ProfileContainer from "../Profile/ProfileContainer.tsx";
import HeaderContainer from "../Header/HeaderContainer.tsx";
import Login from "../Login/Login.tsx";
import {connect} from "react-redux";
import {initApp} from "../redux/app-reducer.ts";

class App extends React.Component<React, React> {

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

