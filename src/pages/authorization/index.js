import React, { useState } from "react";
import { Modal } from "../../components/modal";
import { AuthLoginAction, AuthRegisterAction } from '../../store/redux/index';
import Register from './register';
import Login from './login';
import useSound from 'use-sound';
import clickButton from '../../sounds/clickButton.mp3';
import s from './authorization.module.scss';
import { useDispatch } from "react-redux";

export default function Authorization() {

    const [authMode, setAuthMode] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTitle, setCurrentTitle] = useState("");
    const [authData, setAuthData] = useState({});

    const dispatch = useDispatch();
    const [clickSound] = useSound(clickButton);

    const changeAuthMode = (authMode) => {
        if (authMode === 'login') setCurrentTitle('Возвращайся');
        if (authMode === 'register') setCurrentTitle('Дело №79');
        clickSound();
        setAuthMode(authMode);
        setIsModalOpen(true);
    }

    const onConfirmAuthForm = () => {
        if (authMode === "login") dispatch(AuthLoginAction(authData));
        if (authMode === "register") dispatch(AuthRegisterAction(authData));
    }
    return (
        <div className={s.authorization}>
            <div className={s.actions}>
                <a className="startButton" onClick={() => changeAuthMode("login")}>ИГРАТЬ</a>
                <a className="startButton" onClick={() => changeAuthMode("register")}>РЕГИСТРАЦИЯ</a>
            </div>
            {
                isModalOpen &&
                    <Modal 
                        title={currentTitle} 
                        onClose={() => setIsModalOpen(false)} 
                        onConfirm={onConfirmAuthForm}
                    >
                        { authMode === 'login' && <Login handleAuthData={setAuthData} /> }
                        { authMode === 'register' && <Register handleAuthData={setAuthData} /> }
                    </Modal>
            }
        </div>
    )
}