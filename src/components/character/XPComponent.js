
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './XPComponent.css'

class XPComponent extends Component {

  render() {
    const { XP, levels } = this.props;
    const level = levels && Math.max(...levels.filter((lev) => lev && lev.XP <= XP).map((lev) => lev.Level));
    const levelSupXp = levels && levels.find((lev) => lev && lev.Level === (level+1)).XP;

    return (
      <div className="XPComponent">
        <div className="XPBar">
          <div className="XPProgressBar" style={{width:`${Math.ceil(XP/levelSupXp*100)}%`}}>&nbsp;</div>
          <div className="label">{`${XP} XP / ${levelSupXp} XP`}</div>
        </div>
        <div className="level">
          <span>Niv.</span>
          <span>{level}</span>
        </div>
      </div>
    )
  }
}

XPComponent.propTypes = {
  XP: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  levels: state.referential.levels
})
export default connect(mapStateToProps)(XPComponent)