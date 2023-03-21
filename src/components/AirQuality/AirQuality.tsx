import * as S from './AirQuality.styles';
import { AirQualityProps } from "./AirQuality.types";

const AirQuality = ({ quality, children }: AirQualityProps) => {
  return (
    <S.Container>
      <S.Quality>{quality}</S.Quality>
      <S.QualityValue>{children}</S.QualityValue>
    </S.Container>
  )
};

export default AirQuality;