
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './HistoricSelector.css'

class HistoricSelector extends Component {

  render() {
    const { historics, historicId } = this.props;
    const historicBorderImage = require("images/historics/historic_border.png");
    let historicImage;
    try {
      historicImage = require(`images/historics/${historicId}.png`);
    } catch (ex) {
      historicImage = require("images/historics/no_historic.png");
    }

    return (
      <div className="selector historic-selector">
        <div className="selector-icon historic-icon">
          <img src={historicImage} className="selector-image" alt="" />
          <img src={historicBorderImage} className="selector-image" alt="" />
        </div>
        <div className="selector-value">
        <span>Historique:&nbsp;</span>
          { historics && (
            <select className="selector-select" value={historicId} onChange={this.handleValueUpdate}>
              <option value="" disabled>Choisissez un historique</option>
              { Object.entries(historics).map(([key, value]) => (
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