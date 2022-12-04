import React, { useState } from "react";
import s from './register.module.scss';

export default function Register({ handleAuthData }) {

    const [regForm, setRegForm] = useState({ email: "", password: "" });

    const updateRegForm = (regForm) => {
        setRegForm(regForm);
        handleAuthData(regForm);
    }
    return (
        <div className={s.register}>
            <div className={s.registerForm}>
                <input type="text" placeholder="email" onChange={(e) => updateRegForm({...regForm, email: e.target.value})}></input>
                <input type="text" placeholder="password" onChange={(e) => updateRegForm({...regForm, password: e.target.value})}></input>
            </div>
        </div>
    )
}