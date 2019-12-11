import React from 'react';
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Store from 'store/configureStore'
import App, { ROUTE_HOME, ROUTE_GAME_MASTER, ROUTE_CHARACTER } from 'App';
import NotFound from 'components/error/NotFound';
import Home from 'components/home/Home';
import GameMaster from 'components/gameMaster/GameMaster';
import Character from 'components/character/Character';

describe('<App />',() => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={Store}>
        <App />
      </Provider>
    )
    //expect(wrapper.find('Provider')).to.have.length(1);
  });
  
  it('invalid path redirect to 404', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={[ '/not-exists' ]}>
        <Provider store={Store}>
          <App />
      </Provider>
      </MemoryRouter>
    )
    //expect(wrapper.find('.not-found').length).toEqual(1);
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