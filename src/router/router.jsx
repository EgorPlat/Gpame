import React from "react";
import { Route } from "react-router-dom";
import Register from '../pages/authorization/register';
import Login from '../pages/authorization/login';

export default function Router() {
    return (
        <div>
            <Route path="/registration">
                <Register />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
        </div>
    )
}