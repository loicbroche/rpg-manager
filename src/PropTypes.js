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
    Weapons: PropTypes.arrayOf(PropTypes.string),
    Languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    Resistances: PropTypes.arrayOf(PropTypes.string),
    SaveAdvantages: PropTypes.arrayOf(PropTypes.string),
    Skills: PropTypes.arrayOf(PropTypes.string),
    ACBonus: PropTypes.number.isRequired
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
    ArmorCategories: PropTypes.arrayOf(PropTypes.string),
    Weapons: PropTypes.arrayOf(PropTypes.string),
    Languages: PropTypes.arrayOf(PropTypes.string),
    Resistances: PropTypes.arrayOf(PropTypes.string),
    SaveAdvantages: PropTypes.arrayOf(PropTypes.string),
    Skills: PropTypes.arrayOf(PropTypes.string)
})

export const ClassPropType = PropTypes.shape({
    Id: PropTypes.string.isRequired,
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
    SpecialisationName: PropTypes.string.isRequired,
    SpecialisationLevel: PropTypes.number.isRequired,
    FightStyleLevel: PropTypes.number,
})


export const SpecialisationPropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Class: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    ACBonus: PropTypes.number,
    ACBonusArmor: PropTypes.bool
})

export const FightStylePropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Class: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    ACBonus: PropTypes.number,
    WeaponBonus: PropTypes.number,
    DistanceBonus: PropTypes.number,
    ACBonusArmor: PropTypes.bool,
    Description: PropTypes.string.isRequired,
})

export const CapacityPropType = PropTypes.shape({
    Capacities: PropTypes.arrayOf(PropTypes.string),
    Specials: PropTypes.number,
    BonusAttack: PropTypes.string,
    Damages: PropTypes.number,
    MinorSpellsNb: PropTypes.number,
    SpellsNb: PropTypes.number,
    SpellsNbBonus: PropTypes.string,
    Locations: PropTypes.arrayOf(PropTypes.number),
    Invocations: PropTypes.number,
    ArmorlessSpeed: PropTypes.number,
    ArmourlessCategories: PropTypes.arrayOf(PropTypes.string)
})

export const CapacityDescriptionPropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Class: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Specialisation: PropTypes.string,
    Stats: PropTypes.bool,
    Auto: PropTypes.bool,
    Special: PropTypes.bool,
    UseNumber: PropTypes.number
})

export const RaceCapacityDescriptionPropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Race: PropTypes.string,
    SubRace: PropTypes.string,
    Description: PropTypes.string.isRequired,
    Stats: PropTypes.bool,
    Auto: PropTypes.bool,
    RequiredLevel: PropTypes.number,
    UseNumber: PropTypes.number
})

export const HistoricPropType = PropTypes.shape({
    Id: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    Skills: PropTypes.arrayOf(PropTypes.string),
    StartingObjects: PropTypes.arrayOf(PropTypes.string)
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
    ACBonus: PropTypes.string,
    MaxACBonus: PropTypes.string,
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

export const PersonnalObjectPropType = PropTypes.shape({
    Id: PropTypes.string.isRequired,
    Label: PropTypes.string,
    Quantity: PropTypes.number.isRequired
})

export const UsedCapacityPropType = PropTypes.shape({
    Id: PropTypes.string.isRequired,
    UsedNumber: PropTypes.number.isRequired
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

export const MonsterFamilyPropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired
})

export const MonsterSpeciesPropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired
})

export const MonstersPropType = PropTypes.shape({
    Name: PropTypes.string.isRequired,
    Vo: PropTypes.string.isRequired,
    Family: PropTypes.string.isRequired,
    Species: PropTypes.arrayOf(PropTypes.string.isRequired),
    FP: PropTypes.string.isRequired,
    Size: PropTypes.string.isRequired,
    AC: PropTypes.number.isRequired,
    HP: PropTypes.string.isRequired,
    Speed: PropTypes.string,
    Alignment: PropTypes.string,
    Legendary: PropTypes.string
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

export const TrinketPropType = PropTypes.shape({
    d100: PropTypes.number.isRequired,
    Name: PropTypes.string.isRequired
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
    Type: PropTypes.string,
    Description: PropTypes.string.isRequired,
    Classes: PropTypes.arrayOf(PropTypes.string).isRequired
})

export const SpellsComplementPropType = PropTypes.shape({
    Race: PropTypes.string,
    SubRace: PropTypes.string,
    Specialisation: PropTypes.string,
    Level: PropTypes.number.isRequired,
    Spells: PropTypes.arrayOf(PropTypes.string),
    BonusLocation: PropTypes.number,
    BonusLocationClasses: PropTypes.arrayOf(PropTypes.string)
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


export const NotePropType = PropTypes.shape({
    Name: PropTypes.string,
    Content: PropTypes.string.isRequired,
    Description: PropTypes.string,
    Top: PropTypes.string,
    Left: PropTypes.string,
    Locked: PropTypes.string
})

export const DamagePropType = PropTypes.shape({
    Code: PropTypes.string.isRequired,
    Hurt: PropTypes.bool,
    Symbol: PropTypes.string,
    Description: PropTypes.string,
    Top: PropTypes.string,
    Left: PropTypes.string,
    Title: PropTypes.string
})

export const ScenarioPropType = PropTypes.shape({
    Id: PropTypes.string.isRequired,
    Characters: PropTypes.arrayOf(PropTypes.string)
})

export const CharacterPropType = PropTypes.shape({
    Id: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    SubRace: PropTypes.string,
    Gender: PropTypes.string,
    Class: PropTypes.string,
    Specialisation: PropTypes.string,
    FightStyles: PropTypes.arrayOf(PropTypes.string),
    Skills: PropTypes.arrayOf(PropTypes.string),
    MasterArmors: PropTypes.arrayOf(PropTypes.string),
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
    Objects: PropTypes.arrayOf(PersonnalObjectPropType),
    SatchelObjects: PropTypes.arrayOf(PersonnalObjectPropType),
    Specials: PropTypes.number,
    SpellsLocations: PropTypes.arrayOf(PropTypes.number),
    MinorSpells: PropTypes.arrayOf(PropTypes.string),
    Spells: PropTypes.arrayOf(PropTypes.string),
    Notes: PropTypes.string,
    hiddenCapacities: PropTypes.arrayOf(PropTypes.string),
    Damages: PropTypes.arrayOf(DamagePropType),
    ACBonus: PropTypes.number,
    UsedCapacities: PropTypes.arrayOf(UsedCapacityPropType),
})