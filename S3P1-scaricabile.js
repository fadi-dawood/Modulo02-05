/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve 
 ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1, num2) {
    let sum;
    if ((typeof num1 === "number") && (typeof num2 === "number")) {
        if (num1 === num2) {
            sum = num1 * 6;
            return sum;
        }
        sum = (num1 + num2);
        return sum;
    } else {
        return "invalid input";
    }
}
let exercise1 = crazySum(2, 2);
console.log(exercise1);

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro
 è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(yourNumber) {
    if (typeof yourNumber === "number") {
        if (((yourNumber >= 20) && (yourNumber <= 100)) || (yourNumber === 400)) {
            return true;
        }
        return false;
    } else {
        return "invalid input";
    }
}
let exercise2 = boundary(25);
console.log(exercise2);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita 
 (es.: EPICODE => EDOCIPE).
*/

function reverseString(yourString) {
    let reverse = [];
    for (i = yourString.length - 1; i >= 0; i--) {
        reverse.push(yourString[i]);
    }
    return reverse.join("");
}

let exercise3 = reverseString("Hello");
console.log(exercise3);

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola 
 ogni lettera iniziale di ogni parola.
*/

function upperFirst(yourString) {
    let newString = [];
    for (i = 0; i < yourString.length; i++) {
        let currentLetter = yourString[i];
        let previousLetter = yourString[i - 1];
        if ((i === 0) || (previousLetter === " ")) {
            newString.push(currentLetter.toUpperCase())
        } else {
            newString.push(currentLetter.toLowerCase())
        }
    }
    return newString.join("");
}

let exercise4 = upperFirst("ciao fadi");
console.log(exercise4);

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array 
 contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(numberOfindexes) {
    if (typeof numberOfindexes !== "number") {
        return "invalid input";
    } else {
        let array = [];
        for (i = 0; i < numberOfindexes; i++) {
            array.push(Math.floor(Math.random() * 10))
        }
        return array;
    }
}

let myRandomArray = giveMeRandom(5);
console.log(myRandomArray);

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    if ((typeof l1 !== "number") || (typeof l2 !== "number")) {
        console.log("invalid input");
    } else {
        let area = l1 * l2;
        return area;
    }
}

let ourArea = area (5, 2);
console.log(ourArea);


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff (number1){
    if (typeof number1 !== "number") {
        console.log("invalid input");
    } else {
        let result = Math.abs(19 - number1)
        if (result > 19){
            result *= 3;
            return result;
        } 
        return result;
    }
}
let sottration = crazyDiff (50);
console.log(sottration);

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la 
 stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(string){
    if ((string.slice(0,4)) === "code"){
        return string;
    }
    return "code" + string;
}

let aggiungicode = codify ("fadi");
console.log(aggiungicode);


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; 
 altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(interYourNumber){
    if ((typeof interYourNumber !== "number") || (interYourNumber <= 0)){
        console.log("invalid input");
    } else {
        if ((interYourNumber % 3 === 0) || (interYourNumber % 7 === 0)){
            return true;
        }
        return false;
    }
}

let check1 = check3and7 (10);
console.log(check1);


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo 
 e l'ultimo carattere.
*/

function cutString(stringToCut){
    if (typeof stringToCut !== "string"){
        console.log("invalid input");
    } else {
        let newCutString = [];
        for (i=1; i < (stringToCut.length - 1); i++){
            newCutString.push(stringToCut[i])
        }
        return newCutString.join("")
    } 
}

let cutIt = cutString ("Ciao Fadi");
console.log(cutIt);



/*Esercizi Extra Parte 2 - https://codegrind.it/esercizi/javascript/funzioni */
/*Esercizio 2
    Scrivi una funzione che prenda un parametro numero e restituisca true se il numero è pari, altrimenti restituisca false.
*/
 
function pariOrDispari(number){
    if (number % 2 === 0){
        return true;
    }
    return false;
}

let myNumber = pariOrDispari(10)
console.log(myNumber)


/*Esercizio 3
Scrivi una funzione che prenda due parametri di tipo stringa e restituisca la loro concatenazione.
*/

function stringJoin (str1, str2){
    let result = [];
    result = result.concat(str1);
    result = result.concat(str2);
    return result;
}

let unisci = stringJoin("Ciao", "Hello")
console.log(unisci)

/* Esercizio 4
Scrivi una funzione che prenda un parametro numero e restituisca il suo fattoriale.
*/

function factorial(n){
    let factorialResult = 1
    for (i = 1; i <= n; i++){
        factorialResult *=i;
    }
    return factorialResult;
}

let num = factorial(5);
console.log(num)

/*Esercizio 5
Scrivi una funzione che generi un numero casuale compreso tra un valore minimo e un valore massimo.
*/

function randomNumber (max, min){
    let randomNumberResult = min + Math.random()*(max-min);
    return randomNumberResult;
}

let random = randomNumber(50,70);
console.log(random)

/*Esercizio 6
Scrivi una funzione che prenda una parola come parametro e restituisca true se la parola è palindroma, altrimenti restituisca false.
*/

function palindromeCheck(yourStringToCheck){
    let k = 0
    for(i = 0; i < yourStringToCheck.length; i++){
        for (j = yourStringToCheck.length - 1; j >= 0; j-- ){
            if ((yourStringToCheck[i] === yourStringToCheck[j]) && (i + j === yourStringToCheck.length - 1)){
                k += 1
            }
        }
    }
    if (k === yourStringToCheck.length){
        return true;
    }
    return false;
}

let stringcheck = palindromeCheck("5fgkgf5");
console.log(stringcheck)


/* Esercizio 7
Scrivi una funzione che prenda un array di numeri come parametro e restituisca la somma di tutti gli elementi.
*/

function sumArrayNumber(yourArray){
    let sum = 0;
    for (i = 0; i < yourArray.length; i++){
        sum += yourArray[i];
    }
    return sum;
}

myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayToSum = sumArrayNumber(myArray);
console.log(arrayToSum)


/*Esercizio 8
Scrivi una funzione che prenda un array di numeri come parametro e restituisca un oggetto con le proprietà "massimo" e "minimo" che rappresentano 
rispettivamente il valore massimo e il valore minimo dell'array.
*/


function maxAndMinOf(yourArray){
    let max = yourArray[0];
    let min = yourArray[0];
    for (i = 0; i < yourArray.length; i++){
        if (yourArray[i] > max){
            max = yourArray[i];
        } else if(yourArray[i] < min){
            min = yourArray[i];
        }
    }
    let maxMin = {
        Maximum : max,
        Minimum : min, 
    }
    return maxMin;
}

let myRange = maxAndMinOf (myArray);
console.log (myRange)


/*Esercizio 9
Scrivi una funzione che prenda una stringa come parametro e restituisca il numero di vocali presenti nella stringa.
*/

function numberOfVovals (yourString){
    let k = 0;
    for (i = 0; i < yourString.length; i++){
        let current = yourString[i];
        if ((current.toLowerCase() === "a")||(current.toLowerCase() === "e")||(current.toLowerCase() === "i")||(current.toLowerCase() === "o")||(current.toLowerCase() === "u")){
            k += 1;
        }
    }
    return k;
}

let vocali = numberOfVovals ("my name Is");
console.log (vocali)


/*Esercizio 10
Scrivi una funzione che prenda un array di numeri come parametro e restituisca la media di tutti gli elementi.
*/


function medArrayNumber(yourArray){
    let sum = 0;
    for (i = 0; i < yourArray.length; i++){
        sum += yourArray[i];
    }
    let med = sum / yourArray.length;
    return med;
}

let arrayMed = medArrayNumber(myArray);
console.log(arrayMed)




//! M1 - Epicode - JavaScript Extra Training (Marco Longo)
//? Ex.4 (Hard) - Dato un array di numeri interi (nums) ed un numero intero (target), ritornare i 2 indici degli elementi nell’array nums che, sommati, restituiscano il 
// numero target.
//? Assumere che ogni nums fornito in input accetti solo una soluzione e che questo contenga solo numeri diversi fra loro.
// Esempio:
// Input: nums = [4, 9, 11, 13] , target = 22
// Output: [1,3]

// nums [0, 1, 2, 3, 4, 5, 6]
// Suggerimento: Sapevi che i cicli for possono essere innestati?


function targetInArray (array, target){
    indici = [];
    for (i = 0; i < array.length; i++){
        for (j = 0; j < array.length; j++){
            if (array[i] + array[j] === target){
                indici.push(array[i]);
                indici.push(array[j]);
                return indici;
            }
        }
    }
    console.log ("No Solution")
}


let arraytarget = targetInArray(myArray, 3);
console.log(arraytarget)

