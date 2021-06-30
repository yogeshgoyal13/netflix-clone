// made firebase connection and using seedDatabase, added data into firestore(films and videos desc.)

// locally, data is in seed.js file

import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCHXzRDypzlhMawCvLo1P96u0YBXsVYezo",
    authDomain: "netflix-clone-b7781.firebaseapp.com",
    projectId: "netflix-clone-b7781",
    storageBucket: "netflix-clone-b7781.appspot.com",
    messagingSenderId: "75792855802",
    appId: "1:75792855802:web:32903672b5652e1c9acf43"
};

const firebase = Firebase.initializeApp(config);

// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
