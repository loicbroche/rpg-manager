
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './BagComponent.css'
import Money from 'components/shared/Money'

class BagComponent extends Component {

  render() {
    const {money, onMoneyChange} = this.props;
    return (
      <div className="bagComponent">
        <span>Sac</span>
        <Money amount={money} fullDisplay={true} onChange={onMoneyChange} />
      </div>
    )
  }
}

BagComponent.propTypes = {
  money: PropTypes.number,
  onMoneyChange: PropTypes.func
}
BagComponent.defaultProps = {
  money: 0
}

const mapStateToProps = (state) => ({
})
export default connect(mapStateToProps)(BagComponent)
