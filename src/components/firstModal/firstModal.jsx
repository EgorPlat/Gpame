import React from "react";
import './firstModal.scss';
import igla from '../../smallImages/igla.png';
import { useState } from "react";

export const FirstModal = ({text}) => {
    const [visible, setVisible] = useState(true);
    const onClose = () => {
        setVisible(false);
    }
    return (
        <div className = {visible ? "first__modal" : "no__visible"}>
            <div className="first__modal__content">
                <img src = {igla} />
                <div className="text">
                   {text}
                </div>
                <button className="close__button" onClick={onClose}>x</button>
            </div>
        </div>
    )
}