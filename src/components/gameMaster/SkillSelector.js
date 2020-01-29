import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getLevel } from 'rules/Levels.rules'

import './SkillSelector.css'
import CaracteristicBonus from 'components/shared/CaracteristicBonus'

class SkillSelector extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedSkillName: "" }
  }

  render() {
    const { skills, caracteristics,  historics, levels,
            caracteristicsBonus, subRaceId, master, historicId, XP} = this.props;
    const {selectedSkillName} = this.state;
    const selectedSkill = skills && skills[selectedSkillName];
    const caracteristic = caracteristics && selectedSkill && caracteristics[selectedSkill.Caracteristic];
    const caracteristicBonus = caracteristicsBonus && caracteristic && caracteristicsBonus[caracteristic.Code];
    const level = getLevel(levels, XP);
    const masteryBonus = level && level.MasteryBonus;

    const historic = historics && historics[historicId];
    const historicSkills = historic?historic.Skills:[];

    const isMaster = master && master.includes(selectedSkillName);
    const isHistoricMaster = historicSkills.includes(selectedSkillName);

    return (
    <div className='skill-selector'>
      <select onChange={this.handleValueUpdate}>
        <option value="">--Bonus Compétences--</option>
        {skills &&
          Object.values(skills).map(({Name}, index) => {
            return <option key={Name} value={Name}>{Name}</option>
          }
        )}
      </select>
      { caracteristicBonus &&
        <CaracteristicBonus caracteristicName={ caracteristic && caracteristic.OV}
                                                value={caracteristicBonus}
                                                subRaceId={subRaceId}/>
      }
      <span className="skill-bonus">{ (isHistoricMaster||isMaster) && `+${masteryBonus}`}</span>
    </div>
  )
  }

  // Arrow fx for binding
  handleValueUpdate = (event) => {
    const value = event.target.value;
    this.setState({selectedSkillName: value})
  }
}

SkillSelector.propTypes = {
  caracteristicsBonus: PropTypes.any,
  subRaceId: PropTypes.string,
  master: PropTypes.arrayOf(PropTypes.string),
  historicId: PropTypes.string,
  XP: PropTypes.number,
}

SkillSelector.defaultProps = {
  XP: 0
}

const mapStateToProps = (state) => ({
  skills: state.referential.skills,
  caracteristics: state.referential.caracteristics,
  levels: state.referential.levels
})
export default connect(mapStateToProps)(SkillSelector)