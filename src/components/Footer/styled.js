import styled from 'styled-components';
import { darken } from 'polished';

import { COLOR } from '../../constants';

export const FooterWrapper = styled.footer`
  height: 15vh;
  width: 100%;
  background-color: ${COLOR.GREEN};
  border-top: 0.2rem solid ${darken(0.2, COLOR.GREEN)};
`;
