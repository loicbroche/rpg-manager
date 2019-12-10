import * as firebase from 'firebase';

const FirebaseConfig = {
    apiKey: "AIzaSyB7nrOdJyJZ91JjkQk7uhdMceZO7Pvj7Xw",
    authDomain: "jdr-manager.firebaseapp.com",
    databaseURL: "https://jdr-manager.firebaseio.com"
}
const app = !firebase.apps.length ? firebase.initializeApp(FirebaseConfig) : firebase.app()
const database = app.database();

export { database };
