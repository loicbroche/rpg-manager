export const DATA_MODEL = {
    RACES:
        {
            name: 'Races',
            columns: {
                NAME: { name: "Name" },
                OV: { name: "OV" },
                STRENGTH: { name: "Strength" },
                CONSTITUTION: { name: "Consitution" },
                DEXTERITY: { name: "Dexterity" },
                INTELLIGENCE: { name: "Intelligence" },
                WISDOM: { name: "Wisdom" },
                CHARISMA: { name: "Charisma" },
                SPEED: { name: "Speed" }
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
                CONSTITUTION: { name: "Consitution" },
                DEXTERITY: { name: "Dexterity" },
                INTELLIGENCE: { name: "Intelligence" },
                WISDOM: { name: "Wisdom" },
                CHARISMA: { name: "Charisma" },
                SPEED: { name: "Speed" }
            }
        },
    CLASSES:
        {
            name: 'Classes',
            columns: {
                NAME: { name: "Name" },
                OV: { name: "OV" },
                STRENGTH: { name: "Strength" },
                CONSTITUTION: { name: "Consitution" },
                DEXTERITY: { name: "Dexterity" },
                INTELLIGENCE: { name: "Intelligence" },
                WISDOM: { name: "Wisdom" },
                CHARISMA: { name: "Charisma" }
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
                WEIGHT: { name: "Weight" },
                PRICE: { name: "Price" },
                PROPERTIES: { name: "Properties" }
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
    CHARACTERS:
        {
            name: 'Characters',
            columns: {
                ID: { name: "Id" },
                NAME: { name: "Name" },
                RACE: { name: "Race" },
                SUB_RACE: { name: "SubRace", optional: true },
                CLASS: { name: "Class" },
                SKILLS: { name: "Skills", optional: true },
                WEAPONS: { name: "Weapons", optional: true },
                WEAPON_RIGHT: { name: "WeaponRight" },
                WEAPON_LEFT: { name: "WeaponLeft" }
            }
        }
}
