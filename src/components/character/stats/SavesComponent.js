
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './SavesComponent.css'

class SavesComponent extends Component {

  render() {
    const { alterationTypes, caracteristics, races, subRaces, classes, saves, advantages, subRaceId, classId, onClick, onAdvantageClick} = this.props;

    const characterClass = classes && classes[classId];
    const classSaves = characterClass && characterClass.Saves;
    const className = characterClass?characterClass.Name:"";

    const subRace = subRaces && subRaces[subRaceId];
    const race = subRace && races && races[subRace.Race];
    const raceSaveAdvantages = race && race.SaveAdvantages;
    const subRaceSaveAdvantages = subRace && subRace.SaveAdvantages;

    return (
      <div className="savesComponent">
        <h1>Jets de sauvegarde</h1>
        <div className="saves">
          <div className="caracteristics-saves">
            { caracteristics &&
              Object.values(caracteristics).map((caracteristic) => {
                let saveImage;
                try {
                  saveImage = require(`images/caracteristics/${caracteristic.Code}_icon.png`);
                } catch (ex) {
                  saveImage = require(`images/alterations/no_image.png`);
                }
                const classSaved = classSaves && classSaves.find((save) => save === caracteristic.Code);
                const saved = classSaved || (saves && saves.find((save) => save === caracteristic.Code));
                let raceAdvantage = raceSaveAdvantages && raceSaveAdvantages.find((save) => save === caracteristic.Code);
                let raceAdvantageTitle = `Avantage au jet de sauvegarde ${caracteristic.Name}\nHérité de la race ${race.Name}`;
                if (!raceAdvantage && subRaceSaveAdvantages && subRaceSaveAdvantages.find((save) => save === caracteristic.Code)) {
                  raceAdvantage = true;
                  raceAdvantageTitle = `Avantage au jet de sauvegarde ${caracteristic.Name}\nHérité de la race ${subRace.Name}`;
                }               
                const advantage = raceAdvantage || (advantages && advantages.find((save) => save === caracteristic.Code));

                return <span key={caracteristic.Code} onClick={() => { onClick && !classSaved && onClick(caracteristic.Code)}}
                             className={`save ${onClick?"activable":""} ${classSaved?"class-saved":""}`}
                             title={classSaved?`Jet de sauvegarde ${caracteristic.Name}\nHérité de la classe ${className}`:
                                   (  onClick
                                      ?((saved?"Désactiver":"Activer")+" le jet de sauvegarde "+caracteristic.Name)
                                      :((saved?"Jet de sauvegarde":"Pas de jet de sauvegarde")+" "+caracteristic.Name)
                                   )} >
                  <img  src={saveImage} className={`save-image ${saved?"saved":""} ${caracteristic.Code}`} alt={caracteristic.Name}/>
                  <span className={`advantage ${raceAdvantage?"race-advantage":(onAdvantageClick?"activable":"")}`}
                        onClick={(event) => { if (!raceAdvantage && onAdvantageClick) { onAdvantageClick(caracteristic.Code) } event.stopPropagation()}}
                        title={`${raceAdvantage?raceAdvantageTitle:
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
            {alterationTypes &&
              Object.values(alterationTypes).map((type) => type.Resistable && this.getAlterations(type))
            }
          </div>
        </div>
      </div>
    )
  }

  getAlterations(alterationType) {
    const { alterations, races, subRaces, saves, advantages, subRaceId, onClick, onAdvantageClick} = this.props;
    const availableAlterations = alterations && Object.values(alterations).filter((alteration) => alteration.Type === alterationType.Code);

    const subRace = subRaces && subRaces[subRaceId];
    const race = subRace && races && races[subRace.Race];
    const raceSaveAdvantages = race && race.SaveAdvantages;
    const subRaceSaveAdvantages = subRace && subRace.SaveAdvantages;

    return (
      Object.values(availableAlterations).map((alteration) => {
        let saveImage;
        try {
          saveImage = require(`images/alterations/${alteration.Code}.png`);
        } catch (ex) {
          saveImage = require(`images/alterations/no_image.png`);
        }

        const saved = saves && saves.find((save) => save === alteration.Code);
        let raceAdvantage = raceSaveAdvantages && raceSaveAdvantages.find((save) => save === alteration.Code);
        let raceAdvantageTitle = `Avantage au jet de sauvegarde ${alteration.Name}\nHérité de la race ${race.Name}`;
        if (!raceAdvantage && subRaceSaveAdvantages && subRaceSaveAdvantages.find((save) => save === alteration.Code)) {
          raceAdvantage = true;
          raceAdvantageTitle = `Avantage au jet de sauvegarde ${alteration.Name}\nHérité de la race ${subRace.Name}`;
        }               
        const advantage = raceAdvantage || (advantages && advantages.find((save) => save === alteration.Code));

        return <span key={alteration.Code} onClick={() => { onClick && onClick(alteration.Code)}}
                      title={(  onClick
                                ?((saved?"Désactiver":"Activer")+" le jet de sauvegarde "+alteration.Name)
                                :((saved?"Jet de sauvegarde":"Pas de jet de sauvegarde")+" "+alteration.Name)
                      )}
                      className={`save ${onClick?"activable":""}`}>
          <img  src={saveImage} className={`save-image ${saved?"saved":""}`} alt={alteration.Name} />
          <span className={`advantage ${raceAdvantage?"race-advantage":(onAdvantageClick?"activable":"")}`}
                title={`${raceAdvantage?raceAdvantageTitle:
                    ( onAdvantageClick
                      ?((advantage?"Désactiver":"Activer")+` l'avantage aux jets de sauvegarde ${alteration.Name}`)
                      :((advantage?"Avantage":"Pas d'avantage")+` aux jets de sauvegarde ${alteration.Name}`)
                    )}`}
                onClick={(event) => { if (!raceAdvantage && onAdvantageClick) { onAdvantageClick(alteration.Code) } event.stopPropagation()}}>
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
  onClick: PropTypes.func,
  onAdvantageClick: PropTypes.func
}

const mapStateToProps = (state) => ({
  alterationTypes: state.referential.alterationTypes,
  alterations: state.referential.alterations,
  caracteristics: state.referential.caracteristics,
  races: state.referential.races,
  subRaces: state.referential.subRaces,
  classes: state.referential.classes
})

export default connect(mapStateToProps)(SavesComponent)
