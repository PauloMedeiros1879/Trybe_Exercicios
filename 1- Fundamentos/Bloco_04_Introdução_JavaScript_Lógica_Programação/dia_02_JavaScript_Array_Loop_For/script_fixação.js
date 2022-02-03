//Arrays (listas)

//Exercicio 1

//Obtenha o valor "Serviços" do array menu :
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercicio 2
//Procure o índice do valor "Portfólio" do array menu :
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf('Portfólio') ;

console.log(indexOfPortfolio);

//Exercicio 3
//Adicione o valor "Contato" no final do array menu :
let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push('Contato');

console.log(menu3);

//For
//Exercicio 1
//Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(list = 0; list < groceryList.length; list++){
    console.log(groceryList[list]);
}