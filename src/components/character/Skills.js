import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './Skills.css'

class Skills extends Component {

  render() {
    const { skills, historics, levels, master, onClick, historicId, level} = this.props;
    const historic = historics && historics[historicId];
    const historicSkills = historic?historic.Skills:[];
    const masteryBonus = levels && levels[level] && levels[level].MasteryBonus;

    return (
    <ul className='skills'>
      {skills &&
        Object.values(skills).map(({Caracteristic, Name}, index) => {
          const isMaster = master && master.includes(Name);
          const isHistoricMaster = historicSkills.includes(Name);
          return (
          <li key={index} className={"skill "+(isHistoricMaster&&"historic-master")} onClick={() => !isHistoricMaster && onClick(Name)}>
            <div className={"option "+((isHistoricMaster||isMaster)&&"filled")}></div>
            <span className="skill-name">{Name}</span>
            <span>( {Caracteristic} )</span>
            <span className="skill-bonus">{ (isHistoricMaster||isMaster) && `+${masteryBonus}`}</span> 
          </li>
        )}
      )}
    </ul>
  )
  }
}

Skills.propTypes = {
  master: PropTypes.arrayOf(PropTypes.string),
  historicId: PropTypes.string,
  level: PropTypes.number,
  onClick: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  skills: state.referential.skills,
  historics: state.referential.historics,
  levels: state.referential.levels
})
export default connect(mapStateToProps)(Skills)