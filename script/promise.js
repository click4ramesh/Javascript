// const inventory = {
//     sunglasses: 1941,
//     pants: 1088,
//     bags: 1344
//   };




//   function myExecutor2(resolve, reject) {
//     if (inventory.sunglasses > 0) {
//         resolve('Sunglasses order processed.');
//     }
//     else {
//         reject('That item is sold out.');
//     }

//   }

//   function orderSunglasses2() {
//       return new Promise(myExecutor2);
//   }  

//   orderPromise2 = orderSunglasses2();

//   console.log(orderPromise2);

// console.log("This is the first line of code in app.js.");
// // Keep the line above as the first line of code
// // Write your code here:

// const usingSTO = () => {
// console.log('Print a string');
// }

// setTimeout(usingSTO,3000);






// // Keep the line below as the last line of code:
// console.log("This is the last line of code in app.js.");



// const myExecutor = (resolve, reject) => {
//     if (inventory.sunglasses > 0) {
//         resolve('Sunglasses order processed.');
//     }
//     else {
//         reject('That item is sold out.');
//     }

//   }

//   const orderSunglasses = () =>{
//     return new Promise(myExecutor);
//   }
  
//   orderPromise = orderSunglasses();

//   console.log(orderPromise);

// let prom = new Promise((resolve, reject) => {
// let num = Math.random();
// if (num < .5) {
//     resolve('Yes');
// }
// else {
//     reject('No');
// }
// });

// const handeSuccess = (resolvedValue) => {
//     console.log(resolvedValue);
// };


// const handleFailure = (rejectedValue) =>{
//     console.log(rejectedValue)
// };

// prom.then(handeSuccess, handleFailure);


// const order = [['sunglasses', 1], ['bags', 2]];

// const handleSuccess = (resolvedValue) => {
//   console.log(resolvedValue);
// };

// const handleFailure = (rejectReason) => {
//   console.log(rejectReason);
// };

// // Write your code below:
// checkInventory(order)
//   .then(handleSuccess)
//   .catch(handleFailure);
  

// async function withAsync(num, num2){
//     if (num === 0){
//         return `zero ${num2}`;
//       } else {
//         return 'not zero';
//       }
// }

//     withAsync(0,1)
//     .then(resolvedValue => {
//         console.log(resolvedValue);
//       })  // Prints 5

      

// const brainstormDinner = () => {
//     return new Promise((resolve, reject) => {
//     console.log(`I have to decide what's for dinner...`)
//     setTimeout(() => {
//       console.log('Should I make salad...?')
//       setTimeout(() => {
//         console.log('Should I make ramen...?')
//         setTimeout(() => {
//           console.log('Should I make eggs...?')
//           setTimeout(() => {
//             console.log('Should I make chicken...?')
//             resolve('beans')
//           }, 1000)
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   })
//   }

//  // Native promise version:
// // function nativePromiseDinner() {
// //     brainstormDinner().then((meal) => {
// //         console.log(`I'm going to make ${meal} for dinner.`);
// //     })
// //   }
  
  
//   // async/await version:
//   async function announceDinner() {
//     // Write your code below:
//     let meal = await brainstormDinner();
//         console.log(`I'm going to make ${meal} for dinner.`);  
//   }


//   const shopForBeans = () => {
//     return new Promise((resolve, reject) => {
//           const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
//     setTimeout(()=>{
//       let randomIndex = Math.floor(Math.random() * 5)
//       let beanType = beanTypes[randomIndex];
//       console.log(`I bought ${beanType} beans because they were on sale.`)
//      resolve(beanType);
//     }, 1000)
//   })
//   }
  
//   let soakTheBeans = (beanType) => {
//      return new Promise((resolve, reject) => {
//        console.log('Time to soak the beans.')
//       setTimeout(()=>{
//         console.log(`... The ${beanType} beans are softened.`)
//         resolve(true)
//         }, 1000)
//     })
//   }
  
//   let cookTheBeans = (isSoftened) => {
//     return new Promise((resolve, reject) => {
//       console.log('Time to cook the beans.')
//       setTimeout(()=>{
//         if (isSoftened) {
//           console.log('... The beans are cooked!') 
//           resolve('\n\nDinner is served!')
//         }
//       }, 1000)
//     })
//   }

//     // Write your code below:
// async function makeBeans() {
//     let meal = await brainstormDinner();
//     console.log(`I'm going to make ${meal} for dinner.`);      
//     let type = await shopForBeans();
//     let isSoft = await soakTheBeans(type);
//     let dinner = await cookTheBeans(isSoft);
//     console.log(dinner);
//   }

//   makeBeans();

//   let randomSuccess = () => {
//     let num = Math.random();
//     if (num < .5 ){
//       return true;
//     } else {
//       return false;
//     }
//    };
   
//    //This function returns a promise that resolves half of the time and rejects half of the time
//    let cookBeanSouffle = () => {
//     return new Promise((resolve, reject) => {
//       console.log('Fingers crossed... Putting the Bean Souffle in the oven');
//       setTimeout(()=>{
//         let success = randomSuccess();
//         if(success){
//           resolve('Bean Souffle');
//         } else {
//           reject('Dinner is ruined!');
//         }
//       }, 1000);
//     })
//    };

//    async function hostDinnerParty() {
//     try {
//         let resolvedValue = await cookBeanSouffle();
//         console.log(`${resolvedValue} is served!`);
//     } catch (error) {
//         console.log(error);
//         console.log('Ordering a pizza!');
//     }
//    }


let cookBeans = () => {
  return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('beans')
   }, 1000)
 })
}

let steamBroccoli = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('broccoli')
   }, 1000)
 })
}

let cookRice = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('rice')
   }, 1000)
 })
}

let bakeChicken = () => {
 return new Promise ((resolve, reject) => {
   setTimeout(()=>{
     resolve('chicken')
   }, 1000)
 })
}

async function serveDinner1() {
    let vegetablePromise = steamBroccoli();
    let starchPromise = cookRice();
    let proteinPromise = bakeChicken();
    let sidePromise = cookBeans();
    console.log(`Dinner is served. We're having ${await vegetablePromise},
     ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}`);
    
    }

     serveDinner1();


    async function serveDinner() {
        const resultArray = await Promise.all(
            [steamBroccoli(), cookRice(),bakeChicken(),cookBeans()]   
            )
            resultArray.forEach(element => {
                
             console.log(element);
         });   
       }
       
       serveDinner()