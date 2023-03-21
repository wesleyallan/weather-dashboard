import * as S from './AirHistory.styles';
import { AirHistoryProps } from './AirHistory.types';

const AirHistory = ({ history }: AirHistoryProps) => {
  return (
    <S.Container>
      <S.Item key='pm25'>
        <S.Value>{history.pm25}</S.Value>
        <S.Label>PM2.5</S.Label>
      </S.Item>
      <S.Item key='pm10'>
        <S.Value>{history.pm10}</S.Value>
        <S.Label>PM10</S.Label>
      </S.Item>
      <S.Item key='so2'>
        <S.Value>{history.so2}</S.Value>
        <S.Label>SO<sub>2</sub></S.Label>
      </S.Item>
      <S.Item key='no2'>
        <S.Value>{history.no2}</S.Value>
        <S.Label>NO<sub>2</sub></S.Label>
      </S.Item>
      <S.Item key='o3'>
        <S.Value>{history.o3}</S.Value>
        <S.Label>O<sub>3</sub></S.Label>
      </S.Item>
      <S.Item key='co'>
        <S.Value>{history.co}</S.Value>
        <S.Label>CO</S.Label>
      </S.Item>
    </S.Container>
  )
};

export default AirHistory;