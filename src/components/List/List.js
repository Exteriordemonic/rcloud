import React from 'react';
import PropTypes from 'prop-types';

import { ListWrapper, ListElem } from './styled';

const List = ({ elements }) => (
  <ListWrapper>
    {elements.map(({ id, title }) => (
      <ListElem key={id}>{title}</ListElem>
    ))}
  </ListWrapper>
);

List.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export { List };
