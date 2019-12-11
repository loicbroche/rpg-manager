import PropTypes from 'prop-types'

export const CharacterPropType = PropTypes.shape({
    Id: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    Race: PropTypes.string.isRequired,
    Class: PropTypes.string.isRequired,
    Skills: PropTypes.arrayOf(PropTypes.string),
    Weapons: PropTypes.arrayOf(PropTypes.string),
    WeaponRight: PropTypes.string,
    WeaponLeft: PropTypes.string
})

export const RacePropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    OV: PropTypes.string.isRequired,
    Strength: PropTypes.number.isRequired,
    Consitution: PropTypes.number.isRequired,
    Dexterity: PropTypes.number.isRequired,
    Intelligence: PropTypes.number.isRequired,
    Wisdom: PropTypes.number.isRequired,
    Charisma: PropTypes.number.isRequired
})

export const ClassPropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    OV: PropTypes.string.isRequired,
    Strength: PropTypes.number.isRequired,
    Consitution: PropTypes.number.isRequired,
    Dexterity: PropTypes.number.isRequired,
    Intelligence: PropTypes.number.isRequired,
    Wisdom: PropTypes.number.isRequired,
    Charisma: PropTypes.number.isRequired
})

export const WeaponCategoryPropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired
})

export const WeaponPropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    OV: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
    Damage: PropTypes.string.isRequired,
    Weight: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
    Properties: PropTypes.string.isRequired
})

export const LevelPropType = PropTypes.shape({
    Level: PropTypes.number.isRequired,
    XP: PropTypes.number.isRequired,
    MasteryBonus: PropTypes.number.isRequired
})

export const CaracteristicPropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    OV: PropTypes.string.isRequired
})

export const SkillPropType = PropTypes.shape({
    Caracteristic: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired
})