import { useState } from 'react';
import useSound from 'use-sound';
import mainSoundMusic from '../../../sounds/mainMusic.mp3';

import s from './mainSound.module.scss';

export const MainSound = () => {

    const [isMusicActive, setIsMusicActive] = useState(false);
    const [mainMusic, {stop}] = useSound(mainSoundMusic, { volume: 0.65 });

    const changeMusicMode = (newMode) => {
        setIsMusicActive(newMode);
        if (newMode) {
            mainMusic();
        } else {
            stop();
        }
    }
    return (
        <div className={s.mainSound} onClick = {() => changeMusicMode(!isMusicActive)}>
            Музыка {isMusicActive ? '(Включено)' : '(Выключено)'}
        </div>
    )
}