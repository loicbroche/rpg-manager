
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectObjectCategories, selectObjects, selectObjectsMap } from 'store/selectors';
import PropTypes from 'prop-types'
import {PersonnalObjectPropType} from 'PropTypes'
import {confirm} from 'Tools'

import './BagComponent.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';
import Money from 'components/shared/Money'
import Weight from 'components/shared/Weight'

const bagImage = require('images/bag.png');

const VARIOUS_CATEGORY = "VARIOUS";
const OBJECT_LABEL_MAX_SIZE = 50;

const deleteImage = require('images/delete.png');
const addImage = require('images/add.png');

class BagComponent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { newObjectId: "-", newObjectQuantity: 1, editingObjectId: null, editingLabel: null };
  }

  render() {
    const { objectsMap, objects, objectCategories, capacityCharge, money, onMoneyChange, displayMoney, characterObjects, name} = this.props;
    const {editingObjectId, editingObjectLabel} = this.state;
    let objectsWeight = 0;
    const objs = []
    if (objectsMap && characterObjects) {
      for (let i = 0; i < characterObjects.length; i++) {
        const obj = objectsMap[characterObjects[i]?.Id];
        obj.Id = characterObjects[i].Id;
        obj.Name = characterObjects[i].Label || obj.Name;
        obj.Quantity = characterObjects[i].Quantity;
        if (obj) {
          objectsWeight += (obj?.Weight||0)*obj.Quantity;
          objs[obj.Category] = objs[obj.Category] || [];
          objs[obj.Category][objs[obj.Category].length] = obj;
        } else {
          objs[VARIOUS_CATEGORY] = objs[VARIOUS_CATEGORY] || [];
          objs[VARIOUS_CATEGORY][objs[VARIOUS_CATEGORY].length] = {Name: characterObjects[i], Category: VARIOUS_CATEGORY, Weight: 0, Price: 0};
        }
      }
    }

    const newObject = objectsMap?.[this.state.newObjectId];

    return (
      <div className="bagComponent">
          <ExpendableComponent extensorTitle="le sac"
                                header={<span className="bagComponent-header">
                                          <span>{name}</span>
                                          {displayMoney && <Money amount={money} fullDisplay={true} onChange={onMoneyChange} />}
                                          <span><Weight weight={objectsWeight} /> / <Weight weight={capacityCharge} /></span>
                                        </span>}
                                extensor={<img src={bagImage} alt={name} />}
                                reverse={true}>                   
            { Object.entries(objs).map(([categoryId, categoryObjects]) => {
                const category = objectCategories?.[categoryId];
                return <div className="bagItems" key={categoryId}>
                  <span className="categoryName">{category?.Name}</span>
                  { categoryObjects?.map((obj) => {
                    return <div className="bagItem" key={obj.Name}>
                      <span className="item-quantity">x<input className="item-quantity-input"
                              type="number"
                              min={1}
                              step={1}
                              value={obj.Quantity}
                              onChange={(event) => { this.updateObjectQuantity(obj.Id, parseInt(event.target.value) || 1)} }
                              />
                      </span>
                      <input className="item-name"
                             type="text"
                             maxLength={OBJECT_LABEL_MAX_SIZE}
                             value={editingObjectId===obj.Id?editingObjectLabel:obj.Name}
                             onFocus={() => { this.setState({editingObjectId: obj.Id, editingObjectLabel: obj.Name}) }}
                             onChange={(event) => { this.setState({editingObjectId: obj.Id, editingObjectLabel: event.target.value}) }}
                             onBlur={(event) => { this.updateObjectLabel() }} />
                      <Weight weight={obj.Weight} />
                      <Money amount={obj.Price} />
                      <span className="delete-object activable transparent" title="Supprimer" role="button" onClick={() => this.deleteObject(obj.Name)}>
                        <img className="delete-object-img" src={deleteImage} alt="Supprimer" />
                      </span>
                    </div>
                  })
                }
              </div>
            }
            )}
            <div className="add-object">
              <span className="new-object">
                  x<input className="new-object-quantity-input"
                              type="number"
                              min={1}
                              step={1}
                              value={this.state.newObjectQuantity}
                              onChange={(event) => { this.setState({newObjectQuantity: parseInt(event.target.value) || 1})} }
                              />
                {objectCategories && objects &&
                  <select className="new-object-select" value={this.state.newObjectId}
                          title="Selectionnez un objet à ajouter"
                          onChange={(event) => this.setState({newObjectId: event.target.value}) }>
                    <option value="-">Ajouter un objet</option>
                    { objectCategories?.map(({Code, Name}) => {
                      const categoryObjects = objects?.filter(({Category}) => Category === Code);
                      return categoryObjects.length > 0 &&
                            <optgroup key={Code} label={Name} >
                              { categoryObjects.map(({Name, Weight}) => {
                                const name = Name.length > OBJECT_LABEL_MAX_SIZE ? Name.substring(0, OBJECT_LABEL_MAX_SIZE-3)+"...":Name;
                                const title = ((Weight/1000>=1)?(Weight/1000)+"Kg":Weight+"g")+
                                              (Name.length > OBJECT_LABEL_MAX_SIZE ? " - "+Name:"");
                                return <option key={Name} value={Name} title={title}>{name}</option>
                              })}
                          </optgroup>
                      })}
                  </select>
                }
              </span>
              <span className="new-object-infos">
                {newObject && <Weight weight={newObject?newObject.Weight:0} />}
                {newObject && <Money amount={newObject?newObject.Price:0} />}
                <span className={`add-object ${this.state.newObjectId !== "-"?"activable transparent":"disabled"}`} title="Ajouter" role="button" onClick={() => this.addObject()}>
                  <img className="add-object-img" src={addImage} alt="Ajouter" />
                </span>
              </span>
            </div>
          </ExpendableComponent>
      </div>
    )
  }

  // Arrow fx for binding
  deleteObject = (objectName) => {
    confirm(`Êtes-vous certain de vouloir supprimer l'objet "${objectName}" ?`,
            (callbackState) => {
              if (callbackState) {
                const { characterObjects, onObjectsChange } = this.props;
                const index = characterObjects?characterObjects.findIndex(({Id}) => Id === objectName):-1;
                characterObjects.splice(index, 1);
                onObjectsChange(characterObjects);
              }
            },
            `Suppression de ${objectName}`,
            "Supprimer");
  }

  // Arrow fx for binding
  addObject = () => {
    const { onObjectsChange } = this.props;
    let {characterObjects} = this.props;
    characterObjects = characterObjects?.slice() || [];
    const {newObjectId, newObjectQuantity} = this.state;
    const label = null;
    if (newObjectId !== "-") {
      const index = characterObjects.findIndex((object) => object.Id === newObjectId);
      if (index === -1) {
        characterObjects[characterObjects.length] = {Id: newObjectId, Label: label, Quantity: newObjectQuantity};
      } else {
        characterObjects[index].Quantity += newObjectQuantity;
      }
      
      onObjectsChange(characterObjects);
      this.setState({newObjectId: "-", newObjectQuantity: 1});
    }
  }

  // Arrow fx for binding
  updateObjectQuantity = (objectId, quantity) => {
    const { onObjectsChange } = this.props;
    let {characterObjects} = this.props;
    characterObjects = characterObjects?.slice() || [];
    const index = characterObjects.findIndex((object) => object.Id === objectId);
    if (index > -1) {
      characterObjects[index].Quantity = quantity;
    }
    onObjectsChange(characterObjects);
  }

  // Arrow fx for binding
  updateObjectLabel = () => {
    const { onObjectsChange } = this.props;
    const {editingObjectId, editingObjectLabel} = this.state

    let {characterObjects} = this.props;
    characterObjects = characterObjects?.slice() || [];
    const index = characterObjects.findIndex((object) => object.Id === editingObjectId);
    if (index > -1) {
      characterObjects[index].Label = editingObjectLabel || editingObjectId;
    }
    onObjectsChange(characterObjects);
    this.setState({editingObjectId: null, editingObjectLabel: null});
  }
}

BagComponent.propTypes = {
  name: PropTypes.string,
  capacityCharge: PropTypes.number,
  money: PropTypes.number,
  displayMoney: PropTypes.bool,
  onMoneyChange: PropTypes.func,
  characterObjects: PropTypes.arrayOf(PersonnalObjectPropType),
  onObjectsChange: PropTypes.func
}
BagComponent.defaultProps = {
  name: "Sac",
  capacityCharge: 0,
  money: 0,
  displayMoney: true
}

const mapStateToProps = (state) => ({
  objectsMap: selectObjectsMap(state),
  objectCategories: selectObjectCategories(state),
  objects: selectObjects(state)
})
export default connect(mapStateToProps)(BagComponent)
