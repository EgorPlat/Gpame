import s from './centerRightMenu.module.scss';
import menu1 from '../../../smallImages/menu1.png';
import menu2 from '../../../smallImages/menu2.png';
import menu3 from '../../../smallImages/menu3.png';
import menu4 from '../../../smallImages/menu4.png';
import menu5 from '../../../smallImages/menu5.png';
import menu6 from '../../../smallImages/menu6.png';
import sale1 from '../../../smallImages/sale1.png';

export const CenterRightMenu = () => {
    return (
        <div className={s.centerRightMenu}>
            <div className={s.topMenuPart}>
                <div className={s.top}>
                    <img src={menu1} className={s.menuImg} />
                    <img src={menu4} className={s.menuImg} />
                </div>
                <div className={s.center}>
                    <img src={menu2} className={s.menuImg}  />
                    <img src={menu6} className={s.menuImg} />
                </div>
                <div className={s.bottom}>
                    <img src={menu3}  className={s.menuImg} />
                    <img src={menu5} className={s.menuImg} />
                </div>
            </div>
            <div className={s.bottomMenuPart}>
                <div className={s.bottomMenuUp}>
                    <img src={sale1} />
                </div>
                <div className={s.bottomMenuDown}>
                    <li>Харкнуть в баланду</li>
                    <li>Прокачать бицуху</li>
                    <li>Победить босса</li>
                    <li>Нанести 1000 урона</li>
                    <li>Сыграть в карты</li>   
                </div>
            </div>
        </div>
    )
}