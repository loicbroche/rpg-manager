
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectSubRaceById, selectRaceBySubRaceId, selectAlterationTypes, selectAlterations } from 'store/selectors';
import PropTypes from 'prop-types'

import './AlterationsComponent.css'

class AlterationsComponent extends PureComponent {

  render() {
    const { alterationTypes } = this.props;

    return (
      <div className="alterationsComponent">
	  <h1>Altérations</h1>
        <div className="alterations">
        <div className="savable">
            {alterationTypes?.map((type) => type.Savable && <span key={type.Code} className="alteration-category">{this.getAlterations(type)}</span>)
            }
          </div>
          <div className="unsavable">
            {alterationTypes?.map((type) => !type.Savable && <span key={type.Code} className="alteration-category">{this.getAlterations(type)}</span>)
            }
          </div>
        </div>
      </div>
    )
  }

  getAlterations(alterationType) {
    const { alterations,  race, subRace, resistances, characterAlterations, onClick, onResistanceClick} = this.props;
    const availableAlterations = alterations?.filter((alteration) => alteration.Type === alterationType.Code);

    const raceName = race?.Name || "";
    const raceResistances = race?.Resistances;
    const subRaceResistances = subRace?.Resistances;
    const subRaceName = subRace?.Name || "";

    return (
      availableAlterations?.map((alteration) => {
        let alterationImage;
        try {
          alterationImage = require(`images/alterations/${alteration.Code}.png`);
        } catch (ex) {
          alterationImage = require(`images/alterations/no_image.png`);
        }

        const alterated = characterAlterations?.find((alt) => alt === alteration.Code);
        let raceResistant = raceResistances?.find((resistance) => resistance === alteration.Code);
        let raceResistantTitle = `Résistance ${alteration.Name}\nHéritée de la race ${raceName}`;
        const subRaceResistant = subRaceResistances?.find((resistance) => resistance === alteration.Code);
        if (!raceResistant && subRaceResistant) {
          raceResistant = true;
          raceResistantTitle = `Résistance ${alteration.Name}\nHéritée de la race ${subRaceName}`;
        }         
        const resistant = raceResistant || resistances?.find((resistance) => resistance === alteration.Code);

        return <span key={alteration.Code} role="button" onClick={() => { !resistant && onClick && onClick(alteration.Code)}}
                      className={`alteration ${( !resistant && onClick)?"activable":""}`}
                      data-tip={resistant?`Résistance ${alteration.Name}`:
                            ( onClick
                              ?(alterated?"Désactiver l'altération "+alteration.Effect+"\n"+alteration.EffectDescription:"Activer l'altération "+alteration.Effect)
                              :(alterated?alteration.Effect+"\n"+alteration.EffectDescription:"Non "+alteration.Effect)
                            )} >
          <img  src={alterationImage} className={`alteration-image ${alterated?"alterated":""}`} alt={alteration.Name} />
          <span className={`resistance ${raceResistant?"race-resistant":(onResistanceClick?"activable":"")}`}
                data-tip={`${raceResistant?raceResistantTitle:
                    ( onResistanceClick
                      ?((resistant?"Désactiver":"Activer")+` la résistance ${alteration.Name}`)
                      :((resistant?"Résistant":"Non résistant")+` à ${alteration.Name}`)
                    )
                }`}
                onClick={(event) => { if (!raceResistant && onResistanceClick) { onResistanceClick(alteration.Code) } event.stopPropagation()}}>
            <span className={`resistant-marker ${resistant&&"is-resistant"}`} ></span>
          </span>
        </span>
      })
    )
  }
}

AlterationsComponent.propTypes = {
  characterAlterations: PropTypes.arrayOf(PropTypes.string),
  resistances: PropTypes.arrayOf(PropTypes.string),
  subRaceId: PropTypes.string,
  onClick: PropTypes.func,
  onResistanceClick: PropTypes.func
}

const mapStateToProps = (state, props) => ({
  alterationTypes: selectAlterationTypes(state),
  alterations: selectAlterations(state),
  subRace: selectSubRaceById(state, props.subRaceId),
  race: selectRaceBySubRaceId(state, props.subRaceId)
})

export default connect(mapStateToProps)(AlterationsComponent)
