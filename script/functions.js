//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods


// function getReminder() {
//     console.log('Water the plants.');
// }

// function greetInSpanish() {
//     console.log('Buenas Tardes.');    
// }

// function sayThanks(name,test) {
//     console.log(`Thank you for your purchase ${name} ! We appreciate your business. ${test}`);
//   }

//   function sayThanks2(name = 'Stranger') {
//     console.log(`Thank you for your purchase ${name} ! We appreciate your business.`);
//   }

//     sayThanks('name', 'test');

//   sayThanks2();

//   function monitorCount(rows, columns) {
//     return rows * columns;
//   }

//   // Function experession
//   const monitorCount2 = function (rows, columns) {
//     return rows * columns;     
//   }

// // Arrow function
// // const plantNeedsWater10 = function(day) {
// //     day === 'Wednesday' ? true : false;
// //   };

// //   const plantNeedsWater = (day) => {
// //     day = day.tolowercase( );
// //   };

//   const plantNeedsWater = day => day === 'Wednesday' ? true : false;

//  console.log(plantNeedsWater('Tuesday'));


//  const getUserChoice = (userInput) => {
//     userInput = userInput.toLowerCase();
//     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')
//     {
//         return userInput;
//     } else  {
//         console.log('Invalid value');
//     }
//  }

//  const getComputerChoice = () => {
//      let i = Math.floor(Math.random( ) * 3);
//      switch (i) {
//         case 0:
//              return 'rock';
//              break;
//         case 1:
//             return 'paper';
//             break;
//         default:
//             return 'scissors';     
//         break;
//      }
//  }

//  getUserChoice('rock');
//  console.log(getComputerChoice( ));

//  const determineWinner = (userChoice, computerChoice) => {
//     if (userChoice = computerChoice) {
//         return 'Tie';
//     }
//  }

//  const shortname = determineWinner;


//  //Fumction as a parameter
//  const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//     for(let i = 1; i <= 1000000; i++) {
//       if ( (2 + 2) != 4) {
//         console.log('Something has gone very wrong :( ');
//       }
//     }
//   };
  
//   const addTwo = num => num + 2;
  
//   const timeFuncRuntime = funcParameter => {
//     let t1 = Date.now();
//     funcParameter();
//     let t2 = Date.now();
//     return t2 - t1;
//   };
  
//   // Write your code below
  
//   const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
  
//   const checkConsistentOutput = (func, val) => {
//       let firstTry = func(val);
//       let secondTry = func(val);
//       if (firstTry === secondTry) {
//           return firstTry
//       } else {
//           return 'This function returned inconsistent results'
//       }
//   };
  
//   checkConsistentOutput(addTwo, 10);

// const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`));


// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// // Create the secretMessage array below
// const secretMessage = animals.map(animal => {
//     return animal[0];
// });

// console.log(secretMessage);

// //Divide all the big numbers by 100 using map
// const bigNumbers = [100, 200, 300, 400, 500];

// // Create the smallNumbers array below
// const smallNumbers = bigNumbers.map(
//   number => {
//     return number / 100;
//   }
// );

// //Filter
// const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// // Call .filter() on randomNumbers below
// const smallNumbers = randomNumbers.filter(
//   number => {
//     return number < 250;
//   }
// )

// const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// // Call .filter() on favoriteWords below

// const longFavoriteWords = favoriteWords.filter(
//   word => {
//     return word.length > 7;
//   }
// )

// //find index
// const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// const foundAnimal = animals.findIndex(
//   word => {
//     return word === 'elephant';
//   }  
// )

// const startsWithS = animals.findIndex(
//   word => {
//     return word[0] === 's';
//   }  
// )

// //reduce
// const numbers = [1, 2, 4, 10];

// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })

// console.log(summedNums) // Output: 17

// const newNumbers = [1, 3, 5, 7];

// const newSum = newNumbers.reduce((accumulator,currentValue) => {
// console.log('The value of accumulator: ', accumulator);
// console.log('The value of currentValue: ', currentValue);
// return accumulator + currentValue;
// }, 10
// );

// console.log(newSum);

// const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// function isWordElephant(word){
// return word === 'elephant';
// };

// let foundAnimal = animals.findIndex(isWordElephant);
// console.log(foundAnimal);

// // .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
// // .map() executes the same code on every element in an array and returns a new array with the updated elements.
// // .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
// // .findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
// // .reduce() iterates through an array and takes the values of the elements and returns a single value.

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
console.log(storyWords);
console.log(storyWords.length - 1);

function removeWords(word){
return !unnecessaryWords.includes(word);
};

const betterWords = storyWords.filter(removeWords);

console.log(betterWords);

for (word of betterWords) {
if (word === 'really')
}