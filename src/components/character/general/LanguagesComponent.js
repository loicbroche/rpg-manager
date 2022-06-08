
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectLanguages, selectLanguagesBySubRace, selectLanguagesByRace, selectSubRaceById, selectRaceBySubRaceId} from 'store/selectors';
import PropTypes from 'prop-types'

import './LanguagesComponent.css'

class LanguagesComponent extends PureComponent {
  render() {
    const {languages, race, subRace, raceLanguages, subRaceLanguages, knownLanguages, onClick} = this.props;

    return (
      <ul className='languages'>
      {languages?.map((language) => {
          const isKnown = knownLanguages?.includes(language.Code);
          let isRaceKnown = raceLanguages?.includes(language.Code);
          let raceKnownTitle = `Langue ${language.Name} connue de la race ${race?.Name}`;
          const isSubRaceKnown = subRaceLanguages?.includes(language.Code);
          if (!isRaceKnown && isSubRaceKnown) {
            isRaceKnown = true;
            raceKnownTitle = `Langue ${language.Name} connue de la race ${subRace?.Name}`;
          }     

          return (
          <li key={language.Code} id={language.Code} className={"language "+(isRaceKnown?"race-known":"activable")} role="button" onClick={() => !isRaceKnown && onClick(language.Code)}
              title={ ( isRaceKnown
                        ?raceKnownTitle
                        :(isKnown?`Oublier`:`Apprendre`)+` la langue ${language.Name}`
                      ) +`\nEcriture ${language.Writing}`
                    }>
            <div className={"option "+((isRaceKnown||isKnown)&&"filled")}></div>
            <span className="language-name">{language.Name}</span>
          </li>
        )}
      )}
    </ul>
    )
  }
}

LanguagesComponent.propTypes = {
  knownLanguages: PropTypes.arrayOf(PropTypes.string),
  subRaceId: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => ({
  languages: selectLanguages(state),
  subRace: selectSubRaceById(state, props.subRaceId),
  race: selectRaceBySubRaceId(state, props.subRaceId),
  subRaceLanguages: selectLanguagesByRace(state, props.subRaceId),
  raceLanguages: selectLanguagesBySubRace(state, props.subRaceId)
})
export default connect(mapStateToProps)(LanguagesComponent)
