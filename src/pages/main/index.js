import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BottomBlock } from './bottomBlock';
import { CenterBlockContent } from './centerBlockContent';
import { CenterRightMenu } from './centerRightMenu';
import { GetMyUserDataAction } from '../../store/redux/index';
import s from './main.module.scss';
import { MedalsZone } from './medalsZone';
import { TopMenu } from './topMenu';
import { useHistory } from 'react-router';
import { MainSound } from './mainSound';

export default function Main() {

    const dispatch = useDispatch();
    const router = useHistory();
    const user = useSelector(store => store.main.user);

    useEffect(() => {
        dispatch(GetMyUserDataAction());
        if (!user.name) {
            router.push('/authorization');
        }
    }, [])
    return(
        <div className={s.main}>
            <MainSound />
            <div className={s.mainContent}>
                <div className={s.topBlock}>
                    <TopMenu user={user} />
                </div>
                <div className={s.centerBlock}>
                    <MedalsZone />
                    <div className={s.centerContent}>
                        <CenterBlockContent />
                    </div>
                    <div className={s.centerRightMenu}>
                        <CenterRightMenu />
                    </div>
                </div>
                <div className={s.bottomBlock}>
                    <BottomBlock user={user} />
                </div>
            </div>
        </div>
    )
}