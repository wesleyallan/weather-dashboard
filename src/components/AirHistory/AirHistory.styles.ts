import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const Item = styled.div`
  display: grid;
  justify-items: center;
`;

export const Value = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

export const Label = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  sub {
    font-size: 0.8rem;
  }
`;