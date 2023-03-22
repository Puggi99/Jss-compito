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

// for (let x = 1; x < 11; x++){
//     for (let y=1; y < 11; y++){
//         console.log("x: ",x, "y: ", y);
//     }


// } 


for(let riga = 0, riga < 8; riga++){
    if(riga % 2 !== 0) {
        console.log("" + "#").repeat(4);
    }else if (riga % 2 === 0){
        console.log("#" + "").repeat(4);
    }

}
