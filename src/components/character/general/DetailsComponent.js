
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
const SHORT_TEXT_MAX_LENGTH = 50;
const LONG_TEXT_MAX_LENGTH = 255;

class DetailsComponent extends PureComponent {

  render() {

    const { alignments, armor, shield, weapon, distanceWeapon, objectsMap, character, onChange, onClickElement, expendable, defaultExtended} = this.props;

    const equipmentsWeight =  (armor?armor.Weight:0)
                              + (shield?shield.Weight:0)
                              + (weapon?weapon.Weight:0)
                              + (distanceWeapon?distanceWeapon.Weight:0);
	
	let objectsWeight = 0;
    if (objectsMap && character?.Objects) {
      for (let i = 0; i < character.Objects.length; i++) {
        const obj = objectsMap[character.Objects[i].Id];
        objectsWeight += !obj?0:(obj.Weight*character.Objects[i].Quantity);
      }
	  for (let i = 0; i < character.SatchelObjects.length; i++) {
        const obj = objectsMap[character.SatchelObjects[i].Id];
        objectsWeight += !obj?0:(obj.Weight*character.SatchelObjects[i].Quantity);
      }
    }

	const detailContent = <div className="details">
		<span className="details-name row-1">Alignement</span>
		<span className="details-name row-2">Âge</span>
		<span className="details-name row-3">Taille</span>
		<span className="details-name row-4">Poids</span>
		<span className="details-name row-5">Yeux</span>
		<span className="details-name row-6">Peau</span>
		<span className="details-name row-7">Cheveux</span>
		<span className="details-name row-8">Traits de personnalité</span>
		<span className="details-name row-9">Idéaux</span>
		<span className="details-name row-10">Liens</span>
		<span className="details-name row-11">Défauts</span>
		<span className="details-name row-12">Langues</span>

		{ alignments && (
		  <select className="details-value row-1" value={character.Alignment} disabled={!onChange}
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
			  title={`Saisissez l'âge de votre personnage`}
			  onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.AGE.name, parseInt(event.target.value) || 0)}
			  className="age details-value row-2"
			  disabled={!onChange} />
		<span className="details-value row-3">
			<input name="height" 
				  type="number"
				  autoComplete="height"
				  value={character[DATA_MODEL.CHARACTERS.columns.HEIGHT.name]}
				  min={0}
				  step={1}
				  title={`Saisissez la taille de votre personnage`}
				  onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.HEIGHT.name, parseInt(event.target.value) || 0)}
				  className="height"
				  disabled={!onChange} />
			<span>cm</span>
		</span>
		<span className="details-value row-4" title={`Saisissez le poids de votre personnage`}>
		  <Weight weight={character.Weight} onChange={(value) => onChange(DATA_MODEL.CHARACTERS.columns.WEIGHT.name, value)} />
		  <span className="equipment-weight" title="Poids de l'équipement porté"> (+<Weight weight={equipmentsWeight + objectsWeight} />)</span>
		</span>
		<input  name="eyes" 
			  type="text"
			  autoComplete="eyes"
			  value={character[DATA_MODEL.CHARACTERS.columns.EYES.name]}
			  onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.EYES.name, event.target.value)}
			  className="eye details-value row-5"
			  disabled={!onChange}
			  maxLength={SHORT_TEXT_MAX_LENGTH}
			  title={`Saisissez la description des yeux (${character[DATA_MODEL.CHARACTERS.columns.EYES.name]?.length||0} / ${SHORT_TEXT_MAX_LENGTH} caractères)`} />
		<input  name="skin" 
			  type="text"
			  autoComplete="skin"
			  value={character[DATA_MODEL.CHARACTERS.columns.SKIN.name]}
			  onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.SKIN.name, event.target.value)}
			  className="skin details-value row-6"
			  disabled={!onChange}
			  maxLength={SHORT_TEXT_MAX_LENGTH}
			  title={`Saisissez la description de la peau (${character[DATA_MODEL.CHARACTERS.columns.SKIN.name]?.length||0} / ${SHORT_TEXT_MAX_LENGTH} caractères)`}/>
		<input  name="hairs" 
			  type="text"
			  autoComplete="hairs"
			  value={character[DATA_MODEL.CHARACTERS.columns.HAIRS.name]}
			  onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.HAIRS.name, event.target.value)}
			  className="hairs details-value row-7"
			  disabled={!onChange}
			  maxLength={SHORT_TEXT_MAX_LENGTH}
			  title={`Saisissez la description des cheveux (${character[DATA_MODEL.CHARACTERS.columns.HAIRS.name]?.length||0} / ${SHORT_TEXT_MAX_LENGTH} caractères)`}/>
		<input  name="personnalityTraits" 
			  type="text"
			  autoComplete="personnalityTraits"
			  value={character[DATA_MODEL.CHARACTERS.columns.PERSONNALITY.name]}
			  onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.PERSONNALITY.name, event.target.value)}
			  className="personnalityTraits details-value row-8"
			  disabled={!onChange}
			  maxLength={LONG_TEXT_MAX_LENGTH}
			  title={`Saisissez les traits de personnalité de votre personnage (${character[DATA_MODEL.CHARACTERS.columns.PERSONNALITY.name]?.length||0} / ${LONG_TEXT_MAX_LENGTH} caractères)`} />
		<input   name="ideals" 
			  type="text"
			  autoComplete="ideals"
			  value={character[DATA_MODEL.CHARACTERS.columns.IDEALS.name]}
			  onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.IDEALS.name, event.target.value)}
			  className="ideals details-value row-9"
			  disabled={!onChange}
			  maxLength={LONG_TEXT_MAX_LENGTH}
			  title={`Saisissez les idéaux de votre personnage (${character[DATA_MODEL.CHARACTERS.columns.IDEALS.name]?.length||0} / ${LONG_TEXT_MAX_LENGTH} caractères)`} />
		<input  name="links" 
			  type="text"
			  autoComplete="links"
			  value={character[DATA_MODEL.CHARACTERS.columns.LINKS.name]}
			  onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.LINKS.name, event.target.value)}
			  className="links details-value row-10"
			  disabled={!onChange}
			  maxLength={LONG_TEXT_MAX_LENGTH}
			  title={`Saisissez les liens de votre personnage (${character[DATA_MODEL.CHARACTERS.columns.LINKS.name]?.length||0} / ${LONG_TEXT_MAX_LENGTH} caractères)`} />
		<input  name="defects" 
			  type="text"
			  autoComplete="defects"
			  value={character[DATA_MODEL.CHARACTERS.columns.DEFECTS.name]}
			  onChange={(event) => onChange(DATA_MODEL.CHARACTERS.columns.DEFECTS.name, event.target.value)}
			  className="defects details-value row-11"
			  disabled={!onChange}
			  maxLength={LONG_TEXT_MAX_LENGTH}
			  title={`Saisissez les défauts de votre personnage (${character[DATA_MODEL.CHARACTERS.columns.DEFECTS.name]?.length||0} / ${LONG_TEXT_MAX_LENGTH} caractères)`} />
		<LanguagesComponent className="defects details-value row-12" knownLanguages={character[DATA_MODEL.CHARACTERS.columns.LANGUAGES.name]}
						  subRaceId={character[DATA_MODEL.CHARACTERS.columns.SUB_RACE.name]}
						  role="button" onClick={(value) => onClickElement(DATA_MODEL.CHARACTERS.columns.LANGUAGES.name, value)} />
    </div>;

    return (
      <div className="detailsComponent">
		{ expendable
		? (<ExpendableComponent extensorTitle="les détails"
                              header={<span className="character-name">{character.Name}</span>}
                              extensor={<img src={detailsImage} alt="Détails" />}
							  defaultExtended={defaultExtended}>
				{detailContent}
			</ExpendableComponent>)
		: detailContent
		}
      </div>
    )
  }
}

DetailsComponent.propTypes = {
  character: CharacterPropType.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickElement: PropTypes.func.isRequired
}

DetailsComponent.defaultProps = {
  expendable: false,
  defaultExtended: false,
}

const mapStateToProps = (state, props) => ({
  alignments: selectAlignments(state),
  armor: selectArmorById(state, props.character?.Armor),
  shield: selectArmorById(state, props.character?.Shield),
  weapon: selectWeaponById(state, props.character?.Weapon),
  distanceWeapon: selectWeaponById(state, props.character?.DistanceWeapon),
  objectsMap: selectObjectsMap(state)
})
export default connect(mapStateToProps)(DetailsComponent)
