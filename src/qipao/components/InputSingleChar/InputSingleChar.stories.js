import React from 'react';
import { storiesOf } from '@storybook/react';

import InputSingleChar from './InputSingleChar';

storiesOf('组件/单字符输入框', module).add('单字符输入框', () => (
  <InputSingleChar tabIndex={0} />
));
