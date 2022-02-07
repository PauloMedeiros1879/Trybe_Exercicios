//Fixação - Objetos

//1 - Crie um objeto player contendo as variáveis listadas abaixo.

/*let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 }; */

let esportista =  {
name: 'Marta',
lastName: 'Silva',
age: 34,
medals: { golden: 2, silver: 3}
};

//2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log('A jogadora' + ' ' + esportista.name + ' ' + esportista.lastName + ' ' + 'tem' + ' ' + esportista.age + ' ' + 'anos de idade');
//3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

esportista['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

//4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
console.log('A jogadora' + ' ' + esportista.name + ' ' + esportista.lastName + ' ' + 'foi eleita a melhor do mundo por 6 vezes' + ' ' +   esportista.bestInTheWorld);
//5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
console.log('A jogadora possui' + ' ' + esportista.medals.golden + ' ' + 'medalhas de ouro e' + ' ' + esportista.medals.silver + ' ' + 'medalhas de prata');

//Fixação - for/in for/of
/*
 ------for/in-----

let food = ['hamburguer', 'bife', 'acarajé'];

for (let position in food) {
  console.log(position);
};
//resultado: 0, 1, 2;

-----for/of-----

let food = ['hamburguer', 'bife', 'acarajé'];

for (let value of food) {
  console.log(value);
};
//resultado: hamburguer, bife, acarajé;*/ 

//1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for(let key in names){
console.log('Olá' + ' ' + names[key]);
  }

  //2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
  
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for(let key in car){
console.log(key, car[key]);
}

//Fixação - Função

/*EX:

function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
        return primeiroNum + ' é maior que ' + segundoNum;
      } else if (segundoNum > primeiroNum) {
        return segundoNum + ' é maior que ' + primeiroNum;
      } else {
        return 'Os números são iguais';
      }
    }
    
    console.log(maiorNum(10, 20)); // 20 é maior que 10
    console.log(maiorNum(2, -5)); // 2 é maior que -5
    console.log(maiorNum(1, 1)); // Os números são iguais
    */

    