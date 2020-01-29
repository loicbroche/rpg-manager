
import React, { Component } from 'react'
import { connect } from 'react-redux'

import './CAComponent.css'

class CAComponent extends Component {

  render() {
    return (
      <div className="CAComponent">
        <span>CA</span>
      </div>
    )
  }
}

CAComponent.propTypes = {
}

const mapStateToProps = (state) => ({
})
export default connect(mapStateToProps)(CAComponent)
