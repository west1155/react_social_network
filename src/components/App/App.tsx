import './App.css';
import React from 'react';
import NavBar from "../NavBar/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogContainer from "../Dialogs/DialogContainer";
import Users from "../Users/Users";
import Profile from "../Profile/Profile";
import HeaderContainer from "../Header/HeaderContainer";
import Login from "../Login/Login";
import {connect} from "react-redux";
import {initApp} from "../redux/app-reducer";

class App extends React.Component<any, any> {

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
                            <Route path='/profile' element={<Profile/>}/>
                            <Route path='/profile/:userId' element={<Profile/>}/>
                            <Route path='/users' element={<Users/>}/>
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

