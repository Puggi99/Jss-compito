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


// let scacchiera = "";

// for(let y = 0; y < 8; y++){
//     for(let x = 0; x < 8 ; x++){
//         if(y % 2 === 0){
//             if(x % 2 === 0){
//                 scacchiera += "#";
//             }else{
//                 scacchiera += " ";
//             }

//         }else{
//             if( x % 2 === 0){
//                 scacchiera += " ";
//             }else{
//                 scacchiera += "#";
//             }
//         }

//     }
//     scacchiera += "\n"
// }
// console.log(scacchiera)


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




// 22/03/2023
//  ESERCIZI

// MINIMUM CAPITOLO 3 DI ELOQUENTJAVASCRIPT

// function minimo(num1,num2){
//     let risultato = Math.min(num1,num2);
//     return risultato;
// }
// console.log(minimo(1,2))

// function minimo1(num1,num2){
//     if(num1>num2){
//         return num2;
//     }else{
//         return num1;
//     }
// }console.log(minimo1(1,2))

// const minimoLambda = (num1,num2) => num1 > num2 ? num2 : num1;

// (1) Scrivere una funzione che dato un numero se è positivo lo moltiplichi per due, se negativo no.

// function numeropositivo(numero){
//     if(numero >= 0){
//         numero *= 2;
//         return numero
//     }
// }
// console.log(numeropositivo(4))

// const doubleNumberIfPositiveLambda = (n) => n >= 0 ? n*2 : n;    operatore ternario: fa lo stesso lavoro della funzione chartrue. Si usa solo se la funziona è molto semplice, proprio perchè l'operatore ternario è molto difficile da interpretare


// (2) Scrivere una funzione che data una stringa restituisca la sua versione maiuscola.

// function maiuscola (m){
//     m = m.toUpperCase();
//     return m
// }
// console.log(maiuscola('ciao'));



// (3) Scrivere una funzione che data una stringa mi restituisca vero se è più lunga di 10 caratteri altrimenti restituisca falso

// function chartrue (i){
//     let cavolo = "";
//     if (i.length > 10){
//         cavolo += "vero";

//     } else{
//         cavolo += "falso";

//     }
//     return cavolo
// }
// console.log(chartrue('ciaociaociao'));
 


// 2° soluzione
// function chartrue (i){
    
//     if (i.length > 10){
//         return True;

//     } else{
//         return False;

//     }
  
// }
// console.log(chartrue('ciao'));



// (4) Scrivere una funzione pura che restituisca la scacchiera

// function skacchiera(i){
//     let scacchiera = "";

// for(let y = 0; y < 8; y++){
//     for(let x = 0; x < 8 ; x++){
//         if(y % 2 === 0){
//             if(x % 2 === 0){
//                 scacchiera += "#";
//             }else{
//                 scacchiera += " ";
//             }

//         }else{
//             if( x % 2 === 0){
//                 scacchiera += " ";
//             }else{
//                 scacchiera += "#";
//             }
//         }

//     }
//     scacchiera += "\n"
// }
// return scacchiera;
// }



// (5) Scrivere una funzione che dato un numero, restituisca una stringa con la logica di FizzBuzz


// function strFizzBuzz(number){
// for (let number = 1; number <= 100;) {

//     if (number % 3 == 0, number % 5 == 0) {
//         return "FizzBuzz";
//     } else if (number % 3 == 0) {
//         return "Fizz";
//     } else if (number % 5 == 0) {
//         return "Buzz";
//     } else{
//         return number;
//     }
// }
// }

// console.log(strFizzBuzz());

// function strFizzBuzz(number){
//     if (number % 3 === 0 && number % 5 === 0) {
//         return "FizzBuzz";
//     } else if (number % 3 == 0) {
//         return "Fizz";
//     } else if (number % 5 == 0) {
//         return "Buzz";
//     } else{
//         return number;
//     }
// }
// console.log(strFizzBuzz(8))



// (6) Scrivere una funzione che data una stringa restituisca una stringa composta solo dai caratteri dispari dell'originale

// let parolaDispari="";
// function dispari(numero) {
//     for (let i = 1; i < numero.length; i+=2) {
//       parolaDispari += numero[i];
//   }
//   return parolaDispari;
// }console.log(dispari("Babbo"))


// 2° soluzione

// function selectOddCharsFromText(text) {

// }


// console.log(selectOddCharsFromText("ciao"));
// console.log(selectOddCharsFromText("pincopallino"));
// console.log(selectOddCharsFromText("dajeroma"));        


// console.log(dispari("ciao"));
// console.log(dispari("pincopallino"));
// console.log(dispari("dajeroma"));      



// (7) Scrivere una funzione che sommi tutti i numeri in un range prestabilito

// function sumRange(startNumber, endNumber){
//     let sum = 0;
//     for(let i = startNumber; i <= endNumber; i++){
//         sum = sum + i;
//     }return sum;
// }

// console.log(sumRange(0,3)); // 6
// console.log(sumRange(1,3)); // 6
// console.log(sumRange(1,5)); // 15
// console.log(sumRange(2,6)); // 20

