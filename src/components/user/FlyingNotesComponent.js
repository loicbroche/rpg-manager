
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NotePropType } from 'PropTypes';
import {dragElement} from 'Tools';

import './FlyingNotesComponent.css'

const NAME_MAX_LENGTH = 10;
const CONTENT_MAX_LENGTH = 10;
const DESCRIPTION_MAX_LENGTH = 255;

const showImage = require('images/show.png');
const hiddenImage = require('images/hide.png');
const repatriateImage = require('images/repatriate.png');
const deleteImage = require('images/delete.png');

class FlyingNotesComponent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
        showNotes: true,
        creationMode: false,
        name: "",
        content: "",
        description: ""
    };
  }

  componentDidUpdate() {
    const { notes, onNotesChange } = this.props;
    const notesNb = notes?.length;
    for(let i= 0; i < notesNb; i++) {
      let note = notes[i];
      dragElement(document.getElementById(`flying-note-${i}`), null,
                  (newTop, newLeft, changed) => {
                    if (changed) {
                      note = {...note, Top: newTop, Left: newLeft };
                      notes[i] = note;
                      onNotesChange(notes);
                    }
                  });
    }
  }

  render() {
    const { showNotes, creationMode } = this.state;
    const { notes } = this.props;

    const title = showNotes?"Masquer les notes volantes":"Afficher les notes volantes";
    return ( 
        <div className="flyingNotesComponent">
          <div className={`flying-notes-container ${showNotes&&"show-flying-notes"}`}>
            <div className="flying-notes-header">
              <div className="show-button activable transparent" role="button" onClick={this.onShowNotes} title={title} >
                <img src={showNotes?showImage:hiddenImage} alt={title} />
              </div>
              <span className="flying-notes-component-name">Notes</span>
              <div className={`repatriation-button activable transparent ${!showNotes?"hidden":""}`} role="button" onClick={this.onRepatriateNotes} title="Réinitialiser la position des notes volantes">
                  <img src={repatriateImage} alt="Réinitialiser la position" />
              </div>
              <span className={`add-flying-note activable transparent ${!showNotes?"hidden":""}`}
                    title={creationMode?"Annuler la création de la note volante":"Créer une note volante"}
                    role="button" onClick={this.onCreateNote}>+</span>
            </div>
            <div className={`flying-notes ${showNotes&&"show-flying-notes"}`}>
              { notes?.map((note, index) =>
                  <div key={index} className="flying-note" id={`flying-note-${index}`}
                      style={{left: note.Left, top: note.Top || (index*2.5)+"rem"}} >
                      <div className="flying-note-header activable transparent">
                          <span className="flying-note-name" id={`flying-note-${index}-header`}>{note.Name}</span>
                          <span className="delete-flying-note activable transparent" title="Supprimer" role="button" onClick={() => this.deleteNote(index)}>
                            <img src={deleteImage} alt="Supprimer" />
                          </span>
                      </div>
                      <span className="flying-note-content" title={note.Description}>{note.Content}</span>
                  </div>
                )
              }
              { creationMode &&
                <form onSubmit={this.createNote} className="flying-note-creation">
                  <input  name="new-flying-note-name" 
                          type="text"
                          placeholder="Titre"
                          value={this.state.name}
                          maxLength={NAME_MAX_LENGTH}
                          title={`Saisissez le titre de la note (${this.state.name?.length||0} / ${NAME_MAX_LENGTH} caractères)`}
                          onChange={(event) => this.setState({name:  event.target.value})}/>
                  <input  name="new-flying-note-content" 
                          type="text"
                          placeholder="Valeur"
                          value={this.state.content}
                          maxLength={CONTENT_MAX_LENGTH}
                          title={`Saisissez la valeur de la note (${this.state.content?.length||0} / ${CONTENT_MAX_LENGTH} caractères)`}
                          onChange={(event) => this.setState({content:  event.target.value})}/>
                  <input  name="new-flying-note-description" 
                          type="text"
                          placeholder="Description"
                          value={this.state.description}
                          maxLength={DESCRIPTION_MAX_LENGTH}
                          title={`Saisissez la description/bulle d'aide de la note (${this.state.description?.length||0} / ${DESCRIPTION_MAX_LENGTH} caractères)`}
                          onChange={(event) => this.setState({description:  event.target.value})}/>
                  <button type="submit" className="create-note" onClick={this.createNote}>Créer</button>
              </form>
              }
            </div>
          </div>
        </div>
    )
  }

  // Arrow fx for binding
  onRepatriateNotes = () => {
    const { notes, onNotesChange } = this.props;
    const notesNb = notes?.length;
    for(let i= 0; i < notesNb; i++) {
      notes[i].Top = null;
      notes[i].Left = null;
    }
    onNotesChange(notes);
  }

  // Arrow fx for binding
  onShowNotes = () => {
    this.setState({showNotes: !this.state.showNotes})
  }

  // Arrow fx for binding
  onCreateNote = () => {
    this.setState({creationMode: !this.state.creationMode})
  }

  // Arrow fx for binding
  createNote = (event) => {
    event.preventDefault();
    let { notes, onNotesChange } = this.props;
    const {name, content, description} = this.state;
    notes = notes || [];
    notes[notes.length] = {Name: name, Content: content, Description: description};
    onNotesChange(notes);
    this.setState({creationMode:false, name: null, content: null, description: null})
  }

  // Arrow fx for binding
  deleteNote = (index) => {
    const { notes, onNotesChange } = this.props;
    notes.splice(index, 1)
    onNotesChange(notes);
  }
}

FlyingNotesComponent.propTypes = {
  notes: PropTypes.arrayOf(NotePropType),
  onNotesChange: PropTypes.func.isRequired
}

export default FlyingNotesComponent