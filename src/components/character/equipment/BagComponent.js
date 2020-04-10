
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './BagComponent.css'
import ExpendableComponent from 'components/shared/ExpendableComponent';
import Money from 'components/shared/Money'
import Weight from 'components/shared/Weight'

const bagImage = require('images/bag.png');

const VARIOUS_CATEGORY = "VARIOUS";

const deleteImage = require('images/delete.png');
const addImage = require('images/add.png');

class BagComponent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { newObject: "-" };
  }

  render() {
    const { objects, objectCategories, capacityCharge, money, onMoneyChange, displayMoney, characterObjects, name} = this.props;

    let objectsWeight = 0;
    const objs = []
    if (objects && characterObjects) {
      for (let i = 0; i < characterObjects.length; i++) {
        const obj = objects[characterObjects[i]];
        if (obj) {
          objectsWeight += !obj?0:obj.Weight;
          objs[obj.Category] = objs[obj.Category] || [];
          objs[obj.Category][objs[obj.Category].length] = obj;
        } else {
          objs[VARIOUS_CATEGORY] = objs[VARIOUS_CATEGORY] || [];
          objs[VARIOUS_CATEGORY][objs[VARIOUS_CATEGORY].length] = {Name: characterObjects[i], OV: characterObjects[i], Category: VARIOUS_CATEGORY, Weight: 0, Price: 0};
        }
      }
    }

    const newObject = objects?.[this.state.newObject];
    const id = name?.replace(/ /g, "-");

    return (
      <div className="bagComponent">
          <ExpendableComponent extensorTitle="le sac"
                                header={<span className="bagComponent-header">
                                          <span>{name}</span>
                                          {displayMoney && <Money id={`bag-${id}-Money`} amount={money} fullDisplay={true} onChange={onMoneyChange} />}
                                          <span><Weight weight={objectsWeight} /> / <Weight weight={capacityCharge} /></span>
                                        </span>}
                                extensor={<img src={bagImage} alt={name} />}
                                reverse={true}>                   
            { Object.entries(objs).map(([categoryId, categoryObjects]) => {
                const category = objectCategories?.[categoryId];
                return <div className="bagItems" key={categoryId}>
                  <span className="categoryName">{category?.Name}</span>
                  { Object.values(categoryObjects).map((obj) => {
                    return <div className="bagItem" key={obj.Name}>
                    <span className="item-name">{obj.Name}</span>
                      <Weight weight={obj.Weight} />
                      <Money id={"bag-"+id+"-"+obj.Name} amount={obj.Price} />
                      <span className="delete-object activable transparent" title="Supprimer" role="button" onClick={() => this.deleteObject(obj.Name)}>
                        <img src={deleteImage} alt="Supprimer" />
                      </span>
                    </div>
                  })
                }
              </div>
            }
            )}
            <div className="add-object">
              {objectCategories && objects &&
                <select className="new-object-select" value={this.state.newObject} onChange={(event) => this.setState({newObject: event.target.value}) }>
                  <option value="-">Ajouter un objet</option>
                  { Object.values(objectCategories).map(({Code, Name}) => {
                    const categoryObjects = Object.values(objects).filter(({Category}) => Category === Code);
                    return categoryObjects.length > 0 &&
                          <optgroup key={Code} label={Name} >
                            { categoryObjects.map(({Name, Weight}) => {
                              const title = (Weight/1000>=1)?(Weight/1000)+"Kg":Weight+"g";
                              return <option key={Name} value={Name} title={title}>{Name}</option>
                            })}
                        </optgroup>
                    })}
                </select>
              }
              <span className="new-object-infos">
                <Weight weight={newObject?newObject.Weight:0} />
                <Money id={`bag-${id}-new-object`} amount={newObject?newObject.Price:0} />
                <span className={`add-object ${this.state.newObject !== "-"?"activable transparent":"disabled"}`} title="Ajouter" role="button" onClick={() => this.addObject()}>
                  <img src={addImage} alt="Ajouter" />
                </span>
              </span>
            </div>
          </ExpendableComponent>
      </div>
    )
  }

  // Arrow fx for binding
  deleteObject = (objectName) => {
    if(window.confirm(`Êtes-vous certain de vouloir supprimer l'objet "${objectName}" ?`)) {
      const { characterObjects, onObjectsChange } = this.props;
      const index = characterObjects?characterObjects.findIndex((name) => name === objectName):-1;
      characterObjects.splice(index, 1);
      onObjectsChange(characterObjects);
    }
  }

  // Arrow fx for binding
  addObject = () => {
    const { onObjectsChange } = this.props;
    let {characterObjects} = this.props;
    characterObjects = characterObjects ||[];
    const {newObject} = this.state;
    if (newObject !== "-") {
      characterObjects[characterObjects.length] = newObject;
      onObjectsChange(characterObjects);
      this.setState({newObject: "-"});
    }
  }
}

BagComponent.propTypes = {
  name: PropTypes.string,
  capacityCharge: PropTypes.number,
  money: PropTypes.number,
  displayMoney: PropTypes.bool,
  onMoneyChange: PropTypes.func,
  characterObjects: PropTypes.arrayOf(PropTypes.string),
  onObjectsChange: PropTypes.func
}
BagComponent.defaultProps = {
  name: "Sac",
  capacityCharge: 0,
  money: 0,
  displayMoney: true
}

const mapStateToProps = (state) => ({
  objects: state.referential.objects,
  objectCategories: state.referential.objectCategories
})
export default connect(mapStateToProps)(BagComponent)
