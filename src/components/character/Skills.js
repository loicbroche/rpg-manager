import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './Skills.css'

class Skills extends Component {

  render() {
    const { skills, historics, master, onClick, historicId } = this.props;
    const historic = historics && historics[historicId];
    const historicSkills = historic?historic.Skills:[];

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
  onClick: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  skills: state.referential.skills,
  historics: state.referential.historics
})
export default connect(mapStateToProps)(Skills)