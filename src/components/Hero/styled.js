import styled from 'styled-components';
import { darken } from 'polished';

import { COLOR } from '../../constants';

export const HeroWrapper = styled.div`
  height: 70vh;
  width: 100%;
  background-color: ${COLOR.BLUE};
  border: 0.2rem solid ${darken(0.2, COLOR.BLUE)};
`;
