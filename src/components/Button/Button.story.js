import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import { defaultParameters, documentationConfig } from '../../../.storybook/constants';
import { Button, ButtonLink } from './index';

const props = {
  children: 'Hello World',
  onClick: () => alert('Button onClick'), // eslint-disable-line no-alert
};

const story = storiesOf('Components|Button', module)
  .addDecorator(checkA11y)
  .addDecorator(withInfo)
  .addParameters(defaultParameters);

story.add('Button Component', () => <Button {...props} />, documentationConfig);
story.add(
  'Button Link Component',
  () => (
    <>
      Active <br />
      <ButtonLink {...props} active /> <hr />
      normal <br />
      <ButtonLink {...props} /> <hr />
      Disabled <br />
      <ButtonLink {...props} disabled />
    </>
  ),
  documentationConfig,
);
