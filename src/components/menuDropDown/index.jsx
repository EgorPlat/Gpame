import s from './menuDropDown.module.scss';

export const MenuDropDown = ({ img, data }) => {
    return(
        <div className={s.menuDropDown}>
            <img src={img} />
            {data}
        </div>
    )
}