import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-items: center;
`;

export const TempInfo = styled.div`
  position: relative;
  font-size: 8.8rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  &::after {
    content: '°C';
    position: absolute;
    top: 10%;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.titleSecondary};
  }
`;