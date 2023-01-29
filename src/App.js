import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DialogContainer from "./components/Dialogs/DialogContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {


    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs' element={<DialogContainer />}/>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/users' element={<UsersContainer />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}


export default App;

