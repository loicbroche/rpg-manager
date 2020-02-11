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

    this.specialisationsRef = database.ref(DATA_MODEL.SPECIALISATIONS.name);
    this.specialisationsRef.once('value', snapshot => {
      //referentialReducer: state.referential.specialisations
      const action = { type: ActionTypes.REFERENTIAL.LOAD_SPECIALISATIONS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.capacitiesRef = database.ref(DATA_MODEL.CAPACITIES.name);
    this.capacitiesRef.once('value', snapshot => {
      //referentialReducer: state.referential.capacities
      const action = { type: ActionTypes.REFERENTIAL.LOAD_CAPACITIES, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.historicsRef = database.ref(DATA_MODEL.HISTORICS.name);
    this.historicsRef.once('value', snapshot => {
      //referentialReducer: state.referential.historics
      const action = { type: ActionTypes.REFERENTIAL.LOAD_HISTORICS, value: objectToArray(snapshot.val()) }
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

    this.armorCategoriesRef = database.ref(DATA_MODEL.ARMOR_CATEGORIES.name);
    this.armorCategoriesRef.once('value', snapshot => {
      //referentialReducer: state.referential.armorCategories
      const action = { type: ActionTypes.REFERENTIAL.LOAD_ARMOR_CATEGORIES, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.armorsRef = database.ref(DATA_MODEL.ARMORS.name);
    this.armorsRef.once('value', snapshot => {
      //referentialReducer: state.referential.armors
      const action = { type: ActionTypes.REFERENTIAL.LOAD_ARMORS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.objectCategoriesRef = database.ref(DATA_MODEL.OBJECT_CATEGORIES.name);
    this.objectCategoriesRef.once('value', snapshot => {
      //referentialReducer: state.referential.objectCategories
      const action = { type: ActionTypes.REFERENTIAL.LOAD_OBJECT_CATEGORIES, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.objectsRef = database.ref(DATA_MODEL.OBJECTS.name);
    this.objectsRef.once('value', snapshot => {
      //referentialReducer: state.referential.objects
      const action = { type: ActionTypes.REFERENTIAL.LOAD_OBJECTS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.equipmentCategoriesRef = database.ref(DATA_MODEL.EQUIPMENT_CATEGORIES.name);
    this.equipmentCategoriesRef.once('value', snapshot => {
      //referentialReducer: state.referential.equipmentCategories
      const action = { type: ActionTypes.REFERENTIAL.LOAD_EQUIPMENT_CATEGORIES, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.equipmentsRef = database.ref(DATA_MODEL.EQUIPMENTS.name);
    this.equipmentsRef.once('value', snapshot => {
      //referentialReducer: state.referential.equipments
      const action = { type: ActionTypes.REFERENTIAL.LOAD_EQUIPMENTS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.hostelCategoriesRef = database.ref(DATA_MODEL.HOSTEL_CATEGORIES.name);
    this.hostelCategoriesRef.once('value', snapshot => {
      //referentialReducer: state.referential.hostelCategories
      const action = { type: ActionTypes.REFERENTIAL.LOAD_HOSTEL_CATEGORIES, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.hostelServicesRef = database.ref(DATA_MODEL.HOSTEL_SERVICES.name);
    this.hostelServicesRef.once('value', snapshot => {
      //referentialReducer: state.referential.hostelServices
      const action = { type: ActionTypes.REFERENTIAL.LOAD_HOSTEL_SERVICES, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.serviceCategoriesRef = database.ref(DATA_MODEL.SERVICE_CATEGORIES.name);
    this.serviceCategoriesRef.once('value', snapshot => {
      //referentialReducer: state.referential.serviceCategories
      const action = { type: ActionTypes.REFERENTIAL.LOAD_SERVICE_CATEGORIES, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.servicesRef = database.ref(DATA_MODEL.SERVICES.name);
    this.servicesRef.once('value', snapshot => {
      //referentialReducer: state.referential.hostelServices
      const action = { type: ActionTypes.REFERENTIAL.LOAD_SERVICES, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.mountsRef = database.ref(DATA_MODEL.MOUNTS.name);
    this.mountsRef.once('value', snapshot => {
      //referentialReducer: state.referential.mounts
      const action = { type: ActionTypes.REFERENTIAL.LOAD_MOUNTS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.shipsRef = database.ref(DATA_MODEL.SHIPS.name);
    this.shipsRef.once('value', snapshot => {
      //referentialReducer: state.referential.ships
      const action = { type: ActionTypes.REFERENTIAL.LOAD_SHIPS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.waresRef = database.ref(DATA_MODEL.WARES.name);
    this.waresRef.once('value', snapshot => {
      //referentialReducer: state.referential.wares
      const action = { type: ActionTypes.REFERENTIAL.LOAD_WARES, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.trinketsRef = database.ref(DATA_MODEL.TRINKETS.name);
    this.trinketsRef.once('value', snapshot => {
      //referentialReducer: state.referential.trinkets
      const action = { type: ActionTypes.REFERENTIAL.LOAD_TRINKETS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.skillsRef = database.ref(DATA_MODEL.SKILLS.name);
    this.skillsRef.once('value', snapshot => {
      //referentialReducer: state.referential.skills
      const action = { type: ActionTypes.REFERENTIAL.LOAD_SKILLS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.levelsRef = database.ref(DATA_MODEL.LEVELS.name);
    this.levelsRef.once('value', snapshot => {
      //referentialReducer: state.referential.levels
      const action = { type: ActionTypes.REFERENTIAL.LOAD_LEVELS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.caracteristicsRef = database.ref(DATA_MODEL.CARACTERISTICS.name);
    this.caracteristicsRef.once('value', snapshot => {
      //referentialReducer: state.referential.caracteristics
      const action = { type: ActionTypes.REFERENTIAL.LOAD_CARACTERISTICS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.spellsRef = database.ref(DATA_MODEL.SPELLS.name);
    this.spellsRef.once('value', snapshot => {
      //referentialReducer: state.referential.spells
      const action = { type: ActionTypes.REFERENTIAL.LOAD_SPELLS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.alterationsRef = database.ref(DATA_MODEL.ALTERATIONS.name);
    this.alterationsRef.once('value', snapshot => {
      //referentialReducer: state.referential.alterations
      const action = { type: ActionTypes.REFERENTIAL.LOAD_ALTERATIONS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.alterationTypesRef = database.ref(DATA_MODEL.ALTERATION_TYPES.name);
    this.alterationTypesRef.once('value', snapshot => {
      //referentialReducer: state.referential.alterationTypes
      const action = { type: ActionTypes.REFERENTIAL.LOAD_ALTERATION_TYPES, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.alignmentsRef = database.ref(DATA_MODEL.ALIGNMENTS.name);
    this.alignmentsRef.once('value', snapshot => {
      //referentialReducer: state.referential.alignments
      const action = { type: ActionTypes.REFERENTIAL.LOAD_ALIGNMENTS, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });

    this.languagesRef = database.ref(DATA_MODEL.LANGUAGES.name);
    this.languagesRef.once('value', snapshot => {
      //languagesRef: state.referential.languages
      const action = { type: ActionTypes.REFERENTIAL.LOAD_LANGUAGES, value: objectToArray(snapshot.val()) }
      this.props.dispatch(action);
    });
  }

  render () {
    return (
      <BrowserRouter>
        <header role="banner">
          <Link to={ROUTE_HOME}>
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

export default connect(state => state)(App)

export const ROUTE_HOME = "/";
export const ROUTE_GAME_MASTER = "/gm";
export const ROUTE_CHARACTER = "/character";