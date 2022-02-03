//Exercicio 01

const a = 10;
const b = 20;

console.log("Adição", a+b);
console.log("Subtração", a-b);
console.log("Multiplicação", a*b);
console.log("Divisão", a/b);
console.log("Módulo", a%b);

//Exercicio 02

let one = 2;
let two = 4;

if(one >= two){
    console.log("One é maior");
}
else if(two >= one){
    console.log("Two é maior")
}

//Exercicio 03

const first = 10;
const second = 20;
const third = 30;

if(first >= second && first >= third){
    console.log("first é maior");
} else if(second >= first && second >= third){
    console.log("second é maior");
} else if(third >= first && third >= second){
    console.log("third é maior");
}

//Exercicio 04

let e = "negative";

switch(e){
    case "positive":
      console.log("positive");
      break;
    case "negative":
        console.log("negative");
        break;
    default:
        console.log("zero");  
}

//Exercicio 05

const angle1 = 30;
const angle2 = 60;
const angle3 = 90;

if(angle1+angle2+angle3 == 180){
    console.log("true");
}
else if(angle+angle2+angle3 == 30){
    console.log("false");
}
else{
    console.log("error");
}

//Exercicio 06

let  peca = "Bispo";
 peca = peca.toLocaleLowerCase();

switch(peca){
    case "torre":
        console.log("Frente e Lado, sem limite de casas");
        break;
    case "bispo":
        console.log("diagonais, sem limite de casas");
        break;
    case "cavalo":
        console.log("Em L, 4 casas");
        break;
    case "peão":
        console.log("Frente, 2 casa inicial, depois apenas 1 casa");
        break;
}
    

//Exercicio 07


//Exercicio 08

//Exercicio 09

//Exercicio 10

//Exercicio 11

