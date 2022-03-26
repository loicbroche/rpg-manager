export const DATA_MODEL = {
    RACES:
        {
            name: 'Races',
            columns: {
                NAME: { name: "Name" },
                OV: { name: "OV" },
                STRENGTH: { name: "Strength" },
                CONSTITUTION: { name: "Constitution" },
                DEXTERITY: { name: "Dexterity" },
                INTELLIGENCE: { name: "Intelligence" },
                WISDOM: { name: "Wisdom" },
                CHARISMA: { name: "Charisma" },
                SPEED: { name: "Speed" },
                WEAPONS: { name: "Weapons", optional: true },
                LANGUAGES: { name: "Languages" },
                RESISTANCES: { name: "ArmorCategories", optional: true },
                SAVE_ADVANTAGES: { name: "SaveAdvantages", optional: true },
                SKILLS: { name: "Skills", optional: true },
                AC_BONUS: { name: "ACBonus" }
            }
        },
    SUB_RACES:
        {
            name: 'SubRaces',
            columns: {
                RACE: { name: "Race" },
                NAME: { name: "Name" },
                OV: { name: "OV" },
                STRENGTH: { name: "Strength" },
                CONSTITUTION: { name: "Constitution" },
                DEXTERITY: { name: "Dexterity" },
                INTELLIGENCE: { name: "Intelligence" },
                WISDOM: { name: "Wisdom" },
                CHARISMA: { name: "Charisma" },
                SPEED: { name: "Speed" },
                ARMOR_CATEGORIES: { name: "ArmorCategories", optional: true },
                WEAPONS: { name: "Weapons", optional: true },
                LANGUAGES: { name: "Languages", optional: true },
                RESISTANCES: { name: "ArmorCategories", optional: true },
                SAVE_ADVANTAGES: { name: "SaveAdvantages", optional: true },
                SKILLS: { name: "Skills", optional: true }
            }
        },
    CLASSES:
        {
            name: 'Classes',
            columns: {
                ID: { name: "Id" },
                NAME: { name: "Name" },
                OV: { name: "OV" },
                STRENGTH: { name: "Strength" },
                CONSTITUTION: { name: "Constitution" },
                DEXTERITY: { name: "Dexterity" },
                INTELLIGENCE: { name: "Intelligence" },
                WISDOM: { name: "Wisdom" },
                CHARISMA: { name: "Charisma" },
                HEALTH_DICE: { name: "HD" },
                SPECIALS_POINTS_NAME: { name: "SpecialsName" },
                BONUS_ATTACK_NAME: { name: "BonusAttackName" },
                WEAPON_CATEGORIES: { name: "WeaponCategories", optional: true },
                WEAPONS: { name: "Weapons", optional: true },
                ARMOR_CATEGORIES: { name: "ArmorCategories", optional: true },
                AC_BONUS: { name: "ACBonus" },
                AC_BONUS_ARMOR: { name: "ACBonusArmor", optional: true },
                AC_BONUS_SHIELD: { name: "ACBonusShield", optional: true },
                SPECIALISATION_NAME: { name: "SpecialisationName" },
                SPECIALISATION_LEVEL: { name: "SpecialisationLevel" },
                FIGHT_STYLE_LEVEL: { name: "FightStyleLevel", optional: true }
            }
        },
        SPECIALISATIONS:
        {
            name: 'Specialisations',
            columns: {
                CODE: { name: "Code" },
                CLASS: { name: "Class" },
                NAME: { name: "Name" },
                AC_BONUS: { name: "ACBonus" },
                AC_BONUS_ARMOR: { name: "ACBonusArmor", optional: true }
            }
        },
        FIGHT_STYLES:
        {
            name: 'FightStyles',
            columns: {
                CODE: { name: "Code" },
                CLASS: { name: "Class" },
                NAME: { name: "Name" },
                AC_BONUS: { name: "ACBonus" },
                AC_BONUS_ARMOR: { name: "ACBonusArmor", optional: true }
            }
        },
        CAPACITIES:
        {
            name: 'Capacities',
            columns: {
                CAPACITIES: { name: "Capacities", optional: true },
                SPECIALS: { name: "Specials", optional: true },
                BONUS_ATTACK: { name: "BonusAttack", optional: true },
                DAMAGES: { name: "Damages", optional: true },
                MINOR_SPELLS_NB: { name: "MinorSpellsNb", optional: true },
                SPELLS_NB: { name: "SpellsNb", optional: true },
                BONUS_SPELLS_NB: { name: "SpellsNbBonus", optional: true },
                LOCATIONS: { name: "Locations", optional: true },
                INVOCATIONS: { name: "Invocations", optional: true },
                ARMORLESS_SPEED: { name: "ArmorlessSpeed", optional: true },
                ARMORLESS_CATEGORIES: { name: "ArmourlessCategories", optional: true }
            }
        },
        CAPACITIES_DESCRIPTIONS:
        {
            name: 'CapacitiesDescriptions',
            columns: {
                CODE: { name: "Code" },
                CLASS: { name: "Class" },
                DESCRIPTION: { name: "Description" },
                SPECIALISATION: { name: "Specialisation", optional: true },
                STATS: { name: "Stats", optional: true },
                AUTO: { name: "Auto", optional: true },
                SPECIAL: { name: "Special", optional: true },
                USE_NUMBER: { name: "UseNumber", optional: true }
            }
        },
        RACE_CAPACITIES_DESCRIPTIONS:
        {
            name: 'RaceCapacitiesDescriptions',
            columns: {
                CODE: { name: "Code" },
                RACE: { name: "Race" },
                SUB_RACE: { name: "SubRace" },
                DESCRIPTION: { name: "Description" },
                STATS: { name: "Stats", optional: true },
                AUTO: { name: "Auto", optional: true },
                REQUIRED_LEVEL: { name: "RequiredLevel", optional: true },
                USE_NUMBER: { name: "UseNumber", optional: true }
            }
        },

        SPECIALISATION_CAPACITIES:
        {
            name: 'SpecialisationCapacities',
            columns: {
                CAPACITIES: { name: "Capacities", optional: true }
            }
        },
    HISTORICS:
        {
            name: 'Historics',
            columns: {
                ID: { name: "Id" },
                NAME: { name: "Name" },
                SKILLS: { name: "Skills" }
            }
        },
    WEAPON_CATEGORIES:
        {
            name: 'WeaponCategories',
            columns: {
                CODE: { name: "Code" },
                NAME: { name: "Name" }
            }
        },
    WEAPONS:
        {
            name: 'Weapons',
            columns: {
                NAME: { name: "Name" },
                OV: { name: "OV" },
                CATEGORY_CODE: { name: "Category" },
                DAMAGE: { name: "Damage" },
                DAMAGE_TYPE: { name: "DamageType" },
                WEIGHT: { name: "Weight" },
                PRICE: { name: "Price" },
                PROPERTIES: { name: "Properties" }
            }
        },
    ARMOR_CATEGORIES:
        {
            name: 'ArmorCategories',
            columns: {
                CODE: { name: "Code" },
                NAME: { name: "Name" }
            }
        },
    ARMORS:
        {
            name: 'Armors',
            columns: {
                NAME: { name: "Name" },
                OV: { name: "OV" },
                CATEGORY_CODE: { name: "Category" },
                AC: { name: "AC" },
                BONUS_AC: { name: "ACBonus", optional: true },
                MAX_BONUS_AC: { name: "MaxACBonus", optional: true },
                WEIGHT: { name: "Weight" },
                PRICE: { name: "Price" },
                DISCRETION: { name: "Discretion" },
                STRENGTH: { name: "Strength" }
            }
        },
    OBJECT_CATEGORIES:
        {
            name: 'ObjectCategories',
            columns: {
                CODE: { name: "Code" },
                NAME: { name: "Name" },
                OV: { name: "OV" }
            }
        },
    OBJECTS:
        {
            name: 'Objects',
            columns: {
                NAME: { name: "Name" },
                OV: { name: "OV" },
                CATEGORY_CODE: { name: "Category" },
                WEIGHT: { name: "Weight" },
                PRICE: { name: "Price" }
            }
        },
    EQUIPMENT_CATEGORIES:
        {
            name: 'EquipmentCategories',
            columns: {
                CODE: { name: "Code" },
                NAME: { name: "Name" }
            }
        },
    EQUIPMENTS:
        {
            name: 'Equipments',
            columns: {
                NAME: { name: "Name" },
                OV: { name: "OV" },
                CATEGORY_CODE: { name: "Category" },
                WEIGHT: { name: "Weight" },
                PRICE: { name: "Price" }
            }
        },
    HOSTEL_CATEGORIES:
        {
            name: 'HostelCategories',
            columns: {
                CODE: { name: "Code" },
                NAME: { name: "Name" }
            }
        },
    HOSTEL_SERVICES:
        {
            name: 'HostelServices',
            columns: {
                NAME: { name: "Name" },
                CATEGORY_CODE: { name: "Category" },
                PRICE: { name: "Price" }
            }
        },
    SERVICE_CATEGORIES:
        {
            name: 'ServiceCategories',
            columns: {
                CODE: { name: "Code" },
                NAME: { name: "Name" }
            }
        },
    SERVICES:
        {
            name: 'Services',
            columns: {
                NAME: { name: "Name" },
                CATEGORY_CODE: { name: "Category" },
                PRICE: { name: "Price" }
            }
        },

    MONSTER_FAMILIES:
        {
            name: 'MonsterFamilies',
            columns: {
                CODE: { name: "Code" },
                NAME: { name: "Name" }            }
        },
    MONSTER_SPECIES:
        {
            name: 'MonsterSpecies',
            columns: {
                CODE: { name: "Code" },
                NAME: { name: "Name" }            }
        },
    MONSTERS:
    {
        name: 'Monsters',
        columns: {
            NAME: { name: "Name" },
            VO: { name: "VO" },
            FAMILY: { name: "Family" },
            SPECIES: { name: "Species" },
            FP: { name: "FP" },
            SIZE: { name: "Size" },
            AC: { name: "AC" },
            HP: { name: "HP" },
            SPEED: { name: "Speed", optional: true  },
            ALIGNMENT: { name: "Alignment", optional: true  },
            LEGENDARY: { name: "Legendary", optional: true  }
        }
    },
    MOUNTS:
        {
            name: 'Mounts',
            columns: {
                NAME: { name: "Name" },
                SPEED: { name: "Speed" },
                CHARGE_CAPACITY: { name: "ChargeCapacity" },
                PRICE: { name: "Price" }
            }
        },
    SHIPS:
        {
            name: 'Ships',
            columns: {
                NAME: { name: "Name" },
                OV: { name: "OV" },
                SPEED: { name: "Speed" },
                PRICE: { name: "Price" }
            }
        },
    TRINKETS:
        {
            name: 'Trinkets',
            columns: {
                D100: { name: "d100" },
                TRINKET: { name: "Trinket" }
            }
        },
    LEVELS:
        {
            name: 'Levels',
            columns: {
                LEVEL: { name: "Level" },
                XP: { name: "XP" },
                MASTERY_BONUS: { name: "MasteryBonus" }
            }
        },
    CARACTERISTICS:
        {
            name: 'Caracteristics',
            columns: {
                CODE: { name: "Code" },
                NAME: { name: "Name" },
                OV: { name: "OV" }
            }
        },
    SKILLS:
        {
            name: 'Skills',
            columns: {
                CARACTERISTIC_CODE: { name: "Caracteristic" },
                NAME: { name: "Name" }
            }
        },

    SPELLS:
        {
            name: 'Spells',
            columns: {
                NAME: { name: "Name" },
                OV: { name: "OV" },
                LEVEL: { name: "Level" },
                BBE: { name: "BBE" },
                SCHOOL: { name: "School" },
                INCANTATION: { name: "Incantation" },
                TYPE: { name: "Type" },
                DESCRIPTION: { name: "Description" },
                CLASSES: { name: "Classes" }
            }
        },

	SPELLS_COMPLEMENTS:
	{
		name: 'SpellsComplements',
		columns: {
			RACE: { name: "Race" },
			SUB_RACE: { name: "SubRace" },
			SPECIALISATION: { name: "Specialisation" },
			LEVEL: { name: "Level" },
			SPELLS: { name: "Spells" },
			BONU_LOCATION: { name: "BonusLocation" },
			BONUS_LOCATION_CLASSES: { name: "BonusLocationClasses" }
		}
	},

	ALTERATIONS:
	{
		name: 'Alterations',
		columns: {
			CODE: { name: "Code" },
			TYPE: { name: "Type" },
			NAME: { name: "Name" },
			EFFECT: { name: "Effect" },
			EFFECT_DESCRIPTION: { name: "EffectDescription" }
		}
	},
	ALTERATION_TYPES:
	{
		name: 'AlterationTypes',
		columns: {
			CODE: { name: "Code" },
			NAME: { name: "Name" },
			SAVABLE: { name: "Savable" }
		}
	},

	ALIGNMENTS:
	{
		name: 'Alignments',
		columns: {
			CODE: { name: "Code" },
			NAME: { name: "Name" },
			DESCRIPTION: { name: "Description" }
		}
	},

	LANGUAGES:
	{
		name: 'Languages',
		columns: {
			CODE: { name: "Code" },
			TYPE: { name: "Type" },
			WRITING: { name: "Writing" },
			TYPICAL_RACES: { name: "TypicalRaces" }
		}
	},

	NOTES:
	{
		name: 'Notes',
		columns: {
			NAME: { name: "Name" },
			CONTENT: { name: "Content" },
			DESCRIPTION: { name: "Description" },
			TOP: { name: "Top" },
			LEFT: { name: "Left" },
			LOCKED: { name: "Locked" }
		}
	},

	SCENARIOS:
	{
		name: 'Scenarios',
		columns: {
			ID: { name: "Id" },
			CHARACTERS: { name: "Characters" }
		}
	},

    CHARACTERS:
    {
        name: 'Characters',
        columns: {
            ID: { name: "Id" },
            NAME: { name: "Name" },
            SUB_RACE: { name: "SubRace", optional: true },
            GENDER: { name: "Gender" },
            CLASS: { name: "Class" },
            SPECIALISATION: { name: "Specialisation", optional: true },
            FIGHT_STYLES: { name: "FightStyles", optional: true },
            SKILLS: { name: "Skills", optional: true },
            MASTER_WEAPONS: { name: "MasterWeapons", optional: true },
            MASTER_ARMORS: { name: "MasterArmors", optional: true },
            MASTER_OBJECTS: { name: "MasterObjects", optional: true },
            HISTORIC: { name: "Historic" },
            ALIGNMENT: { name: "Alignment" },
            AGE: { name: "Age" },
            HEIGHT: { name: "Height" },
            WEIGHT: { name: "Weight" },
            EYES: { name: "Eyes" },
            SKIN: { name: "Skin" },
            HAIRS: { name: "Hairs" },
            PERSONNALITY: { name: "PersonnalityTraits" },
            IDEALS: { name: "Ideals" },
            LINKS: { name: "Links" },
            DEFECTS: { name: "Defects" },
            HISTORY: { name: "History" },
            LANGUAGES: { name: "Languages" },
            XP: { name: "XP" },
            MAX_HP: { name: "MaxHP" },
            HP: { name: "HP" },
            HEALTH: { name: "Health" },
            ALTERATIONS: { name: "Alterations", optional: true },
            RESISTANCES: { name: "Resistances", optional: true },
            SAVES: { name: "Saves", optional: true },
            SAVE_ADVANTAGES: { name: "SaveAdvantages", optional: true },
            STRENGTH: { name: "Strength" },
            CONSTITUTION: { name: "Constitution" },
            DEXTERITY: { name: "Dexterity" },
            INTELLIGENCE: { name: "Intelligence" },
            WISDOM: { name: "Wisdom" },
            CHARISMA: { name: "Charisma" },
            WEAPON: { name: "Weapon", optional: true },
            DISTANCE_WEAPON: { name: "DistanceWeapon", optional: true },
            AMMUNITION: { name: "Ammunition", optional: true },
            ARMOR: { name: "Armor", optional: true },
            SHIELD: { name: "Shield", optional: true },
            MONEY: { name: "Money" },
            OBJECTS: { name: "Objects" },
            SATCHEL_OBJECTS: { name: "SatchelObjects" },
            SPECIALS: { name: "Specials", optional: true },
            SPELLS_LOCATIONS: { name: "SpellsLocations", optional: true },
            MINOR_SPELLS: { name: "MinorSpells", optional: true },
            SPELLS: { name: "Spells", optional: true },
            NOTES: { name: "Notes", optional: true },
            HIDDEN_CAPACITIES: { name: "HiddenCapacities", optional: true },
            DAMAGES: { name: "Damages", optional: true },
            AC_BONUS: { name: "ACBonus", optional: true },
            USED_CAPACITIES: { name: "UsedCapacities", optional: true }
        }
    }
}
