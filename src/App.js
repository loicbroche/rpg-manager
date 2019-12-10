import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { database } from './database/InitializeDatabase'
import { DATA_MODEL } from './database/DataModel'
import { ActionTypes } from './store/actions/ActionTypes';

import './App.css'
import NotFound from './error/NotFound'
import Home from './components/home/Home'
import GameMaster from './components/gameMaster/GameMaster'
import Character from './components/character/Character'

class App extends Component {

  componentDidMount() {
    this.racesRef = database.ref(DATA_MODEL.RACES.name);
    this.racesRef.on('value', snapshot => {
      const action = { type: ActionTypes.REFERENTIAL.LOAD_RACES, value: snapshot.val() }
      this.props.dispatch(action);
    });

    this.classesRef = database.ref(DATA_MODEL.CLASSES.name);
    this.classesRef.on('value', snapshot => {
      const action = { type: ActionTypes.REFERENTIAL.LOAD_CLASSES, value: snapshot.val() }
      this.props.dispatch(action);
    });

    this.weaponCategoriesRef = database.ref(DATA_MODEL.WEAPON_CATEGORIES.name);
    this.weaponCategoriesRef.on('value', snapshot => {
      const action = { type: ActionTypes.REFERENTIAL.LOAD_WEAPON_CATEGORIES, value: snapshot.val() }
      this.props.dispatch(action);
    });

    this.weaponsRef = database.ref(DATA_MODEL.WEAPONS.name);
    this.weaponsRef.on('value', snapshot => {
      const action = { type: ActionTypes.REFERENTIAL.LOAD_WEAPONS, value: snapshot.val() }
      this.props.dispatch(action);
    });

    this.skillsRef = database.ref(DATA_MODEL.SKILLS.name);
    this.skillsRef.on('value', snapshot => {
      const action = { type: ActionTypes.REFERENTIAL.LOAD_SKILLS, value: snapshot.val() }
      this.props.dispatch(action);
    });

    this.caracteristicsRef = database.ref(DATA_MODEL.CARACTERISTICS.name);
    this.caracteristicsRef.on('value', snapshot => {
      const action = { type: ActionTypes.REFERENTIAL.LOAD_CARACTERISTICS, value: snapshot.val() }
      this.props.dispatch(action);
    });

    this.charactersRef = database.ref(DATA_MODEL.CHARACTERS.name);
    this.charactersRef.on('value', snapshot => {
      const action = { type: ActionTypes.CHARACTERS.LOAD, value: snapshot.val() }
      this.props.dispatch(action);
    });
  }

  render () {
    
    return (
      <BrowserRouter>
        <header role="banner">
          <Link to={ROUTE_HOME}>
            <div className="header">
              <span>JdR Manager</span>
            </div>
          </Link>
        </header>
        <Switch>
          <Route exact path={ROUTE_HOME} title='Jdr Manager' component={Home} />
          <Route exact path={ROUTE_GAME_MASTER} title='Maître du jeu - JdR Manager' component={GameMaster} />
          <Route path={`${ROUTE_CHARACTER}/:name`} title='Fiche :name - JdR Manager' component={Character} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default connect(state => state)(App)

export const ROUTE_HOME = "/";
export const ROUTE_GAME_MASTER = "/gm";
export const ROUTE_CHARACTER = "/character";