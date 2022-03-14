//1

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

//2

// Array que será passado para o .some

const numbers = [2, 4, 6, 8, 12, 14, 16, 17];

// Callback que checa se o número é ímpar
function isOdd(number) {
  return number % 2 !== 0;
}

// Função em que passamos o array numbers como parâmetro. Se houver pelo menos um número ímpar, a callback retornará true e a frase "Pelo menos um número é ímpar". Caso contrário, o retorno da callback é false, indicando que não há número ímpar no array.
checkIsOdd = (array) => {
  const answer = document.querySelector("#answer");
  if (array.some(isOdd)) {
    answer.innerHTML = "Pelo menos um número é ímpar";
  } else {
    answer.innerHTML = "Nenhum número é impar";
  }
};

const btnSome = document.querySelector("#btn-some");

btnSome.addEventListener("click", () => checkIsOdd(numbers));