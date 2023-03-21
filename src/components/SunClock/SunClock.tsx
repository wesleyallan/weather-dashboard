import { convertTimeToPercentage } from '../../functions/utils';
import { SunClockProps } from './SunClock.types';
import * as S from './SunClock.styles';
import sunClock from '../../assets/sun-clock.svg';

const SunClock = ({ time }: SunClockProps) => {
  const percent = convertTimeToPercentage(time);
  const deg = ((100 - percent) / - 100) * 180;
  return (
    <div>
      <S.ContainerClock percent={percent} deg={deg}>
        <S.Clock src={sunClock} alt="Relógio do sol" />
      </S.ContainerClock>
      <S.ContainerHours>
        <S.Hour>06:00</S.Hour>
        <S.Hour>18:00</S.Hour>
      </S.ContainerHours>
    </div>
  )
};

export default SunClock;