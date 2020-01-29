
import React, { Component } from 'react'
import { connect } from 'react-redux'

import './SpellBookComponent.css'

class SpellBookComponent extends Component {

  render() {
    /*const { spells } = this.props;*/
    return (
      <div className="spellBookComponent">
        <span>Livre de sorts</span>
      </div>
    )
  }
}

SpellBookComponent.propTypes = {
}

const mapStateToProps = (state) => ({
  spells: state.referential.spells,
  classes: state.referential.classes
})
export default connect(mapStateToProps)(SpellBookComponent)
