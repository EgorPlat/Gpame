import s from './userJailCard.module.scss';
import prison from '../../../../smallImages/jail.png';
import { BASE_URL } from '../../../../api/serverInfoConfig';

export const UserJailCard = ({ friend }) => {
    return (
        <div className={s.userJailCard} style={{ background: `url(${BASE_URL + friend.avatar})` }}>
            <img src = {prison} />
            <span>{friend.name}</span>
        </div>
    )
}