export const referentialMock = {
	"Alignments" : {
	  "1_LB": {
		"Code" : "1_LB",
		"Name" : "Loyal bon",
		"Description" : "On peut compter sur ces créatures pour faire le bien dans le sens ou la société l'entend. Les dragons d'or, les paladins et la plupart des nains sont d'alignement loyal bon."
		 },
	  "2_NB": {
		"Code" : "2_NB",
		"Name" : "Neutre bon ",
		"Description" : "Ces personnes font du mieux qu'elles peuvent pour aider les autres, en fonction de leurs besoins toutefois. Beaucoup des créatures célestes, certains géants des nuages et la plupart des gnomes sont neutre bon."
		 },
	  "3_CB": {
		"Code" : "3_CB",
		"Name" : "Chaotique bon",
		"Description" : "Ces créatures agissent selon leur conscience, et ont peu d'égard pour ce que les autres attendent. Les dragons de cuivre, de nombreux elfes et les licornes sont d'alignement chaotique bon."
		 },
	  "4_LN": {
		"Code" : "4_LN",
		"Name" : "Loyal neutre",
		"Description" : "Ces individus agissent conformément à la loi, aux traditions ou suivants des codes personnels. Beaucoup de moines et quelques magiciens sont d'alignement loyal neutre."
		 },
	  "5_NB": {
		"Code" : "5_NB",
		"Name" : "Neutre",
		"Description" : "Neutre est l'alignement de ceux qui préfèrent rester à l'écart des questions morales et ne prennent pas parti, faisant ce qui leur semble le mieux à un moment donné. Les hommes-lézards, la plupart des druides et beaucoup d'humains sont neutres."
		 },
	  "6_CN": {
		"Code" : "6_CN",
		"Name" : "Chaotique neutre",
		"Description" : "Ces créatures suivent leurs caprices, pensant à leur liberté personnelle avant tout. Beaucoup de barbares, de roublards et de bardes sont d'alignement chaotique neutre."
		 },
	  "7_LM": {
		"Code" : "7_LM",
		"Name" : "Loyal mauvais",
		"Description" : "Ces créatures font méthodiquement ce qu'elles veulent, dans les limites d'un code de tradition, de la loyauté ou d'un ordre. Les diables, les dragons bleus et les hobgobelins sont d'alignement loyal mauvais."
		 },
	  "8_NM": {
		"Code" : "8_NM",
		"Name" : "Neutre mauvais",
		"Description" : "Neutre mauvais est l'alignement de ceux qui font ce qu'ils veulent, sans aucune compassion ni aucun scrupule. Beaucoup d'elfes noirs, certains géants des nuages?, et les yugoloths sont d'alignement neutre mauvais."
		 },
	  "9_CM": {
		"Code" : "9_CM",
		"Name" : "Chaotique mauvais",
		"Description" : "Ces créatures agissent avec une violence arbitraire, stimulées par la cupidité, la haine ou la soif de sang. Les démons, les dragons rouges et les orques sont d'alignement chaotique mauvais."
		 }
	},
	"Alterations" : {
	  "ALCOHOL": {
		"Type": "1_SUBSTANCE",
		"Code": "ALCOHOL",
		"Name": "Alcool",
		"Effect": "Alcoolisé",
		"EffectDescription": ""
	   },
	  "BEWITCHMENT": {
		"Type": "4_MAGIC",
		"Code": "BEWITCHMENT",
		"Name": "Envoutement",
		"Effect": "Envouté",
		"EffectDescription": ""
	   },
	  "FEAR": {
		"Type": "3_CONTEXT",
		"Code": "FEAR",
		"Name": "Peur",
		"Effect": "Effrayé",
		"EffectDescription": "Une créature effrayée a un désavantage aux jets de caractéristique et aux jets d'attaque tant que la source de sa peur est dans sa ligne de vue.\nLa créature ne peut se rapprocher volontairement de la source de sa peur."
	   },
	  "PROVOCATION": {
		"Type": "3_CONTEXT",
		"Code": "PROVOCATION",
		"Name": "Provocation",
		"Effect": "Provoqué",
		"EffectDescription": ""
	   },
	  "CHARM": {
		"Type": "3_CONTEXT",
		"Code": "CHARM",
		"Name": "Charme",
		"Effect": "Charmé",
		"EffectDescription": "Une créature charmée ne peut pas attaquer le charmeur ou le cibler avec des capacités ou des effets magiques nuisibles.\nLe charmeur a l'avantage à ses jets de caractéristique pour interagir socialement avec la créature."
	   },
	  "STRESS": {
		"Type": "3_CONTEXT",
		"Code": "STRESS",
		"Name": "Stress",
		"Effect": "Stressé",
		"EffectDescription": ""
	   },
	  "ACID": {
		"Type": "2_ELEMENT",
		"Code": "ACID",
		"Name": "Acide",
		"Effect": "Acidifié",
		"EffectDescription": ""
	   },
	  "FIRE": {
		"Type": "2_ELEMENT",
		"Code": "FIRE",
		"Name": "Feu",
		"Effect": "Brûlé",
		"EffectDescription": ""
	   },
	  "LIGHTNING": {
		"Type": "2_ELEMENT",
		"Code": "LIGHTNING",
		"Name": "Foudre",
		"Effect": "Foudroyé",
		"EffectDescription": ""
	   },
	  "COLD": {
		"Type": "2_ELEMENT",
		"Code": "COLD",
		"Name": "Froid",
		"Effect": "Gelé",
		"EffectDescription": ""
	   },
	  "DRUG": {
		"Type": "1_SUBSTANCE",
		"Code": "DRUG",
		"Name": "Narcotique",
		"Effect": "Drogué",
		"EffectDescription": ""
	   },
	  "PRONE": {
		"Type": "6_POSITION",
		"Code": "PRONE",
		"Name": "Chute",
		"Effect": "À terre",
		"EffectDescription": "La seule option de mouvement possible pour une créature à terre est de ramper, à moins qu'elle ne se relève et mette alors un terme à la condition.\nLa créature a un désavantage aux jets d'attaque.\nUn jet d'attaque contre la créature a l'avantage si l'attaquant est à 1,50 mètre ou moins de la créature. Sinon, le jet d'attaque a un désavantage."
	   },
	  "GRAPPLING": {
		"Type": "6_POSITION",
		"Code": "GRAPPLING",
		"Name": "Agripper",
		"Effect": "Agrippé ",
		"EffectDescription": "La vitesse d'une créature agrippée passe à 0, et elle ne peut bénéficier d'aucun bonus à sa vitesse.\nLa condition prend fin si la créature qui agrippe est incapable d'agir (voir la condition).\nLa condition se termine également si un effet met la créature agrippée hors de portée de la créature ou de l'effet qui l'agrippe, comme par exemple lorsqu'une créature est projetée par le sort onde de choc."
	   },
	  "DEAFENED": {
		"Type": "5_SENSE",
		"Code": "DEAFENED",
		"Name": "Assourdissement",
		"Effect": "Assourdi ",
		"EffectDescription": "Une créature assourdie n'entend pas et rate automatiquement tout jet de caractéristique qui nécessite l’ouïe."
	   },
	  "BLINDED": {
		"Type": "5_SENSE",
		"Code": "BLINDED",
		"Name": "Aveuglement",
		"Effect": "Aveuglé ",
		"EffectDescription": "Une créature aveuglée ne voit pas et rate automatiquement tout jet de caractéristique qui nécessite la vue.\nLes jets d'attaque contre la créature ont l'avantage, et les jets d'attaque de la créature ont un désavantage."
	   },
	  "RESTRAINED": {
		"Type": "6_POSITION",
		"Code": "RESTRAINED",
		"Name": "Entrave",
		"Effect": "Entravé ",
		"EffectDescription": "La vitesse d'une créature entravée passe à 0, et elle ne peut bénéficier d'aucun bonus à sa vitesse.\nLes jets d'attaque contre la créature ont l'avantage, et les jets d'attaque de la créature ont un désavantage.\nLa créature a un désavantage à ses jets de sauvegarde de Dextérité."
	   },
	  "STUNNED": {
		"Type": "6_POSITION",
		"Code": "STUNNED",
		"Name": "Etourdissement",
		"Effect": "Étourdi ",
		"EffectDescription": "Une créature étourdie est incapable d'agir (voir la condition), ne peut plus bouger et parle de manière hésitante.\nLa créature rate automatiquement ses jets de sauvegarde de Force et de Dextérité.\nLes jets d'attaque contre la créature ont l'avantage."
	   },
	  "INCAPACITATED": {
		"Type": "6_POSITION",
		"Code": "INCAPACITATED",
		"Name": "Incapacité",
		"Effect": "Incapable d'agir",
		"EffectDescription": "Une créature incapable d'agir ne peut effectuer aucune action ni aucune réaction."
	   },
	  "UNCONSCIOUS": {
		"Type": "6_POSITION",
		"Code": "UNCONSCIOUS",
		"Name": "Evanouissement",
		"Effect": "Inconscient",
		"EffectDescription": "Une créature inconsciente est incapable d'agir (voir la condition), ne peut plus bouger ni parler, et n'est plus consciente de ce qui se passe autour d'elle.\nLa créature lâche ce qu'elle tenait et tombe à terre.\nLa créature rate automatiquement ses jets de sauvegarde de Force et de Dextérité.\nLes jets d'attaque contre la créature ont l'avantage.\nToute attaque qui touche la créature est un coup critique si l'attaquant est à 1,50 mètre ou moins de la créature."
	   },
	  "INVISIBLE": {
		"Type": "4_MAGIC",
		"Code": "INVISIBLE",
		"Name": "Invisibilité",
		"Effect": "Invisible",
		"EffectDescription": "Une créature invisible ne peut être vue sans l'aide de la magie ou un sens particulier. En ce qui concerne le fait de se cacher, la créature est considérée dans une zone à visibilité nulle. L'emplacement de la créature peut être détecté par un bruit qu'elle fait ou par les traces qu'elle laisse.\nLes jets d'attaque contre la créature ont un désavantage, et les jets d'attaque de la créature ont l'avantage."
	   },
	  "PETRIFIED": {
		"Type": "6_POSITION",
		"Code": "PETRIFIED",
		"Name": "Pétrification",
		"Effect": "Pétrifié ",
		"EffectDescription": "Une créature pétrifiée est transformée, ainsi que tout objet non magique qu'elle porte, en une substance inanimée solide (généralement en pierre). Son poids est multiplié par dix et son vieillissement cesse.\nLa créature est incapable d'agir (voir la condition), ne peut plus bouger ni parler, et n'est plus consciente de ce qui se passe autour d'elle.\nLes jets d'attaque contre la créature ont l'avantage.\nLa créature rate automatiquement ses jets de sauvegarde de Force et de Dextérité.\nLa créature obtient la résistance contre tous les types de dégâts.\nLa créature est immunisée contre le poison et la maladie, mais un poison ou une maladie déjà dans son organisme est seulement suspendu, pas neutralisé."
	   },
	  "POISON": {
		"Type": "1_SUBSTANCE",
		"Code": "POISON",
		"Name": "Poison",
		"Effect": "Empoisonné",
		"EffectDescription": "Une créature empoisonnée a un désavantage aux jets d'attaque et aux jets de caractéristique."
	   }
	},
	"AlterationTypes": {
	  "1_SUBSTANCE": {
		"Code": "1_SUBSTANCE",
		"Name": "Substance",
		"Savable": true
	   },
	  "2_ELEMENT": {
		"Code": "2_ELEMENT",
		"Name": "Elément",
		"Savable": true
	   },
	  "3_CONTEXT": {
		"Code": "3_CONTEXT",
		"Name": "Contexte",
		"Savable": true
	   },
	  "4_MAGIC": {
		"Code": "4_MAGIC",
		"Name": "Magie",
		"Savable": true
	   },
	  "5_SENSE": {
		"Code": "5_SENSE",
		"Name": "Sens",
		"Savable": false
	   },
	  "6_POSITION": {
		"Code": "6_POSITION",
		"Name": "Position",
		"Savable": false
	   }
	},
	"ArmorCategories" : {
	  "0_SHIELD" : {
		"Code" : "0_SHIELD",
		"Name" : "Boucliers"
	  },
	  "1_LIGHT" : {
		"Code" : "1_LIGHT",
		"Name" : "Armures légères"
	  },
	  "2_MID" : {
		"Code" : "2_MID",
		"Name" : "Armures intermédiaires"
	  },
	  "3_HEAVY" : {
		"Code" : "3_HEAVY",
		"Name" : "Armures lourdes"
	  }
	},
	"Armors" : {
	  "Matelassée": {
	   "Name" : "  Matelassée",
	   "OV" : "Padded",
	   "Category": "1_LIGHT",
	   "AC" : 11,
	   "ACBonus" : "DEX",
	   "MaxACBonus" : null,
	   "Weight" : 4000,
	   "Price" : 500,
	   "Discretion" : "Désavantage",
	   "Strength" : 0
		},
	  "Cuir": {
	   "Name" : "  Cuir",
	   "OV" : "Leather",
	   "Category": "1_LIGHT",
	   "AC" : 11,
	   "ACBonus" : "DEX",
	   "MaxACBonus" : null,
	   "Weight" : 5000,
	   "Price" : 1000,
	   "Discretion" : "-",
	   "Strength" : 0
		},
	  "Cuir clouté": {
	   "Name" : "  Cuir clouté",
	   "OV" : "Studded leather",
	   "Category": "1_LIGHT",
	   "AC" : 12,
	   "ACBonus" : "DEX",
	   "MaxACBonus" : null,
	   "Weight" : 6500,
	   "Price" : 4500,
	   "Discretion" : "-",
	   "Strength" : 0
		},
	  "Peau": {
	   "Name" : "  Peau",
	   "OV" : "Hide",
	   "Category": "2_MID",
	   "AC" : 12,
	   "ACBonus" : "DEX",
	   "MaxACBonus" : 2,
	   "Weight" : 6000,
	   "Price" : 1000,
	   "Discretion" : "-",
	   "Strength" : 0
		},
	  "Chemise de mailles": {
	   "Name" : "  Chemise de mailles",
	   "OV" : "Chain shirt",
	   "Category": "2_MID",
	   "AC" : 13,
	   "ACBonus" : "DEX",
	   "MaxACBonus" : 2,
	   "Weight" : 10000,
	   "Price" : 5000,
	   "Discretion" : "-",
	   "Strength" : 0
		},
	  "Écailles": {
	   "Name" : "  Écailles",
	   "OV" : "Scale mail",
	   "Category": "2_MID",
	   "AC" : 14,
	   "ACBonus" : "DEX",
	   "MaxACBonus" : 2,
	   "Weight" : 22500,
	   "Price" : 5000,
	   "Discretion" : "Désavantage",
	   "Strength" : 0
		},
	  "Cuirasse": {
	   "Name" : "  Cuirasse",
	   "OV" : "Breastplate",
	   "Category": "2_MID",
	   "AC" : 14,
	   "ACBonus" : "DEX",
	   "MaxACBonus" : 2,
	   "Weight" : 10000,
	   "Price" : 40000,
	   "Discretion" : "-",
	   "Strength" : 0
		},
	  "Demi-plate": {
	   "Name" : "  Demi-plate",
	   "OV" : "Half plate",
	   "Category": "2_MID",
	   "AC" : 15,
	   "ACBonus" : "DEX",
	   "MaxACBonus" : 2,
	   "Weight" : 20000,
	   "Price" : 75000,
	   "Discretion" : "Désavantage",
	   "Strength" : 0
		},
	  "Broigne": {
	   "Name" : "  Broigne",
	   "OV" : "Ring mail",
	   "Category": "3_HEAVY",
	   "AC" : 14,
	   "ACBonus" : "",
	   "MaxACBonus" : null,
	   "Weight" : 20000,
	   "Price" : 3000,
	   "Discretion" : "Désavantage",
	   "Strength" : 0
		},
	  "Cotte de mailles": {
	   "Name" : "  Cotte de mailles",
	   "OV" : "Chain mail",
	   "Category": "3_HEAVY",
	   "AC" : 16,
	   "ACBonus" : "",
	   "MaxACBonus" : null,
	   "Weight" : 27500,
	   "Price" : 7500,
	   "Discretion" : "Désavantage",
	   "Strength" : 13
		},
	  "Clibanion": {
	   "Name" : "  Clibanion",
	   "OV" : "Splint",
	   "Category": "3_HEAVY",
	   "AC" : 17,
	   "ACBonus" : "",
	   "MaxACBonus" : null,
	   "Weight" : 30000,
	   "Price" : 20000,
	   "Discretion" : "Désavantage",
	   "Strength" : 15
		},
	  "Harnois": {
	   "Name" : "  Harnois",
	   "OV" : "Plate",
	   "Category": "3_HEAVY",
	   "AC" : 18,
	   "ACBonus" : "",
	   "MaxACBonus" : null,
	   "Weight" : 32500,
	   "Price" : 150000,
	   "Discretion" : "Désavantage",
	   "Strength" : 15
		},
	  "Bouclier": {
	   "Name" : "  Bouclier",
	   "OV" : "Shield",
	   "Category": "0_SHIELD",
	   "AC" : 2,
	   "ACBonus" : "",
	   "MaxACBonus" : null,
	   "Weight" : 3000,
	   "Price" : 1000,
	   "Discretion" : "-",
	   "Strength" : 0
		}
	},
	"Capacities" : {
	  "BARBARIAN-1" : {
		"Capacities" : "Rage, Défense sans armure",
		"Damages" : 2,
		"Specials" : 2
	  },
	  "BARBARIAN-10" : {
		"Capacities" : "Capacité de voie",
		"Damages" : 3,
		"Specials" : 4
	  },
	  "BARBARIAN-11" : {
		"Capacities" : "Rage implacable",
		"Damages" : 3,
		"Specials" : 4
	  },
	  "BARBARIAN-12" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Damages" : 3,
		"Specials" : 5
	  },
	  "BARBARIAN-13" : {
		"Capacities" : "Critique brutal (2 dés)",
		"Damages" : 3,
		"Specials" : 5
	  },
	  "BARBARIAN-14" : {
		"Capacities" : "Capacité de voie",
		"Damages" : 3,
		"Specials" : 5
	  },
	  "BARBARIAN-15" : {
		"Capacities" : "Rage ininterrompue",
		"Damages" : 3,
		"Specials" : 5
	  },
	  "BARBARIAN-16" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Damages" : 4,
		"Specials" : 5
	  },
	  "BARBARIAN-17" : {
		"Capacities" : "Critique brutal (3 dés)",
		"Damages" : 4,
		"Specials" : 6
	  },
	  "BARBARIAN-18" : {
		"Capacities" : "Puissance indomptable",
		"Damages" : 4,
		"Specials" : 6
	  },
	  "BARBARIAN-19" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Damages" : 4,
		"Specials" : 6
	  },
	  "BARBARIAN-2" : {
		"Capacities" : "Attaque téméraire, Sens du danger",
		"Damages" : 2,
		"Specials" : 2
	  },
	  "BARBARIAN-20" : {
		"Capacities" : "Champion primitif",
		"Damages" : 4,
		"Specials" : -1
	  },
	  "BARBARIAN-3" : {
		"Capacities" : "Voie primitive",
		"Damages" : 2,
		"Specials" : 3
	  },
	  "BARBARIAN-4" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Damages" : 2,
		"Specials" : 3
	  },
	  "BARBARIAN-5" : {
		"Capacities" : "Attaque supplémentaire, Déplacement rapide",
		"Damages" : 2,
		"Specials" : 3
	  },
	  "BARBARIAN-6" : {
		"Capacities" : "Capacité de voie",
		"Damages" : 2,
		"Specials" : 4
	  },
	  "BARBARIAN-7" : {
		"Capacities" : "Instinct sauvage",
		"Damages" : 2,
		"Specials" : 4
	  },
	  "BARBARIAN-8" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Damages" : 2,
		"Specials" : 4
	  },
	  "BARBARIAN-9" : {
		"Capacities" : "Critique brutal (1 dé)",
		"Damages" : 3,
		"Specials" : 4
	  },
	  "BARD-1" : {
		"Capacities" : "Incantations, Inspiration bardique (d6)",
		"Locations" : [ null, 2, 0, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 2,
		"SpellsNb" : 4
	  },
	  "BARD-10" : {
		"Capacities" : "Inspiration bardique (d10), Expertise, Secrets magiques",
		"Locations" : [ null, 4, 3, 3, 3, 2, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4,
		"SpellsNb" : 14
	  },
	  "BARD-11" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 0, 0, 0 ],
		"MinorSpellsNb" : 4,
		"SpellsNb" : 15
	  },
	  "BARD-12" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 0, 0, 0 ],
		"MinorSpellsNb" : 4,
		"SpellsNb" : 15
	  },
	  "BARD-13" : {
		"Capacities" : "Chant de repos (d10)",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 0, 0 ],
		"MinorSpellsNb" : 4,
		"SpellsNb" : 16
	  },
	  "BARD-14" : {
		"Capacities" : "Secrets magiques, Capacité de collège bardique",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 0, 0 ],
		"MinorSpellsNb" : 4,
		"SpellsNb" : 18
	  },
	  "BARD-15" : {
		"Capacities" : "Inspiration bardique (d12)",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 0 ],
		"MinorSpellsNb" : 4,
		"SpellsNb" : 19
	  },
	  "BARD-16" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 0 ],
		"MinorSpellsNb" : 4,
		"SpellsNb" : 19
	  },
	  "BARD-17" : {
		"Capacities" : "Chant de repos (d12)",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 1 ],
		"MinorSpellsNb" : 4,
		"SpellsNb" : 20
	  },
	  "BARD-18" : {
		"Capacities" : "Secrets magiques",
		"Locations" : [ null, 4, 3, 3, 3, 3, 1, 1, 1, 1 ],
		"MinorSpellsNb" : 4,
		"SpellsNb" : 22
	  },
	  "BARD-19" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 3, 2, 1, 1, 1 ],
		"MinorSpellsNb" : 4,
		"SpellsNb" : 22
	  },
	  "BARD-2" : {
		"Capacities" : "Touche-à-tout, Chant de repos (d6)",
		"Locations" : [ null, 3, 0, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 2,
		"SpellsNb" : 5
	  },
	  "BARD-20" : {
		"Capacities" : "Inspiration supérieure",
		"Locations" : [ null, 4, 3, 3, 3, 3, 2, 2, 1, 1 ],
		"MinorSpellsNb" : 4,
		"SpellsNb" : 22
	  },
	  "BARD-3" : {
		"Capacities" : "Collège bardique, Expertise",
		"Locations" : [ null, 4, 2, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 2,
		"SpellsNb" : 6
	  },
	  "BARD-4" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3,
		"SpellsNb" : 7
	  },
	  "BARD-5" : {
		"Capacities" : "Inspiration bardique (d8), Source d'inspiration",
		"Locations" : [ null, 4, 3, 2, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3,
		"SpellsNb" : 8
	  },
	  "BARD-6" : {
		"Capacities" : "Contre charme, Capacité de collège bardique",
		"Locations" : [ null, 4, 3, 3, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3,
		"SpellsNb" : 9
	  },
	  "BARD-7" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 1, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3,
		"SpellsNb" : 10
	  },
	  "BARD-8" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 2, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3,
		"SpellsNb" : 11
	  },
	  "BARD-9" : {
		"Capacities" : "Chant de repos (d8)",
		"Locations" : [ null, 4, 3, 3, 3, 1, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3,
		"SpellsNb" : 12
	  },
	  "CLERK-1" : {
		"Capacities" : "Incantations, Domaine divin",
		"Locations" : [ null, 2, 0, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3
	  },
	  "CLERK-10" : {
		"Capacities" : "Intervention divine",
		"Locations" : [ null, 4, 3, 3, 3, 2, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 5
	  },
	  "CLERK-11" : {
		"Capacities" : "Destruction des morts-vivants (FP 2)",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 0, 0, 0 ],
		"MinorSpellsNb" : 5
	  },
	  "CLERK-12" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 0, 0, 0 ],
		"MinorSpellsNb" : 5
	  },
	  "CLERK-13" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 0, 0 ],
		"MinorSpellsNb" : 5
	  },
	  "CLERK-14" : {
		"Capacities" : "Destruction des morts-vivants (FP 3)",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 0, 0 ],
		"MinorSpellsNb" : 5
	  },
	  "CLERK-15" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 0 ],
		"MinorSpellsNb" : 5
	  },
	  "CLERK-16" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 0 ],
		"MinorSpellsNb" : 5
	  },
	  "CLERK-17" : {
		"Capacities" : "Destruction des morts-vivants (FP 4), Capacité de domaine divin",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 1 ],
		"MinorSpellsNb" : 5
	  },
	  "CLERK-18" : {
		"Capacities" : "Canalisation d’énergie divine (3)",
		"Locations" : [ null, 4, 3, 3, 3, 3, 1, 1, 1, 1 ],
		"MinorSpellsNb" : 5
	  },
	  "CLERK-19" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 3, 2, 1, 1, 1 ],
		"MinorSpellsNb" : 5
	  },
	  "CLERK-2" : {
		"Capacities" : "Canalisation d’énergie divine (1), Capacité de domaine divin",
		"Locations" : [ null, 3, 0, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3
	  },
	  "CLERK-20" : {
		"Capacities" : "Intervention divine améliorée",
		"Locations" : [ null, 4, 3, 3, 3, 3, 2, 2, 1, 1 ],
		"MinorSpellsNb" : 5
	  },
	  "CLERK-3" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 2, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3
	  },
	  "CLERK-4" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "CLERK-5" : {
		"Capacities" : "Destruction des morts-vivants (FP 1/2)",
		"Locations" : [ null, 4, 3, 2, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "CLERK-6" : {
		"Capacities" : "Canalisation d’énergie divine (2), Capacité de domaine divin",
		"Locations" : [ null, 4, 3, 3, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "CLERK-7" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 1, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "CLERK-8" : {
		"Capacities" : "Amélioration de caractéristiques, Capacité de domaine divin,Destruction des morts-vivants (FP 1)",
		"Locations" : [ null, 4, 3, 3, 2, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "CLERK-9" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 1, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "DRUID-1" : {
		"Capacities" : "Druidique, Incantations",
		"Locations" : [ null, 2, 0, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 2
	  },
	  "DRUID-10" : {
		"Capacities" : "Capacité de cercle druidique",
		"Locations" : [ null, 4, 3, 3, 3, 2, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "DRUID-11" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "DRUID-12" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "DRUID-13" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "DRUID-14" : {
		"Capacities" : "Capacité de cercle druidique",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "DRUID-15" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "DRUID-16" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "DRUID-17" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 1 ],
		"MinorSpellsNb" : 4
	  },
	  "DRUID-18" : {
		"Capacities" : "Jeunesse éternelle, Incantation animale",
		"Locations" : [ null, 4, 3, 3, 3, 3, 1, 1, 1, 1 ],
		"MinorSpellsNb" : 4
	  },
	  "DRUID-19" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 3, 2, 1, 1, 1 ],
		"MinorSpellsNb" : 4
	  },
	  "DRUID-2" : {
		"Capacities" : "Forme sauvage, Cercle druidique",
		"Locations" : [ null, 3, 0, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 2
	  },
	  "DRUID-20" : {
		"Capacities" : "Archidruide",
		"Locations" : [ null, 4, 3, 3, 3, 3, 2, 2, 1, 1 ],
		"MinorSpellsNb" : 4
	  },
	  "DRUID-3" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 2, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 2
	  },
	  "DRUID-4" : {
		"Capacities" : "Forme sauvage améliorée, Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3
	  },
	  "DRUID-5" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 2, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3
	  },
	  "DRUID-6" : {
		"Capacities" : "Capacité de cercle druidique",
		"Locations" : [ null, 4, 3, 3, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3
	  },
	  "DRUID-7" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 1, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3
	  },
	  "DRUID-8" : {
		"Capacities" : "Forme sauvage améliorée, Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 2, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3
	  },
	  "DRUID-9" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 1, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3
	  },
	  "MAGICIAN-1" : {
		"Capacities" : "Incantations, Récupération arcanique",
		"Locations" : [ null, 2, 0, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3
	  },
	  "MAGICIAN-10" : {
		"Capacities" : "Capacité de la tradition arcanique",
		"Locations" : [ null, 4, 3, 3, 3, 2, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 5
	  },
	  "MAGICIAN-11" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 0, 0, 0 ],
		"MinorSpellsNb" : 5
	  },
	  "MAGICIAN-12" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 0, 0, 0 ],
		"MinorSpellsNb" : 5
	  },
	  "MAGICIAN-13" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 0, 0 ],
		"MinorSpellsNb" : 5
	  },
	  "MAGICIAN-14" : {
		"Capacities" : "Capacité de la tradition arcanique",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 0, 0 ],
		"MinorSpellsNb" : 5
	  },
	  "MAGICIAN-15" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 0 ],
		"MinorSpellsNb" : 5
	  },
	  "MAGICIAN-16" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 0 ],
		"MinorSpellsNb" : 5
	  },
	  "MAGICIAN-17" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 1 ],
		"MinorSpellsNb" : 5
	  },
	  "MAGICIAN-18" : {
		"Capacities" : "Maîtrise des sorts",
		"Locations" : [ null, 4, 3, 3, 3, 3, 1, 1, 1, 1 ],
		"MinorSpellsNb" : 5
	  },
	  "MAGICIAN-19" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 3, 2, 1, 1, 1 ],
		"MinorSpellsNb" : 5
	  },
	  "MAGICIAN-2" : {
		"Capacities" : "Tradition arcanique",
		"Locations" : [ null, 3, 0, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3
	  },
	  "MAGICIAN-20" : {
		"Capacities" : "Sorts de prédilection",
		"Locations" : [ null, 4, 3, 3, 3, 3, 2, 2, 1, 1 ],
		"MinorSpellsNb" : 5
	  },
	  "MAGICIAN-3" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 2, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 3
	  },
	  "MAGICIAN-4" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "MAGICIAN-5" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 2, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "MAGICIAN-6" : {
		"Capacities" : "Capacité de la tradition arcanique",
		"Locations" : [ null, 4, 3, 3, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "MAGICIAN-7" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 1, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "MAGICIAN-8" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 2, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "MAGICIAN-9" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 1, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4
	  },
	  "MONK-1" : {
		"ArmorlessSpeed" : 0,
		"BonusAttack" : "1d4",
		"Capacities" : "Défense sans armure, Arts martiaux",
		"Specials" : 0
	  },
	  "MONK-10" : {
		"ArmorlessSpeed" : 6,
		"BonusAttack" : "1d6",
		"Capacities" : "Pureté du corps",
		"Specials" : 10
	  },
	  "MONK-11" : {
		"ArmorlessSpeed" : 6,
		"BonusAttack" : "1d8",
		"Capacities" : "Capacité de la tradition monastique",
		"Specials" : 11
	  },
	  "MONK-12" : {
		"ArmorlessSpeed" : 6,
		"BonusAttack" : "1d8",
		"Capacities" : "Amélioration de caractéristiques",
		"Specials" : 12
	  },
	  "MONK-13" : {
		"ArmorlessSpeed" : 6,
		"BonusAttack" : "1d8",
		"Capacities" : "Langage du soleil et de la lune",
		"Specials" : 13
	  },
	  "MONK-14" : {
		"ArmorlessSpeed" : 7.5,
		"BonusAttack" : "1d8",
		"Capacities" : "Âme de diamant",
		"Specials" : 14
	  },
	  "MONK-15" : {
		"ArmorlessSpeed" : 7.5,
		"BonusAttack" : "1d8",
		"Capacities" : "Jeunesse éternelle",
		"Specials" : 15
	  },
	  "MONK-16" : {
		"ArmorlessSpeed" : 7.5,
		"BonusAttack" : "1d8",
		"Capacities" : "Amélioration de caractéristiques",
		"Specials" : 16
	  },
	  "MONK-17" : {
		"ArmorlessSpeed" : 7.5,
		"BonusAttack" : "1d10",
		"Capacities" : "Capacité de la tradition monastique",
		"Specials" : 17
	  },
	  "MONK-18" : {
		"ArmorlessSpeed" : 9,
		"BonusAttack" : "1d10",
		"Capacities" : "Corps vide",
		"Specials" : 18
	  },
	  "MONK-19" : {
		"ArmorlessSpeed" : 9,
		"BonusAttack" : "1d10",
		"Capacities" : "Amélioration de caractéristiques",
		"Specials" : 19
	  },
	  "MONK-2" : {
		"ArmorlessSpeed" : 3,
		"BonusAttack" : "1d4",
		"Capacities" : "Ki, Déplacement sans armure",
		"Specials" : 2
	  },
	  "MONK-20" : {
		"ArmorlessSpeed" : 9,
		"BonusAttack" : "1d10",
		"Capacities" : "Perfection de l'être",
		"Specials" : 20
	  },
	  "MONK-3" : {
		"ArmorlessSpeed" : 3,
		"BonusAttack" : "1d4",
		"Capacities" : "Tradition monastique, Parade de projectiles",
		"Specials" : 3
	  },
	  "MONK-4" : {
		"ArmorlessSpeed" : 3,
		"BonusAttack" : "1d4",
		"Capacities" : "Amélioration de caractéristiques, Chute ralentie",
		"Specials" : 4
	  },
	  "MONK-5" : {
		"ArmorlessSpeed" : 3,
		"BonusAttack" : "1d6",
		"Capacities" : "Attaque supplémentaire, Frappe étourdissante",
		"Specials" : 5
	  },
	  "MONK-6" : {
		"ArmorlessSpeed" : 4.5,
		"BonusAttack" : "1d6",
		"Capacities" : "Frappes de ki, Capacité de la tradition monastique",
		"Specials" : 6
	  },
	  "MONK-7" : {
		"ArmorlessSpeed" : 4.5,
		"BonusAttack" : "1d6",
		"Capacities" : "Dérobade, Tranquillité de l'esprit",
		"Specials" : 7
	  },
	  "MONK-8" : {
		"ArmorlessSpeed" : 4.5,
		"BonusAttack" : "1d6",
		"Capacities" : "Amélioration de caractéristiques",
		"Specials" : 8
	  },
	  "MONK-9" : {
		"ArmorlessSpeed" : 4.5,
		"BonusAttack" : "1d6",
		"Capacities" : "Déplacement sans armure amélioré",
		"Specials" : 9
	  },
	  "PALADIN-1" : {
		"Capacities" : "Sens divin, Imposition des mains",
		"Locations" : [ null, 0, 0, 0, 0, 0 ]
	  },
	  "PALADIN-10" : {
		"Capacities" : "Aura de courage",
		"Locations" : [ null, 4, 3, 2, 0, 0 ]
	  },
	  "PALADIN-11" : {
		"Capacities" : "Châtiment divin amélioré",
		"Locations" : [ null, 4, 3, 3, 0, 0 ]
	  },
	  "PALADIN-12" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 0, 0 ]
	  },
	  "PALADIN-13" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 1, 0 ]
	  },
	  "PALADIN-14" : {
		"Capacities" : "Contact purifiant",
		"Locations" : [ null, 4, 3, 3, 1, 0 ]
	  },
	  "PALADIN-15" : {
		"Capacities" : "Capacité de serment sacré",
		"Locations" : [ null, 4, 3, 3, 2, 0 ]
	  },
	  "PALADIN-16" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 2, 0 ]
	  },
	  "PALADIN-17" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 1 ]
	  },
	  "PALADIN-18" : {
		"Capacities" : "Amélioration des auras",
		"Locations" : [ null, 4, 3, 3, 3, 1 ]
	  },
	  "PALADIN-19" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 2 ]
	  },
	  "PALADIN-2" : {
		"Capacities" : "Style de combat, Incantations, Châtiment divin",
		"Locations" : [ null, 2, 0, 0, 0, 0 ]
	  },
	  "PALADIN-20" : {
		"Capacities" : "Capacité de serment sacré",
		"Locations" : [ null, 4, 3, 3, 3, 2 ]
	  },
	  "PALADIN-3" : {
		"Capacities" : "Santé divine, Serment sacré",
		"Locations" : [ null, 3, 0, 0, 0, 0 ]
	  },
	  "PALADIN-4" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 3, 0, 0, 0, 0 ]
	  },
	  "PALADIN-5" : {
		"Capacities" : "Attaque supplémentaire",
		"Locations" : [ null, 4, 2, 0, 0, 0 ]
	  },
	  "PALADIN-6" : {
		"Capacities" : "Aura de protection",
		"Locations" : [ null, 4, 2, 0, 0, 0 ]
	  },
	  "PALADIN-7" : {
		"Capacities" : "Capacité de serment sacré",
		"Locations" : [ null, 4, 3, 0, 0, 0 ]
	  },
	  "PALADIN-8" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 0, 0, 0 ]
	  },
	  "PALADIN-9" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 2, 0, 0 ]
	  },
	  "PROWLER-1" : {
		"Capacities" : "Ennemi juré, Explorateur-né",
		"Locations" : [ null, 0, 0, 0, 0, 0 ],
		"SpellsNb" : 0
	  },
	  "PROWLER-10" : {
		"Capacities" : "Amélioration de l'Explorateur-né, Camouflage naturel",
		"Locations" : [ null, 4, 3, 2, 0, 0 ],
		"SpellsNb" : 6
	  },
	  "PROWLER-11" : {
		"Capacities" : "Capacité de l'archétype de rôdeur",
		"Locations" : [ null, 4, 3, 3, 0, 0 ],
		"SpellsNb" : 7
	  },
	  "PROWLER-12" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 0, 0 ],
		"SpellsNb" : 7
	  },
	  "PROWLER-13" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 1, 0 ],
		"SpellsNb" : 8
	  },
	  "PROWLER-14" : {
		"Capacities" : "Amélioration de l'Ennemi juré, Disparition",
		"Locations" : [ null, 4, 3, 3, 1, 0 ],
		"SpellsNb" : 8
	  },
	  "PROWLER-15" : {
		"Capacities" : "Capacité de l'archétype de rôdeur",
		"Locations" : [ null, 4, 3, 3, 2, 0 ],
		"SpellsNb" : 9
	  },
	  "PROWLER-16" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 2, 0 ],
		"SpellsNb" : 9
	  },
	  "PROWLER-17" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 1 ],
		"SpellsNb" : 10
	  },
	  "PROWLER-18" : {
		"Capacities" : "Sens sauvages",
		"Locations" : [ null, 4, 3, 3, 3, 1 ],
		"SpellsNb" : 10
	  },
	  "PROWLER-19" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 2 ],
		"SpellsNb" : 11
	  },
	  "PROWLER-2" : {
		"Capacities" : "Style de combat, Incantations",
		"Locations" : [ null, 2, 0, 0, 0, 0 ],
		"SpellsNb" : 2
	  },
	  "PROWLER-20" : {
		"Capacities" : "Tueur d'ennemis",
		"Locations" : [ null, 4, 3, 3, 3, 2 ],
		"SpellsNb" : 11
	  },
	  "PROWLER-3" : {
		"Capacities" : "Archétype de rôdeur, Sens primitifs",
		"Locations" : [ null, 3, 0, 0, 0, 0 ],
		"SpellsNb" : 3
	  },
	  "PROWLER-4" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 3, 0, 0, 0, 0 ],
		"SpellsNb" : 3
	  },
	  "PROWLER-5" : {
		"Capacities" : "Attaque supplémentaire",
		"Locations" : [ null, 4, 2, 0, 0, 0 ],
		"SpellsNb" : 4
	  },
	  "PROWLER-6" : {
		"Capacities" : "Amélioration de l'Ennemi juré et de l'Explorateur-né",
		"Locations" : [ null, 4, 2, 0, 0, 0 ],
		"SpellsNb" : 4
	  },
	  "PROWLER-7" : {
		"Capacities" : "Capacité de l'archétype de rôdeur",
		"Locations" : [ null, 4, 3, 0, 0, 0 ],
		"SpellsNb" : 5
	  },
	  "PROWLER-8" : {
		"Capacities" : "Amélioration de caractéristiques, Traversée des terrains",
		"Locations" : [ null, 4, 3, 0, 0, 0 ],
		"SpellsNb" : 5
	  },
	  "PROWLER-9" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 2, 0, 0 ],
		"SpellsNb" : 6
	  },
	  "SORCERER-1" : {
		"Capacities" : "Incantations, Origine magique",
		"Locations" : [ null, 2, 0, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4,
		"Specials" : 0,
		"SpellsNb" : 2
	  },
	  "SORCERER-10" : {
		"Capacities" : "Métamagie",
		"Locations" : [ null, 4, 3, 3, 3, 2, 0, 5, 0, 0 ],
		"MinorSpellsNb" : 6,
		"Specials" : 10,
		"SpellsNb" : 11
	  },
	  "SORCERER-11" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 0, 0 ],
		"MinorSpellsNb" : 6,
		"Specials" : 11,
		"SpellsNb" : 12
	  },
	  "SORCERER-12" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 0, 0 ],
		"MinorSpellsNb" : 6,
		"Specials" : 12,
		"SpellsNb" : 12
	  },
	  "SORCERER-13" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 0, 0 ],
		"MinorSpellsNb" : 6,
		"Specials" : 13,
		"SpellsNb" : 13
	  },
	  "SORCERER-14" : {
		"Capacities" : "Capacité de l'origine magique",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 0, 0 ],
		"MinorSpellsNb" : 6,
		"Specials" : 14,
		"SpellsNb" : 13
	  },
	  "SORCERER-15" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 0 ],
		"MinorSpellsNb" : 6,
		"Specials" : 15,
		"SpellsNb" : 14
	  },
	  "SORCERER-16" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 0 ],
		"MinorSpellsNb" : 6,
		"Specials" : 16,
		"SpellsNb" : 14
	  },
	  "SORCERER-17" : {
		"Capacities" : "Métamagie",
		"Locations" : [ null, 4, 3, 3, 3, 2, 1, 1, 1, 1 ],
		"MinorSpellsNb" : 6,
		"Specials" : 17,
		"SpellsNb" : 15
	  },
	  "SORCERER-18" : {
		"Capacities" : "Capacité de l'origine magique",
		"Locations" : [ null, 4, 3, 3, 3, 3, 1, 1, 1, 1 ],
		"MinorSpellsNb" : 6,
		"Specials" : 18,
		"SpellsNb" : 15
	  },
	  "SORCERER-19" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 3, 3, 2, 2, 1, 1 ],
		"MinorSpellsNb" : 6,
		"Specials" : 19,
		"SpellsNb" : 15
	  },
	  "SORCERER-2" : {
		"Capacities" : "Source de magie",
		"Locations" : [ null, 3, 0, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4,
		"Specials" : 2,
		"SpellsNb" : 3
	  },
	  "SORCERER-20" : {
		"Capacities" : "Restauration magique",
		"Locations" : [ null, 4, 3, 3, 3, 3, 2, 2, 1, 1 ],
		"MinorSpellsNb" : 6,
		"Specials" : 20,
		"SpellsNb" : 15
	  },
	  "SORCERER-3" : {
		"Capacities" : "Métamagie",
		"Locations" : [ null, 4, 2, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 4,
		"Specials" : 3,
		"SpellsNb" : 4
	  },
	  "SORCERER-4" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 0, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 5,
		"Specials" : 4,
		"SpellsNb" : 5
	  },
	  "SORCERER-5" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 2, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 5,
		"Specials" : 5,
		"SpellsNb" : 6
	  },
	  "SORCERER-6" : {
		"Capacities" : "Capacité de l'origine magique",
		"Locations" : [ null, 4, 3, 3, 0, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 5,
		"Specials" : 6,
		"SpellsNb" : 7
	  },
	  "SORCERER-7" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 1, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 5,
		"Specials" : 7,
		"SpellsNb" : 8
	  },
	  "SORCERER-8" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Locations" : [ null, 4, 3, 3, 2, 0, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 5,
		"Specials" : 8,
		"SpellsNb" : 9
	  },
	  "SORCERER-9" : {
		"Capacities" : "-",
		"Locations" : [ null, 4, 3, 3, 3, 1, 0, 0, 0, 0 ],
		"MinorSpellsNb" : 5,
		"Specials" : 9,
		"SpellsNb" : 10
	  },
	  "WARRIOR-1" : {
		"Capacities" : "Style de combat, Second souffle"
	  },
	  "WARRIOR-10" : {
		"Capacities" : "Capacité de l'archétype martial"
	  },
	  "WARRIOR-11" : {
		"Capacities" : "Attaque supplémentaire (2)"
	  },
	  "WARRIOR-12" : {
		"Capacities" : "Amélioration de caractéristiques"
	  },
	  "WARRIOR-13" : {
		"Capacities" : "Indomptable (2)"
	  },
	  "WARRIOR-14" : {
		"Capacities" : "Amélioration de caractéristiques"
	  },
	  "WARRIOR-15" : {
		"Capacities" : "Capacité de l'archétype martial"
	  },
	  "WARRIOR-16" : {
		"Capacities" : "Amélioration de caractéristiques"
	  },
	  "WARRIOR-17" : {
		"Capacities" : "Sursaut (2), Indomptable (3)"
	  },
	  "WARRIOR-18" : {
		"Capacities" : "Capacité de l'archétype martial"
	  },
	  "WARRIOR-19" : {
		"Capacities" : "Amélioration de caractéristiques"
	  },
	  "WARRIOR-2" : {
		"Capacities" : "Sursaut (1)"
	  },
	  "WARRIOR-20" : {
		"Capacities" : "Attaque supplémentaire (3)"
	  },
	  "WARRIOR-3" : {
		"Capacities" : "Archétype martial"
	  },
	  "WARRIOR-4" : {
		"Capacities" : "Amélioration de caractéristiques"
	  },
	  "WARRIOR-5" : {
		"Capacities" : "Attaque supplémentaire (1)"
	  },
	  "WARRIOR-6" : {
		"Capacities" : "Amélioration de caractéristiques"
	  },
	  "WARRIOR-7" : {
		"Capacities" : "Capacité de l'archétype martial"
	  },
	  "WARRIOR-8" : {
		"Capacities" : "Amélioration de caractéristiques"
	  },
	  "WARRIOR-9" : {
		"Capacities" : "Indomptable (1)"
	  },
	  "WILY-1" : {
		"BonusAttack" : "1d6",
		"Capacities" : "Expertise, Attaque sournoise, Jargon des voleurs"
	  },
	  "WILY-10" : {
		"BonusAttack" : "5d6",
		"Capacities" : "Amélioration de caractéristiques"
	  },
	  "WILY-11" : {
		"BonusAttack" : "6d6",
		"Capacities" : "Talent"
	  },
	  "WILY-12" : {
		"BonusAttack" : "6d6",
		"Capacities" : "Amélioration de caractéristiques"
	  },
	  "WILY-13" : {
		"BonusAttack" : "7d6",
		"Capacities" : "Capacité de l'archétype de roublard"
	  },
	  "WILY-14" : {
		"BonusAttack" : "7d6",
		"Capacities" : "Ouïe fine"
	  },
	  "WILY-15" : {
		"BonusAttack" : "8d6",
		"Capacities" : "Esprit impénétrable"
	  },
	  "WILY-16" : {
		"BonusAttack" : "8d6",
		"Capacities" : "Amélioration de caractéristiques"
	  },
	  "WILY-17" : {
		"BonusAttack" : "9d6",
		"Capacities" : "Capacité de l'archétype de roublard"
	  },
	  "WILY-18" : {
		"BonusAttack" : "9d6",
		"Capacities" : "Insaisissable"
	  },
	  "WILY-19" : {
		"BonusAttack" : "10d6",
		"Capacities" : "Amélioration de caractéristiques"
	  },
	  "WILY-2" : {
		"BonusAttack" : "1d6",
		"Capacities" : "Ruse"
	  },
	  "WILY-20" : {
		"BonusAttack" : "10d6",
		"Capacities" : "Coup de chance"
	  },
	  "WILY-3" : {
		"BonusAttack" : "2d6",
		"Capacities" : "Archétype de roublard"
	  },
	  "WILY-4" : {
		"BonusAttack" : "2d6",
		"Capacities" : "Amélioration de caractéristiques"
	  },
	  "WILY-5" : {
		"BonusAttack" : "3d6",
		"Capacities" : "Esquive instinctive"
	  },
	  "WILY-6" : {
		"BonusAttack" : "3d6",
		"Capacities" : "Expertise"
	  },
	  "WILY-7" : {
		"BonusAttack" : "4d6",
		"Capacities" : "Dérobade"
	  },
	  "WILY-8" : {
		"BonusAttack" : "4d6",
		"Capacities" : "Amélioration de caractéristiques"
	  },
	  "WILY-9" : {
		"BonusAttack" : "5d6",
		"Capacities" : "Capacité de l'archétype de roublard"
	  },
	  "WIZARD-1" : {
		"Capacities" : "Patron d'Outremonde, Magie de pacte",
		"Invocations" : 0,
		"Locations" : [ null, 1 ],
		"MinorSpellsNb" : 2,
		"SpellsNb" : 2
	  },
	  "WIZARD-10" : {
		"Capacities" : "Capacité de patron d'Outremonde",
		"Invocations" : 5,
		"Locations" : {
		  "5" : 2
		},
		"MinorSpellsNb" : 4,
		"SpellsNb" : 10
	  },
	  "WIZARD-11" : {
		"Capacities" : "Arcanum mystique (niveau 6)",
		"Invocations" : 5,
		"Locations" : {
		  "5" : 3
		},
		"MinorSpellsNb" : 4,
		"SpellsNb" : 11
	  },
	  "WIZARD-12" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Invocations" : 6,
		"Locations" : {
		  "5" : 3
		},
		"MinorSpellsNb" : 4,
		"SpellsNb" : 11
	  },
	  "WIZARD-13" : {
		"Capacities" : "Arcanum mystique (niveau 7)",
		"Invocations" : 6,
		"Locations" : {
		  "5" : 3
		},
		"MinorSpellsNb" : 4,
		"SpellsNb" : 12
	  },
	  "WIZARD-14" : {
		"Capacities" : "Capacité de patron d'Outremonde",
		"Invocations" : 6,
		"Locations" : {
		  "5" : 3
		},
		"MinorSpellsNb" : 4,
		"SpellsNb" : 12
	  },
	  "WIZARD-15" : {
		"Capacities" : "Arcanum mystique (niveau 8)",
		"Invocations" : 7,
		"Locations" : {
		  "5" : 3
		},
		"MinorSpellsNb" : 4,
		"SpellsNb" : 13
	  },
	  "WIZARD-16" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Invocations" : 7,
		"Locations" : {
		  "5" : 3
		},
		"MinorSpellsNb" : 4,
		"SpellsNb" : 13
	  },
	  "WIZARD-17" : {
		"Capacities" : "Arcanum mystique (niveau 9)",
		"Invocations" : 7,
		"Locations" : {
		  "5" : 4
		},
		"MinorSpellsNb" : 4,
		"SpellsNb" : 14
	  },
	  "WIZARD-18" : {
		"Capacities" : "-",
		"Invocations" : 8,
		"Locations" : {
		  "5" : 4
		},
		"MinorSpellsNb" : 4,
		"SpellsNb" : 14
	  },
	  "WIZARD-19" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Invocations" : 8,
		"Locations" : {
		  "5" : 4
		},
		"MinorSpellsNb" : 4,
		"SpellsNb" : 15
	  },
	  "WIZARD-2" : {
		"Capacities" : "Invocations occultes",
		"Invocations" : 2,
		"Locations" : [ null, 2 ],
		"MinorSpellsNb" : 2,
		"SpellsNb" : 3
	  },
	  "WIZARD-20" : {
		"Capacities" : "Maître de l'occulte",
		"Invocations" : 8,
		"Locations" : {
		  "5" : 4
		},
		"MinorSpellsNb" : 4,
		"SpellsNb" : 15
	  },
	  "WIZARD-3" : {
		"Capacities" : "Faveur de pacte",
		"Invocations" : 2,
		"Locations" : {
		  "2" : 2
		},
		"MinorSpellsNb" : 2,
		"SpellsNb" : 4
	  },
	  "WIZARD-4" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Invocations" : 2,
		"Locations" : {
		  "2" : 2
		},
		"MinorSpellsNb" : 3,
		"SpellsNb" : 5
	  },
	  "WIZARD-5" : {
		"Capacities" : "-",
		"Invocations" : 3,
		"Locations" : {
		  "3" : 2
		},
		"MinorSpellsNb" : 3,
		"SpellsNb" : 6
	  },
	  "WIZARD-6" : {
		"Capacities" : "Capacité de patron d'Outremonde",
		"Invocations" : 3,
		"Locations" : {
		  "3" : 2
		},
		"MinorSpellsNb" : 3,
		"SpellsNb" : 7
	  },
	  "WIZARD-7" : {
		"Capacities" : "-",
		"Invocations" : 4,
		"Locations" : {
		  "4" : 2
		},
		"MinorSpellsNb" : 3,
		"SpellsNb" : 8
	  },
	  "WIZARD-8" : {
		"Capacities" : "Amélioration de caractéristiques",
		"Invocations" : 4,
		"Locations" : {
		  "4" : 2
		},
		"MinorSpellsNb" : 3,
		"SpellsNb" : 9
	  },
	  "WIZARD-9" : {
		"Capacities" : "-",
		"Invocations" : 5,
		"Locations" : {
		  "5" : 2
		},
		"MinorSpellsNb" : 3,
		"SpellsNb" : 10
	  }
	},
	"Caracteristics" : {
	  "CHA" : {
		"Code" : "CHA",
		"Name" : "Charisme",
		"OV" : "Charisma"
	  },
	  "CON" : {
		"Code" : "CON",
		"Name" : "Constitution",
		"OV" : "Constitution"
	  },
	  "DEX" : {
		"Code" : "DEX",
		"Name" : "Dextérité",
		"OV" : "Dexterity"
	  },
	  "FOR" : {
		"Code" : "FOR",
		"Name" : "Force",
		"OV" : "Strength"
	  },
	  "INT" : {
		"Code" : "INT",
		"Name" : "Intelligence",
		"OV" : "Intelligence"
	  },
	  "SAG" : {
		"Code" : "SAG",
		"Name" : "Sagesse",
		"OV" : "Wisdom"
	  }
	},
	"Classes" : {
	  "BARBARIAN":  {
	   "Name" : "Barbare",
	   "OV" : "Barbarian",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "ACBonus" : "CON",
	   "ACBonusArmor" : false,
	   "HD" : 12,
	   "SpecialsName" : "Rage",
	   "BonusAttackName" : "",
	   "SpecialisationName" : "Voie primitive",
	   "SpecialisationLevel" : 3,
	   "MultiSpecialisation" : false ,
	   "WeaponCategories" : ["C_MEL", "C_DIS", "W_MEL", "W_DIS"],
	   "Weapons" : [],
	   "ArmorCategories" : ["1_LIGHT", "2_MID",  "0_SHIELD"],
	   "Saves" : ["FOR", "CON"],
	   "Objects" : [],
	   "StartingObjects" : []
		},
	  "BARD":  {
	   "Name" : "Barde",
	   "OV" : "Bard",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "ACBonus" : "",
	   
	   "HD" : 8,
	   "SpecialsName" : "",
	   "BonusAttackName" : "",
	   "SpecialisationName" : "Collège  bardique",
	   "SpecialisationLevel" : 3,
	   "MultiSpecialisation" : false ,
	   "WeaponCategories" : ["C_MEL", "C_DIS"],
	   "Weapons" : ["Arbalète de poing", "Épée courte", "Épée longue",  "Rapière"],
	   "ArmorCategories" : ["1_LIGHT"],
	   "Saves" : ["DEX", "CHA"],
	   "Objects" : [],
	   "StartingObjects" : []
		},
	  "CLERK":  {
	   "Name" : "Clerc",
	   "OV" : "Clerk",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "ACBonus" : "",
	   
	   "HD" : 8,
	   "SpecialsName" : "",
	   "BonusAttackName" : "",
	   "SpecialisationName" : "Domaine divin",
	   "SpecialisationLevel" : 1,
	   "MultiSpecialisation" : false ,
	   "WeaponCategories" : ["C_MEL", "C_DIS"],
	   "Weapons" : [],
	   "ArmorCategories" : ["1_LIGHT", "2_MID",  "0_SHIELD"],
	   "Saves" : ["SAG", "CHA"],
	   "Objects" : [],
	   "StartingObjects" : []
		},
	  "DRUID":  {
	   "Name" : "Druide",
	   "OV" : "Druid",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "ACBonus" : "",
	   
	   "HD" : 8,
	   "SpecialsName" : "",
	   "BonusAttackName" : "",
	   "SpecialisationName" : "Cercle druidique",
	   "SpecialisationLevel" : 2,
	   "MultiSpecialisation" : false ,
	   "WeaponCategories" : [],
	   "Weapons" : ["Gourdin", "Dague", "Fléchette", "Javeline", "Masse d'armes", "Bâton", "Cimeterre", "Fronde", "Serpe", "Lance"],
	   "ArmorCategories" : ["1_LIGHT", "2_MID",  "0_SHIELD"],
	   "Saves" : ["INT", "SAG"],
	   "Objects" : ["Kit d'herboriste"],
	   "StartingObjects" : ["Kit d'herboriste"]
		},
	  "SORCERER":  {
	   "Name" : "Ensorceleur",
	   "OV" : "Sorcerer",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "ACBonus" : "",
	   
	   "HD" : 6,
	   "SpecialsName" : "Sorcellerie",
	   "BonusAttackName" : "",
	   "SpecialisationName" : "Origine magique",
	   "SpecialisationLevel" : 1,
	   "MultiSpecialisation" : false ,
	   "WeaponCategories" : [],
	   "Weapons" : ["Dague", "Fléchette", "Fronde", "Bâton", "Arbalète légère"],
	   "ArmorCategories" : [],
	   "Saves" : ["CON", "CHA"],
	   "Objects" : [],
	   "StartingObjects" : []
		},
	  "WARRIOR":  {
	   "Name" : "Guerrier",
	   "OV" : "Warrior",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "ACBonus" : "",
	   
	   "HD" : 10,
	   "SpecialsName" : "",
	   "BonusAttackName" : "",
	   "SpecialisationName" : "Style de combat",
	   "SpecialisationLevel" : 1,
	   "MultiSpecialisation" : true ,
	   "WeaponCategories" : ["C_MEL", "C_DIS", "W_MEL", "W_DIS"],
	   "Weapons" : [],
	   "ArmorCategories" : ["1_LIGHT", "2_MID", "3_HEAVY", "0_SHIELD"],
	   "Saves" : ["FOR", "CON"],
	   "Objects" : [],
	   "StartingObjects" : []
		},
	  "MAGICIAN":  {
	   "Name" : "Magicien",
	   "OV" : "Magician",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "ACBonus" : "",
	   
	   "HD" : 6,
	   "SpecialsName" : "",
	   "BonusAttackName" : "",
	   "SpecialisationName" : "Tradiction arcanique",
	   "SpecialisationLevel" : 2,
	   "MultiSpecialisation" : false ,
	   "WeaponCategories" : [],
	   "Weapons" : ["Dague", "Fléchette", "Fronde", "Bâton", "Arbalète légère"],
	   "ArmorCategories" : [],
	   "Saves" : ["INT", "SAG"],
	   "Objects" : [],
	   "StartingObjects" : ["Grimoire"]
		},
	  "MONK":  {
	   "Name" : "Moine",
	   "OV" : "Monk",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "ACBonus" : "SAG",
	   "ACBonusArmor" : false,"ACBonusShield" : false,
	   "HD" : 8,
	   "SpecialsName" : "Ki",
	   "BonusAttackName" : "Arts-Martiaux",
	   "SpecialisationName" : "Tradition monastique",
	   "SpecialisationLevel" : 3,
	   "MultiSpecialisation" : false ,
	   "WeaponCategories" : ["C_MEL", "C_DIS"],
	   "Weapons" : ["Épée courte"],
	   "ArmorCategories" : [],
	   "Saves" : ["FOR", "DEX"],
	   "Objects" : [],
	   "StartingObjects" : []
		},
	  "PALADIN":  {
	   "Name" : "Paladin",
	   "OV" : "Paladin",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "ACBonus" : "",
	   
	   "HD" : 10,
	   "SpecialsName" : "",
	   "BonusAttackName" : "",
	   "SpecialisationName" : "Style de combat",
	   "SpecialisationLevel" : 2,
	   "MultiSpecialisation" : false ,
	   "WeaponCategories" : ["C_MEL", "C_DIS", "W_MEL", "W_DIS"],
	   "Weapons" : [],
	   "ArmorCategories" : ["1_LIGHT", "2_MID", "3_HEAVY", "0_SHIELD"],
	   "Saves" : ["SAG", "CHA"],
	   "Objects" : [],
	   "StartingObjects" : []
		},
	  "PROWLER":  {
	   "Name" : "Rôdeur",
	   "OV" : "Prowler",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "ACBonus" : "",
	   
	   "HD" : 10,
	   "SpecialsName" : "",
	   "BonusAttackName" : "",
	   "SpecialisationName" : "Style de combat",
	   "SpecialisationLevel" : 2,
	   "MultiSpecialisation" : false ,
	   "WeaponCategories" : ["C_MEL", "C_DIS", "W_MEL", "W_DIS"],
	   "Weapons" : [],
	   "ArmorCategories" : ["1_LIGHT", "2_MID",  "0_SHIELD"],
	   "Saves" : ["FOR", "DEX"],
	   "Objects" : ["Outils de voleur"],
	   "StartingObjects" : ["Outils de voleur"]
		},
	  "WILY":  {
	   "Name" : "Roublard",
	   "OV" : "Wily",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "ACBonus" : "",
	   
	   "HD" : 8,
	   "SpecialsName" : "",
	   "BonusAttackName" : "Attaque sournoise",
	   "SpecialisationName" : "Archétype de roublard",
	   "SpecialisationLevel" : 3,
	   "MultiSpecialisation" : false ,
	   "WeaponCategories" : ["C_MEL", "C_DIS"],
	   "Weapons" : ["Arbalète de poing", "Épée courte", "Épée longue",  "Rapière"],
	   "ArmorCategories" : ["1_LIGHT"],
	   "Saves" : ["DEX", "INT"],
	   "Objects" : [],
	   "StartingObjects" : []
		},
	  "WIZARD":  {
	   "Name" : "Sorcier",
	   "OV" : "Wizard",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "ACBonus" : "",
	   
	   "HD" : 8,
	   "SpecialsName" : "",
	   "BonusAttackName" : "",
	   "SpecialisationName" : "Patron d'Outremonde",
	   "SpecialisationLevel" : 1,
	   "MultiSpecialisation" : false ,
	   "WeaponCategories" : ["C_MEL", "C_DIS"],
	   "Weapons" : [],
	   "ArmorCategories" : ["1_LIGHT"],
	   "Saves" : ["SAG", "CHA"],
	   "Objects" : [],
	   "StartingObjects" : []
		}
	},
	"EquipmentCategories" : {
	  "AMMUNITION" : {
		"Code" : "AMMUNITION",
		"Name" : "Munitions"
	  },
	  "ARCANE_FOCUSER" : {
		"Code" : "ARCANE_FOCUSER",
		"Name" : "Focaliseur arcanique"
	  },
	  "CLOTHES" : {
		"Code" : "CLOTHES",
		"Name" : "Vêtements"
	  },
	  "DRUIDIC_FOCUSER" : {
		"Code" : "DRUIDIC_FOCUSER",
		"Name" : "Focaliseur druidique"
	  },
	  "SACRED_SYMBOL" : {
		"Code" : "SACRED_SYMBOL",
		"Name" : "Symbole sacré"
	  },
	  "VARIOUS" : {
		"Code" : "VARIOUS",
		"Name" : "Divers"
	  }
	},
	"Equipments" : {
	  "Acide (fiole)" : {
		"Category" : "VARIOUS",
		"Name" : "Acide (fiole)",
		"OV" : "Acid",
		"Price" : 2500,
		"Weight" : 500
	  },
	  "Aiguilles de sarbacane (50)" : {
		"Category" : "AMMUNITION",
		"Name" : "Aiguilles de sarbacane (50)",
		"OV" : "Blowgun needles",
		"Price" : 100,
		"Weight" : 500
	  },
	  "Amulette" : {
		"Category" : "SACRED_SYMBOL",
		"Name" : "Amulette",
		"OV" : "Amulet",
		"Price" : 500,
		"Weight" : 500
	  },
	  "Antidote (fiole)" : {
		"Category" : "VARIOUS",
		"Name" : "Antidote (fiole)",
		"OV" : "Antitoxin",
		"Price" : 5000,
		"Weight" : 0
	  },
	  "Baguette" : {
		"Category" : "ARCANE_FOCUSER",
		"Name" : "Baguette",
		"OV" : "Wand",
		"Price" : 1000,
		"Weight" : 500
	  },
	  "Baguette d'if" : {
		"Category" : "DRUIDIC_FOCUSER",
		"Name" : "Baguette d'if",
		"OV" : "Yew wand",
		"Price" : 1000,
		"Weight" : 500
	  },
	  "Balance de marchand" : {
		"Category" : "VARIOUS",
		"Name" : "Balance de marchand",
		"OV" : "Scale, Merchant’s",
		"Price" : 500,
		"Weight" : 1500
	  },
	  "Billes (sac de 1000)" : {
		"Category" : "VARIOUS",
		"Name" : "Billes (sac de 1000)",
		"OV" : "Ball Bearings",
		"Price" : 100,
		"Weight" : 1000
	  },
	  "Billes de fronde (20)" : {
		"Category" : "AMMUNITION",
		"Name" : "Billes de fronde (20)",
		"OV" : "Sling bullets",
		"Price" : 4,
		"Weight" : 750
	  },
	  "Boite d'allume-feu" : {
		"Category" : "VARIOUS",
		"Name" : "Boite d'allume-feu",
		"OV" : "Tinderbox",
		"Price" : 50,
		"Weight" : 500
	  },
	  "Bougie" : {
		"Category" : "VARIOUS",
		"Name" : "Bougie",
		"OV" : "Candle",
		"Price" : 1,
		"Weight" : 0
	  },
	  "Boule de cristal" : {
		"Category" : "ARCANE_FOCUSER",
		"Name" : "Boule de cristal",
		"OV" : "Crystal",
		"Price" : 1000,
		"Weight" : 500
	  },
	  "Boulier" : {
		"Category" : "VARIOUS",
		"Name" : "Boulier",
		"OV" : "Abacus",
		"Price" : 200,
		"Weight" : 1000
	  },
	  "Bouteille en verre" : {
		"Category" : "VARIOUS",
		"Name" : "Bouteille en verre",
		"OV" : "Bottle, glass",
		"Price" : 200,
		"Weight" : 1000
	  },
	  "Branche de gui" : {
		"Category" : "DRUIDIC_FOCUSER",
		"Name" : "Branche de gui",
		"OV" : "Sprig of mistletoe",
		"Price" : 100,
		"Weight" : 0
	  },
	  "Bâton d'arcane" : {
		"Category" : "ARCANE_FOCUSER",
		"Name" : "Bâton d'arcane",
		"OV" : "Staff",
		"Price" : 500,
		"Weight" : 2000
	  },
	  "Bâton druidique" : {
		"Category" : "DRUIDIC_FOCUSER",
		"Name" : "Bâton druidique",
		"OV" : "Wooden staff",
		"Price" : 500,
		"Weight" : 2000
	  },
	  "Bélier portatif" : {
		"Category" : "VARIOUS",
		"Name" : "Bélier portatif",
		"OV" : "Ram, Portable",
		"Price" : 400,
		"Weight" : 17500
	  },
	  "Cadenas" : {
		"Category" : "VARIOUS",
		"Name" : "Cadenas",
		"OV" : "Lock",
		"Price" : 1000,
		"Weight" : 500
	  },
	  "Carquois" : {
		"Category" : "VARIOUS",
		"Name" : "Carquois",
		"OV" : "Quiver",
		"Price" : 100,
		"Weight" : 500
	  },
	  "Carreaux d'arbalète (20)" : {
		"Category" : "AMMUNITION",
		"Name" : "Carreaux d'arbalète (20)",
		"OV" : "Crossbow bolts",
		"Price" : 100,
		"Weight" : 750
	  },
	  "Chausse-trappes (sac de 20)" : {
		"Category" : "VARIOUS",
		"Name" : "Chausse-trappes (sac de 20)",
		"OV" : "Caltrops",
		"Price" : 100,
		"Weight" : 1000
	  },
	  "Chaîne (3 m)" : {
		"Category" : "VARIOUS",
		"Name" : "Chaîne (3 m)",
		"OV" : "Chain",
		"Price" : 500,
		"Weight" : 5000
	  },
	  "Chevalière" : {
		"Category" : "VARIOUS",
		"Name" : "Chevalière",
		"OV" : "Signet ring",
		"Price" : 500,
		"Weight" : 0
	  },
	  "Cire à cacheter" : {
		"Category" : "VARIOUS",
		"Name" : "Cire à cacheter",
		"OV" : "Sealing wax",
		"Price" : 50,
		"Weight" : 0
	  },
	  "Cloche" : {
		"Category" : "VARIOUS",
		"Name" : "Cloche",
		"OV" : "Bell",
		"Price" : 100,
		"Weight" : 0
	  },
	  "Coffre" : {
		"Category" : "VARIOUS",
		"Name" : "Coffre",
		"OV" : "Chest",
		"Price" : 500,
		"Weight" : 12500
	  },
	  "Corde en chanvre (15 m)" : {
		"Category" : "VARIOUS",
		"Name" : "Corde en chanvre (15 m)",
		"OV" : "Rope, hempen",
		"Price" : 100,
		"Weight" : 5000
	  },
	  "Corde en soie (15 m)" : {
		"Category" : "VARIOUS",
		"Name" : "Corde en soie (15 m)",
		"OV" : "Rope, silk",
		"Price" : 1000,
		"Weight" : 2500
	  },
	  "Couverture" : {
		"Category" : "VARIOUS",
		"Name" : "Couverture",
		"OV" : "Blanket",
		"Price" : 50,
		"Weight" : 1500
	  },
	  "Craie (un morceau)" : {
		"Category" : "VARIOUS",
		"Name" : "Craie (un morceau)",
		"OV" : "Chalk",
		"Price" : 1,
		"Weight" : 0
	  },
	  "Cruche ou pichet" : {
		"Category" : "VARIOUS",
		"Name" : "Cruche ou pichet",
		"OV" : "Jug or pitcher",
		"Price" : 2,
		"Weight" : 2000
	  },
	  "Eau bénite (flasque)" : {
		"Category" : "VARIOUS",
		"Name" : "Eau bénite (flasque)",
		"OV" : "Holy Water",
		"Price" : 2500,
		"Weight" : 500
	  },
	  "Emblème" : {
		"Category" : "SACRED_SYMBOL",
		"Name" : "Emblème",
		"OV" : "Emblem",
		"Price" : 500,
		"Weight" : 0
	  },
	  "Encre (bouteille de 30 ml)" : {
		"Category" : "VARIOUS",
		"Name" : "Encre (bouteille de 30 ml)",
		"OV" : "Ink",
		"Price" : 1000,
		"Weight" : 0
	  },
	  "Feu grégeois (flasque)" : {
		"Category" : "VARIOUS",
		"Name" : "Feu grégeois (flasque)",
		"OV" : "Alchemist’s Fire",
		"Price" : 5000,
		"Weight" : 500
	  },
	  "Fiole (10 cl)" : {
		"Category" : "VARIOUS",
		"Name" : "Fiole (10 cl)",
		"OV" : "Vial",
		"Price" : 100,
		"Weight" : 0
	  },
	  "Flasque ou chope (50 cl)" : {
		"Category" : "VARIOUS",
		"Name" : "Flasque ou chope (50 cl)",
		"OV" : "Flask",
		"Price" : 2,
		"Weight" : 500
	  },
	  "Flèches (20)" : {
		"Category" : "AMMUNITION",
		"Name" : "Flèches (20)",
		"OV" : "Arrows",
		"Price" : 100,
		"Weight" : 500
	  },
	  "Gamelle" : {
		"Category" : "VARIOUS",
		"Name" : "Gamelle",
		"OV" : "Mess Kit",
		"Price" : 20,
		"Weight" : 500
	  },
	  "Gourde (pleine)" : {
		"Category" : "VARIOUS",
		"Name" : "Gourde (pleine)",
		"OV" : "Waterskin",
		"Price" : 20,
		"Weight" : 2500
	  },
	  "Grappin" : {
		"Category" : "VARIOUS",
		"Name" : "Grappin",
		"OV" : "Grappling hook",
		"Price" : 200,
		"Weight" : 2000
	  },
	  "Grimoire" : {
		"Category" : "VARIOUS",
		"Name" : "Grimoire",
		"OV" : "Spellbook",
		"Price" : 5000,
		"Weight" : 1500
	  },
	  "Huile (flasque)" : {
		"Category" : "VARIOUS",
		"Name" : "Huile (flasque)",
		"OV" : "Oil",
		"Price" : 10,
		"Weight" : 500
	  },
	  "Lampe" : {
		"Category" : "VARIOUS",
		"Name" : "Lampe",
		"OV" : "Lamp",
		"Price" : 50,
		"Weight" : 500
	  },
	  "Lanterne sourde" : {
		"Category" : "VARIOUS",
		"Name" : "Lanterne sourde",
		"OV" : "Lantern, bullseye",
		"Price" : 1000,
		"Weight" : 1000
	  },
	  "Lanterne à capote" : {
		"Category" : "VARIOUS",
		"Name" : "Lanterne à capote",
		"OV" : "Lantern, hooded",
		"Price" : 500,
		"Weight" : 1000
	  },
	  "Livre" : {
		"Category" : "VARIOUS",
		"Name" : "Livre",
		"OV" : "Book",
		"Price" : 2500,
		"Weight" : 2500
	  },
	  "Longue-vue" : {
		"Category" : "VARIOUS",
		"Name" : "Longue-vue",
		"OV" : "Spyglass",
		"Price" : 100000,
		"Weight" : 500
	  },
	  "Loupe" : {
		"Category" : "VARIOUS",
		"Name" : "Loupe",
		"OV" : "Magnifying Glass",
		"Price" : 10000,
		"Weight" : 0
	  },
	  "Marteau" : {
		"Category" : "VARIOUS",
		"Name" : "Marteau",
		"OV" : "Hammer",
		"Price" : 100,
		"Weight" : 1500
	  },
	  "Marteau de forgeron" : {
		"Category" : "VARIOUS",
		"Name" : "Marteau de forgeron",
		"OV" : "Hammer, sledge",
		"Price" : 200,
		"Weight" : 5000
	  },
	  "Matériel de pêche" : {
		"Category" : "VARIOUS",
		"Name" : "Matériel de pêche",
		"OV" : "Fishing Tackle",
		"Price" : 100,
		"Weight" : 2000
	  },
	  "Menottes" : {
		"Category" : "VARIOUS",
		"Name" : "Menottes",
		"OV" : "Manacles",
		"Price" : 200,
		"Weight" : 3000
	  },
	  "Miroir en acier" : {
		"Category" : "VARIOUS",
		"Name" : "Miroir en acier",
		"OV" : "Mirror, steel",
		"Price" : 500,
		"Weight" : 250
	  },
	  "Orbe" : {
		"Category" : "ARCANE_FOCUSER",
		"Name" : "Orbe",
		"OV" : "Orb",
		"Price" : 2000,
		"Weight" : 1500
	  },
	  "Palan" : {
		"Category" : "VARIOUS",
		"Name" : "Palan",
		"OV" : "Block and tackle",
		"Price" : 100,
		"Weight" : 2500
	  },
	  "Panier" : {
		"Category" : "VARIOUS",
		"Name" : "Panier",
		"OV" : "Basket",
		"Price" : 40,
		"Weight" : 1000
	  },
	  "Papier (une feuille)" : {
		"Category" : "VARIOUS",
		"Name" : "Papier (une feuille)",
		"OV" : "Paper",
		"Price" : 20,
		"Weight" : 0
	  },
	  "Parchemin (une feuille)" : {
		"Category" : "VARIOUS",
		"Name" : "Parchemin (une feuille)",
		"OV" : "Parchment",
		"Price" : 10,
		"Weight" : 0
	  },
	  "Parfum (fiole)" : {
		"Category" : "VARIOUS",
		"Name" : "Parfum (fiole)",
		"OV" : "Perfum",
		"Price" : 500,
		"Weight" : 0
	  },
	  "Pelle" : {
		"Category" : "VARIOUS",
		"Name" : "Pelle",
		"OV" : "Shovel",
		"Price" : 200,
		"Weight" : 2500
	  },
	  "Perche (3 m)" : {
		"Category" : "VARIOUS",
		"Name" : "Perche (3 m)",
		"OV" : "Pole",
		"Price" : 5,
		"Weight" : 3000
	  },
	  "Pied-de-biche" : {
		"Category" : "VARIOUS",
		"Name" : "Pied-de-biche",
		"OV" : "Crowbar",
		"Price" : 200,
		"Weight" : 2000
	  },
	  "Pierre à aiguiser" : {
		"Category" : "VARIOUS",
		"Name" : "Pierre à aiguiser",
		"OV" : "Whetstone",
		"Price" : 1,
		"Weight" : 500
	  },
	  "Pioche de mineur" : {
		"Category" : "VARIOUS",
		"Name" : "Pioche de mineur",
		"OV" : "Pick, miner's",
		"Price" : 200,
		"Weight" : 5000
	  },
	  "Piton" : {
		"Category" : "VARIOUS",
		"Name" : "Piton",
		"OV" : "Piton",
		"Price" : 5,
		"Weight" : 100
	  },
	  "Piège à mâchoires" : {
		"Category" : "VARIOUS",
		"Name" : "Piège à mâchoires",
		"OV" : "Hunting Trap",
		"Price" : 500,
		"Weight" : 12500
	  },
	  "Plume d’écriture" : {
		"Category" : "VARIOUS",
		"Name" : "Plume d’écriture",
		"OV" : "Ink pen",
		"Price" : 2,
		"Weight" : 0
	  },
	  "Pointes en fer (10)" : {
		"Category" : "VARIOUS",
		"Name" : "Pointes en fer (10)",
		"OV" : "Spikes, iron",
		"Price" : 100,
		"Weight" : 2500
	  },
	  "Poison (fiole)" : {
		"Category" : "VARIOUS",
		"Name" : "Poison (fiole)",
		"OV" : "Poison",
		"Price" : 10000,
		"Weight" : 0
	  },
	  "Pot en fer" : {
		"Category" : "VARIOUS",
		"Name" : "Pot en fer",
		"OV" : "Pot, iron",
		"Price" : 200,
		"Weight" : 5000
	  },
	  "Potion de soins" : {
		"Category" : "VARIOUS",
		"Name" : "Potion de soins",
		"OV" : "Potion of Healing",
		"Price" : 5000,
		"Weight" : 250
	  },
	  "Rations (1 jour)" : {
		"Category" : "VARIOUS",
		"Name" : "Rations (1 jour)",
		"OV" : "Rations",
		"Price" : 50,
		"Weight" : 1000
	  },
	  "Reliquaire" : {
		"Category" : "SACRED_SYMBOL",
		"Name" : "Reliquaire",
		"OV" : "Reliquary",
		"Price" : 500,
		"Weight" : 1000
	  },
	  "Robes" : {
		"Category" : "VARIOUS",
		"Name" : "Robes",
		"OV" : "Robes",
		"Price" : 100,
		"Weight" : 2000
	  },
	  "Sablier" : {
		"Category" : "VARIOUS",
		"Name" : "Sablier",
		"OV" : "Hourglass",
		"Price" : 2500,
		"Weight" : 500
	  },
	  "Sac" : {
		"Category" : "VARIOUS",
		"Name" : "Sac",
		"OV" : "Sack",
		"Price" : 1,
		"Weight" : 250
	  },
	  "Sac de couchage" : {
		"Category" : "VARIOUS",
		"Name" : "Sac de couchage",
		"OV" : "Bedroll",
		"Price" : 100,
		"Weight" : 2000
	  },
	  "Sac à dos" : {
		"Category" : "VARIOUS",
		"Name" : "Sac à dos",
		"OV" : "Backpack",
		"Price" : 200,
		"Weight" : 2500
	  },
	  "Sacoche" : {
		"Category" : "VARIOUS",
		"Name" : "Sacoche",
		"OV" : "Pouch",
		"Price" : 50,
		"Weight" : 500
	  },
	  "Sacoche à composantes" : {
		"Category" : "VARIOUS",
		"Name" : "Sacoche à composantes",
		"OV" : "Component Pouch",
		"Price" : 2500,
		"Weight" : 1000
	  },
	  "Savon" : {
		"Category" : "VARIOUS",
		"Name" : "Savon",
		"OV" : "Soap",
		"Price" : 2,
		"Weight" : 0
	  },
	  "Sceptre" : {
		"Category" : "ARCANE_FOCUSER",
		"Name" : "Sceptre",
		"OV" : "Rod",
		"Price" : 1000,
		"Weight" : 1000
	  },
	  "Seau" : {
		"Category" : "VARIOUS",
		"Name" : "Seau",
		"OV" : "Bucket",
		"Price" : 5,
		"Weight" : 1000
	  },
	  "Sifflet" : {
		"Category" : "VARIOUS",
		"Name" : "Sifflet",
		"OV" : "Signal whistle",
		"Price" : 5,
		"Weight" : 0
	  },
	  "Tente" : {
		"Category" : "VARIOUS",
		"Name" : "Tente",
		"OV" : "Tent",
		"Price" : 200,
		"Weight" : 10000
	  },
	  "Tonneau" : {
		"Category" : "VARIOUS",
		"Name" : "Tonneau",
		"OV" : "Barrel",
		"Price" : 200,
		"Weight" : 35000
	  },
	  "Torche" : {
		"Category" : "VARIOUS",
		"Name" : "Torche",
		"OV" : "Torch",
		"Price" : 1,
		"Weight" : 500
	  },
	  "Totem" : {
		"Category" : "DRUIDIC_FOCUSER",
		"Name" : "Totem",
		"OV" : "Totem",
		"Price" : 100,
		"Weight" : 0
	  },
	  "Trousse de soins" : {
		"Category" : "VARIOUS",
		"Name" : "Trousse de soins",
		"OV" : "Healer’s Kit",
		"Price" : 500,
		"Weight" : 1500
	  },
	  "Vêtements, communs" : {
		"Category" : "CLOTHES",
		"Name" : "Vêtements, communs",
		"OV" : "Clothes, common",
		"Price" : 50,
		"Weight" : 1500
	  },
	  "Vêtements, costume" : {
		"Category" : "CLOTHES",
		"Name" : "Vêtements, costume",
		"OV" : "Clothes, costume",
		"Price" : 500,
		"Weight" : 2000
	  },
	  "Vêtements, fins" : {
		"Category" : "CLOTHES",
		"Name" : "Vêtements, fins",
		"OV" : "Clothes, fine",
		"Price" : 1500,
		"Weight" : 3000
	  },
	  "Vêtements, voyage" : {
		"Category" : "CLOTHES",
		"Name" : "Vêtements, voyage",
		"OV" : "Clothes, traveler’s",
		"Price" : 200,
		"Weight" : 2000
	  },
	  "Échelle (3 m)" : {
		"Category" : "VARIOUS",
		"Name" : "Échelle (3 m)",
		"OV" : "Ladder",
		"Price" : 10,
		"Weight" : 12500
	  },
	  "Équipement d’escalade" : {
		"Category" : "VARIOUS",
		"Name" : "Équipement d’escalade",
		"OV" : "Climber’s Kit",
		"Price" : 2500,
		"Weight" : 6000
	  },
	  "Étui à carreaux" : {
		"Category" : "VARIOUS",
		"Name" : "Étui à carreaux",
		"OV" : "Case, Crossbow Bolt",
		"Price" : 100,
		"Weight" : 500
	  },
	  "Étui à cartes ou parchemins" : {
		"Category" : "VARIOUS",
		"Name" : "Étui à cartes ou parchemins",
		"OV" : "Case, Map or Scroll",
		"Price" : 100,
		"Weight" : 500
	  }
	},
	"Historics" : {
	  "ACOLYTE":  {
	   "Name" : "Acolyte",
	   "Skills" : ["Perspicacité", "Religion"],
	   "Objects" : [],
	   "StartingObjects" : ["Symbole sacré","Livre de prières", "5 bâtons d'encens", "Habits de cérémonie","Vêtements communs"],
	   "StartingMoney" : 1500
		},
	  "GUILD_ARTISAN":  {
	   "Name" : "Artisan De Guilde",
	   "Skills" : ["Perspicacité", "Persuasion"],
	   "Objects" : [],
	   "StartingObjects" : ["Lettre de recommandation de votre guilde", "Vêtements de voyage"],
	   "StartingMoney" : 1500
		},
	  "ARTIST":  {
	   "Name" : "Artiste",
	   "Skills" : ["Acrobatie", "Représentation"],
	   "Objects" : ["Kit de déguisement"],
	   "StartingObjects" : ["Cadeau d'un admirateur (une lettre d'amour, une mèche de cheveux, une babiole)", "Costume"],
	   "StartingMoney" : 1500
		},
	  "CHARLATAN":  {
	   "Name" : "Charlatan",
	   "Skills" : ["Escamotage", "Tromperie"],
	   "Objects" : ["Kit de déguisement", "Kit de contrefaçon"],
	   "StartingObjects" : ["Kit de déguisement", "Vêtements fins"],
	   "StartingMoney" : 1500
		},
	  "CRIMINAL":  {
	   "Name" : "Criminel",
	   "Skills" : ["Discrétion", "Tromperie"],
	   "Objects" : ["Outils de voleur"],
	   "StartingObjects" : ["Pied-de-biche", "Vêtements communs sombres avec une capuche"],
	   "StartingMoney" : 1500
		},
	  "STREETS_CHILD":  {
	   "Name" : "Enfant Des Rues",
	   "Skills" : ["Discrétion", "Escamotage"],
	   "Objects" : ["Kit de déguisement", "Outils de voleur"],
	   "StartingObjects" : ["Petit couteau", "Carte de la ville dans laquelle vous avez grandi", "Souris domestiquée", "Souvenir de vos parents", "Vêtements communs"],
	   "StartingMoney" : 1000
		},
	  "HERMIT":  {
	   "Name" : "Ermite",
	   "Skills" : ["Médecine", "Religion"],
	   "Objects" : ["Kit d'herboriste"],
	   "StartingObjects" : ["Kit d'herboriste", "Etui à parchemin remplis de notes sur vos études ou vos prières", "Couverture pour l'hiver", "Vêtements communs"],
	   "StartingMoney" : 500
		},
	  "PEOPLE_HERO":  {
	   "Name" : "Héros Du Peuple",
	   "Skills" : ["Dressage", "Survie"],
	   "Objects" : ["Véhicules (terrestres)"],
	   "StartingObjects" : ["Pelle", "Pot en fer", "Vêtements communs"],
	   "StartingMoney" : 1000
		},
	  "MARINE":  {
	   "Name" : "Marin",
	   "Skills" : ["Athlétisme", "Perception"],
	   "Objects" : ["Outils de navigateur", "Véhicules (aquatiques)"],
	   "StartingObjects" : ["Corde en soie (15 m.)", "Porte bonheur", "Vêtements communs"],
	   "StartingMoney" : 1500
		},
	  "NOBLE":  {
	   "Name" : "Noble",
	   "Skills" : ["Histoire", "Persuasion"],
	   "Objects" : [],
	   "StartingObjects" : ["Vêtements fins", "Chevalière", "Lettre de noblesse"],
	   "StartingMoney" : 2500
		},
	  "WISE":  {
	   "Name" : "Sage",
	   "Skills" : ["Arcanes", "Histoire"],
	   "Objects" : [],
	   "StartingObjects" : ["Bouteille d'encre noire", "Plume", "Petit couteau", "Lettre d'un collègue mort posant une question à laquelle vous n'avez pas encore été en mesure de répondre", "Vêtements communs"],
	   "StartingMoney" : 1000
		},
	  "SAUVAGEON":  {
	   "Name" : "Sauvageon",
	   "Skills" : ["Athlétisme", "Survie"],
	   "Objects" : [],
	   "StartingObjects" : ["Piège à mâchoires", "Trophée d'animal que vous avez tué", "Vêtements de voyage "],
	   "StartingMoney" : 1000
		},
	  "SOLDIER":  {
	   "Name" : "Soldat",
	   "Skills" : ["Athlétisme", "Intimidation"],
	   "Objects" : ["Véhicules (terrestres)", "Barde", "Carrosse", "Char", "Chariot", "Charrette", "Traîneau"],
	   "StartingObjects" : ["Insigne de grade", "Trophée pris sur un ennemi mort (une dague, une lame brisée, un morceau de bannière)", "Jjeu de dés en os ou un jeu de cartes", "Vêtements communs"],
	   "StartingMoney" : 1000
		},
	  "BOUNTY_HUNTER":  {
	   "Name" : "Chasseur De Primes",
	   "Skills" : [],
	   "Objects" : [],
	   "StartingObjects" : ["Vêtements appropriés à votre fonction"],
	   "StartingMoney" : 2000
		},
	  "TORMENTED":  {
	   "Name" : "Tourmenté",
	   "Skills" : [],
	   "Objects" : [],
	   "StartingObjects" : ["Vêtements communs", "Babiole ayant une signification particulière pour vous"],
	   "StartingMoney" : 0
		},
	  "TRAVELER":  {
	   "Name" : "Voyageur *",
	   "Skills" : ["Survie", "Persuasion"],
	   "Objects" : [],
	   "StartingObjects" : ["Bâton de marche", "Souvenir venu d’un pays lointain", "Livre rempli de notes sur vos périples ou de dessins", "Bouteille d'encre", "Plune", "Vêtements de voyage"],
	   "StartingMoney" : 1000
		},
	  "CAPTIVE":  {
	   "Name" : "Captif *",
	   "Skills" : ["Nature", "Survie"],
	   "Objects" : [],
	   "StartingObjects" : ["Vêtements communs", "Bougie", "Gamelle", "Couverture"],
	   "StartingMoney" : 500
		},
	  "VILLAGE_IDIOT":  {
	   "Name" : "Idiot Du Village *",
	   "Skills" : ["Discrétion", "Représentation"],
	   "Objects" : [],
	   "StartingObjects" : ["Sifflet", "Vêtements communs rapiécés", "Bourse contenant de jolis cailloux et un autre objet au choix"],
	   "StartingMoney" : 0
		}
	},
	"HostelCategories" : {
	  "DRINK" : {
		"Code" : "DRINK",
		"Name" : "Boisson"
	  },
	  "FOOD" : {
		"Code" : "FOOD",
		"Name" : "Nourriture"
	  },
	  "HOSTEL" : {
		"Code" : "HOSTEL",
		"Name" : "Auberge"
	  },
	  "MEAL" : {
		"Code" : "MEAL",
		"Name" : "Repas (par jour)"
	  }
	},
	"HostelServices" : {
	  "Auberge Aristocratique" : {
		"Category" : "HOSTEL",
		"Name" : "Auberge Aristocratique",
		"Price" : 400
	  },
	  "Banquet (par personne)" : {
		"Category" : "MEAL",
		"Name" : "Banquet (par personne)",
		"Price" : 1000
	  },
	  "Chope de bière" : {
		"Category" : "DRINK",
		"Name" : "Chope de bière",
		"Price" : 4
	  },
	  "Cruche de bière" : {
		"Category" : "DRINK",
		"Name" : "Cruche de bière",
		"Price" : 20
	  },
	  "Fin (bouteille)" : {
		"Category" : "DRINK",
		"Name" : "Fin (bouteille)",
		"Price" : 1000
	  },
	  "Fromage, gros morceau" : {
		"Category" : "FOOD",
		"Name" : "Fromage, gros morceau",
		"Price" : 10
	  },
	  "Pain, miche" : {
		"Category" : "FOOD",
		"Name" : "Pain, miche",
		"Price" : 2
	  },
	  "Repas Aristocratique" : {
		"Category" : "MEAL",
		"Name" : "Repas Aristocratique",
		"Price" : 200
	  },
	  "Repas Confortable" : {
		"Category" : "MEAL",
		"Name" : "Repas Confortable",
		"Price" : 50
	  },
	  "Repas Modeste" : {
		"Category" : "MEAL",
		"Name" : "Repas Modeste",
		"Price" : 30
	  },
	  "Repas Pauvre" : {
		"Category" : "MEAL",
		"Name" : "Repas Pauvre",
		"Price" : 6
	  },
	  "Repas Riche" : {
		"Category" : "MEAL",
		"Name" : "Repas Riche",
		"Price" : 80
	  },
	  "Repas Sordide" : {
		"Category" : "MEAL",
		"Name" : "Repas Sordide",
		"Price" : 3
	  },
	  "Viande, gros morceau" : {
		"Category" : "FOOD",
		"Name" : "Viande, gros morceau",
		"Price" : 30
	  },
	  "Vin Ordinaire (pichet)" : {
		"Category" : "DRINK",
		"Name" : "Vin Ordinaire (pichet)",
		"Price" : 20
	  }
	},
	"Languages" : {
	  "COMMON": {
		"Code" : "COMMON",
		"Name" : "Commun",
		"Type" : "STANDARD",
		"Writing" : "Commun",
		"TypicalRaces" : "Humains"
		 },
	  "ELVISH": {
		"Code" : "ELVISH",
		"Name" : "Elfique",
		"Type" : "STANDARD",
		"Writing" : "Elfique",
		"TypicalRaces" : "Elfes"
		 },
	  "GIANT": {
		"Code" : "GIANT",
		"Name" : "Géant",
		"Type" : "STANDARD",
		"Writing" : "Nain",
		"TypicalRaces" : "Ogres, géants"
		 },
	  "GNOME": {
		"Code" : "GNOME",
		"Name" : "Gnome",
		"Type" : "STANDARD",
		"Writing" : "Nain",
		"TypicalRaces" : "Gnomes"
		 },
	  "GOBLIN": {
		"Code" : "GOBLIN",
		"Name" : "Gobelin",
		"Type" : "STANDARD",
		"Writing" : "Nain",
		"TypicalRaces" : "Gobelinoïdes"
		 },
	  "HALFELIN": {
		"Code" : "HALFELIN",
		"Name" : "Halfelin",
		"Type" : "STANDARD",
		"Writing" : "Commun",
		"TypicalRaces" : "Halfelins"
		 },
	  "DWARF": {
		"Code" : "DWARF",
		"Name" : "Nain",
		"Type" : "STANDARD",
		"Writing" : "Nain",
		"TypicalRaces" : "Nains"
		 },
	  "ORC": {
		"Code" : "ORC",
		"Name" : "Orque",
		"Type" : "STANDARD",
		"Writing" : "Nain",
		"TypicalRaces" : "Orques"
		 },
	  "ABYSSAL": {
		"Code" : "ABYSSAL",
		"Name" : "Abyssal",
		"Type" : "EXOTIC",
		"Writing" : "Infernal",
		"TypicalRaces" : "Démons"
		 },
	  "CELESTIAL": {
		"Code" : "CELESTIAL",
		"Name" : "Céleste",
		"Type" : "EXOTIC",
		"Writing" : "Céleste",
		"TypicalRaces" : "Célestes"
		 },
	  "DEPTH_COMMON": {
		"Code" : "DEPTH_COMMON",
		"Name" : "Commun des profondeurs",
		"Type" : "EXOTIC",
		"Writing" : "Elfique",
		"TypicalRaces" : "Créatures de l'Outreterre"
		 },
	  "DRACONIC": {
		"Code" : "DRACONIC",
		"Name" : "Draconique",
		"Type" : "EXOTIC",
		"Writing" : "Draconique",
		"TypicalRaces" : "Dragons, drakéides"
		 },
	  "INFERNAL": {
		"Code" : "INFERNAL",
		"Name" : "Infernal",
		"Type" : "EXOTIC",
		"Writing" : "Infernal",
		"TypicalRaces" : "Diables"
		 },
	  "PRIMARY": {
		"Code" : "PRIMARY",
		"Name" : "Primordial",
		"Type" : "EXOTIC",
		"Writing" : "Nain",
		"TypicalRaces" : "Élémentaires"
		 },
	  "DEEP": {
		"Code" : "DEEP",
		"Name" : "Profond",
		"Type" : "EXOTIC",
		"Writing" : "-",
		"TypicalRaces" : "Beholders, flagelleurs mentaux"
		 },
	  "SILVAN": {
		"Code" : "SILVAN",
		"Name" : "Sylvain",
		"Type" : "EXOTIC",
		"Writing" : "Elfique",
		"TypicalRaces" : "Créatures féeriques"
		 },
	  "AIR": {
		"Code" : "AIR",
		"Name" : "Aérien",
		"Type" : "EXOTIC",
		"Writing" : "-",
		"TypicalRaces" : "Aarakocra"
		 }
	},
	"Levels" : [ {
	  "Level" : 1,
	  "MasteryBonus" : 2,
	  "XP" : 0
	}, {
	  "Level" : 2,
	  "MasteryBonus" : 2,
	  "XP" : 300
	}, {
	  "Level" : 3,
	  "MasteryBonus" : 2,
	  "XP" : 900
	}, {
	  "Level" : 4,
	  "MasteryBonus" : 2,
	  "XP" : 2700
	}, {
	  "Level" : 5,
	  "MasteryBonus" : 3,
	  "XP" : 6500
	}, {
	  "Level" : 6,
	  "MasteryBonus" : 3,
	  "XP" : 14000
	}, {
	  "Level" : 7,
	  "MasteryBonus" : 3,
	  "XP" : 23000
	}, {
	  "Level" : 8,
	  "MasteryBonus" : 3,
	  "XP" : 34000
	}, {
	  "Level" : 9,
	  "MasteryBonus" : 4,
	  "XP" : 48000
	}, {
	  "Level" : 10,
	  "MasteryBonus" : 4,
	  "XP" : 64000
	}, {
	  "Level" : 11,
	  "MasteryBonus" : 4,
	  "XP" : 85000
	}, {
	  "Level" : 12,
	  "MasteryBonus" : 4,
	  "XP" : 100000
	}, {
	  "Level" : 13,
	  "MasteryBonus" : 5,
	  "XP" : 120000
	}, {
	  "Level" : 14,
	  "MasteryBonus" : 5,
	  "XP" : 140000
	}, {
	  "Level" : 15,
	  "MasteryBonus" : 5,
	  "XP" : 165000
	}, {
	  "Level" : 16,
	  "MasteryBonus" : 5,
	  "XP" : 195000
	}, {
	  "Level" : 17,
	  "MasteryBonus" : 6,
	  "XP" : 225000
	}, {
	  "Level" : 18,
	  "MasteryBonus" : 6,
	  "XP" : 265000
	}, {
	  "Level" : 19,
	  "MasteryBonus" : 6,
	  "XP" : 305000
	}, {
	  "Level" : 20,
	  "MasteryBonus" : 6,
	  "XP" : 355000
	} ],
	"Mounts" : {
	  "Chameau" : {
		"ChargeCapacity" : 240000,
		"Name" : "Chameau",
		"Price" : 5000,
		"Speed" : 15
	  },
	  "Cheval de guerre" : {
		"ChargeCapacity" : 270000,
		"Name" : "Cheval de guerre",
		"Price" : 40000,
		"Speed" : 18
	  },
	  "Cheval de selle" : {
		"ChargeCapacity" : 240000,
		"Name" : "Cheval de selle",
		"Price" : 7500,
		"Speed" : 18
	  },
	  "Cheval de trait" : {
		"ChargeCapacity" : 270000,
		"Name" : "Cheval de trait",
		"Price" : 5000,
		"Speed" : 12
	  },
	  "Molosse" : {
		"ChargeCapacity" : 95000,
		"Name" : "Molosse",
		"Price" : 2500,
		"Speed" : 12
	  },
	  "Âne ou mule" : {
		"ChargeCapacity" : 210000,
		"Name" : "Âne ou mule",
		"Price" : 800,
		"Speed" : 12
	  },
	  "Éléphant" : {
		"ChargeCapacity" : 660000,
		"Name" : "Éléphant",
		"Price" : 20000,
		"Speed" : 12
	  }
	},
	"ObjectCategories" : {
	  "ARTISAN" : {
		"Code" : "ARTISAN",
		"Name" : "Outils d'artisan",
		"OV" : "Artisan's tools"
	  },
	  "GAME" : {
		"Code" : "GAME",
		"Name" : "Jeux",
		"OV" : "Gaming set"
	  },
	  "KIT" : {
		"Code" : "KIT",
		"Name" : "Kits",
		"OV" : "Kits"
	  },
	  "MUSIC" : {
		"Code" : "MUSIC",
		"Name" : "Instruments de musique",
		"OV" : "Musical instrument"
	  },
	  "SADDLE" : {
		"Code" : "SADDLE",
		"Name" : "Selles",
		"OV" : "Saddles"
	  },
	  "VEHICLE" : {
		"Code" : "VEHICLE",
		"Name" : "Véhicules",
		"OV" : "Vehicles"
	  },
	  "VEHICLE_RELATIVE" : {
		"Code" : "VEHICLE_RELATIVE",
		"Name" : "Composants de véhicules",
		"OV" : "Vehicles relative"
	  }
	},
	"Objects" : {
	  "Barde" : {
		"Category" : "VEHICLE",
		"Name" : "Barde",
		"OV" : "Barding",
		"Price" : 0,
		"Weight" : 0
	  },
	  "Carrosse" : {
		"Category" : "VEHICLE",
		"Name" : "Carrosse",
		"OV" : "Carriage",
		"Price" : 10000,
		"Weight" : 300000
	  },
	  "Chalemie" : {
		"Category" : "MUSIC",
		"Name" : "Chalemie",
		"OV" : "  Shawm",
		"Price" : 200,
		"Weight" : 500
	  },
	  "Char" : {
		"Category" : "VEHICLE",
		"Name" : "Char",
		"OV" : "Chariot",
		"Price" : 25000,
		"Weight" : 50000
	  },
	  "Chariot" : {
		"Category" : "VEHICLE",
		"Name" : "Chariot",
		"OV" : "Wagon",
		"Price" : 3500,
		"Weight" : 200000
	  },
	  "Charrette" : {
		"Category" : "VEHICLE",
		"Name" : "Charrette",
		"OV" : "Cart",
		"Price" : 1500,
		"Weight" : 100000
	  },
	  "Cor" : {
		"Category" : "MUSIC",
		"Name" : "Cor",
		"OV" : "  Horn",
		"Price" : 300,
		"Weight" : 1000
	  },
	  "Cornemuse" : {
		"Category" : "MUSIC",
		"Name" : "Cornemuse",
		"OV" : "  Bagpipes",
		"Price" : 3000,
		"Weight" : 3000
	  },
	  "Dés" : {
		"Category" : "GAME",
		"Name" : "Dés",
		"OV" : "  Dice set",
		"Price" : 10,
		"Weight" : 0
	  },
	  "Flûte" : {
		"Category" : "MUSIC",
		"Name" : "Flûte",
		"OV" : "  Flute ",
		"Price" : 200,
		"Weight" : 500
	  },
	  "Flûte de pan" : {
		"Category" : "MUSIC",
		"Name" : "Flûte de pan",
		"OV" : "  Pan flute",
		"Price" : 1200,
		"Weight" : 1000
	  },
	  "Fontes" : {
		"Category" : "VEHICLE_RELATIVE",
		"Name" : "Fontes",
		"OV" : "Saddlebags",
		"Price" : 400,
		"Weight" : 4000
	  },
	  "Fourrage (par jour)" : {
		"Category" : "VEHICLE_RELATIVE",
		"Name" : "Fourrage (par jour)",
		"OV" : "Feed",
		"Price" : 5,
		"Weight" : 5000
	  },
	  "Jeu d'échecs draconiques" : {
		"Category" : "GAME",
		"Name" : "Jeu d'échecs draconiques",
		"OV" : "  Dragonchess set ",
		"Price" : 100,
		"Weight" : 250
	  },
	  "Jeu de cartes" : {
		"Category" : "GAME",
		"Name" : "Jeu de cartes",
		"OV" : "  Playing card set",
		"Price" : 50,
		"Weight" : 0
	  },
	  "Jeu des Dragons" : {
		"Category" : "GAME",
		"Name" : "Jeu des Dragons",
		"OV" : "  Three-Dragon Ante set",
		"Price" : 100,
		"Weight" : 0
	  },
	  "Kit d'empoisonneur" : {
		"Category" : "KIT",
		"Name" : "Kit d'empoisonneur",
		"OV" : "Poisoner's kit ",
		"Price" : 5000,
		"Weight" : 1000
	  },
	  "Kit d'herboriste" : {
		"Category" : "KIT",
		"Name" : "Kit d'herboriste",
		"OV" : "Herbalism kit ",
		"Price" : 500,
		"Weight" : 1500
	  },
	  "Kit de contrefaçon" : {
		"Category" : "KIT",
		"Name" : "Kit de contrefaçon",
		"OV" : "Forgery kit ",
		"Price" : 1500,
		"Weight" : 2500
	  },
	  "Kit de déguisement" : {
		"Category" : "KIT",
		"Name" : "Kit de déguisement",
		"OV" : "Disguise kit ",
		"Price" : 2500,
		"Weight" : 1500
	  },
	  "Luth" : {
		"Category" : "MUSIC",
		"Name" : "Luth",
		"OV" : "  Lute",
		"Price" : 3500,
		"Weight" : 1000
	  },
	  "Lyre" : {
		"Category" : "MUSIC",
		"Name" : "Lyre",
		"OV" : "  Lyre",
		"Price" : 3000,
		"Weight" : 1000
	  },
	  "Matériel d'alchimiste" : {
		"Category" : "ARTISAN",
		"Name" : "Matériel d'alchimiste",
		"OV" : "  Alchemist's supplies",
		"Price" : 5000,
		"Weight" : 4000
	  },
	  "Matériel de brasseur" : {
		"Category" : "ARTISAN",
		"Name" : "Matériel de brasseur",
		"OV" : "  Brewer's supplies",
		"Price" : 2000,
		"Weight" : 4500
	  },
	  "Matériel de calligraphe" : {
		"Category" : "ARTISAN",
		"Name" : "Matériel de calligraphe",
		"OV" : "  Calligrapher's supplies",
		"Price" : 1000,
		"Weight" : 2500
	  },
	  "Matériel de peintre" : {
		"Category" : "ARTISAN",
		"Name" : "Matériel de peintre",
		"OV" : "  Painter's supplies",
		"Price" : 1000,
		"Weight" : 2500
	  },
	  "Mors et bride" : {
		"Category" : "VEHICLE_RELATIVE",
		"Name" : "Mors et bride",
		"OV" : "Bit and bridle",
		"Price" : 200,
		"Weight" : 500
	  },
	  "Outils de bijoutier" : {
		"Category" : "ARTISAN",
		"Name" : "Outils de bijoutier",
		"OV" : "  Jeweler's tools",
		"Price" : 2500,
		"Weight" : 1000
	  },
	  "Outils de bricoleur" : {
		"Category" : "ARTISAN",
		"Name" : "Outils de bricoleur",
		"OV" : "  Tinker's tools",
		"Price" : 5000,
		"Weight" : 5000
	  },
	  "Outils de cartographe" : {
		"Category" : "ARTISAN",
		"Name" : "Outils de cartographe",
		"OV" : "  Cartographer's tools",
		"Price" : 1500,
		"Weight" : 3000
	  },
	  "Outils de charpentier" : {
		"Category" : "ARTISAN",
		"Name" : "Outils de charpentier",
		"OV" : "  Carpenter's tools",
		"Price" : 800,
		"Weight" : 3000
	  },
	  "Outils de cordonnier" : {
		"Category" : "ARTISAN",
		"Name" : "Outils de cordonnier",
		"OV" : "  Cobblers' tools",
		"Price" : 500,
		"Weight" : 2500
	  },
	  "Outils de forgeron" : {
		"Category" : "ARTISAN",
		"Name" : "Outils de forgeron",
		"OV" : "  Smith's tools",
		"Price" : 2000,
		"Weight" : 4000
	  },
	  "Outils de maçon" : {
		"Category" : "ARTISAN",
		"Name" : "Outils de maçon",
		"OV" : "  Mason's tools",
		"Price" : 1000,
		"Weight" : 4000
	  },
	  "Outils de menuisier" : {
		"Category" : "ARTISAN",
		"Name" : "Outils de menuisier",
		"OV" : "  Woodcarver's tools",
		"Price" : 100,
		"Weight" : 2500
	  },
	  "Outils de navigateur" : {
		"Category" : "ARTISAN",
		"Name" : "Outils de navigateur",
		"OV" : "Navigator's tools ",
		"Price" : 2500,
		"Weight" : 1000
	  },
	  "Outils de potier" : {
		"Category" : "ARTISAN",
		"Name" : "Outils de potier",
		"OV" : "  Potter's tools",
		"Price" : 1000,
		"Weight" : 1000
	  },
	  "Outils de souffleur de verre" : {
		"Category" : "ARTISAN",
		"Name" : "Outils de souffleur de verre",
		"OV" : "  Glassblower's tools",
		"Price" : 3000,
		"Weight" : 2500
	  },
	  "Outils de tanneur" : {
		"Category" : "ARTISAN",
		"Name" : "Outils de tanneur",
		"OV" : "  Leatherworker's tools ",
		"Price" : 500,
		"Weight" : 2500
	  },
	  "Outils de tisserand" : {
		"Category" : "ARTISAN",
		"Name" : "Outils de tisserand",
		"OV" : "  Weaver's tools",
		"Price" : 100,
		"Weight" : 2500
	  },
	  "Outils de voleur" : {
		"Category" : "ARTISAN",
		"Name" : "Outils de voleur",
		"OV" : "Thieves' tools ",
		"Price" : 2500,
		"Weight" : 500
	  },
	  "Selle d'équitation" : {
		"Category" : "SADDLE",
		"Name" : "Selle d'équitation",
		"OV" : "Riding saddle",
		"Price" : 1000,
		"Weight" : 12500
	  },
	  "Selle de bât" : {
		"Category" : "SADDLE",
		"Name" : "Selle de bât",
		"OV" : "Pack saddle",
		"Price" : 500,
		"Weight" : 7500
	  },
	  "Selle exotique" : {
		"Category" : "SADDLE",
		"Name" : "Selle exotique",
		"OV" : "Exotic saddle",
		"Price" : 6000,
		"Weight" : 20000
	  },
	  "Selle militaire" : {
		"Category" : "SADDLE",
		"Name" : "Selle militaire",
		"OV" : "Military saddle",
		"Price" : 2000,
		"Weight" : 15000
	  },
	  "Tambour" : {
		"Category" : "MUSIC",
		"Name" : "Tambour",
		"OV" : "  Drum",
		"Price" : 600,
		"Weight" : 1500
	  },
	  "Traîneau" : {
		"Category" : "VEHICLE",
		"Name" : "Traîneau",
		"OV" : "Sled",
		"Price" : 2000,
		"Weight" : 150000
	  },
	  "Tympanon" : {
		"Category" : "MUSIC",
		"Name" : "Tympanon",
		"OV" : "  Dulcimer",
		"Price" : 2500,
		"Weight" : 5000
	  },
	  "Ustensiles de cuisinier" : {
		"Category" : "ARTISAN",
		"Name" : "Ustensiles de cuisinier",
		"OV" : "  Cook's utensils",
		"Price" : 100,
		"Weight" : 4000
	  },
	  "Viole" : {
		"Category" : "MUSIC",
		"Name" : "Viole",
		"OV" : "  Viol",
		"Price" : 3000,
		"Weight" : 500
	  },
	  "Véhicules (aquatiques)" : {
		"Category" : "VEHICLE",
		"Name" : "Véhicules (aquatiques)",
		"OV" : "Vehicles (water)",
		"Price" : 0,
		"Weight" : 0
	  },
	  "Véhicules (terrestres)" : {
		"Category" : "VEHICLE",
		"Name" : "Véhicules (terrestres)",
		"OV" : "Vehicles (land)",
		"Price" : 0,
		"Weight" : 0
	  },
	  "Écurie (par jour)" : {
		"Category" : "VEHICLE_RELATIVE",
		"Name" : "Écurie (par jour)",
		"OV" : "Stabling",
		"Price" : 50,
		"Weight" : 0
	  }
	},
	"Races" : {
	  "ELF": {
	   "Id" : "ELF",
	   "Name" : "Elfe",
	   "OV" : "Elf",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 2,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 9,
	   "Languages" : ["COMMON", "ELVISH"],
	   "Resistances" : [],
	   "SaveAdvantages" : ["CHARME"]
		},
	  "HALFELIN": {
	   "Id" : "HALFELIN",
	   "Name" : "Halfelin",
	   "OV" : "Halfelin",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 2,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 7.5,
	   "Languages" : ["COMMON", "HALFELIN"],
	   "Resistances" : [],
	   "SaveAdvantages" : ["FEAR"]
		},
	  "HUMAN": {
	   "Id" : "HUMAN",
	   "Name" : "Humain",
	   "OV" : "Human",
	   "Strength" : 1,
	   "Constitution" : 1,
	   "Dexterity" : 1,
	   "Intelligence" : 1,
	   "Wisdom" : 1,
	   "Charisma" : 1,
	   "Speed" : 9,
	   "Languages" : ["COMMON"],
	   "Resistances" : [],
	   "SaveAdvantages" : []
		},
	  "DWARF": {
	   "Id" : "DWARF",
	   "Name" : "Nain",
	   "OV" : "Dwarf",
	   "Strength" : 0,
	   "Constitution" : 2,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 7.5,
	   "Languages" : ["DWARF"],
	   "Resistances" : ["POISON"],
	   "SaveAdvantages" : ["POISON"]
		},
	  "HALF_ELF": {
	   "Id" : "HALF_ELF",
	   "Name" : "Demi-Elfe",
	   "OV" : "Half-Elf",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 2,
	   "Speed" : 9,
	   "Languages" : ["COMMON", "ELVISH"],
	   "Resistances" : [],
	   "SaveAdvantages" : []
		},
	  "HALF_ORC": {
	   "Id" : "HALF_ORC",
	   "Name" : "Demi-Orque",
	   "OV" : "Half-Orc",
	   "Strength" : 2,
	   "Constitution" : 1,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 9,
	   "Languages" : ["COMMON", "ORC"],
	   "Resistances" : [],
	   "SaveAdvantages" : []
		},
	  "DRAGON_BORN": {
	   "Id" : "DRAGON_BORN",
	   "Name" : "Drakéide",
	   "OV" : "Dragon Born",
	   "Strength" : 2,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 1,
	   "Speed" : 9,
	   "Languages" : ["COMMON", "DRACONIC"],
	   "Resistances" : [],
	   "SaveAdvantages" : []
		},
	  "GNOME": {
	   "Id" : "GNOME",
	   "Name" : "Gnome",
	   "OV" : "Gnome",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 2,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 7.5,
	   "Languages" : ["COMMON", "GNOME"],
	   "Resistances" : [],
	   "SaveAdvantages" : ["INT", "SAG", "CHA"]
		},
	  "TIEFFLING": {
	   "Id" : "TIEFFLING",
	   "Name" : "Tieffelin",
	   "OV" : "Tieffling",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 1,
	   "Wisdom" : 0,
	   "Charisma" : 2,
	   "Speed" : 9,
	   "Languages" : ["COMMON", "INFERNAL"],
	   "Resistances" : [],
	   "SaveAdvantages" : []
		},
	  "AARAKOCRA": {
	   "Id" : "AARAKOCRA",
	   "Name" : "Aarakocra *",
	   "OV" : "Aarakocra",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 2,
	   "Intelligence" : 0,
	   "Wisdom" : 1,
	   "Charisma" : 0,
	   "Speed" : 7.5,
	   "Languages" : ["COMMON", "AARAKOCRA", "AIR"],
	   "Resistances" : [],
	   "SaveAdvantages" : []
		},
	  "GENASI": {
	   "Id" : "GENASI",
	   "Name" : "Génasi *",
	   "OV" : "Genasi",
	   "Strength" : 0,
	   "Constitution" : 2,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 9,
	   "Languages" : ["COMMON", "PRIMARY"],
	   "Resistances" : [],
	   "SaveAdvantages" : []
		},
	  "GOLIATH": {
	   "Id" : "GOLIATH",
	   "Name" : "Goliath *",
	   "OV" : "Goliath",
	   "Strength" : 2,
	   "Constitution" : 1,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 9,
	   "Languages" : ["COMMON", "GIANT"],
	   "Resistances" : [],
	   "SaveAdvantages" : []
		}
	},
	"ServiceCategories" : {
	  "HIRING" : {
		"Code" : "HIRING",
		"Name" : "Embauche"
	  },
	  "TRANSPORT" : {
		"Code" : "TRANSPORT",
		"Name" : "Transport"
	  }
	},
	"Services" : {
	  "En ville" : {
		"Category" : "TRANSPORT",
		"Name" : "En ville",
		"Price" : "1 pc"
	  },
	  "Entre deux villes" : {
		"Category" : "TRANSPORT",
		"Name" : "Entre deux villes",
		"Price" : "3 pc par 1,5 kilomètre"
	  },
	  "Messager" : {
		"Category" : "HIRING",
		"Name" : "Messager",
		"Price" : "2 pc par 1,5 kilomètre"
	  },
	  "Non qualifié" : {
		"Category" : "HIRING",
		"Name" : "Non qualifié",
		"Price" : "2 pa par jour"
	  },
	  "Péage routier ou porte" : {
		"Category" : "TRANSPORT",
		"Name" : "Péage routier ou porte",
		"Price" : "1 pc"
	  },
	  "Qualifié" : {
		"Category" : "HIRING",
		"Name" : "Qualifié",
		"Price" : "2 po par jour"
	  },
	  "Voyage en bateau" : {
		"Category" : "TRANSPORT",
		"Name" : "Voyage en bateau",
		"Price" : "1 pa par 1,5 kilomètre"
	  }
	},
	"Ships" : {
	  "Barque" : {
		"Name" : "Barque",
		"OV" : "Rowboat",
		"Price" : 5000,
		"Speed" : "2,25 km/h"
	  },
	  "Bateau à fond plat" : {
		"Name" : "Bateau à fond plat",
		"OV" : "Keelboat",
		"Price" : 300000,
		"Speed" : "1,5 km/h"
	  },
	  "Bateau à voiles" : {
		"Name" : "Bateau à voiles",
		"OV" : "Sailing ship",
		"Price" : 1000000,
		"Speed" : "3 km/h"
	  },
	  "Drakkar" : {
		"Name" : "Drakkar",
		"OV" : "Longship",
		"Price" : 1000000,
		"Speed" : "4,5 km/h"
	  },
	  "Galère" : {
		"Name" : "Galère",
		"OV" : "Galley",
		"Price" : 3000000,
		"Speed" : "6 km/h"
	  },
	  "Navire de guerre" : {
		"Name" : "Navire de guerre",
		"OV" : "Warship",
		"Price" : 2500000,
		"Speed" : "3,75 km/h"
	  }
	},
	"Skills" : {
	  "(Dé)cryptage" : {
		"Caracteristic" : "INT",
		"Name" : "(Dé)cryptage"
	  },
	  "Acrobatie" : {
		"Caracteristic" : "DEX",
		"Name" : "Acrobatie"
	  },
	  "Ambidextrie" : {
		"Caracteristic" : "DEX",
		"Name" : "Ambidextrie"
	  },
	  "Apnée" : {
		"Caracteristic" : "CON",
		"Name" : "Apnée"
	  },
	  "Arcane" : {
		"Caracteristic" : "INT",
		"Name" : "Arcane"
	  },
	  "Arnaque" : {
		"Caracteristic" : "INT",
		"Name" : "Arnaque"
	  },
	  "Assasinat" : {
		"Caracteristic" : "DEX",
		"Name" : "Assasinat"
	  },
	  "Athlétisme" : {
		"Caracteristic" : "FOR",
		"Name" : "Athlétisme"
	  },
	  "Audition" : {
		"Caracteristic" : "SAG",
		"Name" : "Audition"
	  },
	  "Bagarre" : {
		"Caracteristic" : "FOR",
		"Name" : "Bagarre"
	  },
	  "Baratineur" : {
		"Caracteristic" : "CHA",
		"Name" : "Baratineur"
	  },
	  "Bravoure" : {
		"Caracteristic" : "CHA",
		"Name" : "Bravoure"
	  },
	  "Bricolage" : {
		"Caracteristic" : "INT",
		"Name" : "Bricolage"
	  },
	  "Brise liens" : {
		"Caracteristic" : "CON",
		"Name" : "Brise liens"
	  },
	  "Chance" : {
		"Caracteristic" : "SAG",
		"Name" : "Chance"
	  },
	  "Chasse" : {
		"Caracteristic" : "SAG",
		"Name" : "Chasse"
	  },
	  "Corruption" : {
		"Caracteristic" : "INT",
		"Name" : "Corruption"
	  },
	  "Crochetage" : {
		"Caracteristic" : "DEX",
		"Name" : "Crochetage"
	  },
	  "Cuisine" : {
		"Caracteristic" : "INT",
		"Name" : "Cuisine"
	  },
	  "Diplomatie" : {
		"Caracteristic" : "CHA",
		"Name" : "Diplomatie"
	  },
	  "Discrétion" : {
		"Caracteristic" : "DEX",
		"Name" : "Discrétion"
	  },
	  "Dissimulation" : {
		"Caracteristic" : "DEX",
		"Name" : "Dissimulation"
	  },
	  "Donjonnerie" : {
		"Caracteristic" : "INT",
		"Name" : "Donjonnerie"
	  },
	  "Dressage" : {
		"Caracteristic" : "SAG",
		"Name" : "Dressage"
	  },
	  "Déguisement" : {
		"Caracteristic" : "CHA",
		"Name" : "Déguisement"
	  },
	  "Désamorçage" : {
		"Caracteristic" : "SAG",
		"Name" : "Désamorçage"
	  },
	  "Détection d'émotions" : {
		"Caracteristic" : "SAG",
		"Name" : "Détection d'émotions"
	  },
	  "Eloquence" : {
		"Caracteristic" : "CHA",
		"Name" : "Eloquence"
	  },
	  "Equilibre" : {
		"Caracteristic" : "DEX",
		"Name" : "Equilibre"
	  },
	  "Escalade" : {
		"Caracteristic" : "CON",
		"Name" : "Escalade"
	  },
	  "Escamotage" : {
		"Caracteristic" : "DEX",
		"Name" : "Escamotage"
	  },
	  "Espionnage" : {
		"Caracteristic" : "SAG",
		"Name" : "Espionnage"
	  },
	  "Estimation" : {
		"Caracteristic" : "INT",
		"Name" : "Estimation"
	  },
	  "Etiquette" : {
		"Caracteristic" : "CON",
		"Name" : "Etiquette"
	  },
	  "Exploration" : {
		"Caracteristic" : "SAG",
		"Name" : "Exploration"
	  },
	  "Fouille" : {
		"Caracteristic" : "SAG",
		"Name" : "Fouille"
	  },
	  "Fuite" : {
		"Caracteristic" : "CON",
		"Name" : "Fuite"
	  },
	  "Géographie" : {
		"Caracteristic" : "INT",
		"Name" : "Géographie"
	  },
	  "Herboristerie" : {
		"Caracteristic" : "SAG",
		"Name" : "Herboristerie"
	  },
	  "Histoire" : {
		"Caracteristic" : "INT",
		"Name" : "Histoire"
	  },
	  "Identification" : {
		"Caracteristic" : "INT",
		"Name" : "Identification"
	  },
	  "Imitation" : {
		"Caracteristic" : "INT",
		"Name" : "Imitation"
	  },
	  "Intimidation" : {
		"Caracteristic" : "CHA",
		"Name" : "Intimidation"
	  },
	  "Intuition" : {
		"Caracteristic" : "SAG",
		"Name" : "Intuition"
	  },
	  "Investigation" : {
		"Caracteristic" : "INT",
		"Name" : "Investigation"
	  },
	  "Jeu" : {
		"Caracteristic" : "INT",
		"Name" : "Jeu"
	  },
	  "Langue" : {
		"Caracteristic" : "INT",
		"Name" : "Langue"
	  },
	  "Lecture labiale" : {
		"Caracteristic" : "SAG",
		"Name" : "Lecture labiale"
	  },
	  "Loi" : {
		"Caracteristic" : "INT",
		"Name" : "Loi"
	  },
	  "Matrise des nœuds" : {
		"Caracteristic" : "INT",
		"Name" : "Matrise des nœuds"
	  },
	  "Médecine" : {
		"Caracteristic" : "INT",
		"Name" : "Médecine"
	  },
	  "Méfiance" : {
		"Caracteristic" : "SAG",
		"Name" : "Méfiance"
	  },
	  "Mémorisation" : {
		"Caracteristic" : "INT",
		"Name" : "Mémorisation"
	  },
	  "Narcotique" : {
		"Caracteristic" : "INT",
		"Name" : "Narcotique"
	  },
	  "Natation" : {
		"Caracteristic" : "FOR",
		"Name" : "Natation"
	  },
	  "Nature" : {
		"Caracteristic" : "INT",
		"Name" : "Nature"
	  },
	  "Navigation" : {
		"Caracteristic" : "INT",
		"Name" : "Navigation"
	  },
	  "Noblesse" : {
		"Caracteristic" : "INT",
		"Name" : "Noblesse"
	  },
	  "Noyade" : {
		"Caracteristic" : "CON",
		"Name" : "Noyade"
	  },
	  "Négociation" : {
		"Caracteristic" : "CHA",
		"Name" : "Négociation"
	  },
	  "Observation" : {
		"Caracteristic" : "SAG",
		"Name" : "Observation"
	  },
	  "Odorat" : {
		"Caracteristic" : "SAG",
		"Name" : "Odorat"
	  },
	  "Orientation" : {
		"Caracteristic" : "SAG",
		"Name" : "Orientation"
	  },
	  "Perspicacité" : {
		"Caracteristic" : "SAG",
		"Name" : "Perspicacité"
	  },
	  "Persuasion" : {
		"Caracteristic" : "CHA",
		"Name" : "Persuasion"
	  },
	  "Pistage" : {
		"Caracteristic" : "SAG",
		"Name" : "Pistage"
	  },
	  "Poison" : {
		"Caracteristic" : "INT",
		"Name" : "Poison"
	  },
	  "Premiers secours" : {
		"Caracteristic" : "INT",
		"Name" : "Premiers secours"
	  },
	  "Pêche" : {
		"Caracteristic" : "SAG",
		"Name" : "Pêche"
	  },
	  "Religion" : {
		"Caracteristic" : "INT",
		"Name" : "Religion"
	  },
	  "Représentation" : {
		"Caracteristic" : "CHA",
		"Name" : "Représentation"
	  },
	  "Réflexe" : {
		"Caracteristic" : "DEX",
		"Name" : "Réflexe"
	  },
	  "Sabotage" : {
		"Caracteristic" : "SAG",
		"Name" : "Sabotage"
	  },
	  "Saut" : {
		"Caracteristic" : "FOR",
		"Name" : "Saut"
	  },
	  "Soin animaux" : {
		"Caracteristic" : "SAG",
		"Name" : "Soin animaux"
	  },
	  "Suffocation" : {
		"Caracteristic" : "CON",
		"Name" : "Suffocation"
	  },
	  "Torture" : {
		"Caracteristic" : "CON",
		"Name" : "Torture"
	  },
	  "Tromperie" : {
		"Caracteristic" : "CHA",
		"Name" : "Tromperie"
	  },
	  "Utilisation d'objets magiques" : {
		"Caracteristic" : "INT",
		"Name" : "Utilisation d'objets magiques"
	  },
	  "Vigilance" : {
		"Caracteristic" : "SAG",
		"Name" : "Vigilance"
	  }
	},
	"Specialisations" : {
	  "BERSERKER":  {
	   "Code" : "BERSERKER",
	   "Class" : "BARBARIAN",
	   "Name" : "Voie du berserker",
		"ACBonus" : 0
		},
	  "TOTEM_WARRIOR":  {
	   "Code" : "TOTEM_WARRIOR",
	   "Class" : "BARBARIAN",
	   "Name" : "Voie du guerrier totem",
		"ACBonus" : 0
		},
	  "KNOWLEDGE_SCHOOL":  {
	   "Code" : "KNOWLEDGE_SCHOOL",
	   "Class" : "BARD",
	   "Name" : "Collège du savoir",
		"ACBonus" : 0
		},
	  "BRAVERY_SCHOOL":  {
	   "Code" : "BRAVERY_SCHOOL",
	   "Class" : "BARD",
	   "Name" : "Collège de la vaillance",
		"ACBonus" : 0
		},
	  "DECEPTION_FIELD":  {
	   "Code" : "DECEPTION_FIELD",
	   "Class" : "CLERK",
	   "Name" : "Domaine de la duperie",
		"ACBonus" : 0
		},
	  "WAR_FIELD":  {
	   "Code" : "WAR_FIELD",
	   "Class" : "CLERK",
	   "Name" : "Domaine de la guerre",
		"ACBonus" : 0
		},
	  "LIGHT_FIELD":  {
	   "Code" : "LIGHT_FIELD",
	   "Class" : "CLERK",
	   "Name" : "Domaine de la lumière",
		"ACBonus" : 0
		},
	  "NATURE_FIELD":  {
	   "Code" : "NATURE_FIELD",
	   "Class" : "CLERK",
	   "Name" : "Domaine de la nature",
		"ACBonus" : 0
		},
	  "KNOWLEDGE_FIELD":  {
	   "Code" : "KNOWLEDGE_FIELD",
	   "Class" : "CLERK",
	   "Name" : "Domaine du savoir",
		"ACBonus" : 0
		},
	  "STORM_FIELD":  {
	   "Code" : "STORM_FIELD",
	   "Class" : "CLERK",
	   "Name" : "Domaine de la tempête",
		"ACBonus" : 0
		},
	  "LIFE_FIELD":  {
	   "Code" : "LIFE_FIELD",
	   "Class" : "CLERK",
	   "Name" : "Domaine de la vie",
		"ACBonus" : 0
		},
	  "STORM_FIELD":  {
	   "Code" : "STORM_FIELD",
	   "Class" : "CLERK",
	   "Name" : "Domaine de la tempête",
		"ACBonus" : 0
		},
	  "LIFE_FIELD":  {
	   "Code" : "LIFE_FIELD",
	   "Class" : "CLERK",
	   "Name" : "Domaine de la vie",
		"ACBonus" : 0
		},
	  "FORGE_FIELD":  {
	   "Code" : "FORGE_FIELD",
	   "Class" : "CLERK",
	   "Name" : "Domaine de la forge",
		"ACBonus" : 0
		},
	  "EARTH_GROUP":  {
	   "Code" : "EARTH_GROUP",
	   "Class" : "DRUID",
	   "Name" : "Cercle de la terre",
		"ACBonus" : 0
		},
	  "MOON_GROUP":  {
	   "Code" : "MOON_GROUP",
	   "Class" : "DRUID",
	   "Name" : "Cercle de la lune",
		"ACBonus" : 0
		},
	  "DRAGON_BORN":  {
	   "Code" : "DRAGON_BORN",
	   "Class" : "SORCERER",
	   "Name" : "Lignée draconique",
	   "ACBonusArmor" : false, "ACBonus" : 3
		},
	  "WILD_MAGIC":  {
	   "Code" : "WILD_MAGIC",
	   "Class" : "SORCERER",
	   "Name" : "Magie sauvage",
		"ACBonus" : 0
		},
	  "WARRIOR_ARCHERY":  {
	   "Code" : "WARRIOR_ARCHERY",
	   "Class" : "WARRIOR",
	   "Name" : "Archerie",
		"ACBonus" : 0
		},
	  "WARRIOR_TWO_HAND_WEAPON":  {
	   "Code" : "WARRIOR_TWO_HAND_WEAPON",
	   "Class" : "WARRIOR",
	   "Name" : "Arme à deux mains",
		"ACBonus" : 0
		},
	  "WARRIOR_TWO_HAND_FIGHT":  {
	   "Code" : "WARRIOR_TWO_HAND_FIGHT",
	   "Class" : "WARRIOR",
	   "Name" : "Combat à deux armes",
		"ACBonus" : 0
		},
	  "WARRIOR_DEFENSE":  {
	   "Code" : "WARRIOR_DEFENSE",
	   "Class" : "WARRIOR",
	   "Name" : "Défense",
	   "ACBonusArmor" : true, "ACBonus" : 1
		},
	  "WARRIOR_DUEL":  {
	   "Code" : "WARRIOR_DUEL",
	   "Class" : "WARRIOR",
	   "Name" : "Duel",
		"ACBonus" : 0
		},
	  "WARRIOR_DEFENSE":  {
	   "Code" : "WARRIOR_DEFENSE",
	   "Class" : "WARRIOR",
	   "Name" : "Défense",
	   "ACBonusArmor" : true, "ACBonus" : 1
		},
	  "WARRIOR_DUEL":  {
	   "Code" : "WARRIOR_DUEL",
	   "Class" : "WARRIOR",
	   "Name" : "Duel",
		"ACBonus" : 0
		},
	  "WARRIOR_PROTECTION":  {
	   "Code" : "WARRIOR_PROTECTION",
	   "Class" : "WARRIOR",
	   "Name" : "Protection",
		"ACBonus" : 0
		},
	  "RECANTATION":  {
	   "Code" : "RECANTATION",
	   "Class" : "MAGICIAN",
	   "Name" : "Abjuration",
		"ACBonus" : 0
		},
	  "DIVINATION":  {
	   "Code" : "DIVINATION",
	   "Class" : "MAGICIAN",
	   "Name" : "Divination",
		"ACBonus" : 0
		},
	  "ENCHANTMENT":  {
	   "Code" : "ENCHANTMENT",
	   "Class" : "MAGICIAN",
	   "Name" : "Enchantement",
		"ACBonus" : 0
		},
	  "EVOCATION":  {
	   "Code" : "EVOCATION",
	   "Class" : "MAGICIAN",
	   "Name" : "Evocation",
		"ACBonus" : 0
		},
	  "ILLUSUION":  {
	   "Code" : "ILLUSUION",
	   "Class" : "MAGICIAN",
	   "Name" : "Illusion",
		"ACBonus" : 0
		},
	  "INVOCATION":  {
	   "Code" : "INVOCATION",
	   "Class" : "MAGICIAN",
	   "Name" : "Invocation",
		"ACBonus" : 0
		},
	  "NECROMANCY":  {
	   "Code" : "NECROMANCY",
	   "Class" : "MAGICIAN",
	   "Name" : "Nécromancie ",
		"ACBonus" : 0
		},
	  "TRANSMUTATION":  {
	   "Code" : "TRANSMUTATION",
	   "Class" : "MAGICIAN",
	   "Name" : "Transmutation",
		"ACBonus" : 0
		},
	  "OPENED_HAND_WAY":  {
	   "Code" : "OPENED_HAND_WAY",
	   "Class" : "MONK",
	   "Name" : "Voie de la main ouverte",
		"ACBonus" : 0
		},
	  "TRANSMUTATION":  {
	   "Code" : "TRANSMUTATION",
	   "Class" : "MAGICIAN",
	   "Name" : "Transmutation",
		"ACBonus" : 0
		},
	  "OPENED_HAND_WAY":  {
	   "Code" : "OPENED_HAND_WAY",
	   "Class" : "MONK",
	   "Name" : "Voie de la main ouverte",
		"ACBonus" : 0
		},
	  "SHADOW_WAY":  {
	   "Code" : "SHADOW_WAY",
	   "Class" : "MONK",
	   "Name" : "Voie de l'ombre",
		"ACBonus" : 0
		},
	  "ELEMENTS_WAY":  {
	   "Code" : "ELEMENTS_WAY",
	   "Class" : "MONK",
	   "Name" : "Voie des quatre éléments",
		"ACBonus" : 0
		},
	  "PALADIN_TWO_HAND_WEAPON":  {
	   "Code" : "PALADIN_TWO_HAND_WEAPON",
	   "Class" : "PALADIN",
	   "Name" : "Arme à deux mains",
		"ACBonus" : 0
		},
	  "PALADIN_DEFENSE":  {
	   "Code" : "PALADIN_DEFENSE",
	   "Class" : "PALADIN",
	   "Name" : "Défense",
	   "ACBonusArmor" : true, "ACBonus" : 1
		},
	  "PALADIN_DUEL":  {
	   "Code" : "PALADIN_DUEL",
	   "Class" : "PALADIN",
	   "Name" : "Duel",
		"ACBonus" : 0
		},
	  "PALADIN_PROTECTION":  {
	   "Code" : "PALADIN_PROTECTION",
	   "Class" : "PALADIN",
	   "Name" : "Protection",
		"ACBonus" : 0
		},
	  "PROWLER_ARCHERY":  {
	   "Code" : "PROWLER_ARCHERY",
	   "Class" : "PROWLER",
	   "Name" : "Archerie",
		"ACBonus" : 0
		},
	  "PROWLER_TWO_HAND_FIGHT":  {
	   "Code" : "PROWLER_TWO_HAND_FIGHT",
	   "Class" : "PROWLER",
	   "Name" : "Combat à deux armes",
		"ACBonus" : 0
		},
	  "PROWLER_DEFENSE":  {
	   "Code" : "PROWLER_DEFENSE",
	   "Class" : "PROWLER",
	   "Name" : "Défense",
	   "ACBonusArmor" : true, "ACBonus" : 1
		},
	  "PROWLER_DUEL":  {
	   "Code" : "PROWLER_DUEL",
	   "Class" : "PROWLER",
	   "Name" : "Duel",
		"ACBonus" : 0
		},
	  "ASSASSIN":  {
	   "Code" : "ASSASSIN",
	   "Class" : "WILY",
	   "Name" : "Assassin",
		"ACBonus" : 0
		},
	  "ROBBER":  {
	   "Code" : "ROBBER",
	   "Class" : "WILY",
	   "Name" : "Voleur",
		"ACBonus" : 0
		},
	  "ARCANE_SWINDLER":  {
	   "Code" : "ARCANE_SWINDLER",
	   "Class" : "WILY",
	   "Name" : "Escroc arcanique",
		"ACBonus" : 0
		},
	  "CONSPIRATOR":  {
	   "Code" : "CONSPIRATOR",
	   "Class" : "WILY",
	   "Name" : "Conspirateur",
		"ACBonus" : 0
		},
	  "ARCHFAIRY":  {
	   "Code" : "ARCHFAIRY",
	   "Class" : "WIZARD",
	   "Name" : "Archifée",
		"ACBonus" : 0
		},
	  "FIENDISH":  {
	   "Code" : "FIENDISH",
	   "Class" : "WIZARD",
	   "Name" : "Fiélon",
		"ACBonus" : 0
		},
	  "GREAT_OLD":  {
	   "Code" : "GREAT_OLD",
	   "Class" : "WIZARD",
	   "Name" : "Grand Ancien",
		"ACBonus" : 0
		}
	},
	"Spells" : {
	  "Absorption des éléments" : {
		"BBE" : "",
		"Description" : "Le lanceur a la résistance aux dégâts reçus et inflige 1d6 dégâts extra du même type à sa prochaine attaque (dégâts/niv).",
		"Incantation" : "1 réaction",
		"Level" : 1,
		"Name" : "Absorption des éléments",
		"OV" : "Absorb Elements",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Agrandissement-Rapetissement" : {
		"BBE" : "Agrandir/Rétrécir",
		"Description" : "Double ou réduit de moitié la taille d'une créature (JdS de Con) ou d'un objet.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Agrandissement/Rapetissement",
		"OV" : "Enlarge/Reduce",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Aide" : {
		"BBE" : "",
		"Description" : "Jusqu'à 3 créatures augmentent leurs pv actuels et pv max de 5 (+5 pv/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Aide",
		"OV" : "Aid",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Alarme" : {
		"BBE" : "",
		"Description" : "Alerte le lanceur ou active une alarme si une créature de taille TP ou supérieure pénètre dans un cube surveillé de 6 m.",
		"Incantation" : "1 minute",
		"Level" : 1,
		"Name" : "Alarme",
		"OV" : "Alarm",
		"School" : "abjuration",
		"Type" : "Rituel"
	  },
	  "Allié planaire" : {
		"BBE" : "",
		"Description" : "Invoque un céleste, un élémentaire ou un fiélon qui aidera le lanceur contre paiement (1000 po/h, sacrifice, quête, etc).",
		"Incantation" : "10 minutes",
		"Level" : 6,
		"Name" : "Allié planaire",
		"OV" : "Planar Ally",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Amis" : {
		"BBE" : "",
		"Description" : "Le lanceur obtient l'avantage aux jets de Charisme contre une créature choisie qui ne lui est pas hostile.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Amis",
		"OV" : "Friends",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Amitié avec les animaux" : {
		"BBE" : "",
		"Description" : "Une bête d'Intelligence 3 ou moins doit réussir un JdS de Sag. ou être charmée (+1 bête/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Amitié avec les animaux",
		"OV" : "Animal Friendship",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Amélioration de caractéristique" : {
		"BBE" : "",
		"Description" : "La cible gagne l'avantage aux jets d'une caractéristique prédéfinie, plus d'éventuels autres bonus (+1 créature/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Amélioration de caractéristique",
		"OV" : "Enhance Ability",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Amélioration de compétences" : {
		"BBE" : "",
		"Description" : "La cible double son bonus de maîtrise pour une compétence.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Amélioration de compétences",
		"OV" : "Skill Empowerment",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Animation d'objets" : {
		"BBE" : "Animation des objets",
		"Description" : "Anime jusqu'à 10 objets non magiques et contrôle leurs actions jusqu'à 150 m (+2 objets/niv).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Animation d'objets",
		"OV" : "Animate Objects",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Animation des morts" : {
		"BBE" : "",
		"Description" : "Crée un squelette à partir d'os ou un zombi à partir d'un cadavre, qui est sous le contrôle du lanceur (+2 créatures/niv).",
		"Incantation" : "1 minute",
		"Level" : 3,
		"Name" : "Animation des morts",
		"OV" : "Animate Dead",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Apaisement des émotions" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 6 m doivent réussir un JdS de Cha. ou ne plus être charmées/effrayées, ou être indifférentes.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Apaisement des émotions",
		"OV" : "Calm Emotions",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Apparence trompeuse" : {
		"BBE" : "",
		"Description" : "Change l'apparence physique et vestimentaire de cibles (JdS si non consentante).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Apparence trompeuse",
		"OV" : "Seeming",
		"School" : "illusion",
		"Type" : ""
	  },
	  "Appel de familier" : {
		"BBE" : "",
		"Description" : "Invoque un petit animal qui obéit au lanceur du sort et qui partage ses sens avec lui par télépathie.",
		"Incantation" : "1 heure",
		"Level" : 1,
		"Name" : "Appel de familier",
		"OV" : "Find Familiar",
		"School" : "invocation",
		"Type" : "Rituel"
	  },
	  "Appel de la foudre" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 1,50 m doivent réussir un JdS de Dex. ou subir 3d10 dégâts de foudre (dégâts/niv) à chaque tour.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Appel de la foudre",
		"OV" : "Call 1_LIGHTning",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Appel de monture" : {
		"BBE" : "Trouver une monture",
		"Description" : "Invoque un esprit sous la forme d'un destrier (cheval, élan, etc) lié par télépathie au lanceur.",
		"Incantation" : "10 minutes",
		"Level" : 2,
		"Name" : "Appel de monture",
		"OV" : "Find Steed",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Appel de monture supérieure" : {
		"BBE" : "Trouver une monture supérieure",
		"Description" : "Invoque un esprit sous la forme d'un destrier (griffon, pégase, etc) lié par télépathie au lanceur.",
		"Incantation" : "10 minutes",
		"Level" : 4,
		"Name" : "Appel de monture supérieure",
		"OV" : "Find Greater Steed",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Arme magique" : {
		"BBE" : "",
		"Description" : "Transforme une arme en arme magique +1 à l'attaque et aux dégâts (bonus de +2 ou +3/niv).",
		"Incantation" : "1 action bonus",
		"Level" : 2,
		"Name" : "Arme magique",
		"OV" : "Magic Weapon",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Arme sacrée" : {
		"BBE" : "",
		"Description" : "L'arme cible brille, inflige 2d8 dégâts radiants supplémentaires et peut exploser sur un rayon de 9 m (JdS ou 4d8 radiants).",
		"Incantation" : "1 action bonus",
		"Level" : 5,
		"Name" : "Arme sacrée",
		"OV" : "Holy Weapon",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Arme spirituelle" : {
		"BBE" : "",
		"Description" : "Si l'attaque avec un sort touche, inflige 1d8+Mod.Carac dégâts de force (dégâts/niv). Une action bonus permet une autre attaque.",
		"Incantation" : "1 action bonus",
		"Level" : 2,
		"Name" : "Arme spirituelle",
		"OV" : "Spiritual Weapon",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Arme élémentaire" : {
		"BBE" : "",
		"Description" : "Une arme devient magique avec +1 aux jets d'attaque et +1d4 de dégâts extra d'un type à choisir (bonus et dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Arme élémentaire",
		"OV" : "Elemental Weapon",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Armure d'Agathys" : {
		"BBE" : "",
		"Description" : "Le lanceur gagne 5pv temporaires et une créature qui le touche au corps à corps subit 5 dégâts de froid à (+5 pv et dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Armure d'Agathys",
		"OV" : "Armor of Agathys",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Armure de mage" : {
		"BBE" : "Armure du mage",
		"Description" : "La cible, si elle est consentante et ne porte pas d'armure, obtient une CA de 13+Mod.Dex.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Armure de mage",
		"OV" : "Mage Armor",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Arrêt du temps" : {
		"BBE" : "",
		"Description" : "Arrête le temps durant 1d4+1 tours pour tout le monde sauf pour le lanceur.",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Arrêt du temps",
		"OV" : "Time Stop",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Aspersion d'acide" : {
		"BBE" : "Aspersion acide",
		"Description" : "1 ou 2 créatures dans un rayon de 1,50 m doivent réussir un JdS de Dex. ou subir 1d6 dégâts d'acide (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Aspersion d'acide",
		"OV" : "Acid Splash",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Assassin imaginaire" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Sag. ou être effrayée puis subir 4d10 dégâts psychiques (dégâts/niv) à chacun de ses tours.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Assassin imaginaire",
		"OV" : "Phantasmal Killer",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Assistance" : {
		"BBE" : "",
		"Description" : "La cible peut ajouter 1d4 à un jet de caractéristique de son choix.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Assistance",
		"OV" : "Guidance",
		"School" : "divination",
		"Type" : "Concentration"
	  },
	  "Attraction terrestre" : {
		"BBE" : "",
		"Description" : "La cible à 90 m doit réussir un JdS de For. ou sa vitesse de vol est réduite à 0 (descend à 18 m/round).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Attraction terrestre",
		"OV" : "Earthbind",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Aube" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cylindre de 9 x 12 m doivent réussir un JdS de Con. ou subir 4d10 dégâts radiants.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Aube",
		"OV" : "Dawn",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Augure" : {
		"BBE" : "",
		"Description" : "Le lanceur obtient un présage concernant le résultat d'une action dans les 30 prochaines min (fortune, péril, les deux ou rien).",
		"Incantation" : "1 minute",
		"Level" : 2,
		"Name" : "Augure",
		"OV" : "Augury",
		"School" : "divination",
		"Type" : "Rituel"
	  },
	  "Aura de pureté" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 9 m ne peuvent tomber malade, ont la résistance au poison et l'avantage à certains JdS.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Aura de pureté",
		"OV" : "Aura of Purity",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Aura de vie" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 9 m ont la résistance aux dégâts nécrotiques et regagnent automatiquement 1 pv une fois à 0 pv.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Aura de vie",
		"OV" : "Aura of Life",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Aura de vitalité" : {
		"BBE" : "",
		"Description" : "La cible dans un rayon de 9 m récupère 2d6 pv.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Aura de vitalité",
		"OV" : "Aura of Vitality",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Aura du croisé" : {
		"BBE" : "",
		"Description" : "Les créatures non hostiles dans un rayon de 9 m infligent 1d4 dégâts radiants extra lorsqu'ils touchent avec une arme.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Aura du croisé",
		"OV" : "Crusader's Mantle",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Aura magique de Nystul" : {
		"BBE" : "",
		"Description" : "Révèle de fausses informations au sujet d'une créature ou d'un objet qui serait la cible d'un sort de divination.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Aura magique de Nystul",
		"OV" : "Nystul's Magic Aura",
		"School" : "illusion",
		"Type" : ""
	  },
	  "Aura sacrée" : {
		"BBE" : "",
		"Description" : "Les cibles dans un rayon de 9 m ont l'avantage aux JdS. Les autres créatures ont un désavantage à l'attaque contre ces cibles.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Aura sacrée",
		"OV" : "Holy Aura",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Bagou" : {
		"BBE" : "",
		"Description" : "Donne 15 à un jet de Charisme et masque les mensonges lors d'une détection magique.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Bagou",
		"OV" : "Glibness",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Baies nourricières" : {
		"BBE" : "",
		"Description" : "Crée jusqu'à 10 baies qui redonnent 1 pv chacune et gardent leur pouvoir durant 24 heures.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Baies nourricières",
		"OV" : "Goodberry",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Bannissement" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Cha. ou être envoyée sur un demi-plan non-dangereux (+1 créature/niv).",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Bannissement",
		"OV" : "Banishment",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Barrière de lames" : {
		"BBE" : "",
		"Description" : "Crée un mur de 30 x 6 x 1,50 m qui confère un abri important (3/4) et peut infliger 6d10 dégâts tranchants si on le traverse.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Barrière de lames",
		"OV" : "Blade Barrier",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Blessure" : {
		"BBE" : "",
		"Description" : "Si l'attaque touche, inflige subit 3d10 dégâts nécrotiques (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Blessure",
		"OV" : "Inflict Wounds",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Bosquet des druides" : {
		"BBE" : "",
		"Description" : "Protège une zone de 27 x 27 x 27 m par un brouillard, des lianes, des arbres animés, ou autres effets.",
		"Incantation" : "10 minutes",
		"Level" : 6,
		"Name" : "Bosquet des druides",
		"OV" : "Druid Grove",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Bouche magique" : {
		"BBE" : "",
		"Description" : "Crée une bouche magique qui répétera un message de 25 mots max lorsqu'une condition de déclenchement est remplie.",
		"Incantation" : "1 minute",
		"Level" : 2,
		"Name" : "Bouche magique",
		"OV" : "Magic Mouth",
		"School" : "illusion",
		"Type" : "Rituel"
	  },
	  "Bouclier" : {
		"BBE" : "",
		"Description" : "En réaction, la lanceur gagne un bonus de +5 à la CA et ne prend aucun dégât du sort projectile magique.",
		"Incantation" : "1 réaction",
		"Level" : 1,
		"Name" : "Bouclier",
		"OV" : "0_SHIELD",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Bouclier de feu" : {
		"BBE" : "",
		"Description" : "Le lanceur obtient la résistance aux dégâts de froid ou de feu, et fait subir 2d8 dégâts aux attaquants à 1,50 m qui touchent.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Bouclier de feu",
		"OV" : "Fire 0_SHIELD",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Bouclier de la foi" : {
		"BBE" : "",
		"Description" : "La cible obtient un bonus de +2 de CA.",
		"Incantation" : "1 action bonus",
		"Level" : 1,
		"Name" : "Bouclier de la foi",
		"OV" : "0_SHIELD of Faith",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Boule de feu" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 6 m doivent réussir un JdS de Dex. ou subir 8d6 dégâts de feu (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Boule de feu",
		"OV" : "Fireball",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Boule de feu à retardement" : {
		"BBE" : "Boule de feu à explosion retardée",
		"Description" : "Les créatures dans une shpère de 6 m de rayon doivent réussir un JdS de Dex. ou subir 12d6 dégâts de feu (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Boule de feu à retardement",
		"OV" : "Delayed Blast Fireball",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Bourrasque" : {
		"BBE" : "",
		"Description" : "Les créatures sur une ligne de 18 x 3 m doivent réussir un JdS de For. ou être repoussées de 4,50 m.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Bourrasque",
		"OV" : "Gust of Wind",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Bénédiction" : {
		"BBE" : "",
		"Description" : "Jusqu'à 3 cibles peuvent ajouter 1d4 à leur jet d'attaque ou de sauvegarde (+1 créature/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Bénédiction",
		"OV" : "Bless",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Cage de force" : {
		"BBE" : "",
		"Description" : "Crée une cage de 6 m ou une boite de 3 m de force magique qui emprisonne une créature. Évasion possible par magie uniquement.",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Cage de force",
		"OV" : "Forcecage",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Cage des âmes" : {
		"BBE" : "",
		"Description" : "Vole une âme pour gagner des pv, lui poser des questions, obtenir l'avantage à un dé ou voir un lieu qu'elle connaissait.",
		"Incantation" : "1 reaction",
		"Level" : 6,
		"Name" : "Cage des âmes",
		"OV" : "Soul Cage",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Carquois magique" : {
		"BBE" : "",
		"Description" : "Fait qu'un carquois produise constamment des munitions non magiques, permettant 2 attaques par round en action bonus.",
		"Incantation" : "1 action bonus",
		"Level" : 5,
		"Name" : "Carquois magique",
		"OV" : "Swift Quiver",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Catapulte" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Dex. ou subir 3d8 dégâts contondants d'un objet de 2,5 kg max (+2,5 kg et +1d8/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Catapulte",
		"OV" : "Catapult",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Cercle de mort" : {
		"BBE" : "",
		"Description" : "Les créatures dans une sphère de 18 m de rayon doivent réussir un JdS de Con. ou subir 8d6 dégâts nécrotiques (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Cercle de mort",
		"OV" : "Circle of Death",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Cercle de pouvoir" : {
		"BBE" : "",
		"Description" : "Les créatures amicales dans un rayon de 9 m ont l'avantage aux JdS contre les sorts et autres effets magiques.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Cercle de pouvoir",
		"OV" : "Circle of Power",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Cercle de téléportation" : {
		"BBE" : "",
		"Description" : "Crée un cercle permettant à quiconque d’être téléporté vers un autre cercle de téléportation connu du lanceur.",
		"Incantation" : "1 minute",
		"Level" : 5,
		"Name" : "Cercle de téléportation",
		"OV" : "Teleportation Circle",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Cercle magique" : {
		"BBE" : "",
		"Description" : "Crée un cylindre de 6 x 6 m qui protège des célestes, élémentaires, fées, fiélons et/ou morts-vivants (+1 h/niv).",
		"Incantation" : "1 minute",
		"Level" : 3,
		"Name" : "Cercle magique",
		"OV" : "Magic Circle",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Champ antimagie" : {
		"BBE" : "",
		"Description" : "Crée une sphère de 3 m de rayon dans laquelle les sorts et les objets magiques ne fonctionnent plus.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Champ antimagie",
		"OV" : "Antimagic Field",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Changement de forme" : {
		"BBE" : "",
		"Description" : "Le lanceur prend la forme d'une créature qu'il a déjà vue d'un FP égal ou inférieur à son niveau.",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Changement de forme",
		"OV" : "Shapechange",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Changement de plan" : {
		"BBE" : "",
		"Description" : "Le lanceur et jusqu'à 8 créatures sont transportés dans un autre plan d'existence, ou une créature est bannie (JdS de Cha).",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Changement de plan",
		"OV" : "Plane Shift",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Charme-monstre" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Sag. ou être charmée par le lanceur (+1 créature/niv).",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Charme-monstre",
		"OV" : "Charm Monster",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Charme-personne" : {
		"BBE" : "",
		"Description" : "La cible humanoïde doit réussir un JdS de Sag. ou être charmée par le lanceur (+1 créature/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Charme-personne",
		"OV" : "Charm Person",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Chaîne d'éclairs" : {
		"BBE" : "",
		"Description" : "Jusqu'à 4 cibles différentes doivent réussir un JdS de Dex. ou subir 10d8 dégâts de foudre (+1 cible/niv).",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Chaîne d'éclairs",
		"OV" : "Chain 1_LIGHTning",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Chien de garde de Mordenkainen" : {
		"BBE" : "",
		"Description" : "Invoque un chien de garde invisible qui aboie à l'approche de créatures et les attaque (4d8 dégâts perforants).",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Chien de garde de Mordenkainen",
		"OV" : "Mordenkainen's Faithful Hound",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Châtiment ardent" : {
		"BBE" : "Frappe ardente",
		"Description" : "Si l'attaque touche, inflige 1d6 dégâts de feu extra et enflamme la cible (dégâts/niv).",
		"Incantation" : "1 action bonus",
		"Level" : 1,
		"Name" : "Châtiment ardent",
		"OV" : "Searing Smite",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Châtiment assommant" : {
		"BBE" : "Frappe assommante",
		"Description" : "Si l'attaque touche, inflige 4d6 dégâts psychiques extra et la cible doit réussir un JdS de Sag. ou avoir un désavantage.",
		"Incantation" : "1 action bonus",
		"Level" : 4,
		"Name" : "Châtiment assommant",
		"OV" : "Staggering Smite",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Châtiment aveuglant" : {
		"BBE" : "Frappe aveuglante",
		"Description" : "Si l'attaque touche, inflige 3d8 dégâts radiants extra et la cible doit réussir un JdS de Con. ou être aveuglée.",
		"Incantation" : "1 action bonus",
		"Level" : 3,
		"Name" : "Châtiment aveuglant",
		"OV" : "Blinding Smite",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Châtiment colérique" : {
		"BBE" : "Frappe colérique",
		"Description" : "Si l'attaque touche, inflige 1d6 dégâts psychiques extra et la cible doit réussir un JdS de Sag. ou être effrayée.",
		"Incantation" : "1 action bonus",
		"Level" : 1,
		"Name" : "Châtiment colérique",
		"OV" : "Wrathful Smite",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Châtiment de bannissement" : {
		"BBE" : "Frappe du bannissement",
		"Description" : "Si l'attaque avec une arme touche, inflige 5d10 dégâts de force extra. Une cible réduite à 50 pv ou moins est bannie.",
		"Incantation" : "1 action bonus",
		"Level" : 5,
		"Name" : "Châtiment de bannissement",
		"OV" : "Banishing Smite",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Châtiment lumineux" : {
		"BBE" : "Frappe lumineuse",
		"Description" : "Si l'attaque avec une arme touche, inflige 2d6 dégâts radiants extra et la cible émet une lumière faible sur 1,50m (dégâts/niv).",
		"Incantation" : "1 action bonus",
		"Level" : 2,
		"Name" : "Châtiment lumineux",
		"OV" : "Branding Smite",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Châtiment tonitruant" : {
		"BBE" : "Frappe tonitruante",
		"Description" : "Si l'attaque touche, inflige 2d6 dégâts de tonnerre extra, et la cible doit réussir un JdS de For. ou tomber à terre.",
		"Incantation" : "1 action bonus",
		"Level" : 1,
		"Name" : "Châtiment tonitruant",
		"OV" : "Thunderous Smite",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Clairvoyance" : {
		"BBE" : "",
		"Description" : "Crée un détecteur invisible dans un lieu familier à 1,5 km ou moins, permettant de voir ou d'entendre (au choix, modifiable).",
		"Incantation" : "10 minutes",
		"Level" : 3,
		"Name" : "Clairvoyance",
		"OV" : "Clairvoyance",
		"School" : "divination",
		"Type" : "Concentration"
	  },
	  "Clignotement" : {
		"BBE" : "",
		"Description" : "Le lanceur a 50% de chance de passer dans le plan éthéré, puis il revient dans l'espace qu'il occupait au tour suivant.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Clignotement",
		"OV" : "Blink",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Clone" : {
		"BBE" : "",
		"Description" : "Crée en 120 jours le double inerte d'une créature vivante. Si la créature originale meurt, son âme est transférée dans le clone.",
		"Incantation" : "1 heure",
		"Level" : 8,
		"Name" : "Clone",
		"OV" : "Clone",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Coffre secret de Léomund" : {
		"BBE" : "",
		"Description" : "Cache un coffre (90 x 60 x 60 cm) et son contenu dans le plan éthéré.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Coffre secret de Léomund",
		"OV" : "Leomund's Secret Chest",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Collet" : {
		"BBE" : "",
		"Description" : "Crée un piège magique (JdS de Dex. ou la créature de taille P à G est hissée en l'air).",
		"Incantation" : "1 minute",
		"Level" : 1,
		"Name" : "Collet",
		"OV" : "Snare",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Colonne de flamme" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cylindre de 6 x 12 m doivent réussir un JdS de Dex. ou subir 4d6 de feu et 4d6 radiants (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Colonne de flamme",
		"OV" : "Flame Strike",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Communication avec les animaux" : {
		"BBE" : "",
		"Description" : "Le lanceur communique avec des bêtes qui peuvent ainsi partager des informations ou aider.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Communication avec les animaux",
		"OV" : "Speak with Animals",
		"School" : "divination",
		"Type" : "Rituel"
	  },
	  "Communication avec les morts" : {
		"BBE" : "",
		"Description" : "Permet à un cadavre qui possède encore une bouche et n'est pas un mort-vivant de répondre à 5 questions du lanceur.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Communication avec les morts",
		"OV" : "Speak with Dead",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Communication avec les plantes" : {
		"BBE" : "",
		"Description" : "Le lanceur peut communiquer avec des plantes à 9 m, et transforme un terrain difficile en un terrain ordinaire ou l'inverse.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Communication avec les plantes",
		"OV" : "Speak with Plants",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Communication à distance" : {
		"BBE" : "Envoi de message",
		"Description" : "Envoie un message de 25 mots à une créature familière, quelle que soit la distance ou le plan. Elle peut y répondre.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Communication à distance",
		"OV" : "Sending",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Communion" : {
		"BBE" : "",
		"Description" : "Permet d'obtenir d'une entité divine les réponses (oui ou non) à 3 questions.",
		"Incantation" : "1 minute",
		"Level" : 5,
		"Name" : "Communion",
		"OV" : "Commune",
		"School" : "divination",
		"Type" : "Rituel"
	  },
	  "Communion avec la nature" : {
		"BBE" : "",
		"Description" : "Le lanceur obtient 3 informations sur le territoire alentour. Ne fonctionne pas dans les donjons ou les villes.",
		"Incantation" : "1 minute",
		"Level" : 5,
		"Name" : "Communion avec la nature",
		"OV" : "Commune with Nature",
		"School" : "divination",
		"Type" : "Rituel"
	  },
	  "Compréhension des langues" : {
		"BBE" : "",
		"Description" : "Le lanceur comprend toutes les langues parlées ou écrites (1 min/page). Ne décode pas les messages secrets.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Compréhension des langues",
		"OV" : "Comprehend Languages",
		"School" : "divination",
		"Type" : "Rituel"
	  },
	  "Compulsion" : {
		"BBE" : "",
		"Description" : "Les cibles à 9 m doivent réussir un JdS de Sag. ou se déplacer dans une direction indiquée.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Compulsion",
		"OV" : "Compulsion",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Confusion" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 3 m doivent réussir un JdS de Sag. ou ne plus pouvoir agir normalement (+1,50 m de rayon/niv).",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Confusion",
		"OV" : "Confusion",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Contact avec un autre plan" : {
		"BBE" : "Contacter un autre plan",
		"Description" : "Contacte une entité extérieure afin de lui poser 5 questions si un JdS d'Int. est réussi. Sinon, 6d6 dégâts psychiques.",
		"Incantation" : "1 minute",
		"Level" : 5,
		"Name" : "Contact avec un autre plan",
		"OV" : "Contact Other Plane",
		"School" : "divination",
		"Type" : "Rituel"
	  },
	  "Contact glacial" : {
		"BBE" : "",
		"Description" : "Si l'attaque avec un sort touche, inflige 1d8 dégâts nécrotiques (dégâts/niv) et la cible ne peut récupérer ses pv de suite.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Contact glacial",
		"OV" : "Chill Touch",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Contagion" : {
		"BBE" : "",
		"Description" : "Si l'attaque avec un sort touche, la cible est infectée d'une maladie à choisir parmi les 6 proposées.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Contagion",
		"OV" : "Contagion",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Contamination" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Con. ou subir 14d6 dégâts nécrotiques. Le sort ne peut pas la tuer toutefois.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Contamination",
		"OV" : "Harm",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Contrat" : {
		"BBE" : "Entrave planaire",
		"Description" : "La cible (céleste, élémentaire, fée ou fiélon) doit réussir un JdS de Cha. ou servir le lanceur (durée/niv).",
		"Incantation" : "1 heure",
		"Level" : 5,
		"Name" : "Contrat",
		"OV" : "Planar Binding",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Contresort" : {
		"BBE" : "",
		"Description" : "En réaction, fait échouer un sort de niveau 3 ou inférieur. Jet de Carac.Inc pour un sort de niveau 4 ou supérieur (seuil/niv).",
		"Incantation" : "1 réaction",
		"Level" : 3,
		"Name" : "Contresort",
		"OV" : "Counterspell",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Contrôle de l'eau" : {
		"BBE" : "",
		"Description" : "Contrôle l'eau dans un cube de 30 m (provoquer une crue, scinder l'eau, diriger le courant, créer un tourbillon).",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Contrôle de l'eau",
		"OV" : "Control Water",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Contrôle des flammes" : {
		"BBE" : "",
		"Description" : "Contrôle les feux non magiques pour les allumer, éteindre, faire grossir, faire apparaître des formes simples, etc.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Contrôle des flammes",
		"OV" : "Control Flames",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Contrôle des vents" : {
		"BBE" : "",
		"Description" : "Contrôle l'air dans un cube de 30 m et produit un effet (Rafales, Écrasement ou Ascension).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Contrôle des vents",
		"OV" : "Control Winds",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Contrôle du climat" : {
		"BBE" : "",
		"Description" : "Modifie progressivement les conditions climatiques en extérieur (précipitation, température et force du vent).",
		"Incantation" : "10 minutes",
		"Level" : 8,
		"Name" : "Contrôle du climat",
		"OV" : "Control Weather",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Convocations instantanées de Drawmij" : {
		"BBE" : "",
		"Description" : "Marque un objet de 5 kg max et permet par la suite de le téléporter dans la main du lanceur, où qu'il soit, s'il n'est pas tenu.",
		"Incantation" : "1 minute",
		"Level" : 6,
		"Name" : "Convocations instantanées de Drawmij",
		"OV" : "Drawmij's Instant Summons",
		"School" : "invocation",
		"Type" : "Rituel"
	  },
	  "Coquille antivie" : {
		"BBE" : "",
		"Description" : "Empêche les créatures autres que morts-vivants et créatures artificielles de pénétrer dans un rayon de 3 m.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Coquille antivie",
		"OV" : "Antilife Shell",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Corde enchantée" : {
		"BBE" : "",
		"Description" : "Fait se dresser verticalement une corde qui donne dans un espace extradimensionnel qui peut contenir 8 créatures de taille M.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Corde enchantée",
		"OV" : "Rope Trick",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Cordon de flèches" : {
		"BBE" : "",
		"Description" : "4 munitions infligent 1d6 dégâts perforants si la cible rate un JdS de Dex. (nbre de munitions/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Cordon de flèches",
		"OV" : "Cordon of Arrows",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Couleurs dansantes" : {
		"BBE" : "",
		"Description" : "6d10 pv de créatures sont éblouies par ordre croissant de leurs pv actuels (+2d10 pv/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Couleurs dansantes",
		"OV" : "Color Spray",
		"School" : "illusion",
		"Type" : ""
	  },
	  "Coup au but" : {
		"BBE" : "Viser juste",
		"Description" : "Le lanceur obtient l'avantage à son prochain jet d'attaque contre une cible.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Coup au but",
		"OV" : "True Strike",
		"School" : "divination",
		"Type" : "Concentration"
	  },
	  "Coup de tonnerre" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 1,50 m doivent réussir un JdS de Con. ou subir 1d6 dégâts tonnerre (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Coup de tonnerre",
		"OV" : "Thunderclap",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Couronne d'étoiles" : {
		"BBE" : "",
		"Description" : "Si l'attaque avec un sort touche, 7 atomes infligent chacun 4d12 dégâts radiants (+1 atome/niv).",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Couronne d'étoiles",
		"OV" : "Crown of Stars",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Couronne du dément" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Sag. ou être charmée. Elle peut alors attaquer une cible désignée par le lanceur.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Couronne du dément",
		"OV" : "Crown of Madness",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Couteau de glace" : {
		"BBE" : "",
		"Description" : "Si l'attaque avec un sort touche, inflige 1d10 dégâts perforants + JdS de Dex. ou 2d6 dégâts de froid (dégâts/niv) à 1,50 m.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Couteau de glace",
		"OV" : "Ice Knife",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Croissance d'épines" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 6 m (terrain difficile) subissent 2d4 dégâts perforants pour chaque 1,50 m de déplacement.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Croissance d'épines",
		"OV" : "Spike Growth",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Croissance végétale" : {
		"BBE" : "",
		"Description" : "Les plantes dans la zone croissent avec vigueur, ou sur une année les plantes produisent deux fois plus de nourriture.",
		"Incantation" : "1 action ou 8 heures",
		"Level" : 3,
		"Name" : "Croissance végétale",
		"OV" : "Plant Growth",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Création" : {
		"BBE" : "",
		"Description" : "Crée un objet non vivant fait de matières végétales ou minérales et pas plus grand qu'un cube de 1,50 m (+1,50 m/niv).",
		"Incantation" : "1 minute",
		"Level" : 5,
		"Name" : "Création",
		"OV" : "Creation",
		"School" : "illusion",
		"Type" : ""
	  },
	  "Création d'homoncule" : {
		"BBE" : "",
		"Description" : "Crée un homunculus auquel le lanceur peut transférer ses points de vie jusqu'à son prochain repos long.",
		"Incantation" : "1 heure",
		"Level" : 6,
		"Name" : "Création d'homoncule",
		"OV" : "Create Homunculus",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Création de mort-vivant" : {
		"BBE" : "",
		"Description" : "Jusqu'à 3 cadavres humanoïdes M ou P deviennent une goule qui obéit au lanceur durant 24 h (nbre et type de créatures/niv).",
		"Incantation" : "1 minute",
		"Level" : 6,
		"Name" : "Création de mort-vivant",
		"OV" : "Create Undead",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Création de nourriture et d'eau" : {
		"BBE" : "",
		"Description" : "Crée 22,5 kilos de nourriture et 120 litres d'eau, suffisant pour 15 personnes durant 24 heures.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Création de nourriture et d'eau",
		"OV" : "Create Food and Water",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Création ou destruction d'eau" : {
		"BBE" : "",
		"Description" : "Crée ou détruit jusqu'à 40 litres d'eau (+40 litres/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Création ou destruction d'eau",
		"OV" : "Create or Destroy Water",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Cécité-Surdité" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Con. ou devenir aveuglée ou assourdie (+1 créature/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Cécité/Surdité",
		"OV" : "Blindness/Deafness",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Cérémonie" : {
		"BBE" : "",
		"Description" : "Célèbre un rite religieux (bénir de l'eau, octroyer un bonus à la CA, aux JdS, au jets de carac, etc).",
		"Incantation" : "1 heure",
		"Level" : 1,
		"Name" : "Cérémonie",
		"OV" : "Ceremony",
		"School" : "abjuration",
		"Type" : "Rituel"
	  },
	  "Cône de froid" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cône de 18 m doivent réussir un JdS de Con. ou subir 8d8 dégâts de froid (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Cône de froid",
		"OV" : "Cone of Cold",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Danse Macabre" : {
		"BBE" : "",
		"Description" : "Jusqu'à 5 corps de taille M ou P deviennent des zombies ou des squelettes sous le contrôle du lanceur (+2 corps/niv).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Danse Macabre",
		"OV" : "Danse Macabre",
		"School" : "nécromancie",
		"Type" : "Concentration"
	  },
	  "Danse irrésistible d'Otto" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Sag. ou danser (désavantage aux JdS de Dex. et à l'attaque).",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Danse irrésistible d'Otto",
		"OV" : "Otto's Irresistible Dance",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Demi-plan" : {
		"BBE" : "",
		"Description" : "Crée une porte qui conduit à un demi-plan (cube de 9 m). Les créatures encore dans le demi-plan à la fin du sort sont piégées.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Demi-plan",
		"OV" : "Demiplane",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Disque flottant de Tenser" : {
		"BBE" : "",
		"Description" : "Crée un plateau flottant de 90 cm de diamètre qui peut supporter jusqu'à 250 kg et suit le lanceur.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Disque flottant de Tenser",
		"OV" : "Tenser's Floating Disk",
		"School" : "invocation",
		"Type" : "Rituel"
	  },
	  "Dissimulation" : {
		"BBE" : "Séquestration",
		"Description" : "Protège une créature consentante (qui devient invisible et inconsciente) ou un objet contre les sorts de divination.",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Dissimulation",
		"OV" : "Sequester",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Dissipation de la magie" : {
		"BBE" : "",
		"Description" : "Met fin aux sorts de niveau 3 ou inférieur sur une cible. Jet de Carac.Inc pour les sorts de niveau 4 ou supérieur (seuil/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Dissipation de la magie",
		"OV" : "Dispel Magic",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Dissipation du mal et du bien" : {
		"BBE" : "",
		"Description" : "Met fin à une condition (charmée, effrayée ou possédée) ou renvoie une créature sur son plan d'origine (JdS de Cha).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Dissipation du mal et du bien",
		"OV" : "Dispel Evil and Good",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Diversion" : {
		"BBE" : "",
		"Description" : "Jusqu'à 5 créatures sont téléportées (JdS de Sag. si non consentantes) dans un rayon de 36 m.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Diversion",
		"OV" : "Scatter",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Divination" : {
		"BBE" : "",
		"Description" : "Le lanceur obtient une réponse fiable à 1 question au sujet d'un évènement à venir dans les 7 prochains jours.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Divination",
		"OV" : "Divination",
		"School" : "divination",
		"Type" : "Rituel"
	  },
	  "Doigt de mort" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Con. ou subir 7d8+30 dégâts nécrotiques. Si elle meurt elle devient un zombi contrôlé.",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Doigt de mort",
		"OV" : "Finger of Death",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Domination d'humanoïde" : {
		"BBE" : "Dominer un humanoïde",
		"Description" : "Un humanoïde doit réussir un JdS de Sag. ou être charmé et obéir au lanceur (durée/niv).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Domination d'humanoïde",
		"OV" : "Dominate Person",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Domination de bête" : {
		"BBE" : "Dominer une bête",
		"Description" : "Une bête à 18 m doit réussir un JdS de Sag. ou être charmé et obéir au lanceur (durée/niv).",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Domination de bête",
		"OV" : "Dominate Beast",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Domination de monstre" : {
		"BBE" : "Dominer un monstre",
		"Description" : "La cible doit réussir un JdS de Sag. ou être charmée et obéir au lanceur (durée/niv).",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Domination de monstre",
		"OV" : "Dominate Monster",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Double illusoire" : {
		"BBE" : "Tromperie",
		"Description" : "Le lanceur devient invisible et crée un double qui se déplace, agit et parle. Le lanceur peut voir et entendre via ce double.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Double illusoire",
		"OV" : "Mislead",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Dragon illusoire" : {
		"BBE" : "",
		"Description" : "Les créatures qui voient le dragon illusoire de taille TG doivent réussir un JdS de Sag. ou être effrayées durant 1 min.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Dragon illusoire",
		"OV" : "Illusory Dragon",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Druidisme" : {
		"BBE" : "",
		"Description" : "Permet d'obtenir divers effets mineurs en rapport avec la nature (prévision météo, floraison, effet sensoriel, etc).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Druidisme",
		"OV" : "Druidcraft",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Duel forcé" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Sag. ou avoir un désavantage à ses jets d'attaque contre d'autres créatures que le lanceur.",
		"Incantation" : "1 action bonus",
		"Level" : 1,
		"Name" : "Duel forcé",
		"OV" : "Compelled Duel",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Déblocage" : {
		"BBE" : "",
		"Description" : "Déverrouille ou débloque 1 objet (porte, coffre, cadenas, menottes, etc) ou supprime le sort verrou magique pour 10 minutes.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Déblocage",
		"OV" : "Knock",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Décharge occulte" : {
		"BBE" : "Explosion occulte",
		"Description" : "Si l'attaque avec un sort touche, inflige 1d10 dégâts de force (nbre de rayons/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Décharge occulte",
		"OV" : "Eldritch Blast",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Déguisement" : {
		"BBE" : "",
		"Description" : "Modifie l'apparence du lanceur (son physique et son équipement) grâce à une illusion.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Déguisement",
		"OV" : "Disguise Self",
		"School" : "illusion",
		"Type" : ""
	  },
	  "Délivrance des malédictions" : {
		"BBE" : "Lever une malédiction",
		"Description" : "Met fin à toutes les malédictions affligeant une créature ou un objet.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Délivrance des malédictions",
		"OV" : "Remove Curse",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Déluge d'énergie négative" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Con. ou subir 5d12 dégâts nécrotiques. Morte, la cible devient un zombie.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Déluge d'énergie négative",
		"OV" : "Negative Energy Flood",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Désintégration" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Dex. ou subir 10d6+40 dégâts de force (dégâts/niv). Un objet de taille G est désintégré.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Désintégration",
		"OV" : "Disintegrate",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Détection de la magie" : {
		"BBE" : "",
		"Description" : "Le lanceur détecte toutes émanations magiques dans un rayon de 9 m et en détermine l'école.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Détection de la magie",
		"OV" : "Detect Magic",
		"School" : "divination",
		"Type" : "ConcentrationRituel"
	  },
	  "Détection des pensées" : {
		"BBE" : "",
		"Description" : "Le lanceur détecte les pensées superficielles d'une créature à 9 m, et les plus approfondies si la cible rate un JdS de Sag.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Détection des pensées",
		"OV" : "Detect Thoughts",
		"School" : "divination",
		"Type" : "Concentration"
	  },
	  "Détection du mal et du bien" : {
		"BBE" : "",
		"Description" : "Le lanceur détecte et localise aberration, céleste, élémentaire, fée, fiélon ou mort-vivant dans un rayon de 9 m.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Détection du mal et du bien",
		"OV" : "Detect Evil and Good",
		"School" : "divination",
		"Type" : "Concentration"
	  },
	  "Détection du poison et des maladies" : {
		"BBE" : "",
		"Description" : "Le lanceur détecte et identifie poisons, créatures venimeuses et maladies à 9 mètres.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Détection du poison et des maladies",
		"OV" : "Detect Poison and Disease",
		"School" : "divination",
		"Type" : "ConcentrationRituel"
	  },
	  "Embrasement" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cube de 1,50 m doivent réussir un JdS de Dex. ou subir 1d8 dégâts de feu (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Embrasement",
		"OV" : "Create Bonfire",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Emprisonnement" : {
		"BBE" : "",
		"Description" : "La cible à 9 m doit réussir un JdS de Sag. ou être retenue prisonnière. La forme est à choisir parmi 6 options.",
		"Incantation" : "1 minute",
		"Level" : 9,
		"Name" : "Emprisonnement",
		"OV" : "Imprisonment",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Enchevêtrement" : {
		"BBE" : "",
		"Description" : "Les créatures dans un carré de 6 m (terrain difficile) doivent réussir un JdS de For. ou être entravées.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Enchevêtrement",
		"OV" : "Entangle",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Ennemi subconscient" : {
		"BBE" : "Étrangeté",
		"Description" : "Les créatures dans un rayon de 9 m doivent réussir un JdS de Sag. ou être effrayées et subir 4d10 psychiques à leur tour.",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Ennemi subconscient",
		"OV" : "Weird",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Ennemis à foison" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS d'Int. ou ne plus pouvoir distinguer amis et ennemis ",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Ennemis à foison",
		"OV" : "Enemies Abound",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Envoûtement" : {
		"BBE" : "",
		"Description" : "Les cibles doivent réussir un JdS de Sag. ou avoir un désavantage aux jets de Sagesse (Perception) contre d'autres créatures.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Envoûtement",
		"OV" : "Enthrall",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Esprit faible" : {
		"BBE" : "",
		"Description" : "La cible subit 4d6 dégâts psychiques et doit réussir un JdS d'Int. ou son Charisme et son Intelligence tombent à 1.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Esprit faible",
		"OV" : "Feeblemind",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Esprit guérisseur" : {
		"BBE" : "",
		"Description" : "Les créatures au contact de l'esprit créé récupèrent 1d6 pv (+1d6 pv/niv).",
		"Incantation" : "1 action bonus",
		"Level" : 2,
		"Name" : "Esprit guérisseur",
		"OV" : "Healing Spirit",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Esprit impénétrable" : {
		"BBE" : "",
		"Description" : "La cible est immunisée contre les dégâts psychiques, la lecture des pensées, les sorts de divination et la condition charmé.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Esprit impénétrable",
		"OV" : "Mind Blank",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Esprits gardiens" : {
		"BBE" : "",
		"Description" : "Les cibles dans un rayon de 4,50 m doivent réussir un JdS de Sag. ou subir 3d8 dégâts radiants ou nécrotiques (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Esprits gardiens",
		"OV" : "Spirit Guardians",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Explosion de lames" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 1,50 m doivent réussir un JdS de Dex. ou subir 1d6 de force (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Explosion de lames",
		"OV" : "Sword Burst",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Fabrication" : {
		"BBE" : "",
		"Description" : "Convertit des matériaux bruts en objets simples de taille G ou inférieure de la même matière.",
		"Incantation" : "10 minutes",
		"Level" : 4,
		"Name" : "Fabrication",
		"OV" : "Fabricate",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Faim inextinguible de Hadar" : {
		"BBE" : "Appétit d'Hadar",
		"Description" : "Les créatures dans une sphère de 6 m de rayon subissent 2d6 de froid et doivent réussir un JdS de Dex. ou subir 2d6 d'acide.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Faim inextinguible de Hadar",
		"OV" : "Hunger of Hadar",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Faveur divine" : {
		"BBE" : "",
		"Description" : "Si une attaque avec une arme touche, inflige 1d4 dégâts radiants extra.",
		"Incantation" : "1 action bonus",
		"Level" : 1,
		"Name" : "Faveur divine",
		"OV" : "Divine Favor",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Façonnage de l'eau" : {
		"BBE" : "Modeler l'eau",
		"Description" : "Contrôle l'eau pour obtenir divers effets mineurs comme changer sa couleur, la faire geler, changer le sens du courant, etc.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Façonnage de l'eau",
		"OV" : "Shape Water",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Façonnage de la pierre" : {
		"BBE" : "",
		"Description" : "Donne à un bloc de pierre de 1,50 m de côté n'importe quelle forme, ou y crée une ouverture.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Façonnage de la pierre",
		"OV" : "Stone Shape",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Façonnage de la terre" : {
		"BBE" : "Modeler la terre",
		"Description" : "Contrôle la terre où la pierre pour la creuser, créer des formes, la transformer en terrain difficile, etc.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Façonnage de la terre",
		"OV" : "Mold Earth",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Festin des héros" : {
		"BBE" : "",
		"Description" : "Produit un festin pour 12 convives qui guérit des maladies, immunise au poison et augmente les pv de 2d10 durant 24h.",
		"Incantation" : "10 minutes",
		"Level" : 6,
		"Name" : "Festin des héros",
		"OV" : "Heroes' Feast",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Feuille morte" : {
		"BBE" : "Léger comme une plume",
		"Description" : "Jusqu'à 5 créatures tombent à une vitesse de 18 mètres par round et ne subissent pas de dégâts de chute si le sort est actif.",
		"Incantation" : "1 réaction",
		"Level" : 1,
		"Name" : "Feuille morte",
		"OV" : "Feather Fall",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Flambée d'Aganazzar" : {
		"BBE" : "",
		"Description" : "Les créatures sur une ligne de 9 x 1,50 m doivent réussir un JdS de Dex. ou subir 3d8 dégâts de feu (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Flambée d'Aganazzar",
		"OV" : "Aganazzar's Scorcher",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Flamme sacrée" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Dex. ou subir 1d8 dégâts radiant (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Flamme sacrée",
		"OV" : "Sacred Flame",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Flamme éternelle" : {
		"BBE" : "",
		"Description" : "Crée une flamme qui produit une lumière équivalente à celle d'une torche, mais qui ne dégage aucune chaleur.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Flamme éternelle",
		"OV" : "Continual Flame",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Flou" : {
		"BBE" : "",
		"Description" : "Le corps du lanceur devient flou et les créatures qui l'attaquent ont un désavantage au jet d'attaque contre lui.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Flou",
		"OV" : "Blur",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Flèche acide de Melf" : {
		"BBE" : "",
		"Description" : "Si l'attaque avec un sort touche, inflige 4d4 dégâts d'acide, puis 2d4 dégâts d'acide au round suivant (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Flèche acide de Melf",
		"OV" : "Melf's Acid Arrow",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Flèche de foudre" : {
		"BBE" : "",
		"Description" : "Si l'attaque touche, inflige 4d8 de foudre. Les créatures à 3 m ou moins doivent réussir un JdS de Dex. ou subir 2d8 de foudre.",
		"Incantation" : "1 action bonus",
		"Level" : 3,
		"Name" : "Flèche de foudre",
		"OV" : "1_LIGHTning Arrow",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Flèches enflammées" : {
		"BBE" : "",
		"Description" : "12 flèches/carreaux infligent 1d6 dégâts de feu extra (+2 munitions/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Flèches enflammées",
		"OV" : "Flame Arrows",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Fléau" : {
		"BBE" : "",
		"Description" : "Jusqu'à 3 cibles doivent réussir un JdS de Cha. ou soustraire 1d4 à l'attaque ou à la sauvegarde (+1 créature/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Fléau",
		"OV" : "Bane",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Fléau d'insectes" : {
		"BBE" : "",
		"Description" : "Les créatures dans une sphère de 6 m de rayon doivent réussir un JdS de Con. ou subir 4d10 dégâts perforants (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Fléau d'insectes",
		"OV" : "Insect Plague",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Fléau élémentaire" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Con. ou subir 2d6 dégâts extra d'un type de dégâts spécifique (+1 cible/niv).",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Fléau élémentaire",
		"OV" : "Elemental Bane",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Flétrissement" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Con. ou subir 8d8 dégâts nécrotiques (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Flétrissement",
		"OV" : "B1_LIGHT",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Flétrissure épouvantable d'Abi-Dalzim" : {
		"BBE" : "Épouvantable flétrissure d'Abi-Dalzim",
		"Description" : "Les créatures dans un cube de 9 m doivent réussir un JdS de Con. ou subir 12d8 dégâts nécrotiques. Les plantes meurent.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Flétrissure épouvantable d'Abi-Dalzim",
		"OV" : "Abi-Dalzim's Horrid Wilting",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Force fantasmagorique" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS d'Int. ou percevoir comme réel un objet ou une créature crée par le lanceur (avec son).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Force fantasmagorique",
		"OV" : "Phantasmal Force",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Forme gazeuse" : {
		"BBE" : "",
		"Description" : "La cible se transforme en nuage, obtient une vitesse de vol de 3 m et peut passer par de petits trous.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Forme gazeuse",
		"OV" : "Gaseous Form",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Forme éthérée" : {
		"BBE" : "",
		"Description" : "Le lanceur est projetté dans le plan éthéré (nbre de créatures/niv).",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Forme éthérée",
		"OV" : "Etherealness",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Formes animales" : {
		"BBE" : "",
		"Description" : "Les cibles consentantes à 9 m se transforment en bêtes de FP 4 ou inférieur.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Formes animales",
		"OV" : "Animal Shapes",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Forteresse majestueuse" : {
		"BBE" : "",
		"Description" : "Fait apparaitre une forteresse de pierre sur une surface de 36 x 36 m pour 7 jours.",
		"Incantation" : "1 minute",
		"Level" : 8,
		"Name" : "Forteresse majestueuse",
		"OV" : "Mighty Fortress",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Fou rire de Tasha" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Sag. ou être prise d'une intense crise de fou rire, tomber à terre et être incapable d'agir.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Fou rire de Tasha",
		"OV" : "Tasha's Hideous Laughter",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Fouet foudroyant" : {
		"BBE" : "Fouet électrique",
		"Description" : "La cible doit réussir un JdS de For. ou subir 1d8 dégâts de foudre (dégâts/niv) et être poussée de 3 m.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Fouet foudroyant",
		"OV" : "1_LIGHTning Lure",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Fouet épineux" : {
		"BBE" : "",
		"Description" : "Si l'attaque touche, inflige 1d6 dégâts perforant et tire la cible (taille G max) sur 3 m (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Fouet épineux",
		"OV" : "Thorn Whip",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Fracassement" : {
		"BBE" : "Briser",
		"Description" : "Les créatures dans une sphère de 3 m de rayon doivent réussir un JdS de Con. ou subir 3d8 dégâts de tonnerre (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Fracassement",
		"OV" : "Shatter",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Frappe du vent d'acier" : {
		"BBE" : "",
		"Description" : "Si l'attaque avec un sort touche, inflige 6d10 dégâts de force à 5 créatures, puis le lanceur se téléporte.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Frappe du vent d'acier",
		"OV" : "Steel Wind Strike",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Frappe du zéphyr" : {
		"BBE" : "",
		"Description" : "Le mouvement du lanceur (+9 m) ne provoque pas d'AO et il obtient l'avantage à un jet d'attaque qui inflige 1d8 de force extra.",
		"Incantation" : "1 action bonus",
		"Level" : 1,
		"Name" : "Frappe du zéphyr",
		"OV" : "Zephyr Strike",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Frappe piégeante" : {
		"BBE" : "Frappe piégeuse",
		"Description" : "La cible doit réussir un JdS de For. ou être entravée et subir 1d6 dégâts perforants (dégâts/niv).",
		"Incantation" : "1 action bonus",
		"Level" : 1,
		"Name" : "Frappe piégeante",
		"OV" : "Ensnaring Strike",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Frayeur" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Sag. ou être effrayée (nbre de cibles/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Frayeur",
		"OV" : "Cause Fear",
		"School" : "nécromancie",
		"Type" : "Concentration"
	  },
	  "Fureur de la nature" : {
		"BBE" : "",
		"Description" : "Anime arbres, roches et plantes dans un cube de 18 x 18 x 18 m.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Fureur de la nature",
		"OV" : "Wrath of Nature",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Fusion dans la pierre" : {
		"BBE" : "",
		"Description" : "Le lanceur peut pénétrer dans la pierre.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Fusion dans la pierre",
		"OV" : "Meld into Stone",
		"School" : "transmutation",
		"Type" : "Rituel"
	  },
	  "Gardien de la foi" : {
		"BBE" : "",
		"Description" : "Les créatures hostiles dans un rayon de 3 m autour du gardien créé doivent réussir un JdS de Dex. ou subir 20 dégâts radiants.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Gardien de la foi",
		"OV" : "Guardian of Faith",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Gardien de la nature" : {
		"BBE" : "",
		"Description" : "Transforme le lanceur en Bête primaire (+3 m, vision dans le noir,...) ou en Grand arbre (+10 pv, avantage à certains jets,...).",
		"Incantation" : "1 action bonus",
		"Level" : 4,
		"Name" : "Gardien de la nature",
		"OV" : "Guardian of Nature",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Gelure" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Con. ou subir 1d6 dégâts de froid et avoir un désavantage à l'attaque (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Gelure",
		"OV" : "Frostbite",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Glas funèbre" : {
		"BBE" : "Sonner le glas",
		"Description" : "La cible doit réussir un JdS de Sag. ou subir 1d8 ou 1d12 dégâts nécrotiques (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Glas funèbre",
		"OV" : "Toll the Dead",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Globe d'invulnérabilité" : {
		"BBE" : "",
		"Description" : "Bloque les sorts de niveau 5 ou inférieur dans un rayon de 3 m (seuil/niv).",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Globe d'invulnérabilité",
		"OV" : "Globe of Invulnerability",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Glyphe de protection" : {
		"BBE" : "",
		"Description" : "Un glyphe sur un objet inflige 5d8 dégâts dans un rayon de 4,50 m (dégâts/niv) ou lance un sort niv 3 (niv/niv) si déclenché.",
		"Incantation" : "1 heure",
		"Level" : 3,
		"Name" : "Glyphe de protection",
		"OV" : "Glyph of Warding",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Gourdin magique" : {
		"BBE" : "",
		"Description" : "Rend magique une arme en bois. Ses dégâts sont des d8 et le lanceur peut utiliser sa carac d'incantation au lieu de la Force.",
		"Incantation" : "1 action bonus",
		"Level" : 0,
		"Name" : "Gourdin magique",
		"OV" : "Shillelagh",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Graisse" : {
		"BBE" : "",
		"Description" : "Les créatures dans un carré de 3 m (terrain difficile) doivent réussir un JdS de Dex. pour ne pas tomber.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Graisse",
		"OV" : "Grease",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Grande foulée" : {
		"BBE" : "",
		"Description" : "La cible obtient une vitesse augmentée de 3 m (+1 créature/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Grande foulée",
		"OV" : "Longstrider",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Grêle d'épines" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 1,50 m doivent réussir un JdS de Dex. ou subir 1d10 dégâts perforants (dégâts/niv).",
		"Incantation" : "1 action bonus",
		"Level" : 1,
		"Name" : "Grêle d'épines",
		"OV" : "Hail of Thorns",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Guérison" : {
		"BBE" : "",
		"Description" : "1 créature récupère 70 pv et est guérie des maladies, de l'aveuglement et de la surdité (+10 pv/niv).",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Guérison",
		"OV" : "Heal",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Guérison de groupe" : {
		"BBE" : "",
		"Description" : "Plusieurs créatures récupèrent un total de 700 pv et sont guéries des maladies, de l'aveuglement et de la surdité.",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Guérison de groupe",
		"OV" : "Mass Heal",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Hurlement psychique" : {
		"BBE" : "",
		"Description" : "Jusqu'à 10 créatures doivent réussir un JdS d'Int. ou subir 14d6 dégâts psychiques.",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Hurlement psychique",
		"OV" : "Psychic Scream",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Hâte" : {
		"BBE" : "",
		"Description" : "La cible voit sa vitesse doublée. Elle gagne aussi un bonus de +2 à la CA, l'avantage aux JdS de Dex. et 1 action extra.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Hâte",
		"OV" : "Haste",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Héroïsme" : {
		"BBE" : "",
		"Description" : "La cible est immunisée contre la condition effrayé et gagne Mod.Carac.Inc pv temporaires/round (+1 créatures/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Héroïsme",
		"OV" : "Heroism",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Identification" : {
		"BBE" : "",
		"Description" : "Le lanceur obtient les propriétés d'un objet magique (lien, charges) ou est informé si un sort affecte un objet ou une créature.",
		"Incantation" : "1 minute",
		"Level" : 1,
		"Name" : "Identification",
		"OV" : "Identify",
		"School" : "divination",
		"Type" : "Rituel"
	  },
	  "Illusion mineure" : {
		"BBE" : "",
		"Description" : "Crée l'illusion d'un son ou d'une image immobile pas plus grande qu'un cube de 1,50 m.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Illusion mineure",
		"OV" : "Minor Illusion",
		"School" : "illusion",
		"Type" : ""
	  },
	  "Illusion programmée" : {
		"BBE" : "",
		"Description" : "Crée l'image d'un objet ou d'une créature animée, avec sons, durant 5 min, suite à un déclencheur.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Illusion programmée",
		"OV" : "Programmed Illusion",
		"School" : "illusion",
		"Type" : ""
	  },
	  "Image majeure" : {
		"BBE" : "",
		"Description" : "Crée l'image d'un objet ou d'une créature animée, avec sons et odeurs (sans concentration/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Image majeure",
		"OV" : "Major Image",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Image miroir" : {
		"BBE" : "",
		"Description" : "Crée 3 duplicatas illusoires du lanceur qui possèdent chacun une CA de 10+Mod.Dex et sont détruits s'ils sont touchés.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Image miroir",
		"OV" : "Mirror Image",
		"School" : "illusion",
		"Type" : ""
	  },
	  "Image silencieuse" : {
		"BBE" : "",
		"Description" : "Crée l'image d'un objet ou d'une créature (sans son et de la taille d'un cube de 4,50 m max) et permet de la faire bouger.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Image silencieuse",
		"OV" : "Silent Image",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Immobilisation de monstre" : {
		"BBE" : "Immobiliser un monstre",
		"Description" : "La cible doit réussir un JdS de Sag. ou être paralysée (+1 créature/niv).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Immobilisation de monstre",
		"OV" : "Hold Monster",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Immobilisation de personne" : {
		"BBE" : "Immobiliser un humanoïde",
		"Description" : "La cible doit réussir un JdS de Sag. ou être paralysée (+1 créature/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Immobilisation de personne",
		"OV" : "Hold Person",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Immolation" : {
		"BBE" : "",
		"Description" : "La cible à 27 m doit réussir un JdS de Dex. ou subir 8d6 dégâts de feu et 4d6 dégâts de feu par la suite.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Immolation",
		"OV" : "Immolation",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Infestation" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Con. ou subir 1d6 dégâts de poison et se déplacer de 1,50 m au hasard (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Infestation",
		"OV" : "Infestation",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Injonction" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Sag. ou suivre votre ordre comme Approche, Lâche, Fuis, Tombe, Halte, etc (+1 créature/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Injonction",
		"OV" : "Command",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Insecte géant" : {
		"BBE" : "",
		"Description" : "Transforme des insectes (de 10 mille-pattes à 1 scorpion) en créatures géantes qui obéissent aux ordres du lanceur.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Insecte géant",
		"OV" : "Giant Insect",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Interdiction" : {
		"BBE" : "",
		"Description" : "Empêche de se téléporter dans la zone protégée et inflige 5d10 dégâts radiants ou nécrotiques à certains types de créatures.",
		"Incantation" : "10 minutes",
		"Level" : 6,
		"Name" : "Interdiction",
		"OV" : "Forbiddance",
		"School" : "abjuration",
		"Type" : "Rituel"
	  },
	  "Inversion de la gravité" : {
		"BBE" : "",
		"Description" : "Inverse la gravité dans un cylindre de 30 x 30 m.",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Inversion de la gravité",
		"OV" : "Reverse Gravity",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Invisibilité" : {
		"BBE" : "",
		"Description" : "La cible devient invisible 1 heure ou jusqu'à ce qu'elle attaque ou lance un sort (+1 créature/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Invisibilité",
		"OV" : "Invisibility",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Invisibilité supérieure" : {
		"BBE" : "",
		"Description" : "La cible devient invisible durant 1 minute.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Invisibilité supérieure",
		"OV" : "Greater Invisibility",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Invocation d'animaux" : {
		"BBE" : "Invoquer des animaux",
		"Description" : "Invoque de 1 bête FP 2 à 8 bêtes FP 1/4 amicales (nbre de créatures/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Invocation d'animaux",
		"OV" : "Conjure Animals",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Invocation d'élémentaire" : {
		"BBE" : "Invoquer un élémentaire",
		"Description" : "Invoque 1 élémentaire FP 5 amical (FP +1/niv).",
		"Incantation" : "1 minute",
		"Level" : 5,
		"Name" : "Invocation d'élémentaire",
		"OV" : "Conjure Elemental",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Invocation d'élémentaires mineurs" : {
		"BBE" : "Invoquer des élémentaires mineurs",
		"Description" : "Invoque de 1 élémentaire FP 2 à 8 élémentaires FP 1/4 amicaux (nbre de créatures/niv).",
		"Incantation" : "1 minute",
		"Level" : 4,
		"Name" : "Invocation d'élémentaires mineurs",
		"OV" : "Conjure Minor Elementals",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Invocation d'êtres des bois" : {
		"BBE" : "Invoquer des êtres des bois",
		"Description" : "Invoque de 1 fée FP 2 à 8 fées FP 1/4 amicales (nbre de créatures/niv).",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Invocation d'êtres des bois",
		"OV" : "Conjure Woodland Beings",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Invocation de céleste" : {
		"BBE" : "Invoquer un céleste",
		"Description" : "Invoque 1 céleste FP 4 amical (FP +1/niv).",
		"Incantation" : "1 minute",
		"Level" : 7,
		"Name" : "Invocation de céleste",
		"OV" : "Conjure Celestial",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Invocation de démon supérieur" : {
		"BBE" : "",
		"Description" : "Invoque de 1 démon FP 5 qui obéit aux ordres du lanceur (FP +1/niv).",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Invocation de démon supérieur",
		"OV" : "Summon Greater Demon",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Invocation de démons inférieurs" : {
		"BBE" : "",
		"Description" : "Invoque de 2 démons FP 1 à 8 démons FP 1/4 hostiles (nbre de créatures/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Invocation de démons inférieurs",
		"OV" : "Summon Lesser Demons",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Invocation de fée" : {
		"BBE" : "Invoquer une fée",
		"Description" : "Invoque 1 fée FP 6 amicale (FP +1/niv).",
		"Incantation" : "1 minute",
		"Level" : 6,
		"Name" : "Invocation de fée",
		"OV" : "Conjure Fey",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Invocation de tir de barrage" : {
		"BBE" : "Invoquer un tir de barrage",
		"Description" : "Les créatures dans un cône de 18 m doivent réussir un JdS de Dex. ou subir 3d8 dégâts de l'arme/la munition utilisée.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Invocation de tir de barrage",
		"OV" : "Conjure Barrage",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Invocation de volée de projectiles" : {
		"BBE" : "Invoquer une volée de projectiles",
		"Description" : "Les créatures dans un cylindre de 12 x 6 m doivent réussir un JdS de Dex. ou subir 8d8 dégâts de l'arme/la munition choisie.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Invocation de volée de projectiles",
		"OV" : "Conjure Volley",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Invocation infernale" : {
		"BBE" : "",
		"Description" : "Invoque 1 diable FP 6 hostile (+1 FP/niv)",
		"Incantation" : "1 minute",
		"Level" : 5,
		"Name" : "Invocation infernale",
		"OV" : "Infernal Calling",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Invulnérabilité" : {
		"BBE" : "",
		"Description" : "Le lanceur gagne l'immunité à tous les dégàts.",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Invulnérabilité",
		"OV" : "Invulnerability",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Labyrinthe" : {
		"BBE" : "",
		"Description" : "Bannit une créature dans un demi-plan labyrinthique. Jet d'Intelligence pour s'évader avant la fin du sort.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Labyrinthe",
		"OV" : "Maze",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Lame aux flammes vertes" : {
		"BBE" : "",
		"Description" : "Si une attaque avec une arme touche, inflige aussi des dégâts de feu égaux au Mod.Carac.Inc à une autre créature (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Lame aux flammes vertes",
		"OV" : "Green-Flame Blade",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Lame d'ombres" : {
		"BBE" : "",
		"Description" : "Crée une arme qui inflige 2d8 dégâts psychiques avec les propriétés finesse, légère et lancer (dégâts/niv).",
		"Incantation" : "1 action bonus",
		"Level" : 2,
		"Name" : "Lame d'ombres",
		"OV" : "Shadow Blade",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Lame de feu" : {
		"BBE" : "",
		"Description" : "Si l'attaque avec un sort touche, inflige 3d6 dégâts de feu (dégâts/niv). Émet une lumière vive sur 3 m et faible sur 3 m extra.",
		"Incantation" : "1 action bonus",
		"Level" : 2,
		"Name" : "Lame de feu",
		"OV" : "Flame Blade",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Lame tonnante" : {
		"BBE" : "",
		"Description" : "Si une attaque avec une arme touche, inflige 1d8 dégâts de tonnerre si la cible bouge (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Lame tonnante",
		"OV" : "Booming Blade",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Langues" : {
		"BBE" : "",
		"Description" : "La cible comprend et parle toutes les langues parlées qu'elle entend.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Langues",
		"OV" : "Tongues",
		"School" : "divination",
		"Type" : ""
	  },
	  "Lenteur" : {
		"BBE" : "",
		"Description" : "Jusqu'à 6 cibles doivent réussir un JdS de Sag. ou avoir leur vitesse et leurs actions réduites, -2 en CA et aux JdS de Dex.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Lenteur",
		"OV" : "Slow",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Liane agrippeuse" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Dex. ou être tirée sur 6 m par la liane.",
		"Incantation" : "1 action bonus",
		"Level" : 4,
		"Name" : "Liane agrippeuse",
		"OV" : "Grasping Vine",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Liberté de mouvement" : {
		"BBE" : "",
		"Description" : "La cible n'est pas affectée dans ses mouvements par un terrain difficile, un sort ou de l'eau.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Liberté de mouvement",
		"OV" : "Freedom of Movement",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Lien avec une bête" : {
		"BBE" : "Lien avec les bêtes",
		"Description" : "Crée un lien télépathique avec une bête pour pouvoir communiquer avec elle.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Lien avec une bête",
		"OV" : "Beast Bond",
		"School" : "divination",
		"Type" : "Concentration"
	  },
	  "Lien de protection" : {
		"BBE" : "",
		"Description" : "La cible gagne +1 à la CA, +1 aux JdS et la résistance à tous les dégâts, mais le lanceur partage ses dégâts.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Lien de protection",
		"OV" : "Warding Bond",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Lien télépathique de Rary" : {
		"BBE" : "",
		"Description" : "Crée un lien télépathique entre un maximum de 8 personnes dans un rayon de 9 m pendant 1 heure.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Lien télépathique de Rary",
		"OV" : "Rary's Telepathic Bond",
		"School" : "divination",
		"Type" : "Rituel"
	  },
	  "Localisation d'animaux ou de plantes" : {
		"BBE" : "Localiser des animaux ou des plantes",
		"Description" : "Donne la direction et la distance à laquelle se trouve un type de bête ou de plante dans un rayon de 7,5 km.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Localisation d'animaux ou de plantes",
		"OV" : "Locate Animals or Plants",
		"School" : "divination",
		"Type" : "Rituel"
	  },
	  "Localisation d'objet" : {
		"BBE" : "Localiser un objet",
		"Description" : "Le lanceur sent la direction dans laquelle se trouve un objet familier, dans un rayon de 300 m.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Localisation d'objet",
		"OV" : "Locate Object",
		"School" : "divination",
		"Type" : "Concentration"
	  },
	  "Localisation de créature" : {
		"BBE" : "Localiser une créature",
		"Description" : "Le lanceur ressent la direction dans laquelle se trouve une créature familière dans un rayon de 300 m.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Localisation de créature",
		"OV" : "Locate Creature",
		"School" : "divination",
		"Type" : "Concentration"
	  },
	  "Lueur d'espoir" : {
		"BBE" : "",
		"Description" : "Les cibles gagnent l'avantage aux JdS de Sag. et aux JdS contre la mort, et récupèrent le maximum de pv lors d'une guérison.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Lueur d'espoir",
		"OV" : "Beacon of Hope",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Lueurs féeriques" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cube de 6 m doivent réussir un JdS de Dex. ou octroyer l'avantage contre elles à l'attaque.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Lueurs féeriques",
		"OV" : "Faerie Fire",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Lumière" : {
		"BBE" : "",
		"Description" : "Fait qu'un objet émette une lumière vive sur 6 m et une lumière faible sur 6 m supplémentaires.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Lumière",
		"OV" : "1_LIGHT",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Lumière du jour" : {
		"BBE" : "",
		"Description" : "Crée une sphère qui emet une lumière vive sur 18 m et une lumière faible sur 18 m supplémentaires.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Lumière du jour",
		"OV" : "Day1_LIGHT",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Lumières dansantes" : {
		"BBE" : "",
		"Description" : "Crée jusqu'à 4 lumières de la taille d'une torche qui émettent une lumière faible sur 3 m et qu'on peut déplacer jusqu'à 18 m.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Lumières dansantes",
		"OV" : "Dancing 1_LIGHTs",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Légende" : {
		"BBE" : "",
		"Description" : "Le lanceur obtient des informations sur une personne, un lieu ou un objet sous forme de contes ou d'histoires.",
		"Incantation" : "10 minutes",
		"Level" : 5,
		"Name" : "Légende",
		"OV" : "Legend Lore",
		"School" : "divination",
		"Type" : ""
	  },
	  "Lévitation" : {
		"BBE" : "",
		"Description" : "1 créature ou objet de moins de 250 kg s'élève verticalement jusqu'à 6 m et reste en lévitation.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Lévitation",
		"OV" : "Levitate",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Maelström" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 9 m doivent réussir un JdS de For. ou subir 6d6 dégâts contondants et être tirées vers le centre.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Maelström",
		"OV" : "Maelstrom",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Main de Bigby" : {
		"BBE" : "",
		"Description" : "Crée une main de taille G et de Force 26 qui peut frapper (4d8 dégâts de force), pousser, agripper ou protéger (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Main de Bigby",
		"OV" : "Bigby's Hand",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Main de mage" : {
		"BBE" : "Main du mage",
		"Description" : "Crée une main spectrale qui peut dans un rayon de 9 m manipuler un objet, ouvrir une porte, saisir un objet, etc.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Main de mage",
		"OV" : "Mage Hand",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Mains brûlantes" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cône de 4,50 m doivent réussir un JdS de Dex. ou subir 3d6 dégâts de feu (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Mains brûlantes",
		"OV" : "Burning Hands",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Malédiction" : {
		"BBE" : "Jeter une malédiction",
		"Description" : "La cible doit réussir un JdS de Sag. ou subir un effet comme un désavantage à un jet ou perdre une action (durée/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Malédiction",
		"OV" : "Bestow curse",
		"School" : "nécromancie",
		"Type" : "Concentration"
	  },
	  "Maléfice" : {
		"BBE" : "",
		"Description" : "Si une attaque touche, inflige 1d6 dégâts nécrotiques extra. Désavantage à un jet de carac choisi (durée/niv).",
		"Incantation" : "1 action bonus",
		"Level" : 1,
		"Name" : "Maléfice",
		"OV" : "Hex",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Manoir somptueux de Mordenkainen" : {
		"BBE" : "",
		"Description" : "Crée un manoir extradimensionnel qui peut abriter le lanceur et d'autres créatures et possède tout le confort.",
		"Incantation" : "1 minute",
		"Level" : 7,
		"Name" : "Manoir somptueux de Mordenkainen",
		"OV" : "Mordenkainen's Magnificent Mansion",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Marche sur l'eau" : {
		"BBE" : "",
		"Description" : "Jusqu'à 10 créatures peuvent se déplacer sur une surface liquide (eau, acide, boue, lave, etc) comme si c'était un sol normal.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Marche sur l'eau",
		"OV" : "Water Walk",
		"School" : "transmutation",
		"Type" : "Rituel"
	  },
	  "Marche sur le vent" : {
		"BBE" : "",
		"Description" : "Le lanceur et 10 créatures sont transformés en vapeur (vitesse de vol de 90 m et résistance aux dégâts d'armes non magiques).",
		"Incantation" : "1 minute",
		"Level" : 6,
		"Name" : "Marche sur le vent",
		"OV" : "Wind Walk",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Marque du chasseur" : {
		"BBE" : "",
		"Description" : "La cible subit 1d6 dégâts extra et le lanceur a l'avantage aux jets de Sagesse (Perception/Survie) pour la trouver (durée/niv).",
		"Incantation" : "1 action bonus",
		"Level" : 1,
		"Name" : "Marque du chasseur",
		"OV" : "Hunter's Mark",
		"School" : "divination",
		"Type" : "Concentration"
	  },
	  "Mauvais oeil" : {
		"BBE" : "",
		"Description" : "La cible dans un rayon de 18 m doit réussir un JdS de Sag. ou subir un des effets suivants : sommeil, panique ou fièvre.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Mauvais oeil",
		"OV" : "Eyebite",
		"School" : "nécromancie",
		"Type" : "Concentration"
	  },
	  "Message" : {
		"BBE" : "",
		"Description" : "Le lanceur murmure un message à une créature à 36 m qui sera la seule à l'entendre. Elle pourra répondre de la même façon.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Message",
		"OV" : "Message",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Messager animal" : {
		"BBE" : "",
		"Description" : "Une bête de taille TP va livrer un message de 25 mots à une cible (+48 h/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Messager animal",
		"OV" : "Animal Messenger",
		"School" : "enchantement",
		"Type" : "Rituel"
	  },
	  "Minuscules météores de Melf" : {
		"BBE" : "",
		"Description" : "Les créatures à 1,50 m doivent réussir un JdS de Dex. ou subir 2d6 dégâts de feu pour chacune des 6 météores (+2 météores/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Minuscules météores de Melf",
		"OV" : "Melf's Minute Meteors",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Mirage" : {
		"BBE" : "",
		"Description" : "Transforme l'apparence (à la vue, à l'ouïe, à l'odorat et au toucher) d'un carré de 1,5 km.",
		"Incantation" : "10 minutes",
		"Level" : 7,
		"Name" : "Mirage",
		"OV" : "Mirage Arcane",
		"School" : "illusion",
		"Type" : ""
	  },
	  "Mission" : {
		"BBE" : "Coercition mystique",
		"Description" : "La cible doit réussir un JdS de Sag. ou être charmée et subir 5d10 dégâts psychiques si elle n'obéit pas (durée/niv).",
		"Incantation" : "1 minute",
		"Level" : 5,
		"Name" : "Mission",
		"OV" : "Geas",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Modification d'apparence" : {
		"BBE" : "Modifier son apparence",
		"Description" : "Donne une nouvelle forme suivant l'option choisie (Adaptation aquatique, Changement d'apparence ou Armes naturelles).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Modification d'apparence",
		"OV" : "Alter Self",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Modification de mémoire" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Sag. ou être charmée et sa mémoire altérée (ancienneté des souvenirs/niv).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Modification de mémoire",
		"OV" : "Modify Memory",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Monture fantôme" : {
		"BBE" : "",
		"Description" : "Crée une créature semi-réelle de taille G ressemblant à un cheval et tout le nécessaire pour la monter.",
		"Incantation" : "1 minute",
		"Level" : 3,
		"Name" : "Monture fantôme",
		"OV" : "Phantom Steed",
		"School" : "illusion",
		"Type" : "Rituel"
	  },
	  "Moquerie cruelle" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Sag. ou subir 1d4 dégâts psychiques et avoir un désavantage à sa prochaine attaque (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Moquerie cruelle",
		"OV" : "Vicious Mockery",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Mort simulée" : {
		"BBE" : "Feindre la mort",
		"Description" : "La cible consentante passe pour morte auprès de toute personne ne faisant pas une inspection approfondie.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Mort simulée",
		"OV" : "Feign Death",
		"School" : "nécromancie",
		"Type" : "Rituel"
	  },
	  "Mot de guérison" : {
		"BBE" : "",
		"Description" : "1 créature récupère 1d4+Mod.Carac pv (+1d4 pv/niv).",
		"Incantation" : "1 action bonus",
		"Level" : 1,
		"Name" : "Mot de guérison",
		"OV" : "Healing Word",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Mot de guérison de groupe" : {
		"BBE" : "",
		"Description" : "Jusqu'à 6 créatures récupèrent 1d4+Mod.Carac pv (+1d4 pv/niv).",
		"Incantation" : "1 action bonus",
		"Level" : 3,
		"Name" : "Mot de guérison de groupe",
		"OV" : "Mass Healing Word",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Mot de pouvoir douloureux" : {
		"BBE" : "",
		"Description" : "La cible (100 pv max) a sa vitesse réduite à 3 m, un désavantage aux d20 et doit faire un JdS de Con. pour lancer des sorts.",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Mot de pouvoir douloureux",
		"OV" : "Power Word Pain",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Mot de pouvoir guérisseur" : {
		"BBE" : "",
		"Description" : "La cible récupère tous ses points de vie et perd les conditions charmé, effrayé, paralysé et étourdi.",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Mot de pouvoir guérisseur",
		"OV" : "Power Word Heal",
		"School" : "evocation",
		"Type" : ""
	  },
	  "Mot de pouvoir mortel" : {
		"BBE" : "",
		"Description" : "La cible (100 pv max) meurt !",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Mot de pouvoir mortel",
		"OV" : "Power Word Kill",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Mot de pouvoir étourdissant" : {
		"BBE" : "",
		"Description" : "La cible (150 pv max) est étourdie jusqu'à ce qu'elle réussisse un JdS de Con.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Mot de pouvoir étourdissant",
		"OV" : "Power Word Stun",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Mot de radiance" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 1,50 m doivent réussir un JdS de Con. ou subir 1d6 dégâts radiants (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Mot de radiance",
		"OV" : "Word of Radiance",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Mot de rappel" : {
		"BBE" : "Mot de retour",
		"Description" : "Le lanceur et jusqu'à 5 autres créatures sont téléportés dans un sanctuaire préalablement choisi.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Mot de rappel",
		"OV" : "Word of Recall",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Motif hypnotique" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cube de 9 m doivent réussir un JdS de Sag. ou être charmées et incapables d'agir, avec une vitesse de 0.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Motif hypnotique",
		"OV" : "Hypnotic Pattern",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Mur d'eau" : {
		"BBE" : "",
		"Description" : "Crée un mur d'eau de 9 m x 3 m x 30 cm qui donne un désavantage aux attaques à distance et réduit les dégâts de feu.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Mur d'eau",
		"OV" : "Wall of Water",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Mur d'épines" : {
		"BBE" : "",
		"Description" : "Crée un mur de broussailles de 18 x 3 x 1,50 m qui ralentit les mouvements et peut infliger 7d8 dégâts tranchants (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Mur d'épines",
		"OV" : "Wall of Thorns",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Mur de feu" : {
		"BBE" : "",
		"Description" : "Crée un mur de feu de 18 m x 6 m x 30 cm. Les créatures dans ou à 3 m du mur d'un côté subissent 5d8 dégâts de feu (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Mur de feu",
		"OV" : "Wall of Fire",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Mur de force" : {
		"BBE" : "",
		"Description" : "Crée un mur de force infranchissable physiquement (dix panneaux de 3 m) immunisé à tous les types de dégâts.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Mur de force",
		"OV" : "Wall of Force",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Mur de glace" : {
		"BBE" : "",
		"Description" : "Crée un mur de glace (dix panneaux de 3 m) qui peut être détruit et peut infliger 5d6 de froid si on le traverse (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Mur de glace",
		"OV" : "Wall of Ice",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Mur de lumière" : {
		"BBE" : "",
		"Description" : "Crée un mur de lumière de 18 x 3 x 1,50 m qui peut infliger 4d8 dégâts radiants à une cible à chaque tour (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Mur de lumière",
		"OV" : "Wall of 1_LIGHT",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Mur de pierre" : {
		"BBE" : "",
		"Description" : "Crée un mur de pierre non magique de (dix panneaux de 3 m) qui peut être détruit.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Mur de pierre",
		"OV" : "Wall of Stone",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Mur de sable" : {
		"BBE" : "",
		"Description" : "Crée un mur de sable de 9 x 3 x 3 m qui bloque la vue (aveuglé) mais pas les mouvements.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Mur de sable",
		"OV" : "Wall of Sand",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Mur de vent" : {
		"BBE" : "",
		"Description" : "Crée un mur de vent de 15 m x 4,50 m x 30 cm. Flèches et carreaux sont détournés.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Mur de vent",
		"OV" : "Wind Wall",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Mur prismatique" : {
		"BBE" : "",
		"Description" : "Crée un mur de plusieurs couches qui infligent des effets et dégâts différents suivant la couche.",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Mur prismatique",
		"OV" : "Prismatic Wall",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Murmures dissonants" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Sag. ou subir 3d6 dégâts psychiques et s'éloigner (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Murmures dissonants",
		"OV" : "Dissonant Whispers",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Métal brûlant" : {
		"BBE" : "Chauffer le métal",
		"Description" : "Les créatures en contact avec l'objet en métal subissent 2d8 dégâts de feu (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Métal brûlant",
		"OV" : "Heat Metal",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Métamorphose" : {
		"BBE" : "",
		"Description" : "Transforme une cible en une nouvelle forme de bête de FP/niveau au plus égal au FP/niveau de la cible.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Métamorphose",
		"OV" : "Polymorph",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Métamorphose de groupe" : {
		"BBE" : "Métamorphose de masse",
		"Description" : "Transforme jusqu'à 10 créatures en nouvelles formes de bêtes de FP/niveau au plus égal au FP/niveau de la cible.",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Métamorphose de groupe",
		"OV" : "Mass Polymorph",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Métamorphose suprême" : {
		"BBE" : "",
		"Description" : "Transforme une créature ou un objet en une nouvelle forme (créature <-> objet) de FP/niv au plus égal au FP/niv de la créa",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Métamorphose suprême",
		"OV" : "True Polymorph",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Nappe de brouillard" : {
		"BBE" : "",
		"Description" : "Rend la visibilité nulle dans une sphère de 6 m de rayon (+6 m/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Nappe de brouillard",
		"OV" : "Fog Cloud",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Non-détection" : {
		"BBE" : "",
		"Description" : "Protège une créature ou un objet de toute divination ou détection magique.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Non-détection",
		"OV" : "Nondetection",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Nuage incendiaire" : {
		"BBE" : "",
		"Description" : "Les créatures dans une sphère de 6 m de rayon doivent réussir un JdS de Dex. ou subir 10d8 dégâts de feu.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Nuage incendiaire",
		"OV" : "Incendiary Cloud",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Nuage mortel" : {
		"BBE" : "",
		"Description" : "Les créatures dans une sphère de 6 m de rayon doivent réussir un JdS de Con. ou subir 5d8 dégâts de poison (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Nuage mortel",
		"OV" : "Cloudkill",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Nuage puant" : {
		"BBE" : "",
		"Description" : "Les créatures dans une sphère de 6 m de rayon doivent réussir un JdS de Con. ou être prises de nausée et perdre leur action.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Nuage puant",
		"OV" : "Stinking Cloud",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Nuée de boules de neige de Snilloc" : {
		"BBE" : "",
		"Description" : "Les créatures dans une sphère de 1,50 m de rayon doivent réussir un JdS de Dex. ou subir 3d6 dégâts de froid (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Nuée de boules de neige de Snilloc",
		"OV" : "Snilloc's Snowball Swarm",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Nuée de dagues" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cube de 1,50 m subissent automatiquement 4d4 dégâts tranchants (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Nuée de dagues",
		"OV" : "Cloud of Daggers",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Nuée de météores" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 12 m doivent réussir un JdS de Dex. ou subir 20d6 dégâts de feu et 20d6 dégâts contondants.",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Nuée de météores",
		"OV" : "Meteor Swarm",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Oeil magique" : {
		"BBE" : "",
		"Description" : "Crée un oeil invisible avec vision dans le noir qui envoie au lanceur l'image mentale de ce qu'il voit.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Oeil magique",
		"OV" : "Arcane Eye",
		"School" : "divination",
		"Type" : "Concentration"
	  },
	  "Ombre d'égarement" : {
		"BBE" : "",
		"Description" : "Le lanceur obtient la résistance aux dommages radiants et inflige 2d8 dégâts nécrotiques aux créatures qui le touchent.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Ombre d'égarement",
		"OV" : "Shadow of Moil",
		"School" : "nécromancie",
		"Type" : "Concentration"
	  },
	  "Onde de choc" : {
		"BBE" : "Vague tonnante",
		"Description" : "Les créatures dans un cube de 4,50 m doivent réussir un JdS de Con. ou subir 2d8 dégâts de tonnerre (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Onde de choc",
		"OV" : "Thunderwave",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Orbe chromatique" : {
		"BBE" : "",
		"Description" : "Si l'attaque avec un sort touche, inflige 3d8 dégâts d'un type préalablement déterminé (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Orbe chromatique",
		"OV" : "Chromatic Orb",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Ossements de la Terre" : {
		"BBE" : "",
		"Description" : "Crée jusqu'à 6 piliers de pierre verticaux de 1,50 x 9 m (+2 piliers/niv). Possibilité d'écraser des créatures au plafond.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Ossements de la Terre",
		"OV" : "Bones of the Earth",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Parole divine" : {
		"BBE" : "",
		"Description" : "Les cibles doivent réussir un JdS de Cha. ou subir un effet (assourdi, aveuglé, etc). Certaines créatures sont bannies.",
		"Incantation" : "1 action bonus",
		"Level" : 7,
		"Name" : "Parole divine",
		"OV" : "Divine Word",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Pas brumeux" : {
		"BBE" : "",
		"Description" : "Le lanceur est téléporté jusqu'à 9 mètres.",
		"Incantation" : "1 action bonus",
		"Level" : 2,
		"Name" : "Pas brumeux",
		"OV" : "Misty Step",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Pas de tonnerre" : {
		"BBE" : "",
		"Description" : "Le lanceur se téleporte et les créatures dans un rayon de 3 m doivent réussir un JdS de Con. ou subir 3d10 dégâts de tonnerre.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Pas de tonnerre",
		"OV" : "Thunder Step",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Pas lointain" : {
		"BBE" : "",
		"Description" : "Téléporte le lanceur à 18 m à chaque round par une action bonus.",
		"Incantation" : "1 action bonus",
		"Level" : 5,
		"Name" : "Pas lointain",
		"OV" : "Far Step",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Passage par les arbres" : {
		"BBE" : "",
		"Description" : "La lanceur peut passer d'un arbre à un autre arbre de la même espèce (150 m max entre les deux) en utilisant 1,50 m.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Passage par les arbres",
		"OV" : "Tree Stride",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Passage sans trace" : {
		"BBE" : "",
		"Description" : "Le lanceur et ses alliés à 9 m ont un bonus de +10 aux jets de Dextérité (Discrétion) et ils ne laissent ni piste ni trace.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Passage sans trace",
		"OV" : "Pass without Trace",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Passe-muraille" : {
		"BBE" : "",
		"Description" : "Ouvre un passage de 1,50 x 2,50 x 6 m à travers de la pierre, du bois ou du plâtre.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Passe-muraille",
		"OV" : "Passwall",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Pattes d'araignée" : {
		"BBE" : "",
		"Description" : "La cible peut se déplacer le long de surfaces verticales tout en laissant ses mains libres et gagne une vitesse d'escalade.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Pattes d'araignée",
		"OV" : "Spider Climb",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Peau d'écorce" : {
		"BBE" : "",
		"Description" : "La cible obtient une CA de 16 minimum.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Peau d'écorce",
		"OV" : "Barkskin",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Peau de pierre" : {
		"BBE" : "",
		"Description" : "La cible obtient la résistante aux dégâts non magiques contondants, perforants et tranchants.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Peau de pierre",
		"OV" : "Stoneskin",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Perturbations synaptiques" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 6 m doivent réussir un JdS d'Int. ou subir 8d6 dégâts psychiques.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Perturbations synaptiques",
		"OV" : "Synaptic Static",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Petite hutte de Léomund" : {
		"BBE" : "",
		"Description" : "Crée un dôme de 3 m de rayon qui peut abriter et protéger 9 créatures de taille M avec le lanceur.",
		"Incantation" : "1 minute",
		"Level" : 3,
		"Name" : "Petite hutte de Léomund",
		"OV" : "Leomund's Tiny Hut",
		"School" : "évocation",
		"Type" : "Rituel"
	  },
	  "Peur" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cône de 9 m doivent réussir un JdS de Sag. ou lâcher ce qu'elles tiennent, être effrayées et s'enfuir.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Peur",
		"OV" : "Fear",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Pierre magique" : {
		"BBE" : "",
		"Description" : "Jusqu'à 3 cailloux infligent 1d6 + Mod.Carac.Inc dégâts contondant si l'attaque avec un sort touche.",
		"Incantation" : "1 action bonus",
		"Level" : 0,
		"Name" : "Pierre magique",
		"OV" : "Magic Stone",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Poigne terreuse de Maximilien" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de For. ou subir 2d6 dégâts contondants et être entravée.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Poigne terreuse de Maximilien",
		"OV" : "Maximilian's Earthen Grasp",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Poigne électrique" : {
		"BBE" : "",
		"Description" : "Si l'attaque avec un sort touche, inflige 1d8 dégâts de foudre (dégâts/niv) et la cible ne peut pas prendre de réaction.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Poigne électrique",
		"OV" : "Shocking Grasp",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Portail" : {
		"BBE" : "",
		"Description" : "Crée un portail vers un autre plan. Permet aussi d'invoquer une créature d'un autre plan.",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Portail",
		"OV" : "Gate",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Portail magique" : {
		"BBE" : "",
		"Description" : "Crée 2 portails séparés de 150 m max et permet de passer de l'un à l'autre de manière transparente.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Portail magique",
		"OV" : "Arcane Gate",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Porte dimensionnelle" : {
		"BBE" : "",
		"Description" : "Le lanceur et une autre créature de même taille sont téléportés à un maximum de 150 mètres.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Porte dimensionnelle",
		"OV" : "Dimension Door",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Prestidigitation" : {
		"BBE" : "",
		"Description" : "Tour de magie (effet sensoriel, allume une torche, nettoie un objet, réchauffe, fait apparaître un symbole, crée une babiole).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Prestidigitation",
		"OV" : "Prestidigitation",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Prison mentale" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS d'Int. ou subir 5d10 dégâts psychiques et se croire entouré par des flammes ou autre danger.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Prison mentale",
		"OV" : "Mental Prison",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Prière de guérison" : {
		"BBE" : "Prière de soins",
		"Description" : "Jusqu'à 6 créatures récupèrent 2d8+Mod.Carac pv (+1d8 pv/niv).",
		"Incantation" : "10 minutes",
		"Level" : 2,
		"Name" : "Prière de guérison",
		"OV" : "Prayer of Healing",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Production de flamme" : {
		"BBE" : "Produire une flamme",
		"Description" : "Si l'attaque avec un sort touche, inflige 1d8 dégâts de feu (dégâts/niv). Émet une lumière vive sur 3 m et faible sur 3 m extra.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Production de flamme",
		"OV" : "Produce Flame",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Projectile magique" : {
		"BBE" : "",
		"Description" : "3 projectiles infligent automatiquement 1d4+1 dégâts de force chacun à une ou plusieurs créatures (+1 projectile/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Projectile magique",
		"OV" : "Magic Missile",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Projection astrale" : {
		"BBE" : "",
		"Description" : "Le lanceur et jusqu'à 8 créatures sont projetés dans le plan Astral.",
		"Incantation" : "1 heure",
		"Level" : 9,
		"Name" : "Projection astrale",
		"OV" : "Astral Projection",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Projection d'image" : {
		"BBE" : "Image projetée",
		"Description" : "Crée un double du lanceur qui l'imite, se déplace et émet des sons. Le lanceur peut voir et entendre à travers ce double.",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Projection d'image",
		"OV" : "Project Image",
		"School" : "illusion",
		"Type" : "Concentration"
	  },
	  "Protection contre la mort" : {
		"BBE" : "",
		"Description" : "Lorsque la cible tombera pour la première fois à 0 pv, elle repassera automatiquement à 1 pv.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Protection contre la mort",
		"OV" : "Death Ward",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Protection contre le mal et le bien" : {
		"BBE" : "",
		"Description" : "La cible est protégée (désavantage à l'attaque) des aberrations, célestes, élémentaires, fées, fiélons et morts-vivants.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Protection contre le mal et le bien",
		"OV" : "Protection from Evil and Good",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Protection contre le poison" : {
		"BBE" : "",
		"Description" : "Neutralise 1 poison d'une créature, donne l'avantage aux JdS pour ne pas être empoisonné et la résistance aux dégâts de poison.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Protection contre le poison",
		"OV" : "Protection from Poison",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Protection contre les armes" : {
		"BBE" : "",
		"Description" : "Le lanceur obtient la résistance contre les dégâts contondants, tranchants et perforants infligés par des attaques avec arme.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Protection contre les armes",
		"OV" : "Blade Ward",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Protection contre une énergie" : {
		"BBE" : "Protection contre l'énergie",
		"Description" : "La cible obtient la résistance à un type de dégâts (acide, froid, feu, foudre ou tonnerre).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Protection contre une énergie",
		"OV" : "Protection from Energy",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Protection primordiale" : {
		"BBE" : "",
		"Description" : "Le lanceur obtient la résistance aux dégâts d'acide, de froid, de feu, de foudre et de tonnerre ou l'immunité à un seul type.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Protection primordiale",
		"OV" : "Primordial Ward",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Protections et sceaux" : {
		"BBE" : "",
		"Description" : "Crée une défense magique qui protège un carré de 15 m. Possibilité de définir un mot de passe pour immuniser des individus.",
		"Incantation" : "10 minutes",
		"Level" : 6,
		"Name" : "Protections et sceaux",
		"OV" : "Guards and Wards",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Prémonition" : {
		"BBE" : "",
		"Description" : "1 créature voit son futur proche, ne peut être surprise et a l'avantage à ses jets. Les attaque contre elle ont un désavantage.",
		"Incantation" : "1 minute",
		"Level" : 9,
		"Name" : "Prémonition",
		"OV" : "Foresight",
		"School" : "divination",
		"Type" : ""
	  },
	  "Préservation des morts" : {
		"BBE" : "Doux repos",
		"Description" : "Protège un cadavre du pourrissement ou de devenir un mort-vivant.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Préservation des morts",
		"OV" : "Gentle Repose",
		"School" : "nécromancie",
		"Type" : "Rituel"
	  },
	  "Prévoyance" : {
		"BBE" : "Contingence",
		"Description" : "Conditionne l'activation d'un sort de niveau 5 ou inférieur qui peut cibler le lanceur.",
		"Incantation" : "10 minutes",
		"Level" : 6,
		"Name" : "Prévoyance",
		"OV" : "Contingency",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Purification de nourriture et d'eau" : {
		"BBE" : "Purification de la nourriture et de l'eau",
		"Description" : "Purifie et enlève tous poisons et maladies de nourriture et boissons non magiques dans une sphère de 1,50 m de rayon.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Purification de nourriture et d'eau",
		"OV" : "Purify Food and Drink",
		"School" : "transmutation",
		"Type" : "Rituel"
	  },
	  "Pyrotechnie" : {
		"BBE" : "",
		"Description" : "Cible des flammes à 18 m et les fait exploser (JdS de Con. ou aveuglée) ou échapper une épaisse fumée (visibilité nulle).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Pyrotechnie",
		"OV" : "Pyrotechnics",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Pétrification" : {
		"BBE" : "",
		"Description" : "La cible à 18 m doit réussir un JdS de Con. ou être entravée, voire pétrifiée après 3 échecs.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Pétrification",
		"OV" : "Flesh to Stone",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Rafale de vent" : {
		"BBE" : "",
		"Description" : "Contrôle l'air afin de déplacer des objets ou des créatures (taille M max) ou de créer des effets sensoriels inoffensifs.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Rafale de vent",
		"OV" : "Gust",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Rappel à la vie" : {
		"BBE" : "Relever les morts",
		"Description" : "Ramène à la vie (1 pv) une créature morte depuis moins de 10 jours. Ne restaure pas les parties du corps amputées.",
		"Incantation" : "1 heure",
		"Level" : 5,
		"Name" : "Rappel à la vie",
		"OV" : "Raise Dead",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Rayon affaiblissant" : {
		"BBE" : "",
		"Description" : "Si l'attaque avec un sort touche, la cible n'inflige que la moitié des dégâts avec une arme qui utilise la Force (JdS de Con).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Rayon affaiblissant",
		"OV" : "Ray of Enfeeblement",
		"School" : "nécromancie",
		"Type" : "Concentration"
	  },
	  "Rayon ardent" : {
		"BBE" : "",
		"Description" : "Si les attaques touchent, 3 rayons infligent chacun 2d6 dégâts de feu (+1 rayon/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Rayon ardent",
		"OV" : "Scorching Ray",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Rayon de givre" : {
		"BBE" : "",
		"Description" : "Si l'attaque avec un sort touche, inflige 1d8 dégâts de froid (dégâts/niv) et la vitesse de la cible est réduite de 3 m.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Rayon de givre",
		"OV" : "Ray of Frost",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Rayon de lune" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cylindre de 3 x 12 m doivent réussir un JdS de Con. ou subir 2d10 dégâts radiants (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Rayon de lune",
		"OV" : "Moonbeam",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Rayon de soleil" : {
		"BBE" : "",
		"Description" : "Les créatures sur une ligne de 1,50 x 18 m doivent réussir un JdS de Con. ou subir 6d8 radiants et être aveuglées.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Rayon de soleil",
		"OV" : "Sunbeam",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Rayon empoisonné" : {
		"BBE" : "",
		"Description" : "Si l'attaque touche, inflige 2d8 dégâts de poison (dégâts/niv) et la cible peut être empoisonnée (JdS de Con).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Rayon empoisonné",
		"OV" : "Ray of Sickness",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Rayonnement écoeurant" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 9 m doivent réussir un JdS de Con. ou subir 4d10 dégâts radiants et un niveau d'épuisement.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Rayonnement écoeurant",
		"OV" : "Sickening Radiance",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Rayons prismatiques" : {
		"BBE" : "Embruns prismatiques",
		"Description" : "Les créatures dans un cône de 18 m doivent réussir un JdS de Dex. ou subir 10d6 dégâts d'un type déterminé au hasard.",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Rayons prismatiques",
		"OV" : "Prismatic Spray",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Raz-de-marée" : {
		"BBE" : "",
		"Description" : "Les créatures dans une zone de 9 x 3 x 3 m doivent réussir un JdS de Dex. ou subir 4d8 dégâts contondants et tomber à terre.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Raz-de-marée",
		"OV" : "Tidal Wave",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Repli expéditif" : {
		"BBE" : "",
		"Description" : "Le lanceur peut effectuer l'action Foncer en utilisant une action bonus.",
		"Incantation" : "1 action bonus",
		"Level" : 1,
		"Name" : "Repli expéditif",
		"OV" : "Expeditious Retreat",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Représailles infernales" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Dex. ou subir 2d10 dégâts de feu (dégâts/niv).",
		"Incantation" : "1 réaction",
		"Level" : 1,
		"Name" : "Représailles infernales",
		"OV" : "Hellish Rebuke",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Respiration aquatique" : {
		"BBE" : "",
		"Description" : "Jusqu'à 10 créatures obtiennent la capacité de respirer sous l'eau.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Respiration aquatique",
		"OV" : "Water Breathing",
		"School" : "transmutation",
		"Type" : "Rituel"
	  },
	  "Restauration partielle" : {
		"BBE" : "Restauration inférieure",
		"Description" : "Met fin à une maladie ou à une condition (aveuglé, assourdi, paralysé ou empoisonné) sur 1 créature.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Restauration partielle",
		"OV" : "Lesser Restoration",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Restauration supérieure" : {
		"BBE" : "",
		"Description" : "Met fin à une condition (charmé, pétrification), à une malédiction, à une réduction de carac ou de pv, ou à un niv d'épuisement.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Restauration supérieure",
		"OV" : "Greater Restoration",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Réanimation" : {
		"BBE" : "Revigorer",
		"Description" : "Ramène à 1 pv une créature morte depuis 1 minute ou moins (sauf vieillesse).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Réanimation",
		"OV" : "Revivify",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Régénération" : {
		"BBE" : "",
		"Description" : "La cible récupère 4d8+15 pv puis 1 pv par round et ses membres sectionnés repoussent.",
		"Incantation" : "1 minute",
		"Level" : 7,
		"Name" : "Régénération",
		"OV" : "Regenerate",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Réincarnation" : {
		"BBE" : "",
		"Description" : "Réincarne l'âme d'un humanoïde mort depuis 10 jours max. La race du nouveau corps est déterminée au hasard.",
		"Incantation" : "1 heure",
		"Level" : 5,
		"Name" : "Réincarnation",
		"OV" : "Reincarnate",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Réparation" : {
		"BBE" : "",
		"Description" : "Répare fissure, déchirure, fêlure d'un objet (maillon de chaîne cassé, clé brisée, accroc sur un manteau, fuite d'une gourde).",
		"Incantation" : "1 minute",
		"Level" : 0,
		"Name" : "Réparation",
		"OV" : "Mending",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Répulsion-Attirance" : {
		"BBE" : "",
		"Description" : "Attire ou répulse (JdS de Sag. pour ne pas être attiré ou effrayé) une sorte de créature désignée dans un rayon de 18 m.",
		"Incantation" : "1 heure",
		"Level" : 8,
		"Name" : "Répulsion/Attirance",
		"OV" : "Antipathy/Sympathy",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Résistance" : {
		"BBE" : "",
		"Description" : "La cible peut ajouter 1d4 à un jet de sauvegarde de son choix.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Résistance",
		"OV" : "Resistance",
		"School" : "abjuration",
		"Type" : "Concentration"
	  },
	  "Résurrection" : {
		"BBE" : "",
		"Description" : "Ramène à la vie (pv max) une créature morte depuis moins de 100 ans (sauf vieillesse). Restaure les parties du corps amputées.",
		"Incantation" : "1 heure",
		"Level" : 7,
		"Name" : "Résurrection",
		"OV" : "Resurrection",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Résurrection suprême" : {
		"BBE" : "",
		"Description" : "Ramène à la vie (pv max) une créature morte depuis moins de 200 ans (sauf vieillesse), même si le corps original n'existe plus.",
		"Incantation" : "1 heure",
		"Level" : 9,
		"Name" : "Résurrection suprême",
		"OV" : "True Resurrection",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Rêve" : {
		"BBE" : "",
		"Description" : "Façonne les rêves d'une créature qui dort et peut faire subir 3d6 dégâts psychiques en cas d'échec à un JdS de Sag.",
		"Incantation" : "1 minute",
		"Level" : 5,
		"Name" : "Rêve",
		"OV" : "Dream",
		"School" : "illusion",
		"Type" : ""
	  },
	  "Sacre de la glace" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cône de 4,50 m doivent réussir un JdS de Con. ou subir 4d6 dégâts de froid. Immunité et résistance.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Sacre de la glace",
		"OV" : "Investiture of Ice",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Sacre de la pierre" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 4,50 m doivent réussir un JdS de Dex. ou tomber à terre. Résistance et traverser la terre/pierre.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Sacre de la pierre",
		"OV" : "Investiture of Stone",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Sacre des flammes" : {
		"BBE" : "",
		"Description" : "Les créatures sur une ligne de 4,50 m doivent réussir un JdS de Dex. ou subir 4d8 dégâts de feu. Immunité et résistance.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Sacre des flammes",
		"OV" : "Investiture of Flame",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Sacre du vent" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cube de 4,50 m doivent réussir un JdS de Con. ou subir 2d10 dégâts contondants. Vitesse de vol 18 m.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Sacre du vent",
		"OV" : "Investiture of Wind",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Sanctification" : {
		"BBE" : "",
		"Description" : "Empêche célestes, élémentaires, fiélons, fées et morts-vivants d'entrer dans un rayon de 18 m et protège/handicape les cibles.",
		"Incantation" : "24 heures",
		"Level" : 5,
		"Name" : "Sanctification",
		"OV" : "Hallow",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Sanctuaire" : {
		"BBE" : "",
		"Description" : "La cible a droit à un JdS de Sag. pour éviter les attaques ou les sorts ofensifs qui la visent en particulier.",
		"Incantation" : "1 action bonus",
		"Level" : 1,
		"Name" : "Sanctuaire",
		"OV" : "Sanctuary",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Sanctuaire privé de Mordenkainen" : {
		"BBE" : "",
		"Description" : "Crée un cube sécurisé jusqu'à 30 m de côté. Le type de protection est à choisir (+30 m de côté/niv).",
		"Incantation" : "10 minutes",
		"Level" : 4,
		"Name" : "Sanctuaire privé de Mordenkainen",
		"OV" : "Mordenkainen's Private Sanctum",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Saut" : {
		"BBE" : "",
		"Description" : "La cible obtient une distance de saut multipliée par 3.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Saut",
		"OV" : "Jump",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Sauvagerie primitive" : {
		"BBE" : "",
		"Description" : "Si l'attaque au corps à corps avec un sort touche, inflige 1d10 dégâts d'acide (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Sauvagerie primitive",
		"OV" : "Primal Savagery",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Scrutation" : {
		"BBE" : "",
		"Description" : "Permet de voir et entendre une créature spécifique (on peut aussi cibler un lieu) sur le même plan (JdS de Sag).",
		"Incantation" : "10 minutes",
		"Level" : 5,
		"Name" : "Scrutation",
		"OV" : "Scrying",
		"School" : "divination",
		"Type" : "Concentration"
	  },
	  "Secousse sismique" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 3m doivent réussir un JdS de Dex. ou subir 1d6 dégâts contondants et tomber à terre (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Secousse sismique",
		"OV" : "Earth Tremor",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Sens animal" : {
		"BBE" : "",
		"Description" : "Le lanceur peut voir/entendre/sentir à travers les sens d'une bête consentante.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Sens animal",
		"OV" : "Beast Sense",
		"School" : "divination",
		"Type" : "ConcentrationRituel"
	  },
	  "Sens de l'orientation" : {
		"BBE" : "Trouver un chemin",
		"Description" : "Détermine le chemin physique le plus court et le plus direct pour atteindre une destination connue.",
		"Incantation" : "1 minute",
		"Level" : 6,
		"Name" : "Sens de l'orientation",
		"OV" : "Find the Path",
		"School" : "divination",
		"Type" : "Concentration"
	  },
	  "Sens des pièges" : {
		"BBE" : "Trouver les pièges",
		"Description" : "Le lanceur sent tous pièges dans un rayon de 36 m, mais le sort donne pas leur localisation.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Sens des pièges",
		"OV" : "Find Traps",
		"School" : "divination",
		"Type" : ""
	  },
	  "Serviteur invisible" : {
		"BBE" : "",
		"Description" : "Crée un serviteur invisible qui exécute des tâches simples (rapporter qq chose, nettoyer, entretenir un feu, servir, etc).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Serviteur invisible",
		"OV" : "Unseen Servant",
		"School" : "invocation",
		"Type" : "Rituel"
	  },
	  "Serviteur miniature" : {
		"BBE" : "",
		"Description" : "Transforme un objet de taille TP en une créature avec bras et jambes qui obéit au lanceur (+2 objets/niv).",
		"Incantation" : "1 minute",
		"Level" : 3,
		"Name" : "Serviteur miniature",
		"OV" : "Tiny Servant",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Sieste" : {
		"BBE" : "",
		"Description" : "3 créatures consentantes tombent inconcientes et bénéficient d'un repos court (+1 créature/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Sieste",
		"OV" : "Catnap",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Silence" : {
		"BBE" : "",
		"Description" : "Bloque tous les sons dans une sphère de 6m de rayon.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Silence",
		"OV" : "Silence",
		"School" : "illusion",
		"Type" : "ConcentrationRituel"
	  },
	  "Simulacre" : {
		"BBE" : "",
		"Description" : "Crée un double d'une bête ou d'un humanoïde avec les mêmes capacités, la moitié des pv et sans équipement.",
		"Incantation" : "12 heures",
		"Level" : 7,
		"Name" : "Simulacre",
		"OV" : "Simulacrum",
		"School" : "illusion",
		"Type" : ""
	  },
	  "Simulacre de vie" : {
		"BBE" : "",
		"Description" : "Le lanceur gagne 1d4+4 pv temporaires (+5 pv/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Simulacre de vie",
		"OV" : "False Life",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Soins" : {
		"BBE" : "Soin des blessures",
		"Description" : "1 créature récupère 1d8+Mod.Carac pv (+1d8 pv/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Soins",
		"OV" : "Cure Wounds",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Soins de groupe" : {
		"BBE" : "Soin des blessures de groupe",
		"Description" : "Jusqu'à 6 créatures récupèrent 3d8+Mod.Carac.Inc pv (+1d8 pv/niv).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Soins de groupe",
		"OV" : "Mass Cure Wounds",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Sommeil" : {
		"BBE" : "",
		"Description" : "5d8 pv de créatures s'endorment, par ordre croissant de leurs pv actuels (+2d8 pv/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Sommeil",
		"OV" : "Sleep",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Souffle du dragon" : {
		"BBE" : "",
		"Description" : "Émet un cône de 4,50 m qui inflige 3d6 dégâts d'acide, froid, feu, foudre ou poison en cas d'échec à un JdS de Dex (dégâts/niv).",
		"Incantation" : "1 action bonus",
		"Level" : 2,
		"Name" : "Souffle du dragon",
		"OV" : "Dragon's Breath",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Souhait" : {
		"BBE" : "",
		"Description" : "Duplique un sort de niveau 8 ou inférieur sans composantes, ou crée un autre effet à la discrétion du MD.",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Souhait",
		"OV" : "Wish",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Sphère aqueuse" : {
		"BBE" : "",
		"Description" : "Jusqu'à 4 créatures de taille M ou 1 de taille G dans un rayon de 3 m doivent réussir un JdS de For. ou être entravées.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Sphère aqueuse",
		"OV" : "Watery Sphere",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Sphère de feu" : {
		"BBE" : "",
		"Description" : "Les créatures à 3 m d'une sphère de 3 m de diamètre doivent réussir un JdS de Dex. ou subir 2d6 dégâts de feu (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Sphère de feu",
		"OV" : "Flaming Sphere",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Sphère de tempête" : {
		"BBE" : "",
		"Description" : "Les créatures dans une sphère de 6 m de rayon doivent réussir un JdS de For. ou subir 2d6 dégâts contondants (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Sphère de tempête",
		"OV" : "Storm Sphere",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Sphère de vitriol" : {
		"BBE" : "",
		"Description" : "Les créatures à 6 m doivent réussir un JdS de Dex. ou subir 10d4 dégâts d'acide (dégâts/niv) puis 5d4 dégâts d'acide à son tour.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Sphère de vitriol",
		"OV" : "Vitriolic Sphere",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Sphère glaciale d'Otiluke" : {
		"BBE" : "Sphère glacée d'Otiluke",
		"Description" : "Les créatures dans une sphère de 18 m de rayon doivent réussir un JdS de Con. ou subir 10d6 dégâts de froid (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Sphère glaciale d'Otiluke",
		"OV" : "Otiluke's Freezing Sphere",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Sphère résiliente d'Otiluke" : {
		"BBE" : "",
		"Description" : "La cible de taille G ou inférieure doit réussir un JdS de Dex. ou être emprisonnée pour la durée du sort.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Sphère résiliente d'Otiluke",
		"OV" : "Otiluke's Resilient Sphere",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Stabilisation" : {
		"BBE" : "Épargner les mourants",
		"Description" : "1 créature vivante à 0 point de vie est immédiatement stabilisée.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Stabilisation",
		"OV" : "Spare the Dying",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Suggestion" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Sag. ou suivre la suggestion que lui donne le lanceur en une ou deux phrases.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Suggestion",
		"OV" : "Suggestion",
		"School" : "enchantement",
		"Type" : "Concentration"
	  },
	  "Suggestion de groupe" : {
		"BBE" : "",
		"Description" : "Jusqu'à 12 cibles doivent réussir un JdS de Sag. ou suivre la suggestion que leur donne le lanceur (durée/niv).",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Suggestion de groupe",
		"OV" : "Mass Suggestion",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Symbole" : {
		"BBE" : "",
		"Description" : "Défini le déclencheur et l'effet d'un glyphe sur un objet (mort, discorde, peur, désespoir, démence, douleur, sommeil, etc).",
		"Incantation" : "1 minute",
		"Level" : 7,
		"Name" : "Symbole",
		"OV" : "Symbol",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Temple des dieux" : {
		"BBE" : "",
		"Description" : "Fait apparaitre un temple dédié à un dieu sur une surface de 36 x 36 m pour 1 jour.",
		"Incantation" : "1 heure",
		"Level" : 7,
		"Name" : "Temple des dieux",
		"OV" : "Temple of the Gods",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Tempête de feu" : {
		"BBE" : "",
		"Description" : "Les créatures dans dix cubes de 3 m doivent réussir un JdS de Dex. ou subir 7d10 dégâts de feu.",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Tempête de feu",
		"OV" : "Fire Storm",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Tempête de grêle" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cylindre de 12 x 12 m doivent réussir un JdS de Dex. ou subir 2d8 dégâts contondants et 4d6 de froid.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Tempête de grêle",
		"OV" : "Ice Storm",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Tempête de neige" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cylindre de 12 x 6 m (visibilité nulle) doivent réussir un JdS de Dex. ou tomber à terre.",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Tempête de neige",
		"OV" : "Sleet Storm",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Tempête vengeresse" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 108 m doivent réussir un JdS de Con. ou être assourdies et subir divers dégâts et effets.",
		"Incantation" : "1 action",
		"Level" : 9,
		"Name" : "Tempête vengeresse",
		"OV" : "Storm of Vengeance",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Tentacules de Hadar" : {
		"BBE" : "Tentacules d'Hadar",
		"Description" : "Les créatures dans un rayon de 3 m doivent réussir un JdS de For. ou subir 2d6 dégâts nécrotiques (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Tentacules de Hadar",
		"OV" : "Arms of Hadar",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Tentacules noirs d'Evard" : {
		"BBE" : "",
		"Description" : "Les créatures dans un carré de 6 m doivent réussir un JdS de Dex. ou subir 3d6 dégâts contondants et être entravées.",
		"Incantation" : "1 action",
		"Level" : 4,
		"Name" : "Tentacules noirs d'Evard",
		"OV" : "Evard's Black Tentacles",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Terraformage" : {
		"BBE" : "Déplacer la terre",
		"Description" : "Façonne la terre, le sable ou l'argile, mais pas la pierre (élever, abaisser, aplatir, etc) d'un carré de 12 m en 10 min.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Terraformage",
		"OV" : "Move Earth",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Terrain hallucinatoire" : {
		"BBE" : "",
		"Description" : "Fait paraître un terrain naturel pour un autre type (par exemple une route devient un marais ou une crevasse).",
		"Incantation" : "10 minutes",
		"Level" : 4,
		"Name" : "Terrain hallucinatoire",
		"OV" : "Hallucinatory Terrain",
		"School" : "illusion",
		"Type" : ""
	  },
	  "Texte illusoire" : {
		"BBE" : "",
		"Description" : "Rédige un message secret qui ne peut être lu que par une cible désignée ou une créature qui possède vision véritable.",
		"Incantation" : "1 minute",
		"Level" : 1,
		"Name" : "Texte illusoire",
		"OV" : "Illusory Script",
		"School" : "illusion",
		"Type" : "Rituel"
	  },
	  "Thaumaturgie" : {
		"BBE" : "",
		"Description" : "Crée divers effets mineurs visant à impressionner ou distraire des créatures.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Thaumaturgie",
		"OV" : "Thaumaturgy",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Toile d'araignée" : {
		"BBE" : "",
		"Description" : "Crée un cube de 6 m de toiles d'araignées collantes (terrain difficile) qui peuvent entraver des créatures (JdS de Dex).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Toile d'araignée",
		"OV" : "Web",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Toucher du vampire" : {
		"BBE" : "Caresse du vampire",
		"Description" : "Si l'attaque avec un sort touche, inflige 3d6 dégâts nécrotiques (dégâts/niv) et le lanceur récupère 50% de ces pv .",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Toucher du vampire",
		"OV" : "Vampiric Touch",
		"School" : "nécromancie",
		"Type" : "Concentration"
	  },
	  "Tourbillon" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cylindre de 3 x 9 m doivent réussir un JdS de Dex. ou subir 10d6 dégâts contondants.",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Tourbillon",
		"OV" : "Whirlwind",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Tourbillon de poussière" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 1,50 m doivent réussir un JdS de For. ou subir 1d8 dégâts contondants (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Tourbillon de poussière",
		"OV" : "Dust Devil",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Trait de feu" : {
		"BBE" : "",
		"Description" : "Si l'attaque avec un sort touche, inflige 1d10 dégâts de feu (dégâts/niv). Un objet peut prendre feu.",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Trait de feu",
		"OV" : "Fire Bolt",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Transfert de vie" : {
		"BBE" : "",
		"Description" : "Le lanceur subit 4d8 dégâts nécrotiques et une autre créature récupère 2 fois le montant (+1d8 pv/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Transfert de vie",
		"OV" : "Life Transference",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Transformation de Tenser" : {
		"BBE" : "",
		"Description" : "La lanceur gagne 50 pv, l'avantage aux jets d'attaque, 2d12 extra de dégâts de force, des maîtrises martiales et deux attaques.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Transformation de Tenser",
		"OV" : "Tenser's Transformation",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Transmutation de la pierre" : {
		"BBE" : "",
		"Description" : "Transforme un cube de 12 m de roche en boue ou de boue en roche.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Transmutation de la pierre",
		"OV" : "Transmute Rock",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Transport par les plantes" : {
		"BBE" : "Transport végétal",
		"Description" : "Le lanceur peut passer d'une plante à une autre plante (taille G ou supérieure) en utilisant 1,50 m.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Transport par les plantes",
		"OV" : "Transport via Plants",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Tremblement de terre" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 30 m doivent réussir un JdS de Dex. ou tomber à terre. Cause des dégâts aux structures.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Tremblement de terre",
		"OV" : "Earthquake",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Tsunami" : {
		"BBE" : "",
		"Description" : "Les créatures dans une zone de 90 x 90 x 15 m doivent réussir un JdS de For. ou subir 6d10 dégâts contondants.",
		"Incantation" : "1 minute",
		"Level" : 8,
		"Name" : "Tsunami",
		"OV" : "Tsunami",
		"School" : "invocation",
		"Type" : "Concentration"
	  },
	  "Télékinésie" : {
		"BBE" : "",
		"Description" : "Déplace une créature (taille TG max) ou un objet (jusqu'à 500 kg) par la pensée en cas de jet d'opposition réussi.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Télékinésie",
		"OV" : "Telekinesis",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Télépathie" : {
		"BBE" : "",
		"Description" : "Communique par télépathie avec une créature connue et consentante sur le même plan d'existence.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Télépathie",
		"OV" : "Telepathy",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Téléportation" : {
		"BBE" : "",
		"Description" : "Le lanceur et 8 créatures sont téléportés n'importe où sur le même plan. Risque d'échec selon la familiarité de la destination.",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Téléportation",
		"OV" : "Teleport",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Ténèbres" : {
		"BBE" : "",
		"Description" : "Remplit une sphère de 4,50 m de rayon de ténèbres magiques.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Ténèbres",
		"OV" : "Darkness",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Ténèbres oppressantes" : {
		"BBE" : "",
		"Description" : "Les créatures dans une sphère de ténèbres de 18 m de rayon doivent réussir un JdS de Sag. ou subir 8d8 dégâts psychiques.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Ténèbres oppressantes",
		"OV" : "Maddening Darkness",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Urne magique" : {
		"BBE" : "Possession",
		"Description" : "Le lanceur projette son âme dans une urne pour ensuite retourner dans son corps ou posséder le corps d'un humanoïde.",
		"Incantation" : "1 minute",
		"Level" : 6,
		"Name" : "Urne magique",
		"OV" : "Magic Jar",
		"School" : "nécromancie",
		"Type" : ""
	  },
	  "Vague destructrice" : {
		"BBE" : "",
		"Description" : "Les cibles dans un rayon de 9 m doivent réussir un JdS de Con. ou subir 5d6 de tonnerre et 5d6 radiants ou nécrotiques.",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Vague destructrice",
		"OV" : "Destructive Wave",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Vaporisation de poison" : {
		"BBE" : "Bouffée de poison",
		"Description" : "La cible doit réussir un JdS de Con. ou subir 1d12 dégâts de poison (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 0,
		"Name" : "Vaporisation de poison",
		"OV" : "Poison Spray",
		"School" : "invocation",
		"Type" : ""
	  },
	  "Vent protecteur" : {
		"BBE" : "",
		"Description" : "Crée un vent fort (30 km/h) dans un rayon de 3 m (rend sourd, éteint les flammes, dissipe le gaz, terrain difficile, etc).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Vent protecteur",
		"OV" : "Warding Wind",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Verrou magique" : {
		"BBE" : "",
		"Description" : "Verrouille un objet (porte, fenêtre, coffre, etc) et le lanceur peut définir un mot de passe pour supprimer le sort 1 minute.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Verrou magique",
		"OV" : "Arcane Lock",
		"School" : "abjuration",
		"Type" : ""
	  },
	  "Vision dans le noir" : {
		"BBE" : "",
		"Description" : "La cible peut voir dans le noir à 18 mètres.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Vision dans le noir",
		"OV" : "Darkvision",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Vision suprême" : {
		"BBE" : "",
		"Description" : "La cible obtient vision véritable, voit les portes secrètes magiques et dans le plan éthéré.",
		"Incantation" : "1 action",
		"Level" : 6,
		"Name" : "Vision suprême",
		"OV" : "True Seeing",
		"School" : "divination",
		"Type" : ""
	  },
	  "Voir l'invisible" : {
		"BBE" : "",
		"Description" : "Le lanceur voit les créatures ou objets invisibles, et dans le plan éthéré.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Voir l'invisible",
		"OV" : "See Invisibility",
		"School" : "divination",
		"Type" : ""
	  },
	  "Vol" : {
		"BBE" : "",
		"Description" : "La cible obtient une vitesse de vol de 18 mètres (+1 créature/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Vol",
		"OV" : "Fly",
		"School" : "transmutation",
		"Type" : "Concentration"
	  },
	  "Zone de vérité" : {
		"BBE" : "",
		"Description" : "Les créatures dans une sphère de 4,50 m de rayon doivent réussir un JdS de Cha. ou ne pas pouvoir mentir.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Zone de vérité",
		"OV" : "Zone of Truth",
		"School" : "enchantement",
		"Type" : ""
	  },
	  "Éclair" : {
		"BBE" : "",
		"Description" : "Les créatures sur une ligne de 30 x 1,50 m doivent réussir un JdS de Dex. ou subir 8d6 dégâts de foudre (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Éclair",
		"OV" : "1_LIGHTning Bolt",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Éclair de chaos" : {
		"BBE" : "",
		"Description" : "Si l'attaque touche, inflige 2d8 + 1d6 dégâts de type variable (dégâts/niv). Rebond si double 8.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Éclair de chaos",
		"OV" : "Chaos Bolt",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Éclair de sorcière" : {
		"BBE" : "Carreau ensorcelé",
		"Description" : "Si l'attaque avec un sort touche, inflige 1d12 dégâts de foudre (dégâts/niv) à chaque round.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Éclair de sorcière",
		"OV" : "Witch Bolt",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Éclair traçant" : {
		"BBE" : "Balisage",
		"Description" : "Si l'attaque avec un sort touche, inflige 4d6 dégâts radiants (dégâts/niv) et le prochain jet d'attaque aura l'avantage.",
		"Incantation" : "1 action",
		"Level" : 1,
		"Name" : "Éclair traçant",
		"OV" : "Guiding Bolt",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Éclat du soleil" : {
		"BBE" : "",
		"Description" : "Les créatures dans un rayon de 18 m doivent réussir un JdS de Con. ou subir 12d6 dégâts radiants et être aveuglées 1 min.",
		"Incantation" : "1 action",
		"Level" : 8,
		"Name" : "Éclat du soleil",
		"OV" : "Sunburst",
		"School" : "évocation",
		"Type" : ""
	  },
	  "Écrire dans le ciel" : {
		"BBE" : "",
		"Description" : "Crée jusqu'à 10 mots dans les nuages.",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Écrire dans le ciel",
		"OV" : "Skywrite",
		"School" : "transmutation",
		"Type" : "ConcentrationRituel"
	  },
	  "Énervation" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Dex. ou subir 4d8 dégâts nécrotiques à chaque round (+1d8/niv).",
		"Incantation" : "1 action",
		"Level" : 5,
		"Name" : "Énervation",
		"OV" : "Enervation",
		"School" : "nécromancie",
		"Type" : "Concentration"
	  },
	  "Épine mentale" : {
		"BBE" : "",
		"Description" : "La cible doit réussir un JdS de Sag. ou subir 3d8 dégâts psychiques (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 2,
		"Name" : "Épine mentale",
		"OV" : "Mind Spike",
		"School" : "divination",
		"Type" : "Concentration"
	  },
	  "Épée de Mordenkainen" : {
		"BBE" : "",
		"Description" : "Si l'attaque avec un sort touche, inflige 3d10 dégâts de force. L'épée peut se déplacer.",
		"Incantation" : "1 action",
		"Level" : 7,
		"Name" : "Épée de Mordenkainen",
		"OV" : "Mordenkainen's Sword",
		"School" : "évocation",
		"Type" : "Concentration"
	  },
	  "Éruption de terre" : {
		"BBE" : "",
		"Description" : "Les créatures dans un cube de 6 m (terrain difficile) doivent réussir un JdS de Dex. ou subir 3d12 contondants (dégâts/niv).",
		"Incantation" : "1 action",
		"Level" : 3,
		"Name" : "Éruption de terre",
		"OV" : "Erupting Earth",
		"School" : "transmutation",
		"Type" : ""
	  },
	  "Éveil" : {
		"BBE" : "",
		"Description" : "Donne à une bête ou à une plante (Intelligence 3 max) la capacité de parler et des sens humains durant 30 jours.",
		"Incantation" : "8 heures",
		"Level" : 5,
		"Name" : "Éveil",
		"OV" : "Awaken",
		"School" : "transmutation",
		"Type" : ""
	  }
	},
	"SubRaces" : {
	  "HIGH_ELF": {
	   "Id" : "HIGH_ELF",
	   "Race" : "ELF",
	   "Name" : "Haut-Elfe",
	   "OV" : "High-Elf",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 1,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		},
	  "WOODEN_ELF": {
	   "Id" : "WOODEN_ELF",
	   "Race" : "ELF",
	   "Name" : "Elfe des bois",
	   "OV" : "Wooden Elf",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 1,
	   "Charisma" : 0,
	   "Speed" : 10.5,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		},
	  "DROW": {
	   "Id" : "DROW",
	   "Race" : "ELF",
	   "Name" : "Elfe noir",
	   "OV" : "Drow",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 1,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		},
	  "LIGHT_FOOT_HALFELIN": {
	   "Id" : "LIGHT_FOOT_HALFELIN",
	   "Race" : "HALFELIN",
	   "Name" : "Halfelin pied-léger",
	   "OV" : "Light-foot Halfelin",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 1,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		},
	  "ROBUST_HALFELIN": {
	   "Id" : "ROBUST_HALFELIN",
	   "Race" : "HALFELIN",
	   "Name" : "Halfelin Robuste",
	   "OV" : "Robust Halfelin",
	   "Strength" : 0,
	   "Constitution" : 1,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : ["POISON"],
	   "SaveAdvantages" : ["POISON"],
	   "ArmorCategories" : []
		},
	  "HILLS_DWARF": {
	   "Id" : "HILLS_DWARF",
	   "Race" : "DWARF",
	   "Name" : "Nain des collines",
	   "OV" : "Hills Dwarf",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 1,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		},
	  "MONTAINS_DWARF": {
	   "Id" : "MONTAINS_DWARF",
	   "Race" : "DWARF",
	   "Name" : "Nain des montagnes",
	   "OV" : "Mountains Dwarf",
	   "Strength" : 2,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : ["1_LIGHT", "2_MID"]
		},
	  "FORESTS_GNOME": {
	   "Id" : "FORESTS_GNOME",
	   "Race" : "GNOME",
	   "Name" : "Gnome des forêts",
	   "OV" : "Forests Gnome",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 1,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		},
	  "ROCKS_GNOME": {
	   "Id" : "ROCKS_GNOME",
	   "Race" : "GNOME",
	   "Name" : "Gnome des roches",
	   "OV" : "Rocks Gnome",
	   "Strength" : 1,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		},
	  "DEPTH_GNOME": {
	   "Id" : "DEPTH_GNOME",
	   "Race" : "GNOME",
	   "Name" : "Gnome des profondeurs *",
	   "OV" : "Depth Gnome",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 1,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : ["DEPTH_COMMON"],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		},
	  "AIR_GENASI": {
	   "Id" : "AIR_GENASI",
	   "Race" : "GENASI",
	   "Name" : "Génasi de l'air",
	   "OV" : "Air Genasi",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 1,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		},
	  "EARTH_GENASI": {
	   "Id" : "EARTH_GENASI",
	   "Race" : "GENASI",
	   "Name" : "Génasi de la terre",
	   "OV" : "Earth Genasi",
	   "Strength" : 1,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		},
	  "FIRE_GENASI": {
	   "Id" : "FIRE_GENASI",
	   "Race" : "GENASI",
	   "Name" : "Génasi du feu",
	   "OV" : "Fire Genasi",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 1,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : ["FIRE"],
	   "SaveAdvantages" : ["FIRE"],
	   "ArmorCategories" : []
		},
	  "WATER_GENASI": {
	   "Id" : "WATER_GENASI",
	   "Race" : "GENASI",
	   "Name" : "Génasi de l'eau",
	   "OV" : "Water Genasi",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 1,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : ["ACID"],
	   "SaveAdvantages" : ["ACID"],
	   "ArmorCategories" : []
		},
	  "HUMAN": {
	   "Id" : "HUMAN",
	   "Race" : "HUMAN",
	   "Name" : "Humain",
	   "OV" : "Human",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		},
	  "HALF_ELF": {
	   "Id" : "HALF_ELF",
	   "Race" : "HALF_ELF",
	   "Name" : "Demi-Elfe",
	   "OV" : "Half-Elf",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		},
	  "HALF_ORC": {
	   "Id" : "HALF_ORC",
	   "Race" : "HALF_ORC",
	   "Name" : "Demi-Orque",
	   "OV" : "Half-Orc",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		},
	  "WHITE_DRAGON": {
	   "Id" : "WHITE_DRAGON",
	   "Race" : "DRAGON_BORN",
	   "Name" : "Drakéide - Ascendence dragon blanc",
	   "OV" : "Dragon Born - Ascending white dragon",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : ["Cold"],
	   "SaveAdvantages" : ["Cold"],
	   "ArmorCategories" : []
		},
	  "BLUE_DRAGON": {
	   "Id" : "BLUE_DRAGON",
	   "Race" : "DRAGON_BORN",
	   "Name" : "Drakéide - Ascendence dragon bleu",
	   "OV" : "Dragon Born - Ascending blue dragon",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : ["LIGHTNING"],
	   "SaveAdvantages" : ["LIGHTNING"],
	   "ArmorCategories" : []
		},
	  "BLACK_DRAGON": {
	   "Id" : "BLACK_DRAGON",
	   "Race" : "DRAGON_BORN",
	   "Name" : "Drakéide - Ascendence dragon noir",
	   "OV" : "Dragon Born - Ascending black dragon",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : ["ACID"],
	   "SaveAdvantages" : ["ACID"],
	   "ArmorCategories" : []
		},
	  "RED_DRAGON": {
	   "Id" : "RED_DRAGON",
	   "Race" : "DRAGON_BORN",
	   "Name" : "Drakéide - Ascendence dragon rouge",
	   "OV" : "Dragon Born - Ascending red dragon",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : ["FIRE"],
	   "SaveAdvantages" : ["FIRE"],
	   "ArmorCategories" : []
		},
	  "GREEN_DRAGON": {
	   "Id" : "GREEN_DRAGON",
	   "Race" : "DRAGON_BORN",
	   "Name" : "Drakéide - Ascendence dragon vert",
	   "OV" : "Dragon Born - Ascending green dragon",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : ["POISON"],
	   "SaveAdvantages" : ["POISON"],
	   "ArmorCategories" : []
		},
	  "BRASS_DRAGON": {
	   "Id" : "BRASS_DRAGON",
	   "Race" : "DRAGON_BORN",
	   "Name" : "Drakéide - Ascendence dragon Airain",
	   "OV" : "Dragon Born - Ascending brass dragon",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : ["FIRE"],
	   "SaveAdvantages" : ["FIRE"],
	   "ArmorCategories" : []
		},
	  "SILVER_DRAGON": {
	   "Id" : "SILVER_DRAGON",
	   "Race" : "DRAGON_BORN",
	   "Name" : "Drakéide - Ascendence dragon argent",
	   "OV" : "Dragon Born - Ascending silver dragon",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : ["COLD"],
	   "SaveAdvantages" : ["COLD"],
	   "ArmorCategories" : []
		},
	  "BRONZE_DRAGON": {
	   "Id" : "BRONZE_DRAGON",
	   "Race" : "DRAGON_BORN",
	   "Name" : "Drakéide - Ascendence dragon bronze",
	   "OV" : "Dragon Born - Ascending bronze dragon",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : ["LIGHTNING"],
	   "SaveAdvantages" : ["LIGHTNING"],
	   "ArmorCategories" : []
		},
	  "COPPER_DRAGON": {
	   "Id" : "COPPER_DRAGON",
	   "Race" : "DRAGON_BORN",
	   "Name" : "Drakéide - Ascendence dragon cuivre",
	   "OV" : "Dragon Born - Ascending copper dragon",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : ["ACID"],
	   "SaveAdvantages" : ["ACID"],
	   "ArmorCategories" : []
		},
	  "GOLD_DRAGON": {
	   "Id" : "GOLD_DRAGON",
	   "Race" : "DRAGON_BORN",
	   "Name" : "Drakéide - Ascendence dragon or",
	   "OV" : "Dragon Born - Ascending gold dragon",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : ["FIRE"],
	   "SaveAdvantages" : ["FIRE"],
	   "ArmorCategories" : []
		},
	  "TIEFFLING": {
	   "Id" : "TIEFFLING",
	   "Race" : "TIEFFLING",
	   "Name" : "Tieffelin",
	   "OV" : "Tieffling",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : ["FIRE"],
	   "SaveAdvantages" : ["FIRE"],
	   "ArmorCategories" : []
		},
	  "AARAKOCRA": {
	   "Id" : "AARAKOCRA",
	   "Race" : "AARAKOCRA",
	   "Name" : "Aarakocra *",
	   "OV" : "Aarakocra",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		},
	  "GOLIATH": {
	   "Id" : "GOLIATH",
	   "Race" : "GOLIATH",
	   "Name" : "Goliath *",
	   "OV" : "Goliath",
	   "Strength" : 0,
	   "Constitution" : 0,
	   "Dexterity" : 0,
	   "Intelligence" : 0,
	   "Wisdom" : 0,
	   "Charisma" : 0,
	   "Speed" : 0,
	   "Languages" : [],
	   "Resistances" : [],
	   "SaveAdvantages" : [],
	   "ArmorCategories" : []
		}
	},
	"Trinkets" : [ null, {
	  "Trinket" : "Une main de gobelin momifiée",
	  "d100" : 1
	}, {
	  "Trinket" : "Un morceau de cristal qui brille faiblement au clair de lune",
	  "d100" : 2
	}, {
	  "Trinket" : "Une pièce d'or d'une terre inconnue",
	  "d100" : 3
	}, {
	  "Trinket" : "Un journal écrit dans une langue que vous ne connaissez pas",
	  "d100" : 4
	}, {
	  "Trinket" : "Un anneau de cuivre qui ne ternit pas",
	  "d100" : 5
	}, {
	  "Trinket" : "Une vieille pièce d'échecs en verre",
	  "d100" : 6
	}, {
	  "Trinket" : "Une paire de dés en osselet, chacun portant le symbole d'un crâne sur la face qui montrerait normalement le 6",
	  "d100" : 7
	}, {
	  "Trinket" : "Une petite idole représentant une créature cauchemardesque qui vous donne des rêves troublants quand vous dormez près d'elle",
	  "d100" : 8
	}, {
	  "Trinket" : "Un collier en corde duquel pendent quatre doigts elfes momifiés",
	  "d100" : 9
	}, {
	  "Trinket" : "L'acte d'une parcelle de terrain d'un domaine que vous ne connaissez pas",
	  "d100" : 10
	}, {
	  "Trinket" : "Un bloc de 30 grammes d'un matériau inconnu",
	  "d100" : 11
	}, {
	  "Trinket" : "Une petite poupée de chiffon piquée avec des aiguilles",
	  "d100" : 12
	}, {
	  "Trinket" : "Une dent d'une bête inconnue",
	  "d100" : 13
	}, {
	  "Trinket" : "Une énorme écaille, peut-être d'un dragon",
	  "d100" : 14
	}, {
	  "Trinket" : "Une plume vert clair",
	  "d100" : 15
	}, {
	  "Trinket" : "Une vieille carte de divination portant votre portrait",
	  "d100" : 16
	}, {
	  "Trinket" : "Un orbe en verre rempli de fumée qui se déplace",
	  "d100" : 17
	}, {
	  "Trinket" : "Un oeuf de 30 grammes avec une coque rouge vif",
	  "d100" : 18
	}, {
	  "Trinket" : "Une pipe qui fait des bulles",
	  "d100" : 19
	}, {
	  "Trinket" : "Un pot en verre contenant un morceau de chair bizarre qui flotte dans un liquide salé",
	  "d100" : 20
	}, {
	  "Trinket" : "Une petite boîte à musique de gnome qui joue une chanson qui vous rappelle vaguement votre enfance",
	  "d100" : 21
	}, {
	  "Trinket" : "Une petite statuette en bois d'un halfelin béat",
	  "d100" : 22
	}, {
	  "Trinket" : "Un orbe en cuivre gravé de runes étranges",
	  "d100" : 23
	}, {
	  "Trinket" : "Un disque de pierre multicolore",
	  "d100" : 24
	}, {
	  "Trinket" : "Une petite icône d'argent représentant un corbeau",
	  "d100" : 25
	}, {
	  "Trinket" : "Un sac contenant quarante-sept dents humanoïdes, dont l'une est cariée",
	  "d100" : 26
	}, {
	  "Trinket" : "Un fragment d'obsidienne qui se sent toujours chaud au toucher",
	  "d100" : 27
	}, {
	  "Trinket" : "Une griffe osseuse d'un dragon suspendue à un collier de cuir lisse",
	  "d100" : 28
	}, {
	  "Trinket" : "Une paire de vieilles chaussettes",
	  "d100" : 29
	}, {
	  "Trinket" : "Un livre blanc dont les pages refusent de retenir l'encre, la craie, la graphite ou toute autre substance ou marquage",
	  "d100" : 30
	}, {
	  "Trinket" : "Un badge en argent qui représente une étoile à cinq branches",
	  "d100" : 31
	}, {
	  "Trinket" : "Un couteau qui appartenait à un parent",
	  "d100" : 32
	}, {
	  "Trinket" : "Un flacon de verre rempli de rognures d'ongles",
	  "d100" : 33
	}, {
	  "Trinket" : "Un dispositif métallique et rectangulaire avec deux petites coupes en métal à une extrémité et qui jette des étincelles lorsqu'il est mouillé",
	  "d100" : 34
	}, {
	  "Trinket" : "Un gant blanc pailleté aux dimensions d'un humain",
	  "d100" : 35
	}, {
	  "Trinket" : "Une veste avec une centaine de minuscules poches",
	  "d100" : 36
	}, {
	  "Trinket" : "Un petit bloc de pierre léger",
	  "d100" : 37
	}, {
	  "Trinket" : "Un petit dessin qui représente le portrait d'un gobelin",
	  "d100" : 38
	}, {
	  "Trinket" : "Un flacon de verre vide qui sent le parfum lorsqu'il est ouvert",
	  "d100" : 39
	}, {
	  "Trinket" : "Une pierre précieuse qui ressemble à un morceau de charbon pour tout le monde, sauf pour vous",
	  "d100" : 40
	}, {
	  "Trinket" : "Un morceau de tissu d'une vieille bannière",
	  "d100" : 41
	}, {
	  "Trinket" : "Un insigne de grade d'un légionnaire perdu",
	  "d100" : 42
	}, {
	  "Trinket" : "Une cloche en argent minuscule et sans battant",
	  "d100" : 43
	}, {
	  "Trinket" : "Un canari mécanique à l'intérieur d'une lampe de gnome",
	  "d100" : 44
	}, {
	  "Trinket" : "Un petit coffre avec de nombreux pieds sculptés sur le fond",
	  "d100" : 45
	}, {
	  "Trinket" : "Une pixie morte à l'intérieur d'une bouteille en verre transparent",
	  "d100" : 46
	}, {
	  "Trinket" : "Une boîte métallique qui n'a pas d'ouverture mais qui sonne comme si elle était remplie de liquide, de sable, d'araignées ou de verre brisé (au choix)",
	  "d100" : 47
	}, {
	  "Trinket" : "Un orbe de verre rempli d'eau, dans lequel nage un poisson rouge mécanique",
	  "d100" : 48
	}, {
	  "Trinket" : "Une cuillère d'argent avec un M gravé sur le manche",
	  "d100" : 49
	}, {
	  "Trinket" : "Un sifflet en bois de couleur or",
	  "d100" : 50
	}, {
	  "Trinket" : "Un scarabée mort de la taille de votre main",
	  "d100" : 51
	}, {
	  "Trinket" : "Deux soldats de plomb, l'un avec la tête manquante",
	  "d100" : 52
	}, {
	  "Trinket" : "Une petite boîte remplie de boutons de différentes tailles",
	  "d100" : 53
	}, {
	  "Trinket" : "Une bougie qui ne peut pas être allumée",
	  "d100" : 54
	}, {
	  "Trinket" : "Une petite cage sans porte",
	  "d100" : 55
	}, {
	  "Trinket" : "Une vieille clé",
	  "d100" : 56
	}, {
	  "Trinket" : "Une carte au trésor indéchiffrable",
	  "d100" : 57
	}, {
	  "Trinket" : "Une poigne d'épée brisée",
	  "d100" : 58
	}, {
	  "Trinket" : "Une patte de lapin",
	  "d100" : 59
	}, {
	  "Trinket" : "Un œil de verre",
	  "d100" : 60
	}, {
	  "Trinket" : "Un camée (pendentif) sculpté à l'image d'une personne hideuse",
	  "d100" : 61
	}, {
	  "Trinket" : "Un crâne en argent de la taille d'une pièce de monnaie",
	  "d100" : 62
	}, {
	  "Trinket" : "Un masque d'albâtre",
	  "d100" : 63
	}, {
	  "Trinket" : "Une pyramide de bâtonnets d'encens noir qui sent très mauvais",
	  "d100" : 64
	}, {
	  "Trinket" : "Un bonnet de nuit qui, lorsqu'il est porté, vous donne des rêves agréables",
	  "d100" : 65
	}, {
	  "Trinket" : "Une chausse-trappe unique fabriquée à partir d'un os",
	  "d100" : 66
	}, {
	  "Trinket" : "Un cadre de monocle en or sans la lentille",
	  "d100" : 67
	}, {
	  "Trinket" : "Un cube de 2 centimètres de côté, avec chaque face peinte d'une couleur différente",
	  "d100" : 68
	}, {
	  "Trinket" : "Un bouton de porte en cristal",
	  "d100" : 69
	}, {
	  "Trinket" : "Un petit paquet rempli de poussière rose",
	  "d100" : 70
	}, {
	  "Trinket" : "Un fragment d'une belle chanson, écrite avec des notes de musique sur deux morceaux de parchemin",
	  "d100" : 71
	}, {
	  "Trinket" : "Une boucle d'oreille en forme de goutte d'argent faite à partir d'une vraie larme",
	  "d100" : 72
	}, {
	  "Trinket" : "La coquille d'un oeuf peint avec des scènes de misère humaine d'un détail troublant",
	  "d100" : 73
	}, {
	  "Trinket" : "Un éventail qui, une fois déplié, montre un chat endormi",
	  "d100" : 74
	}, {
	  "Trinket" : "Un ensemble de tubes d'os",
	  "d100" : 75
	}, {
	  "Trinket" : "Un trèfle à quatre feuilles à l'intérieur d'un livre qui traite des bonnes manières et de l'étiquette",
	  "d100" : 76
	}, {
	  "Trinket" : "Une feuille de parchemin sur laquelle est dessiné un engin mécanique complexe",
	  "d100" : 77
	}, {
	  "Trinket" : "Un fourreau orné dans lequel à ce jour aucune lame ne rentre",
	  "d100" : 78
	}, {
	  "Trinket" : "Une invitation à une fête où un assassinat a eu lieu",
	  "d100" : 79
	}, {
	  "Trinket" : "Un pentacle de bronze avec la gravure d'une tête de rat au centre",
	  "d100" : 80
	}, {
	  "Trinket" : "Un mouchoir violet brodé avec le nom d'un puissant archimage",
	  "d100" : 81
	}, {
	  "Trinket" : "La moitié du plan d'un temple, d'un château, ou d'une autre structure",
	  "d100" : 82
	}, {
	  "Trinket" : "Un peu de tissu plié qui, une fois déplié, se transforme en un élégant chapeau",
	  "d100" : 83
	}, {
	  "Trinket" : "Un récépissé de dépôt dans une banque d'une ville très éloignée",
	  "d100" : 84
	}, {
	  "Trinket" : "Un journal avec sept pages manquantes",
	  "d100" : 85
	}, {
	  "Trinket" : "Une tabatière en argent vide et portant une inscription sur le dessus qui dit « rêves »",
	  "d100" : 86
	}, {
	  "Trinket" : "Un symbole sacré en fer et consacré à un dieu inconnu",
	  "d100" : 87
	}, {
	  "Trinket" : "Un livre qui raconte l'histoire de l'ascension et la chute d'un héros légendaire, avec le dernier chapitre manquant",
	  "d100" : 88
	}, {
	  "Trinket" : "Un flacon de sang de dragon",
	  "d100" : 89
	}, {
	  "Trinket" : "Une ancienne flèche de conception elfique",
	  "d100" : 90
	}, {
	  "Trinket" : "Une aiguille qui ne se plie pas",
	  "d100" : 91
	}, {
	  "Trinket" : "Une broche ornée de conception naine",
	  "d100" : 92
	}, {
	  "Trinket" : "Une bouteille de vin vide portant une jolie étiquette qui dit « Le magicien des vins, Cuvée du Dragon Rouge, 331422-W »",
	  "d100" : 93
	}, {
	  "Trinket" : "Un couvercle avec une mosaïque multicolore en surface",
	  "d100" : 94
	}, {
	  "Trinket" : "Une souris pétrifiée",
	  "d100" : 95
	}, {
	  "Trinket" : "Un drapeau de pirate noir orné d'un crâne et des os croisés d'un dragon",
	  "d100" : 96
	}, {
	  "Trinket" : "Un petit crabe ou araignée mécanique qui se déplace quand il n'est pas observé",
	  "d100" : 97
	}, {
	  "Trinket" : "Un pot de verre contenant du lard avec une étiquette qui dit « Graisse de griffon »",
	  "d100" : 98
	}, {
	  "Trinket" : "Une boîte en bois avec un fond en céramique qui contient un ver vivant avec une tête à chaque extrémité de son corps",
	  "d100" : 99
	}, {
	  "Trinket" : "Une urne en métal contenant les cendres d'un héros",
	  "d100" : 100
	} ],
	"WeaponCategories" : {
	  "C_DIS" : {
		"Code" : "C_DIS",
		"Name" : "Armes courantes à distance"
	  },
	  "C_MEL" : {
		"Code" : "C_MEL",
		"Name" : "Armes courantes de corps à corps"
	  },
	  "W_DIS" : {
		"Code" : "W_DIS",
		"Name" : "Armes de guerre à distance"
	  },
	  "W_MEL" : {
		"Code" : "W_MEL",
		"Name" : "Armes de guerre de corps à corps"
	  }
	},
	"Weapons" : {
	  "Arbalète de poing" : {
		"Category" : "W_DIS",
		"Damage" : "1d6 ",
		"DamageType" : "Perforant",
		"Name" : "Arbalète de poing",
		"OV" : "Crossbow, hand",
		"Price" : 7500,
		"Properties" : "Munitions (portée 9 m/36 m), légère, chargement",
		"Weight" : 1500
	  },
	  "Arbalète lourde" : {
		"Category" : "W_DIS",
		"Damage" : "1d10 ",
		"DamageType" : "Perforant",
		"Name" : "Arbalète lourde",
		"OV" : "Crossbow, heavy",
		"Price" : 5000,
		"Properties" : "Munitions (portée 30 m/120 m), lourde, chargement, à deux mains",
		"Weight" : 9000
	  },
	  "Arbalète légère" : {
		"Category" : "C_DIS",
		"Damage" : "1d8 ",
		"DamageType" : "Perforant",
		"Name" : "Arbalète légère",
		"OV" : "Crossbow, light",
		"Price" : 2500,
		"Properties" : "Munitions (portée 24 m/96 m), chargement, à deux mains",
		"Weight" : 2500
	  },
	  "Arc court" : {
		"Category" : "C_DIS",
		"Damage" : "1d6 ",
		"DamageType" : "Perforant",
		"Name" : "Arc court",
		"OV" : "Shortbow",
		"Price" : 2500,
		"Properties" : "Munitions (portée 24 m/96 m), à deux mains",
		"Weight" : 1000
	  },
	  "Arc long" : {
		"Category" : "W_DIS",
		"Damage" : "1d8 ",
		"DamageType" : "Perforant",
		"Name" : "Arc long",
		"OV" : "Longbow",
		"Price" : 5000,
		"Properties" : "Munitions (portée 45 m/180 m), lourde, à deux mains",
		"Weight" : 1000
	  },
	  "Bâton" : {
		"Category" : "C_MEL",
		"Damage" : "1d6 ",
		"DamageType" : "Contondant",
		"Name" : "Bâton",
		"OV" : "Quarterstaff",
		"Price" : 20,
		"Properties" : "Polyvalente (1d8)",
		"Weight" : 2000
	  },
	  "Cimeterre" : {
		"Category" : "W_MEL",
		"Damage" : "1d6 ",
		"DamageType" : "Tranchant",
		"Name" : "Cimeterre",
		"OV" : "Scimitar",
		"Price" : 2500,
		"Properties" : "Finesse, légère",
		"Weight" : 1500
	  },
	  "Coutille" : {
		"Category" : "W_MEL",
		"Damage" : "1d10 ",
		"DamageType" : "Tranchant",
		"Name" : "Coutille",
		"OV" : "Glaive",
		"Price" : 2000,
		"Properties" : "Lourde, allonge, à deux mains",
		"Weight" : 3000
	  },
	  "Dague" : {
		"Category" : "C_MEL",
		"Damage" : "1d4 ",
		"DamageType" : "Perforant",
		"Name" : "Dague",
		"OV" : "Dagger",
		"Price" : 200,
		"Properties" : "Finesse, légère, lancer (portée 6 m/18 m)",
		"Weight" : 500
	  },
	  "Filet" : {
		"Category" : "W_DIS",
		"Damage" : "",
		"DamageType" : "",
		"Name" : "Filet",
		"OV" : "Net",
		"Price" : 100,
		"Properties" : "Spécial, lancer (portée 1,50 m/ 4,50 m)",
		"Weight" : 1500
	  },
	  "Fléau d'armes" : {
		"Category" : "W_MEL",
		"Damage" : "1d8 ",
		"DamageType" : "Contondant",
		"Name" : "Fléau d'armes",
		"OV" : "Flail",
		"Price" : 1000,
		"Properties" : "-",
		"Weight" : 1000
	  },
	  "Fléchette" : {
		"Category" : "C_DIS",
		"Damage" : "1d4 ",
		"DamageType" : "Perforant",
		"Name" : "Fléchette",
		"OV" : "Dart",
		"Price" : 5,
		"Properties" : "Finesse, lancer (portée 6 m/18 m)",
		"Weight" : 100
	  },
	  "Fouet" : {
		"Category" : "W_MEL",
		"Damage" : "1d4 ",
		"DamageType" : "Tranchant",
		"Name" : "Fouet",
		"OV" : "Whip",
		"Price" : 200,
		"Properties" : "Finesse, allonge",
		"Weight" : 1500
	  },
	  "Fronde" : {
		"Category" : "C_DIS",
		"Damage" : "1d4 ",
		"DamageType" : "Contondant",
		"Name" : "Fronde",
		"OV" : "Sling",
		"Price" : 10,
		"Properties" : "Munitions (portée 9 m/36 m)",
		"Weight" : 0
	  },
	  "Gourdin" : {
		"Category" : "C_MEL",
		"Damage" : "1d4 ",
		"DamageType" : "Contondant",
		"Name" : "Gourdin",
		"OV" : "Club",
		"Price" : 10,
		"Properties" : "Légère",
		"Weight" : 1000
	  },
	  "Hache d'armes" : {
		"Category" : "W_MEL",
		"Damage" : "1d8 ",
		"DamageType" : "Tranchant",
		"Name" : "Hache d'armes",
		"OV" : "Battleaxe",
		"Price" : 1000,
		"Properties" : "Polyvalente (1d10)",
		"Weight" : 2000
	  },
	  "Hache à deux mains" : {
		"Category" : "W_MEL",
		"Damage" : "1d12 ",
		"DamageType" : "Tranchant",
		"Name" : "Hache à deux mains",
		"OV" : "Greataxe",
		"Price" : 3000,
		"Properties" : "Lourde, à deux mains",
		"Weight" : 3500
	  },
	  "Hachette" : {
		"Category" : "C_MEL",
		"Damage" : "1d6 ",
		"DamageType" : "Tranchant",
		"Name" : "Hachette",
		"OV" : "Handaxe",
		"Price" : 500,
		"Properties" : "Légère, lancer (portée 6 m/18 m)",
		"Weight" : 1000
	  },
	  "Hallebarde" : {
		"Category" : "W_MEL",
		"Damage" : "1d10 ",
		"DamageType" : "Tranchant",
		"Name" : "Hallebarde",
		"OV" : "Halberd",
		"Price" : 2000,
		"Properties" : "Lourde, allonge, à deux mains",
		"Weight" : 3000
	  },
	  "Javeline" : {
		"Category" : "C_MEL",
		"Damage" : "1d6 ",
		"DamageType" : "Perforant",
		"Name" : "Javeline",
		"OV" : "Javelin",
		"Price" : 50,
		"Properties" : "Lancer (portée 9 m/36 m)",
		"Weight" : 1000
	  },
	  "Lance" : {
		"Category" : "C_MEL",
		"Damage" : "1d6 ",
		"DamageType" : "Perforant",
		"Name" : "Lance",
		"OV" : "Spear",
		"Price" : 100,
		"Properties" : "Lancer (portée 6 m/18 m), polyvalente (1d8)",
		"Weight" : 1500
	  },
	  "Lance d’arçon" : {
		"Category" : "W_MEL",
		"Damage" : "1d12 ",
		"DamageType" : "Perforant",
		"Name" : "Lance d’arçon",
		"OV" : "Lance",
		"Price" : 1000,
		"Properties" : "Allonge, spécial",
		"Weight" : 3000
	  },
	  "Maillet" : {
		"Category" : "W_MEL",
		"Damage" : "2d6 ",
		"DamageType" : "Contondant",
		"Name" : "Maillet",
		"OV" : "Maul",
		"Price" : 1000,
		"Properties" : "Lourde, à deux mains",
		"Weight" : 5000
	  },
	  "Marteau de guerre" : {
		"Category" : "W_MEL",
		"Damage" : "1d8 ",
		"DamageType" : "Contondant",
		"Name" : "Marteau de guerre",
		"OV" : "Warhammer",
		"Price" : 1500,
		"Properties" : "Polyvalente (1d10)",
		"Weight" : 1000
	  },
	  "Marteau léger" : {
		"Category" : "C_MEL",
		"Damage" : "1d4 ",
		"DamageType" : "Contondant",
		"Name" : "Marteau léger",
		"OV" : "Light hammer",
		"Price" : 200,
		"Properties" : "Légère, lancer (portée 6 m/18 m)",
		"Weight" : 1000
	  },
	  "Masse d'armes" : {
		"Category" : "C_MEL",
		"Damage" : "1d6 ",
		"DamageType" : "Contondant",
		"Name" : "Masse d'armes",
		"OV" : "Mace",
		"Price" : 500,
		"Properties" : "-",
		"Weight" : 2000
	  },
	  "Massue" : {
		"Category" : "C_MEL",
		"Damage" : "1d8 ",
		"DamageType" : "Contondant",
		"Name" : "Massue",
		"OV" : "Greatclub",
		"Price" : 20,
		"Properties" : "À deux mains",
		"Weight" : 5000
	  },
	  "Morgenstern" : {
		"Category" : "W_MEL",
		"Damage" : "1d8 ",
		"DamageType" : "Perforant",
		"Name" : "Morgenstern",
		"OV" : "Morningstar",
		"Price" : 1500,
		"Properties" : "-",
		"Weight" : 2000
	  },
	  "Pic de guerre" : {
		"Category" : "W_MEL",
		"Damage" : "1d8 ",
		"DamageType" : "Perforant",
		"Name" : "Pic de guerre",
		"OV" : "War pick",
		"Price" : 500,
		"Properties" : "-",
		"Weight" : 1000
	  },
	  "Pique" : {
		"Category" : "W_MEL",
		"Damage" : "1d10 ",
		"DamageType" : "Perforant",
		"Name" : "Pique",
		"OV" : "Pike",
		"Price" : 500,
		"Properties" : "Lourde, allonge, à deux mains",
		"Weight" : 9000
	  },
	  "Rapière" : {
		"Category" : "W_MEL",
		"Damage" : "1d8 ",
		"DamageType" : "Perforant",
		"Name" : "Rapière",
		"OV" : "Rapier",
		"Price" : 2500,
		"Properties" : "Finesse",
		"Weight" : 1000
	  },
	  "Sarbacane" : {
		"Category" : "W_DIS",
		"Damage" : "1 ",
		"DamageType" : "Perforant",
		"Name" : "Sarbacane",
		"OV" : "Blowgun",
		"Price" : 1000,
		"Properties" : "Munitions (portée 7,50 m/30 m), chargement",
		"Weight" : 500
	  },
	  "Serpe" : {
		"Category" : "C_MEL",
		"Damage" : "1d4 ",
		"DamageType" : "Tranchant",
		"Name" : "Serpe",
		"OV" : "Sickle",
		"Price" : 100,
		"Properties" : "Légère",
		"Weight" : 1000
	  },
	  "Trident" : {
		"Category" : "W_MEL",
		"Damage" : "1d6 ",
		"DamageType" : "Perforant",
		"Name" : "Trident",
		"OV" : "Trident",
		"Price" : 500,
		"Properties" : "Lancer (portée 6 m/18 m), polyvalente (1d8)",
		"Weight" : 2000
	  },
	  "Épée courte" : {
		"Category" : "W_MEL",
		"Damage" : "1d6 ",
		"DamageType" : "Perforant",
		"Name" : "Épée courte",
		"OV" : "Shortsword",
		"Price" : 1000,
		"Properties" : "Finesse, légère",
		"Weight" : 1000
	  },
	  "Épée longue" : {
		"Category" : "W_MEL",
		"Damage" : "1d8 ",
		"DamageType" : "Tranchant",
		"Name" : "Épée longue",
		"OV" : "Longsword",
		"Price" : 1500,
		"Properties" : "Polyvalente (1d10)",
		"Weight" : 1500
	  },
	  "Épée à deux mains" : {
		"Category" : "W_MEL",
		"Damage" : "2d6 ",
		"DamageType" : "Tranchant",
		"Name" : "Épée à deux mains",
		"OV" : "Greatsword",
		"Price" : 5000,
		"Properties" : "Lourde, à deux mains",
		"Weight" : 3000
	  }
	}
  }
  