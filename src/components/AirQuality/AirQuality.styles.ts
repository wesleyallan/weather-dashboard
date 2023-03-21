import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 0.4rem;
`;

export const Quality = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

export const QualityValue = styled(Quality)`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.text};
`;