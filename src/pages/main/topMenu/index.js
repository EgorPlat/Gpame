import { MenuDropDown } from '../../../components/menuDropDown';
import rating from '../../../smallImages/rating.png';
import ruble from '../../../smallImages/ruble.png';
import sugar from '../../../smallImages/sugar.png';
import smoke from '../../../smallImages/smoke.png';
import s from './topMenu.module.scss';

export const TopMenu = ({ user }) => {

    console.log(user);
    return (
        <div className={s.topMenuContent}>
            <div className={s.topMenuContentName}>
                Зек по кличке: { user.name }
            </div>
            <MenuDropDown img={rating} data={user.ranks} />
            <MenuDropDown img={sugar} data={user.sugar} />
            <MenuDropDown img={smoke} data={user.smoke} />
            <MenuDropDown img={ruble} data={user.rubles} />
        </div>
    )
}