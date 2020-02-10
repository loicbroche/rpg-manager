import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getLevel } from 'rules/Levels.rules'
import './Skills.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';
import CaracteristicBonus from 'components/shared/CaracteristicBonus'
import SkillSelector from 'components/shared//SkillSelector';

const detailsImage = require('images/details.png');

class Skills extends Component {


  render() {
    const { skills, caracteristics, historics, levels,
            master, onClick, historicId, caracteristicsBonus, subRaceId, XP} = this.props;
    
    const historic = historics && historics[historicId];
    const historicSkills = historic && (historic.Skills || []);
    const level = getLevel(levels, XP);
    const masteryBonus = level && level.MasteryBonus;

    return (
      <div className='skillsComponent'>
        <ExpendableComponent extensorTitle="les compétences"
                              header={<SkillSelector  caracteristicsBonus={caracteristicsBonus}
                                        subRaceId={subRaceId}
                                        master={master}
                                        XP={XP}
                                        historicId={historicId} />}
                              extensor={<img src={detailsImage} alt="Compétences" />}>
          <ul className="skills">
            {skills &&
              Object.values(skills).map(({Caracteristic: caracteristicCode, Name}, index) => {
                const isMaster = master && master.includes(Name);
                const isHistoricMaster = historicSkills.includes(Name);
                const caracteristic = caracteristics && caracteristics[caracteristicCode];
                const caracteristicBonus = caracteristicsBonus && caracteristicsBonus[caracteristicCode];

                return (
                <li key={index} className={"skill "+(isHistoricMaster?"locked":"activable")} onClick={() => !isHistoricMaster && onClick(Name)}
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
        </ExpendableComponent>
      </div>
    )
  }
}

Skills.propTypes = {
  master: PropTypes.arrayOf(PropTypes.string),
  historicId: PropTypes.string,
  XP: PropTypes.number,
  caracteristicsBonus: PropTypes.any,
  subRaceId: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

Skills.defaultProps = {
  caracteristicBonus: 0,
  XP: 0
}

const mapStateToProps = (state) => ({
  skills: state.referential.skills,
  caracteristics: state.referential.caracteristics,
  historics: state.referential.historics,
  levels: state.referential.levels
})
export default connect(mapStateToProps)(Skills)