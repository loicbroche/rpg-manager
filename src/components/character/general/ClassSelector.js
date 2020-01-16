
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './ClassSelector.css'

class ClassSelector extends Component {

  render() {
    const { classes, classId } = this.props;
    const classBorderImage = require("images/classes/class_border.png");
    let classImage;
    try {
      classImage = require(`images/classes/${classId}.png`);
    } catch (ex) {
      classImage = require("images/classes/no_class.png");
    }

    return (
      <div className="selector class-selector">
        <div className="selector-icon class-icon">
          <img src={classImage} className="selector-image" alt="" />
          <img src={classBorderImage} className="selector-image" alt="" />
        </div>
        <div className="selector-value">
          <span>Classe</span>
          { classes && (
            <select className="selector-select" value={classId} onChange={this.handleValueUpdate}>
              <option value="" disabled>Choisissez une classe</option>
              { Object.entries(classes).map(([key, value]) => (
                <option key={key} value={key}>{value.Name}</option>
              ))}
            </select>
          )}
        </div>
      </div>
    )
  }

  // Arrow fx for binding
  handleValueUpdate = (event) => {
    const selectedClass = event.target.value;
    this.props.onChange(selectedClass);
  }
}

ClassSelector.propTypes = {
  classId: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  classes: state.referential.classes
})
export default connect(mapStateToProps)(ClassSelector)