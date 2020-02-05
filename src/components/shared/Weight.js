import React from 'react'
import PropTypes from 'prop-types'

import './Weight.css'

export const KG_UNIT = "Kg";
export const G_UNIT = "g";

const Weight = ({ weight, onChange, unit }) => {
    const kg = weight/1000;
    return (
      onChange
      ?(
        (unit === KG_UNIT || (!unit && kg>=1))
        ?<span className="weightComponent">
            <input name="kg" 
                type="number"
                autoComplete="kg"
                value={kg}
                min={0}
                step={1}
                onChange={(event) => onChange(parseInt(event.target.value)*1000 || 0)}
                className="kg" /> Kg
          </span>
        :<span className="weightComponent">
          <input name="g" 
                type="number"
                autoComplete="g"
                value={weight}
                min={0}
                step={100}
                onChange={(event) => onChange(parseInt(event.target.value) || 0)}
                className="g" /> g
          </span>
      )
      :(
        (unit === KG_UNIT || (!unit && kg>=1))
        ?<span className="weightComponent">{kg} Kg</span>
        :<span className="weightComponent">{weight} g</span>
      )
    )
}

Weight.propTypes = {
  weight: PropTypes.number,
  onChange: PropTypes.func,
  unit: PropTypes.string,
}

Weight.defaultProps = {
  weight: 0
}

export default Weight
