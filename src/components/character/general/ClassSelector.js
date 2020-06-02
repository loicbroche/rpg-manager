
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectClasses, selectClassById, selectLevelNumberByXP, selectSpecialisations,
         selectValidSpecialisation, selectFightStylesByClassId } from 'store/selectors';
import PropTypes from 'prop-types'

import './ClassSelector.css'

const classBorderImage = require("images/classes/class_border.png");

class ClassSelector extends PureComponent {

  render() {
    const { classes, class: characterClass, classId, specialisations, specialisation, classFightStyles, fightStyleIds, levelNumber, onFightStyleChange} = this.props;

    const fightStyleLevel = characterClass?.FightStyleLevel;
    const specialisationLevel = characterClass?.SpecialisationLevel;
    const specialisable = specialisationLevel <= levelNumber;
    const figthStylable = fightStyleLevel <= levelNumber;

    let classImage;
    try {
      classImage = require(`images/classes/${classId}.png`);
    } catch (ex) {
      classImage = require("images/classes/no_image.png");
    }

    let specialisationImage;
    try {
      specialisationImage = require(`images/classes/specialisations/${specialisation?.Code}.png`);
    } catch (ex) {
      specialisationImage = require("images/classes/specialisations/no_image.png");
    }

    return (
      <div className="class-selector-style">
        {figthStylable && <div className="fight-styles">
          { classFightStyles?.map((style) => {
              let fightStyleImage;
              try {
                fightStyleImage = require(`images/classes/fightStyles/${style.Code}.png`);
              } catch (ex) {
                fightStyleImage = require("images/classes/no_image.png");
              }
              const active = fightStyleIds?.includes(style.Code);
              const title=`${style.Name}\n${style.Description}`;
            return <span key={style.Code} className={`fight-style activable ${active?"":"inactive"}`} title={title}
                          role="button" onClick={() => {onFightStyleChange(style.Code)}}>
                      <img src={fightStyleImage} alt={style.Name} />
            </span>})}
        </div>}
        <div className="selector class-selector">
          <div className="selector-icon class-icon">
            <img src={classImage} className="selector-image" alt="" />
            <img src={classBorderImage} className="selector-image" alt="" />
          </div>
          <div className="selector-value">
            <span>Classe</span>
            { classes && (
              <select className="selector-select" value={(characterClass && classId) || "-"} onChange={this.handleValueUpdate}>
                <option value="-" disabled>Choisissez une classe</option>
                { classes?.map((currentClass) => (
                  <option key={currentClass.Id} value={currentClass.Id}>{currentClass.Name}</option>
                ))}
              </select>
            )}

            { specialisable &&
              <div className="selector-icon specialisation-icon" title={specialisation?.Description || ""}>
                <img src={specialisationImage} className="selector-image" alt="" />
                <img src={classBorderImage} className="selector-image" alt="" />
              </div>
            }
            { specialisable && specialisations && (
              <select className="selector-select specialisation" value={specialisation?.Code || "-"}
                      title={(specialisation?specialisation.Description:"")} onChange={this.handleSpecialisationValueUpdate}>
                <option value="-" disabled>Choisissez une spécialisation</option>
                { specialisations?.filter((specialisation) => specialisation.Class === classId).map(({Code, Name, Description}) => (
                  <option key={Code} value={Code} title={Description}>{Name}</option>
                ))}
              </select>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Arrow fx for binding
  handleValueUpdate = (event) => {
    const selectedClass = event.target.value;
    this.props.onChange(selectedClass);
  }

    // Arrow fx for binding
    handleSpecialisationValueUpdate = (event) => {
      const selectedSpecialisation = event.target.value;
      this.props.onSpecialisationChange(selectedSpecialisation);
    }
}

ClassSelector.propTypes = {
  classId: PropTypes.string,
  specialisationId: PropTypes.string,
  fightStyleIds: PropTypes.arrayOf(PropTypes.string),
  XP: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onSpecialisationChange: PropTypes.func.isRequired,
  onFightStyleChange: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => ({
  classes: selectClasses(state),
  class: selectClassById(state, props.classId),
  specialisations: selectSpecialisations(state),
  specialisation: selectValidSpecialisation(state, props.specialisationId, props.classId, props.XP),
  classFightStyles: selectFightStylesByClassId(state, props.classId),
  levelNumber: selectLevelNumberByXP(state, props.XP)
})
export default connect(mapStateToProps)(ClassSelector)