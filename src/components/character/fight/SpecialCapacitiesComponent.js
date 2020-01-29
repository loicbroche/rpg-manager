
import React, { Component } from 'react'
import { connect } from 'react-redux'

import './SpecialCapacitiesComponent.css'

class SpecialCapacities extends Component {

  render() {
    //const { classes } = this.props;
    return (
      <div className="special-capacitiesComponent">
        <span>Capacités spéciales</span>
      </div>
    )
  }
}

SpecialCapacities.propTypes = {
}

const mapStateToProps = (state) => ({
  classes: state.referential.classes
})
export default connect(mapStateToProps)(SpecialCapacities)
