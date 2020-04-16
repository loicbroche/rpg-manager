
import React, { PureComponent } from 'react'
import { post } from 'axios'
import PropTypes from 'prop-types'

import './DamagesComponent.css'

const uploadFolder = "/file-upload";
const DAMAGES_LOCATIONS = [{code: "head", label: "Tête"},
                           {code: "torso", label: "Torse"},
                           {code: "right-arm", label: "Bras droit"},
                           {code: "right-forearm", label: "Avant-ras droit"},
                           {code: "right-thigh", label: "Cuisse droite"},
                           {code: "right-shin", label: "Tibiat droit"},
                           {code: "left-arm", label: "Bras gauche"},
                           {code: "left-forearm", label: "Avant-ras gauche"},
                           {code: "left-thigh", label: "Cuisse gauche"},
                           {code: "left-shin", label: "Tibiat gauche"}
];

class DamagesComponent extends PureComponent {

  render() {
    const {characterId, damages, onDamageChange} = this.props;
    let characterImage;
    try {
      characterImage = require(`images/profils/${characterId}.png`);
    } catch (ex) {
      characterImage = require("images/profils/no_image.png");
    }

    return (
      <div className="damagesComponent">
        <input type="file"
                className="activable custom-file-input"
                id="avatar" name="avatar"
                accept="image/png, image/jpeg"
                onChange={this.fileChangedHandler} />
        <div className="image-container">
          <img src={characterImage} alt="" />
          { DAMAGES_LOCATIONS.map((damageLocation) => {
              const hurt = damages?.includes(damageLocation.code);
              const damageSymbol = "";
              const damageTitle = damageLocation.label;
              return <div key={damageLocation.code}
                          className={`damage-marker ${damageLocation.code}-damage-marker ${hurt?"hurt":""}`}
                          title={damageTitle}
                          role="button" onClick={() => onDamageChange && onDamageChange(damageLocation.code)}>
                            <span className="damage-symbol">{damageSymbol}</span>
                      </div>
            })}
        </div>
      </div>
    )
  }

  fileChangedHandler = (event) => {
    const imageFile = event.target.files[0];
    const data = new FormData();
    data.append('file', imageFile);
    post(uploadFolder, data, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        console.log(res.statusText)
      });
  }
}

DamagesComponent.propTypes = {
  characterId: PropTypes.string,
  damages: PropTypes.arrayOf(PropTypes.string),
  onDamageChange: PropTypes.func
}

export default DamagesComponent
