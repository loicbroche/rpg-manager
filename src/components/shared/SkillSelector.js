import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { selectMasteryBonusByXP, selectHistoricById, selectSkills, selectSkillsMap, selectSkillById, selectCaracteristicsMap } from 'store/selectors';
import PropTypes from 'prop-types'

import './SkillSelector.css'
import CaracteristicBonus from 'components/shared/CaracteristicBonus'

class SkillSelector extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { selectedSkillName: "" }
  }

  render() {
    const { skills, skillsMap, caracteristicsMap,  historic, masteryBonus,
            caracteristicsBonus, subRaceId, master} = this.props;
    const {selectedSkillName} = this.state;
    const selectedSkill = skillsMap?.[selectedSkillName];

    const selectedSkillCaracteristic = caracteristicsMap?.[selectedSkill?.Caracteristic];
    const caracteristicBonus = caracteristicsBonus?.[selectedSkillCaracteristic?.Code];

    const historicSkills = historic?.Skills || [];
    const isMaster = master?.includes(selectedSkillName);
    const isHistoricMaster = historicSkills.includes(selectedSkillName);

    return (
    <div className='skill-selector'>
      <select onChange={this.handleValueUpdate}>
        <option value="">--Bonus Compétences--</option>
        {skills?.map(({Name}) => {
            return <option key={Name} value={Name}>{Name}</option>
          }
        )}
      </select>
      { caracteristicBonus &&
        <span title={`Bonus ${selectedSkillCaracteristic?.Name}`}>
        <CaracteristicBonus caracteristicName={ selectedSkillCaracteristic?.OV}
                                                value={caracteristicBonus}
                                                subRaceId={subRaceId} />
        </span>
      }
      <span className="skill-bonus" title={(isHistoricMaster||isMaster)?"Bonus maîtrise":""}>{ (isHistoricMaster||isMaster) && `+${masteryBonus}`}</span>
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

const mapStateToProps = (state, props) => ({

  skills: selectSkills(state),
  skillsMap: selectSkillsMap(state),
  selectedSkill: selectSkillById(state, state.selectedSkillName),
  caracteristicsMap: selectCaracteristicsMap(state),
  masteryBonus: selectMasteryBonusByXP(state, props.XP),
  historic: selectHistoricById(state, props.historicId)
})
export default connect(mapStateToProps)(SkillSelector)