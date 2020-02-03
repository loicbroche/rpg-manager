
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './SavesComponent.css'

class SavesComponent extends Component {

  render() {
    const { alterations, caracteristics, races, subRaces, classes, saves, subRaceId, classId, onClick} = this.props;

    //const subRace = subRaces && subRaces[subRaceId];
    //const race = subRace && races && races[subRace.Race];

    const characterClass = classes && classes[classId];
    const classSaves = characterClass && characterClass.Saves;
    const className = characterClass?characterClass.Name:"";
console.log("SavesComponent", classId, characterClass, classSaves);
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

                return <span key={caracteristic.Code} onClick={() => { onClick && !classSaved && onClick(caracteristic.Code)}}
                              title={classSaved?`Jet de sauvegarde ${caracteristic.Name}\nHérité de la classe ${className}`:((saved?"Désactiver":"Activer")+" le jet de sauvegarde "+caracteristic.Name)}
                              className={`save ${onClick?"activable":""} ${classSaved?"class-saved":""}`}>
                  <img  src={saveImage} className={`save-image ${saved?"saved":""} ${caracteristic.Code}`} alt={caracteristic.Name} />
                </span>

              })
            }
          </div>
          <div className="alteration-saves">
            { alterations &&
              Object.values(alterations).map((alteration) => {
                let saveImage;
                try {
                  saveImage = require(`images/alterations/${alteration.Code}.png`);
                } catch (ex) {
                  saveImage = require(`images/alterations/no_image.png`);
                }

                const saved = saves && saves.find((save) => save === alteration.Code);
                return <span key={alteration.Code} onClick={() => { onClick && onClick(alteration.Code)}}
                              title={(saved?"Désactiver":"Activer")+" le jet de sauvegarde "+alteration.Element}
                              className={`save ${onClick?"activable":""}`}>
                  <img  src={saveImage} className={`save-image ${saved?"saved":""}`} alt={alteration.Element} />
                </span>

              })
            }
          </div>
        </div>
      </div>
    )
  }
}

SavesComponent.propTypes = {
  saves: PropTypes.arrayOf(PropTypes.string),
  subRaceId: PropTypes.string,
  classId: PropTypes.string,
  onClick: PropTypes.func
}

const mapStateToProps = (state) => ({
  alterations: state.referential.alterations,
  caracteristics: state.referential.caracteristics,
  races: state.referential.races,
  subRaces: state.referential.subRaces,
  classes: state.referential.classes
})

export default connect(mapStateToProps)(SavesComponent)
