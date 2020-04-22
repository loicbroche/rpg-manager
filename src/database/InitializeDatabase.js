import * as firebase from 'firebase';

const ReferentialFirebaseConfig = {
    apiKey: "AIzaSyA5ikzxaqcNBwcyPQl1kRCQaWDh2qETC94",
    authDomain: "dd-referential.firebaseapp.com",
    databaseURL: "https://dd-referential.firebaseio.com/",
    storageBucket: "dd-referential.appspot.com"
}
const referentialApp = !firebase.apps?.find((app)=>app.name==="referential") ? firebase.initializeApp(ReferentialFirebaseConfig, "referential") : firebase.app("referential");
const referentialDatabase = referentialApp.database();
const referentialStorage = referentialApp.storage();
export { referentialDatabase };
export { referentialStorage };

const GameFirebaseConfig = {
    apiKey: "AIzaSyAp1iZqvZaw-TCAi1ItRGFvfJlKm-7WQxg",
    authDomain: "rpg-manager-2f59f.firebaseapp.com",
    databaseURL: "https://rpg-manager-2f59f.firebaseio.com",
    storageBucket: "rpg-manager-2f59f.appspot.com"
}
const gameApp = !firebase.apps?.find((app)=>app.name==="game") ? firebase.initializeApp(GameFirebaseConfig, "game") : firebase.app("game");
const gameDatabase = gameApp.database();
const gameStorage = gameApp.storage();
export { gameDatabase };
export { gameStorage };