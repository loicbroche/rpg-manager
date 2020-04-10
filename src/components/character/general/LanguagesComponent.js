
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './LanguagesComponent.css'

class LanguagesComponent extends PureComponent {
  render() {
    const {languages, races, subRaces, knownLanguages, subRaceId, onClick} = this.props;

    const subRace = subRaces?.[subRaceId];
    const race = races?.[subRace?.Race];
    const raceLanguages = race?.Languages;
    const subRaceLanguages = subRace?.Languages;

    return (
      <ul className='languages'>
      {languages &&
        Object.values(languages).map((language) => {
          const isKnown = knownLanguages?.includes(language.Code);
          let isRaceKnown = raceLanguages?.includes(language.Code);
          let raceKnownTitle = `Langue ${language.Name} connue de la race ${race.Name}`;
          const isSubRaceKnown = subRaceLanguages?.includes(language.Code);
          if (!isRaceKnown && isSubRaceKnown) {
            isRaceKnown = true;
            raceKnownTitle = `Langue ${language.Name} connue de la race ${subRace.Name}`;
          }     
          return (
          <li key={language.Code} className={"language "+(isRaceKnown?"race-known":"activable")} role="button" onClick={() => !isRaceKnown && onClick(language.Code)}
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

const mapStateToProps = (state) => ({
  languages: state.referential.languages,
  races: state.referential.races,
  subRaces: state.referential.subRaces
})
export default connect(mapStateToProps)(LanguagesComponent)
