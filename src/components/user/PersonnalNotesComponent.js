
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NotePropType } from 'PropTypes';

import './PersonnalNotesComponent.css'


const S_KEY_CODE = 83;
const NOTES_MAX_LENGTH = 2000;

class PersonnalNotesComponent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
        showNotes: false,
        changed: false,
        personalNotes: props.personalNotes};
  }

  static getDerivedStateFromProps(nextProps, prevState)  {
	const { changed } = prevState;
    PersonnalNotesComponent.autosizeAndSave(null);
	return ((changed&&{})||{ personalNotes: nextProps.personalNotes })
  }

  static autosizeAndSave(event) {
    var textArea = event?.target || document.getElementById("personnal-note-area");
    if (textArea) {
      if (event?.ctrlKey && event?.keyCode === S_KEY_CODE) {
        //Blur will call save
        textArea.blur();
      } else {
        setTimeout(function(){
          textArea.style.cssText = 'height:auto;';
          textArea.style.cssText = 'height:' + textArea.scrollHeight + 'px';
        },0);
      }
    }
  }

  render() {
    const { personalNotes, showNotes } = this.state;
    const inkWellImage = require('images/inkwell.png');

    const title = showNotes?"Masquer les notes personnelles":"Lire/Modifier les notes personnelles";
    return ( 
        <div className="personnalNotesComponent">
          <div className={`personnal-notes-container ${showNotes&&"show-personnal-notes"}`}>
            <div className="personnal-notes-header">
              <span className="personnal-notes-name">Notes personnelles</span>
              <span className={`activable transparent extensor ${showNotes?"opened":"closed"}`}
                    role="button" onClick={this.onShowNotes} title={title} >
                <img src={inkWellImage} alt={title} />
              </span>
            </div>
            <textarea id="personnal-note-area" className={`narrative global-note ${showNotes&&"show-personnal-notes"}`}
                      value={personalNotes}
                      onChange={(event) => { this.onPersonalNotesUpdate(event)}}
                      onKeyUp={PersonnalNotesComponent.autosizeAndSave}
                      onBlur={this.onPersonalNotesSave}
                      maxLength={NOTES_MAX_LENGTH}
                      title={`Saisissez vos notes personnelles (${personalNotes?.length||0} / ${NOTES_MAX_LENGTH} caractères)`} >        
            </textarea>
          </div>
        </div>
    )
  }

  // Arrow fx for binding
  onShowNotes = () => {
    this.setState({showNotes: !this.state.showNotes})
  }

  // Arrow fx for binding
  onPersonalNotesSave = () => {
    const { personalNotes, changed } = this.state;
    if (changed) {
      this.setState({changed: false})
      this.props.onPersonalNotesChange(personalNotes);
    }
  }

  // Arrow fx for binding
  onPersonalNotesUpdate = (event) => {
    const personalNotes = event.target.value;
    this.setState({personalNotes: personalNotes, changed: true})
  }
}

PersonnalNotesComponent.propTypes = {
  personalNotes: PropTypes.string,
  notes: PropTypes.arrayOf(NotePropType),
  onPersonalNotesChange: PropTypes.func.isRequired
}

export default PersonnalNotesComponent