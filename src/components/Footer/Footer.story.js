import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import { defaultParameters, documentationConfig } from '../../../.storybook/constants';
import { Footer } from './index';

const story = storiesOf('Components|Footer', module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo)
  .addParameters(defaultParameters);

story.add('Footer Component', () => <Footer />, documentationConfig);
