import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styled';

const Container = ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>;

Container.defaultProps = {
  isDebug: false,
};

Container.propTypes = {
  isDebug: PropTypes.bool,
};

export { Container };
