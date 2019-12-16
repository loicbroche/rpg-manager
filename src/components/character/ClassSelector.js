
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './ClassSelector.css'

class ClassSelector extends Component {

  render() {
    const { classes, classId } = this.props;

    return (
      <div className="class-selector">
        <span>Classe:&nbsp;</span>
        { classes && (
          <select value={classId} onChange={this.handleValueUpdate}>
            { Object.entries(classes).map(([key, value]) => (
              <option key={key} value={key}>{value.Name}</option>
            ))}
          </select>
        )}
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