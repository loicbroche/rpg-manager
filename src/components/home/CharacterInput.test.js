import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import CharacterInput from './CharacterInput';

it('renders without crashing', () => {
  const onSubmitClick = sinon.spy();
  const wrapper = shallow(<CharacterInput onSubmit={onSubmitClick} />);
});
/*
it('submit button callback function', () => {
  const onSubmitClick = sinon.spy();
  const wrapper = shallow(<CharacterInput onSubmit={onSubmitClick} />);
  wrapper.first('button').simulate('click');
  expect(onSubmitClick).toHaveProperty('callCount', 1);
});
*/