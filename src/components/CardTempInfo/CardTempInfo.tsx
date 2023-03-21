import type { CardTempInfoProps } from "./CardTempInfo.types";
import * as S from "./CardTempInfo.styles";

const CardTempInfo = ({ title, icon, measurement, children }: CardTempInfoProps) => {
  return (
    <S.Container>
      <img src={icon} alt="Ícone de identificação" />
      <div>
        <S.Title>{title}</S.Title>
        <S.Text>{children} </S.Text>
        <S.Text secondary>{measurement}</S.Text>
      </div>
    </S.Container>
  );
};

export default CardTempInfo;
