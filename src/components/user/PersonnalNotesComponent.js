
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './PersonnalNotesComponent.css'

const S_KEY_CODE = 83;

class PersonnalNotesComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { showNotes: false, changed: false, notes: props.notes };
  }

  render() {
    const { notes, showNotes } = this.state;
    const inkWellImage = require('images/inkwell.png');

    const title = showNotes?"Masquer les notes personnelles":"Lire/Modifier les notes personnelles";
    return (
        <div className="personnalNotesComponent">
          <div className={`notes-container ${showNotes&&"show-notes"}`}>
            <div className="notes-header">
              <span className="notes-name">Notes personnelles</span>
              <span className={`activable transparent extensor ${showNotes?"opened":"closed"}`} onClick={this.onShowNotes} title={title} >
                <img src={inkWellImage} alt={title} />
              </span>
            </div> 
            <textarea className={`narrative notes ${showNotes&&"show-notes"}`}
                      value={notes}
                      onChange={this.onNotesChange}
                      onKeyUp={(event) => (event.ctrlKey && event.keyCode === S_KEY_CODE) && this.onNotesSave() }
                      onBlur={this.onNotesSave}>        
            </textarea>
          </div>
        </div>
    )
  }

    // Arrow fx for binding
    onShowNotes = (event) => {
      this.setState({showNotes: !this.state.showNotes})
    }

  // Arrow fx for binding
  onNotesSave = () => {
    const { notes, changed } = this.state;
    if (changed) {
      this.setState({changed: false})
      this.props.onChange(notes);
    }
  }

  // Arrow fx for binding
  onNotesChange = (event) => {
    const notes = event.target.value;
    this.setState({notes: notes, changed: true})
  }
}

PersonnalNotesComponent.propTypes = {
  notes: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default PersonnalNotesComponent