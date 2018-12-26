import styled from 'styled-components';
import { darken } from 'polished';

import { COLOR } from '../../constants';

export const ButtonWrapper = styled.button`
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
  border: 0.1rem solid ${darken(0.2, COLOR.BLUE)};
  background: ${COLOR.BLUE};
  color: ${COLOR.WHITE};
`;

export const ButtonLinkWrapper = styled.button`
  position: relative;
  padding: 0.4rem 0.2rem;
  border: 0;
  background-color: transparent;
  outline: 0;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1vw;
  color: ${COLOR.BLACK};
  opacity: ${props => (props.active ? 1 : 0.6)};
  transition: 0.4s ease-in-out;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 5%;
    left: 0;
    margin: auto;
    width: ${props => (props.active ? '100%' : '0%')};
    height: 8%;
    background-color: ${COLOR.BLACK};
    transition: 0.4s ease-in-out;
  }

  &:hover,
  &:focus {
    opacity: ${props => (props.disabled ? '0.6' : '1')};
    ${this}:before {
      width: 100%;
    }
  }

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;

    &:before {
      display: none;
    }

    &:hover {
      opacity: 0.2;
    }
  }
`;
