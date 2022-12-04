import React from "react";
import s from './modal.module.scss';

export const Modal = ({ children, title, onClose, onConfirm }) => {
    return (
        <div className={s.modal}>
            <button className={s.close} onClick={onClose}>x</button>
            <span className={s.title}>{title}</span>
            { children }
            <button className={s.confirm} onClick={onConfirm}>Подвердить</button>
        </div>
    )
}