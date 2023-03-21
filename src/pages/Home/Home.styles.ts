import styled, { css, keyframes } from 'styled-components';
import { CardProps } from './Home.types';
import background from '../../assets/temp-now.jpg';

export const Container = styled.main`
  width: 109rem;
  display: grid;
  position: relative;
  place-content: center;
  grid-template-areas:
    'temp temp air sun'
    'temp temp forecast forecast';
    gap: 2.4rem;
`;

export const Card = styled.section<Partial<CardProps>>`
  padding: 3.2rem 1.6rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.foreground};
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ hasBackground }) => hasBackground && css`
    background: url(${background}) bottom right no-repeat;
  `};
  ${Container} &:first-child {
    padding-top: 11.2rem;
    height: 48rem;
    width: 48rem;
    grid-area: temp;
  }
  ${Container} &:nth-child(2) {
    grid-area: air;
    gap: 3.2rem;
  }
  ${Container} &:nth-child(3) {
    grid-area: sun;
    gap: 2.4rem;
  }
  ${Container} &:nth-child(4) {
    grid-area: forecast;
    padding: 4rem;
    flex-direction: row;
    gap: 1.2rem;
  }
`;

export const Locate = styled.p`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  position: absolute;
  top: 3.2rem;
  right: 3.2rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const ContainerCardsInfo = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(3, 1fr);
`;