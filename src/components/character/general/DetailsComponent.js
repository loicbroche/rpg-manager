
import React, { Component } from 'react'
import { CharacterPropType } from 'PropTypes';

import Weight from 'components/shared/Weight'
import './DetailsComponent.css'

const detailsImage = require('images/details.png');

class DetailsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { showDetails: false };
  }

  render() {
    const { showDetails } = this.state;
    const { character } = this.props;
    return (
      <div className="detailsComponent">
          <span className="details-header">
            <span className="character-name">{character.Name}</span>
            <img src={detailsImage} className="activable modify-details" alt="Lire/Modifier les détails" title="Lire/modifier les détails" onClick={this.onDetailsUpdate}/>
          </span>
        <div className={`details-container ${showDetails&&"show-details"}`}>
            <div className="detail">
              <span>Alignement</span>
              <span>{character.Alignment}</span>
            </div>
            <div className="detail">
              <span>Âge</span>
              <span>{character.Age}</span>
            </div>
            <div className="detail">
              <span>Poids</span>
              <Weight weight={character.Weight} />
            </div>
            <div className="detail">
              <span>Yeux</span>
              <span>{character.Eyes}</span>
            </div>
            <div className="detail">
              <span>Peau</span>
              <span>{character.Skin}</span>
            </div>
            <div className="detail">
              <span>Cheveux</span>
              <span>{character.Hairs}</span>
            </div>
            <div className="detail">
              <span>Traits de personnalité</span>
              <span>{character.PersonnalityTraits}</span>
            </div>
            <div className="detail">
              <span>Idéaux</span>
              <span>{character.Ideals}</span>
            </div>
            <div className="detail">
              <span>Liens</span>
              <span>{character.Links}</span>
            </div>
            <div className="detail">
              <span>Défauts</span>
              <span>{character.Defaults}</span>
            </div>
            <div className="detail">
              <span>Langues</span>
              <span>{character.Languages}</span>
            </div>
        </div>
      </div>
    )
  }

  // Arrow fx for binding
  onDetailsUpdate = (event) => {
    this.setState({showDetails: !this.state.showDetails})
  }
}

DetailsComponent.propTypes = {
  character: CharacterPropType.isRequired
}

export default DetailsComponent
