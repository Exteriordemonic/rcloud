import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import { defaultParameters, documentationConfig } from '../../../.storybook/constants';
import { List } from './index';

const props = {
  elements: [{ id: 1, title: 'Test' }, { id: 2, title: 'Test2' }],
};

const story = storiesOf('Components|List', module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo)
  .addParameters(defaultParameters);

story.add('List Component', () => <List {...props} />, documentationConfig);
