
import React, { Component } from 'react'
import { connect } from 'react-redux'

import './BagComponent.css'

class BagComponent extends Component {

  render() {
    return (
      <div className="bagComponent">
        <span>Sac</span>
      </div>
    )
  }
}

BagComponent.propTypes = {
}

const mapStateToProps = (state) => ({
})
export default connect(mapStateToProps)(BagComponent)
