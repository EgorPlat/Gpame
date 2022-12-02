import React, { useState } from "react";
import { Modal } from "../../components/modal";
import Register from './register';
import Login from './login';
import useSound from 'use-sound';
import clickButton from '../../sounds/clickButton.mp3';
import s from './authorization.module.scss';

export default function Authorization() {

    const [authMode, setAuthMode] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTitle, setCurrentTitle] = useState("");

    const [clickSound] = useSound(clickButton);

    const changeAuthMode = (authMode) => {
        if (authMode === 'login') setCurrentTitle('Возвращайся');
        if (authMode === 'register') setCurrentTitle('Дело №79');
        clickSound();
        setAuthMode(authMode);
        setIsModalOpen(true);
    }
    return (
        <div className={s.authorization}>
            <div className={s.actions}>
                <a className="startButton" onClick={() => changeAuthMode("login")}>ИГРАТЬ</a>
                <a className="startButton" onClick={() => changeAuthMode("register")}>РЕГИСТРАЦИЯ</a>
            </div>
            {
                isModalOpen &&
                    <Modal title={currentTitle} onClose={() => setIsModalOpen(false)}>
                        { authMode === 'login' && <Register /> }
                        { authMode === 'register' && <Login /> }
                    </Modal>
            }
        </div>
    )
}