import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {confirm} from 'Tools'

import './CharacterMenuItem.css'
import { ROUTE_CHARACTER } from 'App'

const deleteImage = require('images/delete-character-icone.png');

class CharacterMenuItem extends PureComponent { 
  render() {
    const { name } = this.props;
    return (
      <div className="character-menu-item">
        <Link to={`${ROUTE_CHARACTER}/${name}`} title={`Accéder à la fiche personnage de ${name}`}>
          {name}
        </Link>
        <button className="delete-button" title={`Supprimer la fiche personnage de ${name}`}
                onClick={() => this.onDelete() }>
          <img src={deleteImage} alt={`Supprimer la fiche personnage de ${name}`} className="delete-image" />
        </button>
      </div>
    )
  }

  onDelete = () => {
    const { id, name, scenarioId, onRemove } = this.props;
    confirm(`Êtes-vous certain de vouloir supprimer la fiche personnage de ${name} ?`,
            (callbackState) => {if (callbackState) { onRemove(id, scenarioId) } },
            `Suppression de ${name}`,
            "Supprimer"
    );
  }
}

CharacterMenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  scenarioId: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default CharacterMenuItem
