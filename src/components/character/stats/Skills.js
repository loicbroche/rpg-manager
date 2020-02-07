import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getLevel } from 'rules/Levels.rules'
import './Skills.css'
import CaracteristicBonus from 'components/shared/CaracteristicBonus'
import SkillSelector from 'components/shared//SkillSelector';

const detailsImage = require('images/details.png');

class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = { showSkills: false };
  }

  render() {
    const { skills, caracteristics, historics, levels,
            master, onClick, historicId, caracteristicsBonus, subRaceId, XP} = this.props;
    const { showSkills } = this.state;

    const historic = historics && historics[historicId];
    const historicSkills = historic && (historic.Skills || []);
    const level = getLevel(levels, XP);
    const masteryBonus = level && level.MasteryBonus;
    const title=showSkills?"Masquer les compétences":"Lire/Modifier les compétences";

    return (
    <div className="skillsComponent">
      <span className="skills-header">
        <SkillSelector  caracteristicsBonus={caracteristicsBonus}
                        subRaceId={subRaceId}
                        master={master}
                        XP={XP}
                        historicId={historicId} />
        <span className={`activable extensor ${showSkills?"opened":"closed"}`} onClick={this.onShowSkillsUpdate} title={title} >
          <img src={detailsImage} alt={title} />
        </span>
      </span>
      <div className={`skills-container`}>
        <ul className={`skills ${showSkills&&"show-skills"}`}>
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
      </div>

    </div>
  )
  }

  // Arrow fx for binding
  onShowSkillsUpdate = () => {
    this.setState({showSkills: !this.state.showSkills})
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