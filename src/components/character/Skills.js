import PropTypes from 'prop-types'
import React from 'react'

import './Skills.css'

const Skills = ({ skills, mastered, onClick }) => (
  <div className='skills'>
    {skills && skills.map(({Caracteristic, Name}, index) => (
      <div key={index} className="skill" onClick={() => onClick(index)}>
        <div className={"option "+((mastered && mastered.includes(index))?"filled":"")}></div>
        <span className="skill-name">{Name}</span>
        <span>( {Caracteristic} )</span>
      </div>
    ))}
  </div>
)

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      Caracteristic: PropTypes.string.isRequired,
      Name: PropTypes.string.isRequired
    })
  ),
  mastered: PropTypes.arrayOf(PropTypes.number),
  onClick: PropTypes.func.isRequired,
}

export default Skills