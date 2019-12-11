import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { database } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import { objectToArray } from 'database/Tools'
import { ActionTypes } from 'store/actions/ActionTypes';

import 'App.css'
import NotFound from 'components/error/NotFound'
import Page from 'components/Page'
import Home from 'components/home/Home'
import GameMaster from 'components/gameMaster/GameMaster'
import Character from 'components/character/Character'

class App extends Component {

  componentDidMount() {
    this.racesRef = database.ref(DATA_MODEL.RACES.name);
    this.racesRef.once('value', snapshot => {
      //referentialReducer: state.referential.races
      const action = { type: ActionTypes.REFERENTIAL.LOAD_RACES, value:  objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.subRacesRef = database.ref(DATA_MODEL.SUB_RACES.name);
    this.subRacesRef.once('value', snapshot => {
      //referentialReducer: state.referential.subRaces
      const action = { type: ActionTypes.REFERENTIAL.LOAD_SUB_RACES, value:  objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.classesRef = database.ref(DATA_MODEL.CLASSES.name);
    this.classesRef.once('value', snapshot => {
      //referentialReducer: state.referential.classes
      const action = { type: ActionTypes.REFERENTIAL.LOAD_CLASSES, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.weaponCategoriesRef = database.ref(DATA_MODEL.WEAPON_CATEGORIES.name);
    this.weaponCategoriesRef.once('value', snapshot => {
      //referentialReducer: state.referential.weaponCategories
      const action = { type: ActionTypes.REFERENTIAL.LOAD_WEAPON_CATEGORIES, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.weaponsRef = database.ref(DATA_MODEL.WEAPONS.name);
    this.weaponsRef.once('value', snapshot => {
      //referentialReducer: state.referential.weapons
      const action = { type: ActionTypes.REFERENTIAL.LOAD_WEAPONS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.skillsRef = database.ref(DATA_MODEL.SKILLS.name);
    this.skillsRef.once('value', snapshot => {
      //referentialReducer: state.referential.skills
      const action = { type: ActionTypes.REFERENTIAL.LOAD_SKILLS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.caracteristicsRef = database.ref(DATA_MODEL.CARACTERISTICS.name);
    this.caracteristicsRef.once('value', snapshot => {
      //referentialReducer: state.referential.caracteristics
      const action = { type: ActionTypes.REFERENTIAL.LOAD_CARACTERISTICS, value: objectToArray(snapshot.val()) }
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
          <Route
            exact path={ROUTE_HOME}
            render={props => ( <Page {...props} component={Home} title="JdR Manager" /> )}
          />
          <Route
            exact path={ROUTE_GAME_MASTER}
            render={props => ( <Page {...props} component={GameMaster} title="Maître du jeu - JdR Manager" /> )}
          />
          <Route
            path={`${ROUTE_CHARACTER}/:characterId`}
            render={props => ( <Page {...props} component={Character} title={`Fiche personnage de ${props.match.params.characterId} - JdR Manager`} /> )}
          />
          <Route
            render={props => ( <Page {...props} component={NotFound} title="Page introuvable - JdR Manager" /> )}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default connect(state => state)(App)

export const ROUTE_HOME = "/";
export const ROUTE_GAME_MASTER = "/gm";
export const ROUTE_CHARACTER = "/character";