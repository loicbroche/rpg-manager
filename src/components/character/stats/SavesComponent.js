
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectSubRaceById, selectRaceBySubRaceId, selectClassById, selectCaracteristics,
        selectMasteryBonusByXP, selectAlterationTypes, selectAlterations } from 'store/selectors';

import PropTypes from 'prop-types'

import './SavesComponent.css'

class SavesComponent extends PureComponent {

  render() {
    const { alterationTypes, caracteristics, race, subRace, class: characterClass, saves, advantages, masteryBonus, onClick, onAdvantageClick} = this.props;

    const classSaves = characterClass?.Saves;
    const className = characterClass?.Name || "";

    const raceSaveAdvantages = race?.SaveAdvantages;
    const subRaceSaveAdvantages = subRace?.SaveAdvantages;

    return (
      <div className="savesComponent">
        <h1>Jets de sauvegarde</h1>
        <div className="saves">
          <div className="caracteristics-saves">
            { caracteristics?.map((caracteristic) => {
                let saveImage;
                try {
                  saveImage = require(`images/caracteristics/${caracteristic.Code}_icon.png`);
                } catch (ex) {
                  saveImage = require(`images/alterations/no_image.png`);
                }
                const classSaved = classSaves?.find((save) => save === caracteristic.Code);
                const saved = classSaved || saves?.find((save) => save === caracteristic.Code);
                let raceAdvantage = raceSaveAdvantages?.find((save) => save === caracteristic.Code);
                let raceAdvantageTitle = `Avantage au jet de sauvegarde ${caracteristic.Name}\nHérité de la race ${race?.Name}`;
                if (!raceAdvantage && subRaceSaveAdvantages?.find((save) => save === caracteristic.Code)) {
                  raceAdvantage = true;
                  raceAdvantageTitle = `Avantage au jet de sauvegarde ${caracteristic.Name}\nHérité de la race ${subRace?.Name}`;
                }               
                const advantage = raceAdvantage || advantages?.find((save) => save === caracteristic.Code);

                return <span key={caracteristic.Code} role="button" onClick={() => { onClick && !classSaved && onClick(caracteristic.Code)}}
                             className={`save ${onClick?"activable":""} ${classSaved?"class-saved":""}`}
                             data-tip={classSaved?`Jet de sauvegarde ${caracteristic.Name} +${masteryBonus}\nHérité de la classe ${className}`:
                                   (  onClick
                                      ?((saved?"Désactiver":"Activer")+` le jet de sauvegarde ${caracteristic.Name} +${masteryBonus}`)
                                      :(saved?`Jet de sauvegarde ${caracteristic.Name} +${masteryBonus}`:`Pas de jet de sauvegarde ${caracteristic.Name}`)
                                   )} >
                  <img  src={saveImage} className={`save-image ${saved?"saved":""} ${caracteristic.Code}`} alt={caracteristic.Name}/>
                  <span className={`advantage ${raceAdvantage?"race-advantage":(onAdvantageClick?"activable":"")}`}
                        role="button" onClick={(event) => { if (!raceAdvantage && onAdvantageClick) { onAdvantageClick(caracteristic.Code) } event.stopPropagation()}}
                        data-tip={`${raceAdvantage?raceAdvantageTitle:
                                ( onAdvantageClick
                                  ?((advantage?"Désactiver":"Activer")+` l'avantage aux jets de sauvegarde ${caracteristic.Name}`)
                                  :((advantage?"Avantage":"Pas d'avantage")+` aux jets de sauvegarde ${caracteristic.Name}`)
                                )}`} >
                    <span className={`advantage-marker ${advantage&&"have-advantage"}`} ></span>
                  </span>
                </span>

              })
            }
          </div>
          <div className="alteration-saves">
            {alterationTypes?.map((type) => type.Savable && this.getAlterations(type))
            }
          </div>
        </div>
      </div>
    )
  }

  getAlterations(alterationType) {
    const { alterations, race, subRace, saves, advantages, masteryBonus, onClick, onAdvantageClick} = this.props;
    const availableAlterations = alterations?.filter((alteration) => alteration.Type === alterationType.Code);

    const raceSaveAdvantages = race?.SaveAdvantages;
    const subRaceSaveAdvantages = subRace?.SaveAdvantages;

    return (
      availableAlterations?.map((alteration) => {
        let saveImage;
        try {
          saveImage = require(`images/alterations/${alteration.Code}.png`);
        } catch (ex) {
          saveImage = require(`images/alterations/no_image.png`);
        }

        const saved = saves?.find((save) => save === alteration.Code);
        let raceAdvantage = raceSaveAdvantages?.find((save) => save === alteration.Code);
        let raceAdvantageTitle = `Avantage au jet de sauvegarde ${alteration.Name}\nHérité de la race ${race?.Name}`;
        if (!raceAdvantage && subRaceSaveAdvantages?.find((save) => save === alteration.Code)) {
          raceAdvantage = true;
          raceAdvantageTitle = `Avantage au jet de sauvegarde ${alteration.Name}\nHérité de la race ${subRace?.Name}`;
        }               
        const advantage = raceAdvantage || advantages?.find((save) => save === alteration.Code);

        return <span key={alteration.Code} role="button" onClick={() => { onClick && onClick(alteration.Code)}}
                      data-tip={(  onClick
                                ?((saved?"Désactiver":"Activer")+` le jet de sauvegarde ${alteration.Name} +${masteryBonus}`)
                                :(saved?`Jet de sauvegarde ${alteration.Name} +${masteryBonus}`:`Pas de jet de sauvegarde ${alteration.Name}`)
                      )}
                      className={`save ${onClick?"activable":""}`}>
          <img  src={saveImage} className={`save-image ${saved?"saved":""}`} alt={alteration.Name} />
          <span className={`advantage ${raceAdvantage?"race-advantage":(onAdvantageClick?"activable":"")}`}
                data-tip={`${raceAdvantage?raceAdvantageTitle:
                    ( onAdvantageClick
                      ?((advantage?"Désactiver":"Activer")+` l'avantage aux jets de sauvegarde ${alteration.Name}`)
                      :((advantage?"Avantage":"Pas d'avantage")+` aux jets de sauvegarde ${alteration.Name}`)
                    )}`}
                    role="button" onClick={(event) => { if (!raceAdvantage && onAdvantageClick) { onAdvantageClick(alteration.Code) } event.stopPropagation()}}>
            <span className={`advantage-marker ${advantage&&"have-advantage"}`} ></span>
          </span>
        </span>
      })
    )
  }
}

SavesComponent.propTypes = {
  saves: PropTypes.arrayOf(PropTypes.string),
  advantages: PropTypes.arrayOf(PropTypes.string),
  subRaceId: PropTypes.string,
  classId: PropTypes.string,
  XP: PropTypes.number,
  onClick: PropTypes.func,
  onAdvantageClick: PropTypes.func
}

const mapStateToProps = (state, props) => ({
  alterationTypes: selectAlterationTypes(state),
  alterations: selectAlterations(state),
  caracteristics: selectCaracteristics(state),
  subRace: selectSubRaceById(state, props.subRaceId),
  race: selectRaceBySubRaceId(state, props.subRaceId),
  class: selectClassById(state, props.classId),
  masteryBonus: selectMasteryBonusByXP(state, props.XP)
})

export default connect(mapStateToProps)(SavesComponent)
