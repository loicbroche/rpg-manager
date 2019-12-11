import React from 'react'
import PropTypes from 'prop-types'
import { SkillPropType } from 'PropTypes';


import './Skills.css'

const Skills = ({ skills, mastered, onClick }) => (
  <div className='skills'>
    {skills && Object.values(skills).map(({Caracteristic, Name}, index) => (
      <div key={index} className="skill" onClick={() => onClick(Name)}>
        <div className={"option "+((mastered && mastered.includes(Name))?"filled":"")}></div>
        <span className="skill-name">{Name}</span>
        <span>( {Caracteristic} )</span>
      </div>
    ))}
  </div>
)

Skills.propTypes = {
  skills: PropTypes.arrayOf(SkillPropType).isRequired,
  mastered: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired,
}

export default Skills