import React from 'react';
import { shallow } from 'enzyme';

import CharacterInput from './CharacterInput';

it('renders without crashing', () => {
  const onSubmitClick = jest.fn();
  const wrapper = shallow(<CharacterInput onSubmit={onSubmitClick} />);
});

it('submit button callback function', () => {
  const onSubmitClick = jest.fn();
  const wrapper = shallow(<CharacterInput onSubmit={onSubmitClick} />);
  wrapper.find('button').simulate('click');
  expect(onSubmitClick).toHaveBeenCalled();
});
