import styled from "styled-components";
import { TextProps } from "./TempVariation.types";

export const Container = styled.div`
  display: flex;
  width: fit-content;
  gap: 0.5rem;
`;

export const Max = styled.span<TextProps>`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ size }) => size}rem;
  font-weight: 700;
`;

export const Min = styled(Max)`
    color: ${({ theme }) => theme.colors.textSecondary};
`;