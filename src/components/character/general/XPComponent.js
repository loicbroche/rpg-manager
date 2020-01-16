
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './XPComponent.css'

class XPComponent extends Component {

  render() {
    const { XP, levels } = this.props;
    const maxLevel = levels && levels[levels.length-1];
    const maxXP = maxLevel && maxLevel.XP;
    const level = levels && Math.max(...levels.filter((lev) => lev && lev.XP <= Math.min(XP, maxXP)).map((lev) => lev.Level));
    const levelSup = XP>=maxXP?maxLevel: (levels && levels.find((lev) => lev && lev.Level === (level+1)));
    const levelSupXp = levelSup && levelSup.XP;

    return (
      <div className="XPComponent">
        <div className="selector-value">
          <div className="XPBar">
            <div className="XPProgressBar" style={{width:`${Math.ceil(XP/levelSupXp*100)}%`}}>&nbsp;</div>
              <div className="xp-label">
                <div className="current-xp">
                  <input type="number"
                    name="XP"
                    value={XP}
                    min={0}
                    max={maxXP}
                    step={10}
                    className="xp-value"
                    onChange={(event) => this.props.onChange(event.target.value)} />
                  <span>{" XP"}</span>
                </div>
                <span className="max-hp">{` / ${levelSupXp} XP`}</span>
              </div>
          </div>
        </div>
        <div className="selector-icon level">
          <span>Niv.</span>
          <span>{level}</span>
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