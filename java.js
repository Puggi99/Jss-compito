// 22/03/2023
//  ESERCIZI CAPITOLO 2 DI ELOQUENTJAVASCRIPT


// //                        PRIMO ESERCIZIO
//  soluzione 1 (mia)
//    var asterisco = "";
//     for(var number = 0 ; number <= 7; number = number +1)
//       {
//        console.log(asterisco +="#")
//       }

//  soluzione 2 (usando string.lenght)

// let string = "";
// while(string.lenght<7){
//     string += "#";
//     console.log(string);
// }



//                           SECONDO ESERCIZIO


// prima soluzione (mia)

// for (let number = 1; number <= 100; number++) {

//     if (number % 3 == 0, number % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (number % 3 == 0) {
//         console.log("Fizz");
//     } else if (number % 5 == 0) {
//         console.log("Buzz");
//     } else{
//         console.log(number)
//     }
// }

// seconda soluzione

// for (let i = 1; i < 101; i++) {
//     let result = "";
//     if(i % 3 === 0){
//         result += "Fizz";
//     }
//     if(i % 5 === 0){
//         result += "Buzz";
//     }
//     if(result) {
//         console.log(result);
//         // continue;
//     } else{
//     console.log(i);
//     }
// }


//                          TERZO ESERCIZIO 

// CICLI NESTATI
//(Nesting - mettere una cosa dentro l'altra, in questo caso i cicli)


// compito - fare la scacchiera con il doppio ciclo 
// let stringa ="";
// for (let x = 0; x < 10; x++) {
//   if( x % 2 === 0){
//     for (let y= 0; y < 10; y++) {
//         // console.log('x: ', x, 'y: ', y);
//         if( y % 2 === 0){
//           stringa += " ";
//         }else{
//           stringa += "#";
//         }
//       }
// } else {
//   stringa += " ";
// }
//  if(x => 8){
//   stringa += "\n";
//  }
// }
// console.log(stringa);
// let stringa = "";
// let size = 8;
// for (let x = 0; x < 8; x++) {
//   if(x > size){
//     stringa += "\n";
//   }else{
//     if(x % 2 !== 0){
//       stringa += " ";
//     }else{
//       stringa += "#";
//     }
//   }
//   for (let y= 0; y < 8; y++) {
//       // console.log('x: ', x, 'y: ', y);
//     if(y % 2 !== 0){
//       stringa += " ";
//     }else{
//       stringa += "#";
//     }
//     console.log(stringa)
//   }
// }
