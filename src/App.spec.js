import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App, { ROUTE_HOME, ROUTE_GAME_MASTER, ROUTE_CHARACTER } from './App';
import NotFound from './error/NotFound';
import Home from './components/home/Home';
import GameMaster from './components/gameMaster/GameMaster';
import Character from './components/character/Character';

describe('<App />',() => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
  });
  
  it('invalid path redirect to 404', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={[ '/not-exists' ]}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find('.not-found').length).toEqual(1);
    //expect(wrapper.find(NotFound)).toHaveLength(1);
    //expect(wrapper.find(Home)).toHaveLength(0);
    //expect(wrapper.find(GameMaster)).toHaveLength(0);
    //expect(wrapper.find(Character)).toHaveLength(0);
  });
  /*
  it('home path redirect to home menu', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={[ ROUTE_HOME ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
    expect(wrapper.find(GameMaster)).toHaveLength(0);
    expect(wrapper.find(Character)).toHaveLength(0);
  });
  
  it('game master path redirect to game master page', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={[ ROUTE_GAME_MASTER ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(GameMaster)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
    expect(wrapper.find(Home)).toHaveLength(0);
    expect(wrapper.find(Character)).toHaveLength(0);
  });
  
  it('character path redirect to character page', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={[ ROUTE_CHARACTER ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Character)).toHaveLength(1);
    expect(wrapper.find(GameMaster)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(0);
    expect(wrapper.find(Home)).toHaveLength(0);
  });
  */
})