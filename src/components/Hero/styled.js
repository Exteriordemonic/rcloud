import styled from 'styled-components';
import { darken } from 'polished';

import { COLOR } from '../../constants';

export const HeroWrapper = styled.section`
  height: 70vh;
  width: 100%;
  background-color: ${COLOR.BLUE};
  border: 0.2rem solid ${darken(0.2, COLOR.BLUE)};
  display: grid;
  grid-template-columns: 50% 50%;

  h1 {
    color: red !important;
  }
`;

export const HeroContent = styled.div`
  padding: 10vh 10vw 5vh;
  background-color: ${COLOR.LIGHT_BLUE};
  border: 0.2rem solid ${darken(0.2, COLOR.LIGHT_BLUE)};
`;

export const HeroTracklist = styled.div`
  margin-top: 5vh;
`;
