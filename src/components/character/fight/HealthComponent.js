
import React, { Component } from 'react'
import { connect } from 'react-redux'
/*import ENERGY_LEVELS from 'rules/Health.rules'*/

import './HealthComponent.css'

class HealthComponent extends Component {

  render() {
    /*const { alterations } = this.props;*/
    return (
      <div className="healthComponent">
        <span>Niveau de forme</span>
        <span>[ Altérations ]</span>
      </div>
    )
  }
}

HealthComponent.propTypes = {
}

const mapStateToProps = (state) => ({
  alterations: state.referential.alterations
})
export default connect(mapStateToProps)(HealthComponent)
