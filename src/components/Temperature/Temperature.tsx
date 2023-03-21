import * as S from './Temperature.styles';
import TempVariation from '../TempVariation';
import { TemperatureProps } from './Temperature.types';

const Temperature = ({ min, max, children }: TemperatureProps) => {
  return (
    <S.Container>
      <S.TempInfo>{children}</S.TempInfo>
      <TempVariation min={min} max={max} size={2} />
    </S.Container>
  )
}

export default Temperature;