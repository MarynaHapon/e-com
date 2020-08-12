// Core
import styled from 'styled-components';

export const Overlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.div`
  display: inline-block;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const Text = styled.h2`
  font-size: 28px;
  color: #776FC3;
`;


