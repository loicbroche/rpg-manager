import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectSubRacesMap, selectRacesMap, selectArmorsMap, selectWeaponsMap, selectCaracteristics } from 'store/selectors';

import { gameDatabase } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import { updateCharacterCaracteristic, insertCharacterElement, deleteCharacterElement } from 'database/PersistCharacter';
import { updateNotes, ALL_CHARACTERS_ID } from 'database/PersistNotes';
import { getChargeCapacity, SATCHEL_CHARGE_CAPACITY } from 'rules/Character.rules'

import './Character.css'
import Skills from './stats/Skills'
import Armors from './stats/Armors'
import Weapons from './stats/Weapons'
import Objects from './stats/Objects'
import Caracteristic from './stats/Caracteristic'
import SavesComponent from './stats/SavesComponent'
import SpeedComponent from './stats/SpeedComponent'
import DamagesComponent from './stats/DamagesComponent'
import RaceSelector from './general/RaceSelector'
import ClassSelector from './general/ClassSelector'
import HistoricSelector from './general/HistoricSelector'
import XPComponent from './general/XPComponent';
import DetailsComponent from './general/DetailsComponent';
import HPComponent from './fight/HPComponent';
import ACComponent from './fight/ACComponent';
import HealthComponent from './fight/HealthComponent';
import SpecialsComponent from './fight/SpecialsComponent';
import SpellsComponent from './fight/SpellsComponent';
import SpellBookComponent from './fight/SpellBookComponent';
import SpecialCapacitiesComponent from './fight/SpecialCapacitiesComponent';
import AlterationsComponent from './fight/AlterationsComponent'
import ArmorSelector from './equipment/ArmorSelector';
import WeaponSelector from './equipment/WeaponSelector';
import BagComponent from './equipment/BagComponent';
import PersonnalNotesComponent from 'components/user/PersonnalNotesComponent';
import GeneralNotesComponent from 'components/user/GeneralNotesComponent';
import FlyingNotesComponent from '../user/FlyingNotesComponent';

class Character extends PureComponent {
    constructor (props) {
      super(props);
      const characterId = this.props.match.params.characterId;
      this.state = {
          characterInfos: {
            Id: characterId,
            Name: null,
            SubRace: null,
            Class: null,
            Specialisation: null,
            FightStyles: null,
            ChargeCapacity: null,
            MasterBonus: null,
            Skills: null,
            MasterWeapons: null,
            MasterArmors: null,
            MasterObjects: null,
            Historic: null,
            Alignment: null,
            Age: null,
            Height: null,
            Width: null,
            Eyes: null,
            Skin: null,
            Hairs: null,
            PersonnalityTraits: null,
            Ideals: null,
            Links: null,
            Defects: null,
            History: null,
            Languages: null,
            XP: null,
            Level: null,
            MaxHP: null,
            HP: null,
            AC: null,
            Weapon: null,
            DistanceWeapon: null,
            Armor: null,
            Money: null,
            Objects: null,
            SatchelObjects: null,
            Alterations: null,
            Resistances: null,
            Saves: null,
            SaveAdvantages: null,
            Dexterity: null,
            Damages: null
          },
          generalNotes: [],
          personnalNotes: []
      }
      this.characterRef = gameDatabase.ref(DATA_MODEL.CHARACTERS.name+"/"+characterId);
      this.updateCharacter = (snapshot) => {
          const newState = snapshot.val();
          newState.MasterArmors = newState.MasterArmors || [];
          newState.MasterWeapons = newState.MasterWeapons || [];
          newState.MasterObjects = newState.MasterObjects || [];
          newState.Skills = newState.Skills || [];
          newState.Alterations = newState.Alterations || [];
          newState.Resistances = newState.Resistances || [];
          newState.Objects = newState.Objects || [];
          newState.SatchelObjects = newState.SatchelObjects || [];
          newState.Languages = newState.Languages || [];
          newState.Saves = newState.Saves || [];
          newState.SaveAdvantages = newState.SaveAdvantages || [];
          newState.MinorSpells = newState.MinorSpells || [];
          newState.Spells = newState.Spells || [];
          newState.Damages = newState.Damages || [];

          this.setState({characterInfos: newState});
        }
        this.generalNotesRef = gameDatabase.ref(DATA_MODEL.NOTES.name+"/"+ALL_CHARACTERS_ID);
        this.personnalNotesRef = gameDatabase.ref(DATA_MODEL.NOTES.name+"/"+characterId);
        this.updateGeneralNotes = (snapshot) => {
            const newState = snapshot.val() && Object.values(snapshot.val());
            this.setState({generalNotes: newState});
        }
        this.updatePersonnalNotes = (snapshot) => {
            const newState = snapshot.val() && Object.values(snapshot.val());
            this.setState({personnalNotes: newState});
        }
    }

    componentDidMount() {
        this.characterRef.on('value', this.updateCharacter);
        this.generalNotesRef.on('value', this.updateGeneralNotes);
        this.personnalNotesRef.on('value', this.updatePersonnalNotes);
    }

    componentWillUnmount() {
        this.characterRef.off('value', this.updateCharacter);
        this.generalNotesRef.off('value', this.updateGeneralNotes);
        this.personnalNotesRef.off('value', this.updatePersonnalNotes);
    }

    render() {
        const { caracteristics, weaponsMap, armorsMap, racesMap, subRacesMap} = this.props;
        const { Name, SubRace: subRaceId, Gender, Class: classId, Specialisation, FightStyles, Historic: historicId, History, Skills: masterSkills,
                XP, HP, MaxHP, Specials, SpellsLocations, Armor, Shield, Weapon, DistanceWeapon, MasterWeapons, MasterArmors, MasterObjects, Alterations,
                Resistances, Saves, SaveAdvantages, Health, Strength, Notes, Money, Objects: characterObjects, SatchelObjects, HiddenCapacities, Damages} = this.state.characterInfos;
        const { generalNotes, personnalNotes } = this.state;

        const caracteristicsBonus = caracteristics?.reduce((accum, caracteristic) => {
            accum[caracteristic.Code] = this.state.characterInfos[caracteristic.OV];
            return accum;
        }, {});

        const armor = armorsMap?.[Armor];
        const shield = armorsMap?.[Shield];
        const weapon = weaponsMap?.[Weapon];
        const distanceWeapon = weaponsMap?.[DistanceWeapon];
        const equipmentsWeight =  (armor?armor.Weight:0)
                                + (shield?shield.Weight:0)
                                + (weapon?weapon.Weight:0)
                                + (distanceWeapon?distanceWeapon.Weight:0);

        const subRace = subRacesMap?.[subRaceId];
        const raceBonus = racesMap?.[subRace?.Race]?.[DATA_MODEL.CHARACTERS.columns.STRENGTH.name];
        const subRaceBonus = subRace?.[DATA_MODEL.CHARACTERS.columns.STRENGTH.name];
        const capacityCharge = getChargeCapacity(Strength + raceBonus + subRaceBonus) - equipmentsWeight;

        return (
        <div className="character">
            { Name !== null
                ?(
                <div>
                    <div className="character-header">
                        <div>
                            <DetailsComponent character={this.state.characterInfos}
                                        onChange={(caracteristicName, value) => { this.updateCaracteristic(caracteristicName, value); }}
                                        onClickElement={(elementName, value) => { this.toggleElement(elementName, value); }} />
                            <FlyingNotesComponent notes={personnalNotes} onNotesChange={(value) =>  updateNotes(value, Name) } />
                        </div>
                        <RaceSelector   subRaceId={subRaceId}
                                        gender={Gender}
                                        onRaceChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SUB_RACE.name, value);}}
                                        onGenderChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.GENDER.name, value);}} />
                        <ClassSelector  classId={classId} specialisationId={Specialisation} fightStyleIds={FightStyles} XP={XP}
                                        onChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.CLASS.name, value);}}
                                        onSpecialisationChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SPECIALISATION.name, value);}}
                                        onFightStyleChange ={(value) =>{ this.toggleElement(DATA_MODEL.CHARACTERS.columns.FIGHT_STYLES.name, value);}}/>
                        <HistoricSelector   historicId={historicId}
                                            history={History}
                                            onHistoricChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.HISTORIC.name, value);}}
                                            onHistoryChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.HISTORY.name, value);}} />
                        <XPComponent XP={parseInt(XP)} onChange={(value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.XP.name, value);}}/>
                    </div>

                    <div className="character-capacities">
                        <div className="health-overview">
                            <HealthComponent value={Health} onChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.HEALTH.name, value); }} />
                            <DamagesComponent characterId={Name} damages={Damages}
                                                onDamageChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.DAMAGES.name, value); }} />
                            <WeaponSelector weaponId={Weapon}
                                            wearingCharacter={ this.state.characterInfos }
                                            onChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.WEAPON.name, value); }} />
                            <WeaponSelector weaponId={DistanceWeapon}
                                            wearingCharacter={ this.state.characterInfos }
                                            distance={true}
                                            onChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.DISTANCE_WEAPON.name, value); }}
                                            onAmmunitionChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.AMMUNITION.name, value);  }} />
                            <Weapons master={MasterWeapons}
                                    classId={classId}
                                    subRaceId={subRaceId}
                                    XP={XP}
                                    onClick={(weaponId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.MASTER_WEAPONS.name, weaponId) }} />
                            <ArmorSelector armorId={Armor}
                                            wearingCharacter={ this.state.characterInfos }
                                            classId={classId}
                                            subRaceId={subRaceId}
                                            onChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.ARMOR.name, value); }}/>
                            <ArmorSelector armorId={Shield}
                                            wearingCharacter={ this.state.characterInfos }
                                            shield={true}
                                            classId={classId}
                                            subRaceId={subRaceId}
                                            onChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SHIELD.name, value); }}/>
                            <Armors master={MasterArmors}
                                    classId={classId}
                                    subRaceId={subRaceId}
                                    onClick={(armorId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.MASTER_ARMORS.name, armorId) }} />
                        </div>

                        <div className="fight">
                            <HPComponent val={HP} maxVal={MaxHP} classId={classId}
                                            onValChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.HP.name, value); }}
                                            onMaxValChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.MAX_HP.name, value); }} />
                            <div className="health">
                                <AlterationsComponent characterAlterations={Alterations} resistances={Resistances} subRaceId={subRaceId} classId={classId}
                                                        onClick={(alterationId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.ALTERATIONS.name, alterationId) }}
                                                        onResistanceClick={this.toggleResistance}/>
                                <div className="complements">
                                    <ACComponent character={this.state.characterInfos} />    
                                    <SpeedComponent subRaceId={subRaceId} classId={classId} armorId={Armor} strength={Strength} XP={XP} />    
                                </div>
                            </div>

                            <div className="special">
                                <SpecialsComponent val={Specials} classId={classId} XP={XP}
                                                    onValChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SPECIALS.name, value); }} />
                                <SpecialCapacitiesComponent subRaceId={subRaceId} classId={classId} specialisationId={Specialisation} XP={XP}
                                                            hiddenCapacities={HiddenCapacities}
                                                            onVisibilityClick={(capacityId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.HIDDEN_CAPACITIES.name, capacityId) }} />
                            </div>
                            <div className="status">
                                <div className="points">
                                    <SpellsComponent spellsLocations={SpellsLocations} classId={classId} specialisationId={Specialisation} XP={XP}
                                                     onValChange={ (value) =>{ this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SPELLS_LOCATIONS.name, value); }} />
                                </div>
                                <SpellBookComponent character={ this.state.characterInfos }
                                                    onMinorSpellClick={(spellId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.MINOR_SPELLS.name, spellId) }}
                                                    onSpellClick={(spellId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.SPELLS.name, spellId) }}/>
                            </div>
                        </div>

                        <div className="stats">
                            <div className="caracteristics-relative">
                                <div className="caracteristics">
                                {   caracteristics?.map((caracteristic) => (
                                        <div key={caracteristic.Name}>
                                            <span className={`caracteristic-name ${caracteristic.OV}`}>{caracteristic.Name}</span>
                                            <Caracteristic
                                                caracteristicName={caracteristic.OV}
                                                value={this.state.characterInfos[caracteristic.OV]}
                                                subRaceId={ subRaceId }
                                                classId={ classId }
                                                onChange={(value) =>{ this.updateCaracteristic(caracteristic.OV, value);}}/>
                                        </div>
                                        )
                                    )
                                }
                                </div>
                                <Skills master={masterSkills}
                                        historicId={historicId}
                                        XP={XP}
                                        caracteristicsBonus={caracteristicsBonus}
                                        subRaceId={subRaceId}
                                        onClick={(skillId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.SKILLS.name, skillId) }} />
                            </div>
                            <SavesComponent saves={Saves} advantages={SaveAdvantages} subRaceId={subRaceId} classId={classId} XP={XP}
                                            onClick={(alterationId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.SAVES.name, alterationId) }}
                                            onAdvantageClick={(alterationId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.SAVE_ADVANTAGES.name, alterationId) }}/>
                            <div className="equipment-bag">
                                <div className="bags">
                                    <BagComponent name="Besace"
                                                capacityCharge={SATCHEL_CHARGE_CAPACITY}
                                                money={Money}
                                                onMoneyChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.MONEY.name, value); }}
                                                characterObjects={SatchelObjects}
                                                onObjectsChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.SATCHEL_OBJECTS.name, value); }} />
                                    <BagComponent name="Sac de voyage"
                                                capacityCharge={capacityCharge-SATCHEL_CHARGE_CAPACITY}
                                                displayMoney={false}
                                                characterObjects={characterObjects}
                                                onObjectsChange={(value) => { this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.OBJECTS.name, value); }} />
                                </div>                                                  
                                <Objects master={MasterObjects}
                                    classId={classId}
                                    historicId={historicId}
                                    onClick={(objectId) => { this.toggleElement(DATA_MODEL.CHARACTERS.columns.MASTER_OBJECTS.name, objectId) }} />
                            </div>
                            <div className="user-notes">
                                <GeneralNotesComponent notes={generalNotes} editorCharacter={Name} onChange={(value) => updateNotes(value, ALL_CHARACTERS_ID) } />
                                <PersonnalNotesComponent globalNotes={Notes} onGlobalNotesChange={(value) =>  this.updateCaracteristic(DATA_MODEL.CHARACTERS.columns.NOTES.name, value) }  />
                            </div>
                        </div>
                    </div>
                </div>
            )
            :(<span className="narrative">Ce personnage n'existe pas</span>)}
        </div>
        )
    }

    toggleElement = (elementName, elementId) => {
        const { Id: characterId } = this.state.characterInfos;
        const elements = this.state.characterInfos[elementName];
        if (characterId !== null) {
            const index = elements?elements.findIndex((name) => name === elementId):-1;
            if (index === -1) {
                insertCharacterElement(characterId, elementName, elementId);
            } else {
                deleteCharacterElement(characterId, elementName, elementId);
            }
        }
    }

    toggleResistance = (alterationId) => {
        const { Id: characterId, Resistances, Alterations } = this.state.characterInfos;
        if (characterId !== null) {
            const index = Resistances?Resistances.findIndex((name) => name === alterationId):-1;
            if (index === -1) {
                insertCharacterElement(characterId, DATA_MODEL.CHARACTERS.columns.RESISTANCES.name, alterationId);
                const index = Alterations?Alterations.findIndex((name) => name === alterationId):-1;
                if (index > -1) {
                    deleteCharacterElement(characterId, DATA_MODEL.CHARACTERS.columns.ALTERATIONS.name, alterationId);
                }
            } else {
                deleteCharacterElement(characterId, DATA_MODEL.CHARACTERS.columns.RESISTANCES.name, alterationId);
            }
        }
    }

    updateCaracteristic = (caracteristicName, value) => {
        const { Id: characterId } = this.state.characterInfos;
        updateCharacterCaracteristic(characterId, caracteristicName, value);
    }

    equals(character) {
        return character
            && this.state.characterInfos.Age === character.Age
            && this.state.characterInfos.Alignment === character.Alignment
            && JSON.stringify(this.state.characterInfos.Alterations) === JSON.stringify(character.Alterations)
            && this.state.characterInfos.Armor === character.Armor
            && this.state.characterInfos.ChargeCapacity === character.ChargeCapacity
            && this.state.characterInfos.Class === character.Class
            && this.state.characterInfos.Defects === character.Defects
            && this.state.characterInfos.DistanceWeapon === character.DistanceWeapon
            && this.state.characterInfos.Eyes === character.Eyes
            && this.state.characterInfos.Hairs === character.Hairs
            && this.state.characterInfos.Height === character.Height
            && this.state.characterInfos.Historic === character.Historic
            && this.state.characterInfos.History === character.History
            && this.state.characterInfos.HP === character.HP
            && this.state.characterInfos.Id === character.Id
            && this.state.characterInfos.Ideals === character.Ideals
            && JSON.stringify(this.state.characterInfos.Languages) === JSON.stringify(character.Languages)
            && this.state.characterInfos.Links === character.Links
            && JSON.stringify(this.state.characterInfos.MasterArmors) === JSON.stringify(character.MasterArmors)
            && JSON.stringify(this.state.characterInfos.MasterObjects) === JSON.stringify(character.MasterObjects)
            && JSON.stringify(this.state.characterInfos.MasterWeapons) === JSON.stringify(character.MasterWeapons)
            && this.state.characterInfos.MaxHP === character.MaxHP
            && this.state.characterInfos.Money === character.Money
            && this.state.characterInfos.Name === character.Name
            && JSON.stringify(this.state.characterInfos.Objects) === JSON.stringify(character.Objects)
            && this.state.characterInfos.PersonnalityTraits === character.PersonnalityTraits
            && this.state.characterInfos.Race === character.Race
            && JSON.stringify(this.state.characterInfos.Resistances) === JSON.stringify(character.Resistances)
            && JSON.stringify(this.state.characterInfos.Skills) === JSON.stringify(character.Skills)
            && this.state.characterInfos.Skin === character.Skin
            && this.state.characterInfos.Weapon === character.Weapon
            && this.state.characterInfos.Width === character.Width;
    }
}

const mapStateToProps = (state, props) => ({
    caracteristics: selectCaracteristics(state),
    subRacesMap: selectSubRacesMap(state),
    racesMap: selectRacesMap(state),
    armorsMap: selectArmorsMap(state),
    weaponsMap: selectWeaponsMap(state)
});
export default connect(mapStateToProps)(Character)
