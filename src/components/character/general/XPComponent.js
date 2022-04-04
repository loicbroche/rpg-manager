
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectLevelNumberByXP, selectNextLevelByXP, selectMaxLevel, selectMasteryBonusByXP } from 'store/selectors';
import './XPComponent.css'

class XPComponent extends PureComponent {

  render() {
    const { levelNumber, nextLevel, maxLevel, XP, masteryBonus } = this.props;

    const nextLevelXp = nextLevel?.XP;
    const maxXP = maxLevel?.XP;

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
					dir="rtl"
                    onChange={(event) => this.props.onChange((event.target.value && parseInt(event.target.value)) || 0)} />
                  <span>{" XP"}</span>
                </div>
                <span className="max-hp">{` / ${nextLevelXp} XP`}</span>
              </div>
          </div>
        </div>
        <div className="selector-icon level" title={`Niveau ${levelNumber}\nBonus maîtrise +${masteryBonus}`}>
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

const mapStateToProps = (state, props) => ({
  levelNumber: selectLevelNumberByXP(state, props.XP),
  nextLevel: selectNextLevelByXP(state, props.XP),
  maxLevel: selectMaxLevel(state),
  masteryBonus: selectMasteryBonusByXP(state, props.XP)
})
export default connect(mapStateToProps)(XPComponent)