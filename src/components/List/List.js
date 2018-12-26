import React from 'react';
import PropTypes from 'prop-types';

import { ListWrapper, ListElem } from './styled';
import { ButtonLink } from '../Button';

const List = ({ elements }) => (
  <ListWrapper>
    {elements.map(({ id, title }) => (
      <ListElem key={id}>
        <ButtonLink>{title}</ButtonLink>
      </ListElem>
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
