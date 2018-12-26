import React from 'react';

import { ButtonLinkWrapper } from './styled';

export const ButtonLink = ({ children, ...props }) => (
  <ButtonLinkWrapper type="button" {...props}>
    {children}
  </ButtonLinkWrapper>
);
