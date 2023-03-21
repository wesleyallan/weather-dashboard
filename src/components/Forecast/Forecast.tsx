import Title from '../Title';
import * as S from './Forecast.styles';
import { ForecastProps, WeatherIcon } from './Forecast.types';
import sun from '../../assets/sun.svg';
import clouds from '../../assets/clouds.svg';
import cloudRain from '../../assets/cloud-rain.svg';
import cloudSun from '../../assets/cloud-sun.svg';
import cloudThunder from '../../assets/cloud-thunder.svg';
import TempVariation from '../TempVariation';

const icons: WeatherIcon = {
  'sol': sun,
  'nublado': clouds,
  'chuva': cloudRain,
  'nuvens': cloudSun,
  'tempestade': cloudThunder,
};

const Forecast = ({ day }: ForecastProps) => {
  return (
    <S.Container>
      <Title size={1.4}>{day.day.charAt(0).toUpperCase() + day.day.substring(1)}</Title>
      <S.Image src={icons[day.weather]} />
      <TempVariation min={day.min} max={day.max} size={1.6} />
    </S.Container>
  )
};

export default Forecast;