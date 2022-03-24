
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectHistorics } from 'store/selectors';
import PropTypes from 'prop-types'
import './HistoricSelector.css'

const S_KEY_CODE = 83;
const HISTORY_MAX_LENGTH = 5000;

class HistoricSelector extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { showHistory: false, changed: false, history: props.history };
  }

  render() {
    const { historics, historicId } = this.props;
    const { history, showHistory} = this.state;
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
        <div className="historic-selector">
			<div className={`history-container ${showHistory&&"show-history"}`}>
				<span className={`activable transparent extensor ${showHistory?"opened":"closed"}`} role="button" onClick={this.onShowHistory} title={title} >
				  <img src={inkWellImage} alt={title} />
				</span>  
				  <textarea className={`narrative history ${showHistory&&"show-history"}`}
							value={history}
							onChange={this.onHistoryChange}
							onKeyUp={(event) => (event.ctrlKey && event.keyCode === S_KEY_CODE) && this.onHistorySave() }
							onBlur={this.onHistorySave}
							maxLength={HISTORY_MAX_LENGTH}
							title={`Saisissez l'histoire de votre personnage (${history?.length||0} / ${HISTORY_MAX_LENGTH} caractères)`} >
				  </textarea>
			 </div>
			<div className="selector">
			  <div className="selector-icon historic-icon">
				<img src={historicImage} className="selector-image" alt="" />
				<img src={historicBorderImage} className="selector-image" alt="" />
			  </div>
			  <div className="selector-value">
			  <span>Historique:&nbsp;</span>
				{ historics && (
				  <select className="selector-select" value={historicId || "-"} onChange={this.handleValueUpdate}>
					<option value="-" disabled>Choisissez un historique</option>
					{ historics?.map((historic) => (
					  <option key={historic.Id} value={historic.Id}>{historic.Name}</option>
					))}
				  </select>
				)}
			  </div>
			</div>
			<div className={`position-relative-faker ${showHistory&&"show-history"}`}></div>
        </div>
    )
  }

  // Arrow fx for binding
  handleValueUpdate = (event) => {
    const selectedHistoric = event.target.value;
    this.props.onHistoricChange(selectedHistoric);
  }

  // Arrow fx for binding
  onShowHistory = () => {
    this.setState({showHistory: !this.state.showHistory})
  }

    // Arrow fx for binding
  onHistorySave = () => {
      const { history, changed } = this.state;
      if (changed) {
        this.setState({changed: false})
        this.props.onHistoryChange(history);
      }
    }

  // Arrow fx for binding
  onHistoryChange = (event) => {
    const history = event.target.value;
    this.setState({history: history, changed: true})
  }
}

HistoricSelector.propTypes = {
  historicId: PropTypes.string,
  history: PropTypes.string,
  onHistoricChange: PropTypes.func.isRequired,
  onHistoryChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  historics: selectHistorics(state)
})
export default connect(mapStateToProps)(HistoricSelector)