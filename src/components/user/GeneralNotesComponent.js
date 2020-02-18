
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './GeneralNotesComponent.css'

const S_KEY_CODE = 83;

class GeneralNotesComponent extends Component {

  constructor(props) {
    super(props);
    console.log("Constructor props", props);
    this.state = {
      showNotes: false,
      notes: props.notes,
      changed: false
    };
  }

  render() {
    const { showNotes } = this.state;
    const { notes } = this.props;
    const inkWellImage = require('images/inkwell.png');
console.log("generalComponent state", this.state);
console.log("generalComponent props", this.props);
    const title = showNotes?"Masquer les notes générales":"Lire/Modifier les notes générales";

    return (
        <div className="generalNotesComponent">
          <div className={`notes-container ${showNotes&&"show-notes"}`}>
            <div className="notes-header">
              <span className="notes-name">Notes générales</span>
              <span className={`activable transparent extensor ${showNotes?"opened":"closed"}`} onClick={this.onShowNotes} title={title} >
                <img src={inkWellImage} alt={title} />
              </span>
            </div>
            <div className={`narrative notes ${showNotes&&"show-notes"}`}>
                { notes && notes.map((note, index) =>
                  
                  <input key={index} className="note activable transparent"
                          type="text"
                          value={note}
                          onFocus={() => { this.onNoteEdit(index)}}
                          onBlur={() => { this.onNoteSave(index)}}
                          onChange={(event) => { this.onNoteChange(event, index)}}
                          />
                  )}
            </div>
          </div>
        </div>
    )
  }

  // Arrow fx for binding
  onShowNotes = () => {
    this.setState({showNotes: !this.state.showNotes})
  }

  // Arrow fx for binding
  onNoteEdit = (index) => {
    const { notes } = this.props;
    this.setState({note: notes && notes[index]})
    console.log("onNoteEdit");
  }

  // Arrow fx for binding
  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState({note: note, changed: true})
    console.log("onNoteChange", note);
  }

  // Arrow fx for binding
  onNoteSave = (index) => {
    const { note, changed } = this.state;

    if (changed) {
      console.log("Save note "+index, note);
      this.setState({changed: false, note: null})
      //this.props.onChange(notes);
    }
  }
}

GeneralNotesComponent.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired
}

export default GeneralNotesComponent