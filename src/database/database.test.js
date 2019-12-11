import { database } from 'database/InitializeDatabase'
import { DATA_MODEL } from 'database/DataModel'

describe('database', () => {
  it('initialize without crashing', done => {
    const fail = (snapshot) => {
      expect(snapshot.exists()).toBe(false);
      done();
    }
    const success = (snapshot) => {
      expect(snapshot.exists()).toBe(true);
      done();
    }
    database.ref("notExists").once("value", fail);
    database.ref().once("value", success);
  });

  Object.values(DATA_MODEL).forEach((table) => {
    it('data model diagram of '+table.name, done => {
      const success = (snapshot) => {
        expect(snapshot.exists()).toBe(true);

        Object.values(table.columns).forEach((column) => {
          snapshot.forEach((childSnapshot) => {
            expect(column.optional || childSnapshot.child(column.name).exists()).toBe(true);
          });
        });

        done();
      }
      database.ref(table.name).once("value", success);
    });
  });

});