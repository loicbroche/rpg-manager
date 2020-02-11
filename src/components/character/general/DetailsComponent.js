
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CharacterPropType } from 'PropTypes';
import { DATA_MODEL } from 'database/DataModel'

import './DetailsComponent.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';
import Weight from 'components/shared/Weight'
import LanguagesComponent from './LanguagesComponent'

const detailsImage = require('images/inkwell_primary.png');

class DetailsComponent extends Component {

  render() {

    const { alignments, armors, weapons, character, onChange, onClickElement } = this.props;
    const armor = armors && character && armors[character.Armor];
    const shield = armors && character && armors[character.Shield];
    const weapon = weapons && character && weapons[character.Weapon];
    const distanceWeapon = weapons && character && weapons[character.DistanceWeapon];

    const equipmentsWeight =  (armor?armor.Weight:0)
                              + (shield?shield.Weight:0)
                              + (weapon?weapon.Weight:0)
                              + (distanceWeapon?distanceWeapon.Weight:0);
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
                    <option value="" disabled>Choisissez un alignement</option>
                    { Object.values(alignments).map((alignment) => {
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
                  <span className="equipment-weight" title="Poids de l'équipmenent porté"> (+<Weight weight={equipmentsWeight} />)</span>
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
                                  onClick={(value) => onClickElement(DATA_MODEL.CHARACTERS.columns.LANGUAGES.name, value)} />
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

const mapStateToProps = (state) => ({
  alignments: state.referential.alignments,
  armors: state.referential.armors,
  weapons: state.referential.weapons
})
export default connect(mapStateToProps)(DetailsComponent)
