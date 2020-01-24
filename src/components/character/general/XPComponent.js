
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getLevelNumber, getNextLevel } from 'rules/Levels.rules'
import './XPComponent.css'

class XPComponent extends Component {

  render() {
    const { levels, XP } = this.props;

    const levelNumber = getLevelNumber(levels, XP);
    const nextLevel = getNextLevel(levels, XP);
    const nextLevelXp = nextLevel && nextLevel.XP;
    const maxXP = levels && levels[levels.length-1] && levels[levels.length-1].XP;

    return (
      <div className="XPComponent">
        <div className="selector-value">
          <div className="XPBar">
            <div className="XPProgressBar" style={{width:`${Math.ceil(XP/nextLevelXp*100)}%`}}>&nbsp;</div>
              <div className="xp-label">
                <div className="current-xp">
                  <input type="number"pattern="[0-9]*"
                    name="XP"
                    value={XP}
                    min={0}
                    max={maxXP}
                    step={10}
                    className="activable transparent xp-value"
                    onChange={(event) => this.props.onChange((event.target.value && parseInt(event.target.value)) || 0)} />
                  <span>{" XP"}</span>
                </div>
                <span className="max-hp">{` / ${nextLevelXp} XP`}</span>
              </div>
          </div>
        </div>
        <div className="selector-icon level">
          <span>Niv.</span>
          <span>{levelNumber}</span>
        </div>
      </div>
    )
  }
}

XPComponent.propTypes = {
  XP: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  levels: state.referential.levels
})
export default connect(mapStateToProps)(XPComponent)