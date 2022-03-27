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

const logoImage = require('images/logo192.png');

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
        <header role="banner" className="banner">
          <Link to={ROUTE_HOME} title="Retour à l'accueil">
            <div className="header activable">
              <img className="banner-image" src={logoImage} alt="" />
			  <span className="banner-text">JdR Manager</span>
            </div>
          </Link>
			<h1 className="page-title">
			    <Switch>
				    <Route
					  exact path={ROUTE_ROOT}
					  render={props => ( <span>Menu</span> )}
					/>
					<Route
					  exact path={ROUTE_HOME}
					  render={props => ( <span>Menu</span> )}
					/>
					<Route
					  exact path={`${ROUTE_GAME_MASTER}/:scenarioId`}
					  render={props => ( <span>Vision maître du jeu</span> )}
					/>
					<Route
					  path={`${ROUTE_CHARACTER}/:characterId`}
					  render={props => ( <span>Fiche personnage de {props.match.params.characterId}</span> )}
					/>
				</Switch>
			</h1>
        </header>
        <div className="body">
          <Switch>
            <Route
              exact path={ROUTE_ROOT}
              render={props => ( <Page {...props} component={Home} title="JdR Manager" /> )}
            />
            <Route
              exact path={ROUTE_HOME}
              render={props => ( <Page {...props} component={Home} title="JdR Manager" /> )}
            />
            <Route
              exact path={`${ROUTE_GAME_MASTER}/:scenarioId`}
              render={props => ( <Page {...props} component={GameMaster} title="Maître du jeu - JdR Manager" /> )}
            />
            <Route
              path={`${ROUTE_CHARACTER}/:characterId`}
              render={props => ( <Page {...props} component={Character} title={`Fiche personnage de {props.match.params.characterId} - JdR Manager`} /> )}
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

export const ROUTE_ROOT = "/";
export const ROUTE_HOME = "/rpg-manager";
export const ROUTE_GAME_MASTER = "/rpg-manager/gm";
export const ROUTE_CHARACTER = "/rpg-manager/character";