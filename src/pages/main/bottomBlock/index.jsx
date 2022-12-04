import s from './bottomBlock.module.scss';
import { UserJailCard } from './userJailCard';
import centralMenu1 from '../../../smallImages/centralMenu1.png';
import centralMenu2 from '../../../smallImages/centralMenu2.png';
import centralMenu3 from '../../../smallImages/centralMenu3.png';
import centralMenu4 from '../../../smallImages/centralMenu4.png';
import { useEffect } from 'react';
import { GetMyFriendsDataAction } from '../../../store/redux/index';
import { useDispatch, useSelector } from 'react-redux';

export const BottomBlock = ({ user }) => {

    const friendList = useSelector(store => store.main.friendList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetMyFriendsDataAction());
    }, [])
    return (
        <div className={s.bottomBlock}>
            <div className={s.bottomBlockUp}>
                <img src={centralMenu1} className={s.imageMenu} />
                <img src={centralMenu2} className={s.imageMenu} />
                <img src={centralMenu3} className={s.imageMenu} />
                <img src={centralMenu4} className={s.imageMenu} />
            </div>
            <div className={s.bottomBlockDown}>
                { friendList.map(friend => (
                    <UserJailCard friend = {friend} />
                )) }
            </div>
        </div>
    )
}