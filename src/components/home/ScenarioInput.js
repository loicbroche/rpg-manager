import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './ScenarioInput.css'

const SCENARIO_NAME_MAX_LENGTH = 50;

class ScenarioInput extends PureComponent {
	state = { name: '', error: null }

	render() {
	const { error } = this.state
		return (
			<h1 className="scenarioInput">
				<form onSubmit={this.submitScenarioName}>
					<input  type="text"
							autoComplete="scenario-name"
							maxLength={SCENARIO_NAME_MAX_LENGTH}
							value={this.state.name}
							onChange={this.handleNameUpdate}
							title={`Saisissez le nom du scénario (${this.state.name?.length||0} / ${SCENARIO_NAME_MAX_LENGTH} caractères)`}
							placeholder="Nom du nouveau scénario" />
					<button type="submit">Ajouter</button>
					{error && <span className="error-message">{ error}</span>}
				</form>
			</h1>
		)
	}

    // Arrow fx for binding
    handleNameUpdate = (event) => {
      const value = event.target.value;
      this.setState({ name: value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() })
    }

	// Arrow fx for binding
	submitScenarioName = (event) => {
		event.preventDefault()
		const newScenario= { Id: this.state.name, Characters: [] }
		const { onSubmit } = this.props;
		this.setState({ error: onSubmit(newScenario) });
	}
}

ScenarioInput.propTypes = {
	onSubmit: PropTypes.func.isRequired,
}

export default ScenarioInput