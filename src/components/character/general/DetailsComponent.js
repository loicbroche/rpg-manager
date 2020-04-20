
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectAlignments, selectObjectsMap, selectArmorById, selectWeaponById } from 'store/selectors';

import PropTypes from 'prop-types'
import { CharacterPropType } from 'PropTypes';
import { DATA_MODEL } from 'database/DataModel'

import './DetailsComponent.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';
import Weight from 'components/shared/Weight'
import LanguagesComponent from './LanguagesComponent'

const detailsImage = require('images/inkwell_primary.png');

class DetailsComponent extends PureComponent {

  render() {

    const { alignments, armor, shield, weapon, distanceWeapon, objectsMap, character, onChange, onClickElement } = this.props;

    const equipmentsWeight =  (armor?armor.Weight:0)
                              + (shield?shield.Weight:0)
                              + (weapon?weapon.Weight:0)
                              + (distanceWeapon?distanceWeapon.Weight:0);
    let objectsWeight = 0;
    if (objectsMap && character?.Objects) {
      for (let i = 0; i < character.Objects.length; i++) {
        const obj = objectsMap[character.Objects[i]];
        objectsWeight += !obj?0:obj.Weight;
      }
    }
    return (
      <div className="detailsComponent">
        <ExpendableComponent extensorTitle="les détails"
                              header={<span className="character-name">{character.Name}</span>}
                              extensor={<img src={detailsImage} alt="Détails" />}>
          <div className="details">
            <div className="details-names">
              <span>Alignement</span>
              <span>Âge</span>
              <span>Poids</span>
              <span>Yeux</span>
              <span>Peau</span>
              <span>Cheveux</span>
              <span>Traits de personnalité</span>
              <span>Idéaux</span>
              <span>Liens</span>
              <span>Défauts</span>
              <span>Langues</span>
            </div>
            <div className="details-values">
              { alignments && (
                  <select value={character.Alignment} disabled={!onChange}
                          onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.ALIGNMENT.name, event.target.value)}>
                    <option value="-" disabled>Choisissez un alignement</option>
                    { alignments?.map((alignment) => {
                      return <option key={alignment.Code} value={alignment.Code} title={alignment.Description}>{alignment.Name}</option>
                    })}
                  </select>
              )}
              <input  name="age" 
                      type="number"
                      autoComplete="age"
                      value={character[DATA_MODEL.CHARACTERS.columns.AGE.name]}
                      min={0}
                      step={1}
                      onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.AGE.name, parseInt(event.target.value) || 0)}
                      className="age"
                      disabled={!onChange} />
              <span>
                  <Weight weight={character.Weight} onChange={(value) => onChange(DATA_MODEL.CHARACTERS.columns.WEIGHT.name, value)} />
                  <span className="equipment-weight" title="Poids de l'équipmenent porté"> (+<Weight weight={equipmentsWeight + objectsWeight} />)</span>
              </span>
              <input  name="eyes" 
                      type="text"
                      autoComplete="eyes"
                      value={character[DATA_MODEL.CHARACTERS.columns.EYES.name]}
                      onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.EYES.name, event.target.value)}
                      className="eyes"
                      disabled={!onChange} />
              <input  name="skin" 
                      type="text"
                      autoComplete="skin"
                      value={character[DATA_MODEL.CHARACTERS.columns.SKIN.name]}
                      onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.SKIN.name, event.target.value)}
                      className="skin"
                      disabled={!onChange} />
              <input  name="hairs" 
                      type="text"
                      autoComplete="hairs"
                      value={character[DATA_MODEL.CHARACTERS.columns.HAIRS.name]}
                      onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.HAIRS.name, event.target.value)}
                      className="hairs"
                      disabled={!onChange} />
              <input  name="personnalityTraits" 
                      type="text"
                      autoComplete="personnalityTraits"
                      value={character[DATA_MODEL.CHARACTERS.columns.PERSONNALITY.name]}
                      onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.PERSONNALITY.name, event.target.value)}
                      className="personnalityTraits"
                      disabled={!onChange} />
              <input   name="ideals" 
                      type="text"
                      autoComplete="ideals"
                      value={character[DATA_MODEL.CHARACTERS.columns.IDEALS.name]}
                      onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.IDEALS.name, event.target.value)}
                      className="ideals"
                      disabled={!onChange} />
              <input  name="links" 
                      type="text"
                      autoComplete="links"
                      value={character[DATA_MODEL.CHARACTERS.columns.LINKS.name]}
                      onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.LINKS.name, event.target.value)}
                      className="links"
                      disabled={!onChange} />
              <input  name="defects" 
                      type="text"
                      autoComplete="defects"
                      value={character[DATA_MODEL.CHARACTERS.columns.DEFECTS.name]}
                      onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.DEFECTS.name, event.target.value)}
                      className="defects"
                      disabled={!onChange} />
              <LanguagesComponent knownLanguages={character[DATA_MODEL.CHARACTERS.columns.LANGUAGES.name]}
                                  subRaceId={character[DATA_MODEL.CHARACTERS.columns.SUB_RACE.name]}
                                  role="button" onClick={(value) => onClickElement(DATA_MODEL.CHARACTERS.columns.LANGUAGES.name, value)} />
            </div>
          </div>
        </ExpendableComponent>
      </div>
    )
  }
}

DetailsComponent.propTypes = {
  character: CharacterPropType.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickElement: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => ({
  alignments: selectAlignments(state),
  armor: selectArmorById(state, props.character?.Armor),
  shield: selectArmorById(state, props.character?.Shield),
  weapon: selectWeaponById(state, props.character?.weapon),
  distanceWeapon: selectWeaponById(state, props.character?.distanceWeapon),
  objectsMap: selectObjectsMap(state)
})
export default connect(mapStateToProps)(DetailsComponent)
