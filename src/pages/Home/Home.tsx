import { useTemp } from '../../context/TempContext';
import * as S from './Home.styles';
import CardTempInfo from '../../components/CardTempInfo';
import Clouds from '../../components/Clouds';
import Title from '../../components/Title';
import Temperature from '../../components/Temperature';
import AirQuality from '../../components/AirQuality';
import AirHistory from '../../components/AirHistory';
import Forecast from '../../components/Forecast';
import SunClock from '../../components/SunClock';
import locate from '../../assets/locate.svg';
import wind from '../../assets/wind.svg';
import rain from '../../assets/rain.svg';
import cloud from '../../assets/cloud.svg';
import leaf from '../../assets/leaf.svg';
import time from '../../assets/time.svg';

const Home = () => {
  const { state } = useTemp();
  return (
    <S.Container>
      <S.Card hasBackground>
        <Clouds />
        <S.Locate>
          <img src={locate} alt="Localização" />
          {state.locate}
        </S.Locate>
        <Temperature min={state.temp.min} max={state.temp.max}>{state.temp.actual}</Temperature>
        <S.ContainerCardsInfo>
          <CardTempInfo icon={wind} title="Vento" measurement='km/h'>{state.wind}</CardTempInfo>
          <CardTempInfo icon={rain} title="Umidade" measurement='%'>{state.humidity}</CardTempInfo>
          <CardTempInfo icon={cloud} title="Chuva" measurement='%'>{state.rainChance}</CardTempInfo>
        </S.ContainerCardsInfo>
      </S.Card>
      <S.Card>
        <Title icon={leaf}>Qualidade do ar</Title>
        <AirQuality quality={state.airQuality.quality}>{state.airQuality.value}</AirQuality>
        <AirHistory history={state.airQuality} />
      </S.Card>
      <S.Card>
        <Title icon={time}>Horário do sol</Title>
        <SunClock time={new Date()} />
      </S.Card>
      <S.Card>
        {state.forecast.map( day => (
          <Forecast key={day.day} day={day} />
        ))}
      </S.Card>
    </S.Container>
  );
};

export default Home;