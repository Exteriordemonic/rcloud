import styled from 'styled-components';
import { darken } from 'polished';

import { COLOR } from '../../constants';

export const HeaderWrapper = styled.header`
  height: 8vw;
  width: 100%;
  background-color: ${COLOR.CREAM};
  border-bottom: 0.2rem solid ${darken(0.2, COLOR.CREAM)};
`;
