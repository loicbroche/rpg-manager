
import React, { Component } from 'react'
import { connect } from 'react-redux'

import './SpeedComponent.css'

class SpeedComponent extends Component {

  render() {
    return (
      <div className="speedComponent">
        <span>Vitesse</span>
        <span>Initiative</span>
      </div>
    )
  }
}

SpeedComponent.propTypes = {
}

const mapStateToProps = (state) => ({
})
export default connect(mapStateToProps)(SpeedComponent)
