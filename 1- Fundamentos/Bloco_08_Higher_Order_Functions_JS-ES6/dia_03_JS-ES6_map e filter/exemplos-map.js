//usando for
const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
    fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
}

console.log(fullNames);

//usando map
const persons2 = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames2 = persons2.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames2); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

//O for foi substituído por apenas uma linha de código.


//preciso transformar todos os números em negativos e passa-lós para um array novo.

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

//E como seria apenas com for ?

const numbers2 = [1, 2, 3, 4, -5];

const negativeNumbers2 = [];
for (let index = 0; index < numbers2.length; index += 1) {
    if (numbers2[index] > 0) {
        negativeNumbers2.push(numbers2[index] * -1);
    } else {
        negativeNumbers2.push(numbers2[index]);
    }
}

console.log(negativeNumbers2); // [ -1, -2, -3, -4, -5 ]
console.log(numbers2); // [ 1, 2, 3, 4, -5 ]

//Outras formas de usar o .map é unir dois arrays para criar um novo.
/*
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
*/

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => ({
    [product]: listPrices[index]
}));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ]


//usando map e forEach
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
    if (numero < 5 && numero % 2 === 0) {
        paresMenoresQueCinco.push(numero);
    }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]

//Usando outras HOF's com map;
const estudantes = [{
        nome: 'Jorge',
        sobrenome: 'Silva',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 67 },
            { name: 'Português', nota: 79 },
            { name: 'Química', nota: 70 },
            { name: 'Biologia', nota: 65 },
        ],
    },
    {
        nome: 'Mario',
        sobrenome: 'Ferreira',
        idade: 15,
        turno: 'Tarde',
        materias: [
            { name: 'Matemática', nota: '59' },
            { name: 'Português', nota: '80' },
            { name: 'Química', nota: '78' },
            { name: 'Biologia', nota: '92' },
        ],
    },
    {
        nome: 'Jorge',
        sobrenome: 'Santos',
        idade: 15,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: '76' },
            { name: 'Português', nota: '90' },
            { name: 'Química', nota: '70' },
            { name: 'Biologia', nota: '80' },
        ],
    },
    {
        nome: 'Maria',
        sobrenome: 'Silveira',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: '91' },
            { name: 'Português', nota: '85' },
            { name: 'Química', nota: '92' },
            { name: 'Biologia', nota: '90' },
        ],
    },
    {
        nome: 'Natalia',
        sobrenome: 'Castro',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: '70' },
            { name: 'Português', nota: '70' },
            { name: 'Química', nota: '60' },
            { name: 'Biologia', nota: '50' },
        ],
    },
    {
        nome: 'Wilson',
        sobrenome: 'Martins',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: '80' },
            { name: 'Português', nota: '82' },
            { name: 'Química', nota: '79' },
            { name: 'Biologia', nota: '75' },
        ],
    },
];

//usando for
// const allNameStudents = [];

// for (let index = 0; index < estudantes.length; index += 1) {
//     if (estudantes[index].turno === 'Manhã') {
//         allNameStudents.push(`${estudantes[index].nome} ${estudantes[index].sobrenome}`)
//     }
// }

// console.log(allNameStudents);

//usando map e filter;
const allNameStudents = estudantes.filter((estudante) => (
    estudante.turno === 'Manhã')).map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);

console.log(allNameStudents);


//Usando apenas for;
/*
const findStudent = (name, students) => {
    for (let index = 0; index < students.length; index += 1) {
        if (students[index].nome === name) {
            return students[index];
        }
    }
};

const reportStatus = (name, students) => {
    const getStudent = findStudent(name, students);
    const report = [];
    for (let index = 0; index < getStudent.materias.length; index += 1) {
        if (getStudent.materias[index].nota >= 60) {
            report.push(`${getStudent.materias[index].name} Aprovado`);
        } else {
            report.push(`${getStudent.materias[index].name} Reprovado`);
        }
    }
    return report;
};

console.log(reportStatus('Natalia', estudantes));
*/

//Com find e map;

const reportStatus = (name, students) => {
    const studentInfo = students.find((student) => student.nome === name);
    return studentInfo.materias.map((materia) => (
        `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
    ));
};

console.log(reportStatus('Natalia', estudantes));