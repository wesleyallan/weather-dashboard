import * as S from './TempVariation.styles';
import { TempVariationProps } from './TempVariation.types';

const TempVariation = ({ min, max, size }: TempVariationProps) => {
  return (
    <S.Container>
      <S.Max size={size}>{max}°</S.Max>
      <S.Min size={size}>{min}°</S.Min>
    </S.Container>
  )
};

export default TempVariation;