import React from 'react'
import { BrowserRouter as Router , Redirect, Route, Switch } from 'react-router-dom';
import ProfileUser from '../ProfileUser';
import Login from './Login/Login';

export default function AppRouter(){
    return (
        <Router>
            <Switch>
                <Route path="/profile" render={()=>{
                    return localStorage.getItem("accessToken") ? <ProfileUser /> : <Redirect to="/"/>
                }}>
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}
