import PropTypes from 'prop-types'

export const RacePropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    OV: PropTypes.string.isRequired,
    Strength: PropTypes.number.isRequired,
    Constitution: PropTypes.number.isRequired,
    Dexterity: PropTypes.number.isRequired,
    Intelligence: PropTypes.number.isRequired,
    Wisdom: PropTypes.number.isRequired,
    Charisma: PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
    Languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    Resistances: PropTypes.arrayOf(PropTypes.string),
    SaveAdvantages: PropTypes.arrayOf(PropTypes.string)
})

export const SubRacePropType = PropTypes.shape({
    Race: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    OV: PropTypes.string.isRequired,
    Strength: PropTypes.number.isRequired,
    Constitution: PropTypes.number.isRequired,
    Dexterity: PropTypes.number.isRequired,
    Intelligence: PropTypes.number.isRequired,
    Wisdom: PropTypes.number.isRequired,
    Charisma: PropTypes.number.isRequired,
    Speed: PropTypes.number.isRequired,
    ArmorCategories: PropTypes.arrayOf(PropTypes.number),
    Languages: PropTypes.arrayOf(PropTypes.string),
    Resistances: PropTypes.arrayOf(PropTypes.string),
    SaveAdvantages: PropTypes.arrayOf(PropTypes.string)
})

export const ClassPropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    OV: PropTypes.string.isRequired,
    Strength: PropTypes.number.isRequired,
    Constitution: PropTypes.number.isRequired,
    Dexterity: PropTypes.number.isRequired,
    Intelligence: PropTypes.number.isRequired,
    Wisdom: PropTypes.number.isRequired,
    Charisma: PropTypes.number.isRequired,
    HD: PropTypes.number.isRequired,
    SpecialsName: PropTypes.string,
    BonusAttackName: PropTypes.string,
    WeaponCategories: PropTypes.arrayOf(PropTypes.string),
    Weapons: PropTypes.arrayOf(PropTypes.string),
    ArmorCategories: PropTypes.arrayOf(PropTypes.string),
})

export const CapacityPropType = PropTypes.shape({
    Capacities: PropTypes.string.isRequired,
    Specials: PropTypes.number,
    BonusAttack: PropTypes.string,
    Damages: PropTypes.number,
    MinorSpellsNb: PropTypes.number,
    SpellsNb: PropTypes.number,
    Locations: PropTypes.arrayOf(PropTypes.number),
    Invocations: PropTypes.string,
    ArmorlessSpeed: PropTypes.number
})

export const HistoricPropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Skills: PropTypes.arrayOf(PropTypes.string)
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
    DamageType: PropTypes.string.isRequired,
    Weight: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
    Properties: PropTypes.string.isRequired
})

export const ArmorCategoryPropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired
})

export const ArmorPropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    OV: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
    AC: PropTypes.string.isRequired,
    BonusAC: PropTypes.string,
    MaxBonusAC: PropTypes.string,
    Weight: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
    Properties: PropTypes.string.isRequired,
    Discretion: PropTypes.string.isRequired,
    Strength: PropTypes.string.isRequired
})

export const ObjectCategoryPropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    OV: PropTypes.string.isRequired
})

export const ObjectPropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    OV: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
    Weight: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired
})

export const EquipmentCategoryPropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired
})

export const EquipmentPropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    OV: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
    Weight: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired
})

export const HostelCategoryPropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired
})

export const HostelServicePropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired
})

export const ServiceCategoryPropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired
})

export const ServicePropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired
})

export const MountPropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Speed: PropTypes.number.isRequired,
    ChargeCapacity: PropTypes.number.isRequired,
    Price: PropTypes.string.isRequired
})

export const ShipPropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    OV: PropTypes.string.isRequired,
    Speed: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired
})

export const WarePropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired
})

export const TrinketPropType = PropTypes.shape({
    d100: PropTypes.number.isRequired,
    Trinket: PropTypes.string.isRequired
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

export const SpellPropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    OV: PropTypes.string.isRequired,
    Level: PropTypes.number.isRequired,
    BBE: PropTypes.string.isRequired,
    School: PropTypes.string.isRequired,
    Incantation: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Classes: PropTypes.arrayOf(PropTypes.string).isRequired
})

export const AlterationPropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    Effect: PropTypes.string.isRequired,
    EffectDescription: PropTypes.string.isRequired
})


export const AlterationTypePropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    Savable: PropTypes.bool.isRequired
})

export const AlignmentPropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired
})

export const LanguagePropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Writing: PropTypes.string.isRequired,
    TypicalRaces: PropTypes.string.isRequired
})

export const CharacterPropType = PropTypes.shape({
    Id: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    SubRace: PropTypes.string.isRequired,
    Class: PropTypes.string.isRequired,
    Specialisation: PropTypes.string,
    ChargeCapacity: PropTypes.number.isRequired,
    Skills: PropTypes.arrayOf(PropTypes.string),
    MasterWeapons: PropTypes.arrayOf(PropTypes.string),
    MasterObjects: PropTypes.arrayOf(PropTypes.string),
    Historic: PropTypes.string.isRequired,
    Alignment: PropTypes.string.isRequired,
    Age: PropTypes.number.isRequired,
    Height: PropTypes.number.isRequired,
    Weight: PropTypes.number.isRequired,
    Eyes: PropTypes.string.isRequired,
    Skin: PropTypes.string.isRequired,
    Hairs: PropTypes.string.isRequired,
    PersonnalityTraits: PropTypes.string.isRequired,
    Ideals: PropTypes.string.isRequired,
    Links: PropTypes.string.isRequired,
    Defects: PropTypes.string.isRequired,
    History: PropTypes.string.isRequired,
    Languages: PropTypes.arrayOf(PropTypes.string),
    XP: PropTypes.number.isRequired,
    MaxHP: PropTypes.number.isRequired,
    HP: PropTypes.number.isRequired,
    Health: PropTypes.number.isRequired,
    Alterations: PropTypes.arrayOf(PropTypes.string),
    Resistances: PropTypes.arrayOf(PropTypes.string),
    Saves: PropTypes.arrayOf(PropTypes.string),
    SaveAdvantages: PropTypes.arrayOf(PropTypes.string),
    Strength: PropTypes.number.isRequired,
	Constitution: PropTypes.number.isRequired,
	Dexterity: PropTypes.number.isRequired,
	Intelligence: PropTypes.number.isRequired,
    Charisma: PropTypes.number.isRequired,
    Weapon: PropTypes.string,
    DistanceWeapon: PropTypes.string,
    Ammunition: PropTypes.number,
    Armor: PropTypes.string,
    Shield: PropTypes.string,
    Money: PropTypes.number.isRequired,
    Objects: PropTypes.arrayOf(PropTypes.string),
    Specials: PropTypes.number,
    SpellsLocations: PropTypes.arrayOf(PropTypes.number),
    MinorSpells: PropTypes.arrayOf(PropTypes.string),
    Spells: PropTypes.arrayOf(PropTypes.string)
})