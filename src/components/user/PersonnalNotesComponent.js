
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
        globalNotes: props.globalNotes};
  }

  componentWillReceiveProps() {
    this.autosizeAndSave(null);
  }

  render() {
    const { globalNotes, showNotes } = this.state;
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
                      value={globalNotes}
                      onChange={this.onGlobalNotesUpdate}
                      onKeyUp={this.autosizeAndSave}
                      onBlur={this.onGlobalNotesSave}
                      maxLength={NOTES_MAX_LENGTH}
                      title={`Saisissez vos notes personnelles (${globalNotes?.length||0} / ${NOTES_MAX_LENGTH} caractères)`} >        
            </textarea>
          </div>
        </div>
    )
  }

  autosizeAndSave(event) {
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

  // Arrow fx for binding
  onShowNotes = () => {
    this.setState({showNotes: !this.state.showNotes})
  }

  // Arrow fx for binding
  onGlobalNotesSave = () => {
    const { globalNotes, changed } = this.state;
    if (changed) {
      this.setState({changed: false})
      this.props.onGlobalNotesChange(globalNotes);
    }
  }

  // Arrow fx for binding
  onGlobalNotesUpdate = (event) => {
    const globalNotes = event.target.value;
    this.setState({globalNotes: globalNotes, changed: true})
  }
}

PersonnalNotesComponent.propTypes = {
  globalNotes: PropTypes.string,
  notes: PropTypes.arrayOf(NotePropType),
  onGlobalNotesChange: PropTypes.func.isRequired
}

export default PersonnalNotesComponent