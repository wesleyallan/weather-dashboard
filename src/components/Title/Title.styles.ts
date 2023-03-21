import styled, { css } from "styled-components";
import { TitlePropsStyle } from "./Title.types";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const Title = styled.h2<TitlePropsStyle>`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.titleSecondary};
  font-size: ${({ size }) => size}rem;
`;