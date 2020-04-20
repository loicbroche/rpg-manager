import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { referentialDatabase } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import { ActionTypes } from 'store/actions/ActionTypes';
import * as Actions from 'store/actions/Actions';

import 'App.css'
import NotFound from 'components/error/NotFound'
import Page from 'components/Page'
import Home from 'components/home/Home'
import GameMaster from 'components/gameMaster/GameMaster'
import Character from 'components/character/Character'

class App extends Component {
  componentDidMount() {
    Object.values(ActionTypes.REFERENTIAL).forEach((tableName) => {
      if (DATA_MODEL?.[tableName]) {
        const ref = referentialDatabase.ref(DATA_MODEL?.[tableName]?.name);
        ref.once('value', snapshot => { this.props.loadReferential(tableName, snapshot.val()); });
      }
    });
  }

  render () {
    return (
      <BrowserRouter>
        <header role="banner">
          <Link to={ROUTE_HOME} title="Retour à l'accueil">
            <div className="header activable">
              <span>JdR Manager</span>
            </div>
          </Link>
        </header>
        <div className="body">
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
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(state => state, {loadReferential: Actions.loadReferentialValuesAction})(App)

export const ROUTE_HOME = "/";
export const ROUTE_GAME_MASTER = "/gm";
export const ROUTE_CHARACTER = "/character";