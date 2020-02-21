import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './CharacterMenuItem.css'
import { ROUTE_CHARACTER } from 'App'

const deleteImage = require('images/delete-character-icone.png');
const CharacterMenuItem = ({ id, name, onRemove }) => (
      <div className="character-menu-item">
        <Link to={`${ROUTE_CHARACTER}/${name}`} title={`Accéder à la fiche personnage de ${name}`}>
          {name}
        </Link>
        <button className="delete-button" title={`Supprimer la fiche personnage de ${name}`}
        onClick={() => {if(window.confirm(`Êtes-vous certain de vouloir supprimer la fiche personnage de ${name} ?`)) {onRemove(id);}} }>
          <img src={deleteImage} alt={`Supprimer la fiche personnage de ${name}`} className="delete-image" />
        </button>
      </div>
    )

  CharacterMenuItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired
  }

export default CharacterMenuItem
