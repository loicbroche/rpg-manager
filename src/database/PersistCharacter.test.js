import expect from 'expect';
import { database } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'
import { insertCharacter, deleteCharacter, insertCharacterSkills, deleteCharacterSkills, updateCharacterCaracteristic} from 'database/PersistCharacter';

describe('database', () => {
  const skillField = DATA_MODEL.CHARACTERS.columns.SKILLS.name;
  const strengthField = DATA_MODEL.CHARACTERS.columns.STRENGTH.name;
  const newCharacter = {
    Id: "NewCharacterForTests",
    Name: "New Character For Tests",
    Race: "ELF",
    Class: "BARBARIAN",
    Skills: ["Acrobatie", "Ambidextrie"],
    Weapons: ["Bâton", "Dague"],
    WeaponRight: "Bâton",
    WeaponLeft: "",
    Strength: 10
  }
  const newSkill = "new SkillForTest";
  const newStrength = 15;
  const scenarioId = "David";

  it('insert character', done => {
    const testCharacterInserted = (snapshot) => {
      expect(snapshot.child(newCharacter.Id).exists()).toBe(true);
      expect(snapshot.child(newCharacter.Id).val()).toMatchObject(newCharacter);
      done();
    }
    insertCharacter(newCharacter, scenarioId);
    gameDatabase.ref(DATA_MODEL.CHARACTERS.name).once("value", testCharacterInserted);
  });

  it('insert character skill', done => {
    const testSkillInserted = (snapshot) => {
      expect(snapshot.exists()).toBe(true);
      expect(snapshot.child(skillField).exists()).toBe(true);
      expect(snapshot.child(skillField).val()).toContain(newSkill);
      done();
    }
    insertCharacterSkills(newCharacter.Id, newCharacter.Skills.length, newSkill);
    gameDatabase.ref(DATA_MODEL.CHARACTERS.name + '/' + newCharacter.Id).once("value", testSkillInserted);
  });

  it('delete character skill', done => {
    const testSkillDeleted = (snapshot) => {
      expect(snapshot.exists()).toBe(true);
      expect(snapshot.child(skillField).exists()).toBe(true);
      expect(snapshot.child(skillField).val()).not.toContain(newSkill);
      done();
    }
    deleteCharacterSkills(newCharacter.Id, newCharacter.Skills.length);
    gameDatabase.ref(DATA_MODEL.CHARACTERS.name + '/' + newCharacter.Id).once("value", testSkillDeleted);
  });

  it('delete character', done => {
    const testCharacterDeleted = (snapshot) => {
      expect(snapshot.child(newCharacter.Id).exists()).toBe(false);
      done();
    }
    deleteCharacter(newCharacter.Id, scenarioId);
    gameDatabase.ref(DATA_MODEL.CHARACTERS.name).once("value", testCharacterDeleted);
  });

  it('update caracteristic', done => {
    const testCaracteristicUpdated = (snapshot) => {
      expect(snapshot.exists()).toBe(true);
      expect(snapshot.child(strengthField).exists()).toBe(true);
      expect(snapshot.child(strengthField)).toBe(newStrength);
      done();
    }
    updateCharacterCaracteristic(newCharacter.Id, strengthField, newStrength);
    gameDatabase.ref(DATA_MODEL.CHARACTERS.name + '/' + newCharacter.Id).once("value", testCaracteristicUpdated);
  });
});