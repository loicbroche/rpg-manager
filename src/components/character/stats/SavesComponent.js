
import React, { Component } from 'react'
import { connect } from 'react-redux'

import './SavesComponent.css'

class SavesComponent extends Component {

  render() {
    return (
      <div className="savesComponent">
        <span>[ Jets de sauvegarde ]</span>
      </div>
    )
  }
}

SavesComponent.propTypes = {
}

const mapStateToProps = (state) => ({
})
export default connect(mapStateToProps)(SavesComponent)
