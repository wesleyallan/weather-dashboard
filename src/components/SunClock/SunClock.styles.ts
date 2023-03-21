import styled, { css, keyframes } from "styled-components";
import { SunProps } from "./SunClock.types";

const animationSun = keyframes`
  from {
    transform: rotate(-180deg) translate(10.6rem);
  }
`;

export const ContainerClock = styled.div<SunProps>`
  padding: 0.8rem 1.6rem;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    display: block;
    width: 21.6rem;
    height: 21.6rem;
    position: absolute;
    border-radius: 100%;
    background: ${({ theme }) => theme.gradient.sunLocation};
    mask: linear-gradient(90deg, #fff ${({ percent }) => css`${percent}%, transparent ${percent + 3}%`});
  }
  &::after {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    bottom: 1rem;
    left: 48%;
    transform: ${({ deg }) => css`rotate(${deg}deg) translate(10.6rem)`};
    background-color: ${({ theme }) => theme.colors.sun};
    border-radius: 50%;
    animation: ${animationSun} 1.5s linear;
  }
`;

export const Clock = styled.img`
  width: 100%;
`;

export const ContainerHours = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Hour = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.title};
`;