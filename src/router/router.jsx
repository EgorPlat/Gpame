import React from "react";
import { Route } from "react-router-dom";
import Authorization from "../pages/authorization";

export default function Router() {
    return (
        <div>
            <Route path="/authorization">
                <Authorization />
            </Route>
        </div>
    )
}