import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AsyncIncrementCountActionCreator } from '../../../store/redux/index';

export default function Login() {

    const count = useSelector(store => store.main.count);

    const dispatch = useDispatch();

    const increment = () => dispatch(AsyncIncrementCountActionCreator());

    return (
        <div>
            {count}
            <button onClick={increment}>+</button>
        </div>
    )
}