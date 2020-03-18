
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getLevelNumber } from 'rules/Levels.rules'
import './ClassSelector.css'

const classBorderImage = require("images/classes/class_border.png");

class ClassSelector extends Component {

  render() {
    const { classes, specialisations, fightStyles, fightStyleIds, levels, classId, specialisationId, XP, onFightStyleChange} = this.props;

    const classFightStyles = fightStyles && Object.values(fightStyles).filter((style) => style.Class === classId);
    const characterClass = classes && classes[classId];
    const fightStyleLevel = characterClass && characterClass.FightStyleLevel;
    const specialisationLevel = characterClass && characterClass.SpecialisationLevel;
    const level = getLevelNumber(levels, XP);
    const specialisable = specialisationLevel <= level;
    const figthStylable = fightStyleLevel <= level;
    let specialisation = specialisations && specialisations[specialisationId];
    const isValidSpecialisation = specialisable && specialisation && specialisation.Class === classId;
    specialisation = isValidSpecialisation && specialisation;

    let classImage;
    try {
      classImage = require(`images/classes/${classId}.png`);
    } catch (ex) {
      classImage = require("images/classes/no_image.png");
    }

    let specialisationImage;
    try {
      specialisationImage = require(`images/classes/specialisations/${specialisation && specialisation.Code}.png`);
    } catch (ex) {
      specialisationImage = require("images/classes/specialisations/no_image.png");
    }

    return (
      <div className="class-style-selector">
        {figthStylable && <div className="fight-styles">
          {classFightStyles &&
            classFightStyles.map((style) => {
              let fightStyleImage;
              try {
                fightStyleImage = require(`images/classes/fightStyles/${style.Code}.png`);
              } catch (ex) {
                fightStyleImage = require("images/classes/no_image.png");
              }
              const active = fightStyleIds && fightStyleIds.includes(style.Code);
              const title=`${style.Name}\n${style.Description}`;
            return <span key={style.Code} className={`fight-style activable ${active?"":"inactive"}`} title={title}
                          onClick={() => {onFightStyleChange(style.Code)}}>
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
                { Object.entries(classes).map(([key, value]) => (
                  <option key={key} value={key}>{value.Name}</option>
                ))}
              </select>
            )}

            { specialisable && specialisations &&
              <div className="selector-icon specialisation-icon">
                <img src={specialisationImage} className="selector-image" alt="" />
                <img src={classBorderImage} className="selector-image" alt="" />
              </div>
            }
            { specialisable && specialisations && (
              <select className="selector-select specialisation" value={(specialisation && specialisation.Code) || "-"} onChange={this.handleSpecialisationValueUpdate}>
                <option value="-" disabled>Choisissez une spécialisation</option>
                { Object.values(specialisations).filter((specialisation) => specialisation.Class === classId).map(({Code, Name}) => (
                  <option key={Code} value={Code}>{Name}</option>
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

const mapStateToProps = (state) => ({
  classes: state.referential.classes,
  specialisations: state.referential.specialisations,
  fightStyles: state.referential.fightStyles,
  levels: state.referential.levels
})
export default connect(mapStateToProps)(ClassSelector)