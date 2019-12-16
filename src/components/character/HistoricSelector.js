
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './HistoricSelector.css'

class HistoricSelector extends Component {

  render() {
    const { historics, historicId } = this.props;

    return (
      <div className="historic-selector">
        <span>Historique:&nbsp;</span>
        { historics && (
          <select value={historicId} onChange={this.handleValueUpdate}>
            { Object.entries(historics).map(([key, value]) => (
              <option key={key} value={key}>{value.Name}</option>
            ))}
          </select>
        )}
      </div>
    )
  }

  // Arrow fx for binding
  handleValueUpdate = (event) => {
    const selectedHistoric = event.target.value;
    this.props.onChange(selectedHistoric);
  }
}

HistoricSelector.propTypes = {
  historicId: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  historics: state.referential.historics
})
export default connect(mapStateToProps)(HistoricSelector)