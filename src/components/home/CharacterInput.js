import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './CharacterInput.css'

class CharacterInput extends Component {
  state = { name: '', error: null }

  render() {
    const { error } = this.state
    return (
      <form className="characterInput" onSubmit={this.submitCharacterName}>
        <input  type="text"
                autoComplete="given-name"
                value={this.state.name}
                onChange={this.handleNameUpdate} />
        <button type="submit">Nouveau personnage</button>
        {error && <span className="error-message">{ error}</span>}
      </form>
    )
  }

    // Arrow fx for binding
    handleNameUpdate = (event) => {
      const value = event.target.value;
      this.setState({ name: value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() })
    }

  // Arrow fx for binding
  submitCharacterName = (event) => {
    event.preventDefault()
    const newCharacter= { Name: this.state.name }
    this.setState({ error: this.props.onSubmit(newCharacter) });
  }
}

CharacterInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default CharacterInput