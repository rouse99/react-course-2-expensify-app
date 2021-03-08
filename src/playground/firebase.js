import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAuS-gle8hQxq118af5XbQBaX9soTnVjkk",
    authDomain: "expensify-471d8.firebaseapp.com",
    databaseURL: "https://expensify-471d8-default-rtdb.firebaseio.com",
    projectId: "expensify-471d8",
    storageBucket: "expensify-471d8.appspot.com",
    messagingSenderId: "926148212115",
    appId: "1:926148212115:web:d2d1f84a5741d356c3e466",
    measurementId: "G-PXQZS26WP2"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });
 
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

const onValueChange = database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    });
    console.log(expenses);
});    

database.ref('expenses').push({
    description: 'Coffee',
    amount: 329,
    note: '',
    createdAt: 9456723123
});


// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });

//array has to be restructured as objects
// const firebaseNotes = {
//     notes: {
//         someidentifier_asfas: {
//             title: 'first note',
//             body: 'this is my note'            
//         },
//         someidentifier_gdfsga: {
//             title: 'second note',
//             body: 'this is my second note'            
//         }
//     }
// };

//array that firebase won't store as expected
// const notes = [{
//     id: '12',
//     title: 'first note',
//     body: 'this is my note'
// },
// {
//     id: '18',
//     title: 'second note',
//     body: 'this is my second note'
// }];

// database.ref('notes').set(notes);
//   database.ref().set({
//     name: 'David Rouse',
//     age: 47,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Durham',
//         country: 'United States'
//     }
//   }).then(() => {
//       console.log("data is saved");
//   }).catch((e) => {
//     console.log('This failed', e);
//   });

// const printMessage = ({ name, job }) => {
//     console.log(`${name} is a ${job.title} at ${job.company}`);
// }

// const onValueChange = database.ref().on('value', (snapshot) => {
//     printMessage(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });


// setTimeout(() => {
//     database.ref().update({
//         'job/company': 'USPS',
//         'job/title': 'Mail Carrier'
//     });
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(51);
// }, 10500);
//   database.ref()
//     .update({
//         stressLevel: 9,
//         'job/company': 'Amazon',
//         'location/city': 'Seattle'
//     })
//     .then(() => {
//         console.log("successfully updated.");
//     })
//     .catch((e) => {
//         console.log("there was an issue updating", e);
//     });

//     database.ref('location/city')
//         .once('value')
//         .then((snapshot) => {
//             const val = snapshot.val();
//             console.log("here's the data: ", val);
//         })
//         .catch((e) => {
//             console.log("something went wrong with fetch", error);
//         })

//   database.ref('isMarried')
//     .set(null)
//     .then(() => {

//     })
//     .catch((e) => {

//     });

//   database.ref()
//     .update({
//         job: 'Development Manager',
//         'location/city': 'Boston'
//     })
//     .then(() => {
//         console.log("successfully updated.");
//     })
//     .catch((e) => {
//         console.log("there was an issue updating", e);
//     });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log("successfully removed the isMarried flag");
//     }).catch((e) => {
//         console.log("there was an issue removing isMarried", e);
//     });

