import cloudF from '../../assets/cloud-front.svg';
import cloudD from '../../assets/cloud-back.svg';
import * as S from './Clouds.styles';

const Clouds = () => {
  return (
    <S.Container>
      <img src={cloudF} alt="Nuvens" />
      <img src={cloudD} alt="Nuvens" />
    </S.Container>
  )
}

export default Clouds;