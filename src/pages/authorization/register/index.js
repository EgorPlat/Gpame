import React from "react";
import s from './register.module.scss';

export default function Register() {

    return (
        <div className={s.register}>
            <div className={s.registerForm}>
                <input type="text" placeholder="email"></input>
                <input type="text" placeholder="password"></input>
            </div>
        </div>
    )
}