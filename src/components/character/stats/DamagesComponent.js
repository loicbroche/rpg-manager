
import React, { Component } from 'react'

import PropTypes from 'prop-types'

import './DamagesComponent.css'

class DamagesComponent extends Component {

  render() {
    const {characterId} = this.props;
    let characterImage;
    try {
      characterImage = require(`images/profils/${characterId}.png`);
    } catch (ex) {
      characterImage = require("images/profils/no_image.png");
    }

    return (
      <div className="damagesComponent">
        <img src={characterImage} alt="" />
      </div>
    )
  }
}

DamagesComponent.propTypes = {
  characterId: PropTypes.string,
  subRaceId: PropTypes.string
}

export default DamagesComponent
