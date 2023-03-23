// 22/03/2023
//  ESERCIZI CAPITOLO 2 DI ELOQUENTJAVASCRIPT


// //                        PRIMO ESERCIZIO
//  soluzione 1 (mia)
//    let cancelletto = "";
//     for(var number = 0 ; number <= 7; number = number +1)
//       {
//        console.log(cancelletto +="#")
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

// MIO TENTATIVO (sbagliato)

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

// let cancelletto ="";
// for (let x = 1; x < 10; x++)
//   if( x % 2 === 0){
//     console.log(cancelletto+="#");
//     }else{
//     console.log(cancelletto+=" ");
//     for (let y= 1; y < 10; y++) {
//         if( y % 2 === 0){
//             console.log(cancelletto+="#");
//             }else{
//             console.log(cancelletto+=" ");
// //         // console.log('x: ', x, 'y: ', y);
// }

//     }

// }

// CORREZIONE 

// 1° soluzione (la più facile)

// let rigaPari = "# # # #"
// let rigaDispari =" # # # #"
// for(let i = 0; i <= 8; i++){
//     if(i % 2 === 0){
//         console.log(rigaPari);
//     }else
//         console.log(rigaDispari);
// }

// 2° soluzione (con doppio ciclo)


let scacchiera = "";

for(let y = 0; y < 8; y++){
    for(let x = 0; x < 8 ; x++){
        if(y % 2 === 0){
            if(x % 2 === 0){
                scacchiera += "#";
            }else{
                scacchiera += " ";
            }
            
        }else{
            if( x % 2 === 0){
                scacchiera += " ";
            }else{
                scacchiera += "#";
            }
        }

    }
    scacchiera += "\n"
}
console.log(scacchiera)

        
//-------------------------------------------------------------------------


// ESERCITAZIONE


// for(let i = 20; i >= 0; i -=2){
//     console.log(i)
// }

//---------------------------------------------------------

// for (let i = 0; i < 20; i++) {
//    if (i % 2 === 0){
//     console.log(i/2);
//    }else if (i % 3 === 0){
//     console.log(i**3);
//    }else {
//     console.log(i);
//    }
    
// }

//---------------------------------------------------------

// let misteryNumber = 1;
// let notFound = true;
// while(notFound){
//     const multipleOf2 = misteryNumber % 2 === 0;
//     const multipleOf3 = misteryNumber % 3 === 0;
//     const multipleOf5 = misteryNumber % 5 === 0;
//     if(multipleOf2 && multipleOf3 && multipleOf5){
//         console.log(misteryNumber);
//         notFound = false;
//     }else{
//         misteryNumber++;
//     }
// }

//---------------------------------------------------------


