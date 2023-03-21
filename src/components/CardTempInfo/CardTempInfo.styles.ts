import styled, { css } from "styled-components";
import { TextProps, TitleProps } from "./CardTempInfo.types";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.2rem 1.6rem;
  gap: 1.2rem;
  background: rgba(102, 96, 200, 0.6);
  border-radius: .6rem;
  img {
    width: 3.2rem;
    height: 3.2rem;
    opacity: 0.4;
  }
`;

export const Title = styled.h3<Partial<TitleProps>>`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  ${({ bold }) => bold && css`font-weight: 700`};
`;

export const Text = styled.span<Partial<TextProps>>`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme, secondary }) => secondary ? theme.colors.textSecondary : theme.colors.text};
`;