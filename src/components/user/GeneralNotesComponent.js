
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NotePropType } from 'PropTypes';

import './GeneralNotesComponent.css'

const S_KEY_CODE = 83;

class GeneralNotesComponent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      showNotes: false,
      note: null,
      changed: false,
      changedIndex: null,
    };
  }

  componentWillReceiveProps() {
    const {notes, editorCharacter} = this.props;    
    const notesNb = notes?.length;
    for(let i= 0; i < notesNb; i++) {
      const textAreaId = `note-${editorCharacter}-${i}`;
      this.autosizeAndSave(null, textAreaId);
    }
  }

  render() {
    const { showNotes, changed, changedIndex, note } = this.state;
    const { notes, editorCharacter } = this.props;
    if (changed) {
      notes[changedIndex] = {Content: note};
    }

    const inkWellImage = require('images/inkwell.png');
    const title = showNotes?"Masquer les notes générales":"Lire/Modifier les notes générales";
    const notesNb = notes && Object.values(notes).length
    return (
        <div className="generalNotesComponent">
          <div className={`notes-container ${showNotes&&"show-notes"}`}>
            <div className="notes-header">
              <span className="notes-name">Notes générales</span>
              <span className={`activable transparent extensor ${showNotes?"opened":"closed"}`}
                    role="button" onClick={this.onShowNotes} title={title} >
                <img src={inkWellImage} alt={title} />
              </span>
            </div>
            <div id="notes" className={`narrative notes ${showNotes&&"show-notes"}`}>
                { notes && Object.values(notes).map((note, index) => {
                  const locked = (note.Locked===editorCharacter)?false:note.Locked;
                  const textAreaId = `note-${editorCharacter}-${index}`;
                  return <div key={index} className="note-container">
                    <div className="note-movers">
                      <span className={index===0?"disabled":"activable transparent"}
                            title="Monter le paragraphe"
                            role="button" onClick={() => this.moveNote(index, index-1)}>
                      ⮝</span>
                      <span className={index===notesNb-1?"disabled":"activable transparent"}
                            title="Descendre le paragraphe"
                            role="button" onClick={() => this.moveNote(index, index+1)}>
                      ⮟</span>
                    </div>
                    <textarea   id={textAreaId}
                                className={`note activable transparent ${locked?"forbidden":""}`}
                                disabled={locked}
                                type="text"
                                value={note.Content}
                                title={locked?"Vérouillé par "+locked:"Éditer"}
                                onFocus={() => { this.onNoteEdit(index)}}
                                onBlur={() => { this.onNoteSave(index)}}
                                onChange={(event) => { this.onNoteChange(event, index)}}
                                onKeyUp={(event) => this.autosizeAndSave(event, textAreaId)}
                      ></textarea>
                    </div>
                    }
                  )}
                  <div className="add-note">
                    <span className="activable transparent"
                          title="Ajouter un nouveau paragraphe"
                          role="button" onClick={() => this.addNote()}
                          >+</span>
                  </div>
            </div>
          </div>
        </div>
    )
  }

  autosizeAndSave(event, textAreaId) {
    var textArea = event?.target || document.getElementById(textAreaId);
    if (textArea) {
      if (event?.ctrlKey && event?.keyCode === S_KEY_CODE) {
        //Blur will call save
        textArea.blur();
      } else {
        setTimeout(function(){
          textArea.style.cssText = 'height:2.5rem;';
          textArea.style.cssText = 'height:' + textArea.scrollHeight + 'px';
        },0);
      }
    }
  }

  // Arrow fx for binding
  onShowNotes = () => {
    const newState = !this.state.showNotes
    this.setState({showNotes: newState});
  }

  // Arrow fx for binding
  onNoteEdit = (index) => {
    const { notes, editorCharacter } = this.props;
    const noteContent = notes?.[index]?.Content;
    this.setState({note: noteContent})
    notes[index] = {...notes[index], Locked:(editorCharacter||"un autre utilisateur")}
    this.props.onChange(notes);
  }

  // Arrow fx for binding
  onNoteChange = (event, index) => {
    const note = event.target.value;
    this.setState({note: note, changed: true, changedIndex: index})
  }

  // Arrow fx for binding
  onNoteSave = (index) => {
    const { note, changed } = this.state;
    const { notes } = this.props;
    const noteContent = changed?note:notes[index].Content;
    if (noteContent) {
      notes[index] = {Content: noteContent, Locked: null};
    } else {
      notes.splice(index, 1);
    }
    this.setState({changed: false, changedIndex: null, note: null})
    this.props.onChange(notes);
  }

  // Arrow fx for binding
  addNote = () => {
    let { notes } = this.props;
    notes = notes || []; 
    notes[notes.length] = {Content:""}
    this.props.onChange(notes);
  }

  // Arrow fx for binding
  moveNote = (index, targetIndex) => {
    const { notes } = this.props;
    const note = notes[index];
    notes.splice(index, 1);
    notes.splice(targetIndex, 0, note);
    this.props.onChange(notes);
  }
}

GeneralNotesComponent.propTypes = {
  notes: PropTypes.arrayOf(NotePropType),
  editorCharacter: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default GeneralNotesComponent