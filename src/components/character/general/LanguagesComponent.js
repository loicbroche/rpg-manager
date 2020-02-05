
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './LanguagesComponent.css'

class LanguagesComponent extends Component {
  render() {
    const {languages, knownLanguages} = this.props;

    return (
      <div className="languagesComponent">
        <span>{knownLanguages}</span>
      </div>
    )
  }
}

LanguagesComponent.propTypes = {
  knownLanguages: PropTypes.arrayOf(PropTypes.string)
}

const mapStateToProps = (state) => ({
  languages: state.referential.languages
})
export default connect(mapStateToProps)(LanguagesComponent)
