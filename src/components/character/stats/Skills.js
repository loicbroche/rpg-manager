import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectMasteryBonusByXP, selectHistoricById, selectSkills, selectCaracteristicsMap, selectRaceBySubRaceId, selectSubRaceById } from 'store/selectors';

import './Skills.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';
import CaracteristicBonus from 'components/shared/CaracteristicBonus'
import SkillSelector from 'components/shared//SkillSelector';

const detailsImage = require('images/details.png');

class Skills extends PureComponent {


  render() {
    const { skills, caracteristicsMap, historic, race, subRace, masteryBonus, XP,
            master, onClick, historicId, caracteristicsBonus, subRaceId} = this.props;
    
    const historicSkills = historic?.Skills || [];
    const raceSkills = race?.Skills || [];
    const subRaceSkills = subRace?.Skills || [];

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
            {skills?.map(({Caracteristic: caracteristicCode, Name}, index) => {
                const isMaster = master?.includes(Name);
                const isHistoricMaster = historicSkills.includes(Name);
                const isRaceMaster = raceSkills.includes(Name);
                const isSubRaceMaster = subRaceSkills.includes(Name);
                const caracteristic = caracteristicsMap?.[caracteristicCode];
                const caracteristicBonus = caracteristicsBonus?.[caracteristicCode];

                return (
                <li key={index} className={"skill "+(isHistoricMaster||isRaceMaster?"locked":"activable")} role="button" onClick={() => !isHistoricMaster && !isRaceMaster && onClick(Name)}
                    title={isHistoricMaster
                            ?"Maîtrise héritée de l'historique "+historic.Name
                            :isRaceMaster
                              ?"Maîtrise héritée de la race "+race.Name
                              :isSubRaceMaster
                              ?"Maîtrise héritée de la race "+subRace.Name
                                :(isMaster?"Oublier la compétence "+Name:"Apprendre la compétence "+Name)}>
                  <div className={"option "+((isHistoricMaster||isRaceMaster||isSubRaceMaster||isMaster)&&"filled")}></div>
                  <span className="skill-name">{Name}</span>
                  { caracteristic &&
                    <CaracteristicBonus caracteristicName={ caracteristic.OV}
                                                          value={caracteristicBonus}
                                                          subRaceId={subRaceId}/>
                  }
                  <span className="skill-bonus">{ (isHistoricMaster||isRaceMaster||isSubRaceMaster||isMaster) && `+${masteryBonus}`}</span> 
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

const mapStateToProps = (state, props) => ({
  skills: selectSkills(state),
  caracteristicsMap: selectCaracteristicsMap(state),
  historic: selectHistoricById(state, props.historicId),
  race: selectRaceBySubRaceId(state, props.subRaceId),
  subRace: selectSubRaceById(state, props.subRaceId),
  masteryBonus: selectMasteryBonusByXP(state, props.XP)
})
export default connect(mapStateToProps)(Skills)