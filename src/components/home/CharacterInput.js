import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './CharacterInput.css'

const CHARACTER_NAME_MAX_LENGTH = 50;

class CharacterInput extends PureComponent {
  state = { name: '', error: null }

  render() {
    const { error } = this.state
    return (
      <form className="characterInput" onSubmit={this.submitCharacterName}>
        <input  type="text"
                autoComplete="given-name"
                maxLength={CHARACTER_NAME_MAX_LENGTH}
                value={this.state.name}
                onChange={this.handleNameUpdate}
                title={`Saisissez le nom du personnage (${this.state.name?.length||0} / ${CHARACTER_NAME_MAX_LENGTH} caractères)`}/>
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