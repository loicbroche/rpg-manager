import React from 'react'
import PropTypes from 'prop-types'

import './Weight.css'

const Weight = ({ weight }) => {
    const kg = weight/1000;
    
    return (
      kg>=1
      ?<span className="weight">{kg} Kg</span>
      :<span className="weight">{weight} g</span>
    )
}

Weight.propTypes = {
  weight: PropTypes.number
}

Weight.defaultProps = {
  weight: 0
}

export default Weight
