
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {DamagePropType} from 'PropTypes'
import {promptAll, dragElement, onLongPress} from 'Tools'
import {uploadProfilImage, getProfilImage, deleteProfilImage} from 'database/StoredImages'

import './DamagesComponent.css'

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

const deleteImage = require('images/delete.png');

class DamagesComponent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {dragged: false, uploadingProgression: null, storedCharacterImage: null};
  }

  componentDidUpdate() {
    const { damages, onDamageChange } = this.props;
	DAMAGES_LOCATIONS.forEach((damage, i) => {
		const damageCode = damage.code;
		dragElement(document.getElementById(`${damageCode}-damage-marker`),
			document.getElementById("image-container"),
			(newTop, newLeft, changed) => {
				if (changed && onDamageChange) {
					this.setState({dragged: true});
					const newDamages = damages?.slice();
					const index = damages?.findIndex(({Code}) => Code === damageCode);
					if (index > -1) {
					  const damage = newDamages[index];
					  newDamages[index] = {...damage, Top: newTop, Left: newLeft};
					} else {
					  newDamages[newDamages.length] = {Code: damageCode, Top: newTop, Left: newLeft};
					}
					onDamageChange(newDamages);
				}
			});
		onLongPress(document.getElementById(`${damageCode}-damage-marker`),
					(e) => { this.setDamage(damageCode, true); });
	});
  }

  render() {
    const {characterId, damages} = this.props;
    const { storedCharacterImage } = this.state;
    let characterImage;
    if (storedCharacterImage) {
      characterImage = storedCharacterImage;
    } else {
      characterImage = require(`images/profils/no_image.png`);
      getProfilImage(characterId, (url) => {this.setState({storedCharacterImage: url})});
    }

    return (
      <div className="damagesComponent">
        <div id="image-container" className="image-container">
          <img src={characterImage} alt="" />
          { DAMAGES_LOCATIONS.map((damageLocation) => {
              const damage = damages?.find((damage) => damageLocation.code === damage?.Code);
              const style = {};
              if (damage?.Top || damage?.Left) {
                style.top = damage?.Top;
                style.left = damage?.Left;
              }
              const hurt = damage?.Hurt;
              const damageSymbol = hurt?damage?.Symbol:"";
              const damageTitle = `${damage?.Title||damageLocation.label}${hurt&&damage?.Description?"\n"+damage?.Description:""}`;
              return <div key={damageLocation.code}
                          id={`${damageLocation.code}-damage-marker`}
                          className={`damage-marker ${damageLocation.code}-damage-marker ${hurt?"hurt":""}`}
                          style={style}
                          title={damageTitle}
                          role="button" onClick={(event) => this.onDamageClick(event, damageLocation.code)}>
                            <div id={`${damageLocation.code}-damage-marker-header`} className="damage-marker-header"></div>
                            <span className="damage-symbol">{damageSymbol}</span>
                      </div>
            })}
        </div>
		<span className="profil-image-update">
            <input type="file"
                className="activable transparent custom-file-input"
                id="avatar" name="avatar"
                accept="image/png"
                onChange={this.fileChangedHandler}
                title={"Sélectionnez l'illustration de votre personnage"}
                style={this.state.uploadingProgression!==null?{background: `linear-gradient(to right, var(--color-Progress) ${this.state.uploadingProgression}%, var(--highlight-background-transparent-color-1)`}:null}/>
              {storedCharacterImage &&
                <span className="delete-image activable transparent" title="Supprimer" role="button" onClick={() => {deleteProfilImage(characterId, (url) => {this.setState({storedCharacterImage: null})})}}>
                  <img src={deleteImage} alt="Supprimer" />
              </span>}
        </span>
      </div>
    )
  }

  fileChangedHandler = (event) => {
    const imageFile = event.target.files[0];
    const {characterId} = this.props;
    const fileName = `${characterId}.png`;
    uploadProfilImage(imageFile,
                      fileName,
                      (percentage) => {this.setState({uploadingProgression : percentage})},
                      (url) => {this.setState({uploadingProgression : null, storedCharacterImage: url})});
  }

  updateDamageLabels = (damageCode, title, symbol, description) => {
    if ((title!==null && title!==undefined) || (symbol!==null && symbol!==undefined) ||(description!==null && description!==undefined)) {
      const {damages, onDamageChange} = this.props;
      const newDamages = damages.slice();
      const index = damages.findIndex(({Code}) => Code === damageCode);
      if (index > -1) {
        const damage = newDamages[index];
          newDamages[index] = { ...damage, Hurt: true,
                              Title: title,
                              Symbol: symbol||symbol===""?symbol:(damage.Symbol||""),
                              Description: description||symbol===""?description:(damage.Description||"")};
      } else {
        newDamages[newDamages.length] = { Code: damageCode, Hurt: true, Title: title, Symbol: symbol||"", Description: description||""};
      }
      onDamageChange(newDamages);
    }
  }

  setDamage = (damageCode, detail=false) => {
	const {damages, onDamageChange} = this.props;
	const { dragged } = this.state;
	if (onDamageChange && !dragged) {
	  const newDamages = damages.slice();
	  const index = damages.findIndex(({Code}) => Code === damageCode);
	  const damage = newDamages[index]
	  const damageLocation = DAMAGES_LOCATIONS?.find((damage) => damageCode === damage?.code);
	  if (detail) {
		promptAll([{message:`Saisissez un titre`, defaultValue: damage?.Title||damageLocation?.label},
				  {message:`Saisissez un symbole`, defaultValue: damage?.Symbol},
				  {message:`Saisissez une description`, defaultValue: damage?.Description}],
				  (callbackState) => {this.updateDamageLabels(damageCode, callbackState?.[0], callbackState?.[1], callbackState?.[2])},
			  "Détails de la blessure", "Valider");
	  } else {  
		if (index > -1) {
		  newDamages[index] = { ...damage, Hurt: !damage.Hurt};
		} else {
		  newDamages[newDamages.length] = { Code: damageCode, Hurt: true};
		}
		onDamageChange(newDamages);
		this.setState({dragged: false});
	  }
	}
  }

  onDamageClick = (event, damageCode) => {
	this.setDamage(damageCode, event.ctrlKey);
  }
}

DamagesComponent.propTypes = {
  characterId: PropTypes.string,
  damages: PropTypes.arrayOf(DamagePropType),
  onDamageChange: PropTypes.func
}

export default DamagesComponent
