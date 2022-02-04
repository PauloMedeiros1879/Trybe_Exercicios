//Lógica de Programação e Algoritmos

/* 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Exemplo:

O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24

Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.*/

var f1 = 10;
var resultado = f1;
for (var ex3 = 1; ex3 < f1; ex3++) {
    resultado *= ex3;
}
console.log(resultado);

/*2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana"
 seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para
  verificar se seu algoritmo está funcionando corretamente.*/

  let word = 'tryber';
  let contrario = ''
  for(let vqv = word.length - 1; vqv--;){
   contrario += word[vqv]; // LINHA 24 - Stack Overflow;
  }
  console.log(contrario);
  

  /*3- Considere o array de strings abaixo:
  let array = ['java', 'javascript', 'python', 'html', 'css'];
  Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
  Considere o número de caracteres de cada palavra.*/

  /*4- Um número primo é aquele divisível apenas por 1 e por ele mesmo.
   Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.*/