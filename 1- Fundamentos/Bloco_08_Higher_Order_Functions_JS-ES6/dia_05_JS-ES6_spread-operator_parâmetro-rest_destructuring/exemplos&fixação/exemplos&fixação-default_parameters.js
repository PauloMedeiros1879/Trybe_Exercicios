//primeira alternativa
/*
const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome usuário!
*/


//segunda e melhor alternativa
/*
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!
*/



//------------Fixação--------
//Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value) => {
    // Escreva aqui a sua função
  };
  
  console.log(multiply(8));
  