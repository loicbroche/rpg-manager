
import React, { Component } from 'react'
import { connect } from 'react-redux'

import './ResistancesComponent.css'

class ResistancesComponent extends Component {

  render() {
    return (
      <div className="resistancesComponent">
        <span>[ Résistances ]</span>
      </div>
    )
  }
}

ResistancesComponent.propTypes = {
}

const mapStateToProps = (state) => ({
})
export default connect(mapStateToProps)(ResistancesComponent)
