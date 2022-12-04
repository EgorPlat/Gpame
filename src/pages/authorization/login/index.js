import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from './login.module.scss';

export default function Login({ handleAuthData }) {

    const [loginForm, setLoginForm] = useState({ email: "", password: "" });
    const dispatch = useDispatch();

    const updateLogForm = (regForm) => {
        setLoginForm(regForm);
        handleAuthData(regForm);
    }
    return (
        <div className={s.login}>
            <div className={s.loginForm}>
                <input type="text" placeholder="email" onChange={(e) => updateLogForm({...loginForm, email: e.target.value})}></input>
                <input type="text" placeholder="password" onChange={(e) => updateLogForm({...loginForm, password: e.target.value})}></input>
            </div>
        </div>
    )
}