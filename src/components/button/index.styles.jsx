import styled, { css } from 'styled-components';

const primaryButton = css`
  background-color: #E7DDF2;
  color: #473889;

  &:hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  }
`;

const secondaryButton = css`
  background-color: #574A97;;
  color: #ffffff;

  &:hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  }
`;

const tertiaryButton = css`
  background-color: #776FC3;
  color: #ffffff;

  &:hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
  }
`;

const getButtonStyles = (props) => {
  if (props.variant === 'primary') {
    return primaryButton;
  } else if (props.variant === 'secondary') {
    return secondaryButton;
  } else if (props.variant === 'tertiary') {
    return tertiaryButton;
  }
};

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: 100%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  transition: .2s ease-in-out;
  border-radius: 25px;
  ${getButtonStyles}
`;

