import styled, { keyframes } from "styled-components";

export const CloudMove = keyframes`
  from {
    transform: translate(10%, -30%);
    opacity: 0;
  }
`;

export const Container = styled.div`
position: absolute;
top: 0;
left: 0;
transform: translate(-10%, -30%);
animation: ${CloudMove} 1.5s ease;
img:first-child {
  position: absolute;
  z-index: 1;
  transform: translate(-30%, 20%);
}
`;