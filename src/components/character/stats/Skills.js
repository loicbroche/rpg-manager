import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './Skills.css'
import CaracteristicBonus from 'components/shared/CaracteristicBonus'

class Skills extends Component {

  render() {
    const { skills, caracteristics, historics, levels,
            master, onClick, historicId, caracteristicsBonus, subRaceId, level} = this.props;
    const historic = historics && historics[historicId];
    const historicSkills = historic && (historic.Skills || []);
    const masteryBonus = levels && levels[level] && levels[level].MasteryBonus;

    return (
    <ul className='skills'>
      {skills &&
        Object.values(skills).map(({Caracteristic: caracteristicCode, Name}, index) => {
          const isMaster = master && master.includes(Name);
          const isHistoricMaster = historicSkills.includes(Name);
          const caracteristic = caracteristics && caracteristics[caracteristicCode];
          const caracteristicBonus = caracteristicsBonus && caracteristicsBonus[caracteristicCode];

          return (
          <li key={index} className={"skill "+(isHistoricMaster?"historic-master":"activable")} onClick={() => !isHistoricMaster && onClick(Name)}
              title={isHistoricMaster?"Maîtrise héritée de l'historique "+historic.Name:(isMaster?"Oublier la compétence "+Name:"Apprendre la compétence "+Name)}>
            <div className={"option "+((isHistoricMaster||isMaster)&&"filled")}></div>
            <span className="skill-name">{Name}</span>
            { caracteristic &&
              <CaracteristicBonus caracteristicName={ caracteristic.OV}
                                                    value={caracteristicBonus}
                                                    subRaceId={subRaceId}/>
            }
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
  caracteristicsBonus: PropTypes.any,
  subRaceId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

Skills.defaultProps = {
  caracteristicBonus: 0,
  level: 1
}

const mapStateToProps = (state) => ({
  skills: state.referential.skills,
  caracteristics: state.referential.caracteristics,
  historics: state.referential.historics,
  levels: state.referential.levels
})
export default connect(mapStateToProps)(Skills)