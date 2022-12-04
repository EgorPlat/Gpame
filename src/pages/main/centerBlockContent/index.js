import s from './centerBlockContent.module.scss';
import defaultPerson from '../../../smallImages/default.png';

export const CenterBlockContent = () => {
    return (
        <div className={s.centerBlockContent}>
            <div className={s.centerBlockContentTop}>
                <img src = {defaultPerson} />
            </div>
        </div>
    )
}