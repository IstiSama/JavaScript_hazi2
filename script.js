console.log("Műkszik");

function greeting(firstName, lastName) {
    console.log("Adjisten, " + firstName + " " + lastName + "!");
}

greeting("Max", "Cavalera");
greeting("Wéber", "István");
greeting("Varga", "Szabolcs");

function multi(number1, number2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        console.log("Hibás paraméter: " + (typeof number1 !== 'number' ? number1 : number2));
    }   
    return number1 * number2;
}

let outCome = multi(3, 3);
console.log("A két szám összege: " + outCome);

let outCome2 = multi(5, 8);
console.log("A két szám összege: " + outCome2);

let outCome3 = multi(324, 610);
console.log("A két szám összege: " + outCome3);

let outCome4 = multi("nyuszi", "gekko");


let szamok = [3,6,12,53,86,43,934,201,53,87];

console.log(szamok[4]);

for (let index = 0; index < szamok.length; index++){
    console.log(szamok[index]);
}

console.log("A számok háromszorosa: ");

for (let index = 0; index < szamok.length; index++){
    console.log(szamok[index]*3);
}

console.log("A számok háromszorosa minusz 1: ");

for (let index = 0; index < szamok.length; index++){
    let eredmeny = (szamok[index] * 3) - 1;
    console.log(eredmeny);
}

console.log("Páratlan számok: ");

for (let index = 0; index < szamok.length; index++){
    if (szamok[index] % 2 !== 0) {
        console.log(szamok[index]);
    }
}





