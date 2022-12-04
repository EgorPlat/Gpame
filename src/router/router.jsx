import React from "react";
import { Route } from "react-router-dom";
import Authorization from "../pages/authorization";
import Main from "../pages/main";

export default function Router() {
    return (
        <div>
            <Route path="/authorization">
                <Authorization />
            </Route>
            <Route path="/main">
                <Main />
            </Route>
        </div>
    )
}