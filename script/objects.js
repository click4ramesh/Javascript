// let spaceship = {
//     'Fuel Type' : 'Turbo Fuel',
//     homePlanet : 'Earth',
//     color: 'silver',
//     'Secret Mission' : 'Discover life outside of Earth.'
//   };
  
//   // Write your code below
//     spaceship.color = 'glorious gold';  

//     spaceship.numEngines = 10;

//     delete spaceship["Secret Mission"];



// let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// // Write your code below
// const alienShip = {
//     retreat() {
//         console.log(retreatMessage);
//     },
//     takeOff() {
//       console.log('Spim... Borp... Glix... Blastoff!');
//     }
// };


// alienShip.retreat();
// alienShip.takeOff();


// let spaceship = {
//     passengers: [{name: 'Space Dog'}], 
//     telescope: {
//       yearBuilt: 2018,
//       model: "91031-XLT",
//       focalLength: 2032 
//     },
//     crew: {
//       captain: { 
//         name: 'Sandra', 
//         degree: 'Computer Engineering', 
//         encourageTeam() { console.log('We got this!') },
//        'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
//     },
//     engine: {
//       model: "Nimbus2000"
//     },
//     nanoelectronics: {
//       computer: {
//         terabytes: 100,
//         monitors: "HD"
//       },
//       'back-up': {
//         battery: "Lithium",
//         terabytes: 50
//       }
//     }
//   }; 
  
//   let capFave = spaceship.crew.captain['favorite foods'][0];
  
//   let firstPassenger = spaceship.passengers[0];

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

