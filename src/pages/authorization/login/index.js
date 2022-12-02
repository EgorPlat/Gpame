import React from "react";
import s from './login.module.scss';

export default function Login() {

    return (
        <div className={s.login}>
            <div className={s.loginForm}>
                <input type="text" placeholder="email"></input>
                <input type="text" placeholder="password"></input>
            </div>
        </div>
    )
}