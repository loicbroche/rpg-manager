
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './HistoricSelector.css'

class HistoricSelector extends Component {

  constructor(props) {
    super(props);
    this.state = { showHistory: false, history: props.history };
  }

  render() {
    const { historics, historicId } = this.props;
    const { history } = this.state;
    const { showHistory } = this.state;
    const historicBorderImage = require("images/historics/historic_border.png");
    const inkWellImage = require('images/inkwell.png');

    let historicImage;
    try {
      historicImage = require(`images/historics/${historicId}.png`);
    } catch (ex) {
      historicImage = require("images/historics/no_historic.png");
    }
    const title = showHistory?"Enregistrer et masquer l'historique":"Lire/Modifier l'historique";
    return (
        <div className="selector historic-selector">
          <div className={`history-container ${showHistory&&"show-history"}`}>
            <span className={`activable transparent extensor ${showHistory?"opened":"closed"}`} onClick={this.onHistoryUpdate} title={title} >
              <img src={inkWellImage} alt={title} />
            </span>  
              <textarea className={`narrative history ${showHistory&&"show-history"}`} value={history} onChange={this.onHistoryChange}></textarea>
          </div>
          <div className="selector-icon historic-icon">
            <img src={historicImage} className="selector-image" alt="" />
            <img src={historicBorderImage} className="selector-image" alt="" />
          </div>
          <div className="selector-value">
          <span>Historique:&nbsp;</span>
            { historics && (
              <select className="selector-select" value={historicId || "-"} onChange={this.handleValueUpdate}>
                <option value="-" disabled>Choisissez un historique</option>
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
    this.props.onHistoricChange(selectedHistoric);
  }

  // Arrow fx for binding
  onHistoryUpdate = (event) => {
    const { history } = this.state;
    this.setState({showHistory: !this.state.showHistory})
    this.props.onHistoryChange(history);
  }

  // Arrow fx for binding
  onHistoryChange = (event) => {
    const history = event.target.value;
    this.setState({history: history})
  }
}

HistoricSelector.propTypes = {
  historicId: PropTypes.string,
  history: PropTypes.string,
  onHistoricChange: PropTypes.func.isRequired,
  onHistoryChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  historics: state.referential.historics
})
export default connect(mapStateToProps)(HistoricSelector)