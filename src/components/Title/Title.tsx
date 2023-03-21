import * as S from './Title.styles';
import { TitleProps } from './Title.types';

const Title = ({ icon, size=1.6, children }: TitleProps) => {
  return (
    <S.Container>
      {icon && <S.Icon src={icon} alt="Ícone do titulo" />}
      <S.Title size={size}>{children}</S.Title>
    </S.Container>
  )
}

export default Title;