
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NotePropType } from 'PropTypes';

import './FlyingNotesComponent.css'


class FlyingNotesComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { showNotes: true};
  }

  componentWillReceiveProps() {
    const { notes } = this.props;
    const notesNb = notes && notes.length;
    for(let i= 0; i < notesNb; i++) {
      this.dragElement(document.getElementById(`flying-note-${i}`), i);
    }
  }

  render() {
    const { showNotes } = this.state;
    const { notes } = this.props;
    const showImage = require('images/show.png');
    const hiddenImage = require('images/hide.png');
    const repatriateImage = require('images/repatriate.png');

    const title = showNotes?"Masquer les notes volantes":"Afficher les notes volantes";
    return ( 
        <div className="flyingNotesComponent">
          <div className={`flying-notes-container ${showNotes&&"show-flying-notes"}`}>
            <div className="flying-notes-header">
              <div className="show-button activable transparent" onClick={this.onShowNotes} title={title} >
                <img src={showNotes?showImage:hiddenImage} alt={title} />
              </div>
              <span className="flying-notes-component-name">Notes</span>
              <div className={`repatriation-button activable transparent ${!showNotes?"hidden":""}`} onClick={this.onRepatriateNotes} title="Réinitialiser la position des notes volantes">
                  <img src={repatriateImage} alt={"Réinitialiser la position"} />
              </div>
              <span className="add-flying-note activable transparent">+</span>
            </div>
            <div className={`flying-notes ${showNotes&&"show-flying-notes"}`}>
              { notes &&
                Object.values(notes).map((note, index) =>
                  <div key={index} className="flying-note" id={`flying-note-${index}`}
                      style={{left: note.Left, top: note.Top || (index*2.5)+"rem"}} >
                      <span className="flying-note-name activable transparent" id={`flying-note-${index}-header`}>{note.Name}</span>
                      <span className="flying-note-content" title={note.Description}>{note.Content}</span>
                  </div>
                )
              }
            </div>
          </div>
        </div>
    )
  }

  // Arrow fx for binding
  dragElement = (elmnt, index) => {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const { notes, onNotesChange } = this.props;
    let note = notes && notes[index];
    const header = document.getElementById(elmnt.id + "-header");

    if (header) {
      // if present, the header is where you move the DIV from:
      header.onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = () => {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        note = {...note, Top: elmnt.offsetTop, Left: elmnt.offsetLeft };
        notes[index] = note;
        onNotesChange(notes);
      };
      // call a function whenever the cursor moves:
      document.onmousemove = (e) => {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        elmnt.style.right = "";
      };
    }
  }

  // Arrow fx for binding
  onRepatriateNotes = () => {
    const { notes, onNotesChange } = this.props;
    const notesNb = notes && notes.length;
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
}

FlyingNotesComponent.propTypes = {
  notes: PropTypes.arrayOf(NotePropType),
  onNotesChange: PropTypes.func.isRequired
}

export default FlyingNotesComponent