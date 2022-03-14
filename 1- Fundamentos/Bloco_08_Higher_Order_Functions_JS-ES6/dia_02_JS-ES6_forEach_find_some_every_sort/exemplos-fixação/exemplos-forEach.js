//SEM FOREACH
/*
const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    for (let i = 0; i < students.length; i += 1) {
      const student = students[i];
      if (student.grade >= 60) {
        student.approved = 'Aprovado';
      } else {
        student.approved = 'Recuperação';
      }
    }
  }
  
  verifyGrades();
  
  console.log(students);
  */
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]


  //COM FOREACH

/*const students = [
    { name: 'Maria', grade: 70, approved: '' },
    { name: 'José', grade: 56, approved: '' },
    { name: 'Roberto', grade: 90, approved: '' },
    { name: 'Ana', grade: 81, approved: '' },
  ];
  
  function verifyGrades() {
    students.forEach((student, index) => {
      if (student.grade >= 60) {
        students[index].approved = 'Aprovado';
      } else {
        students[index].approved = 'Recuperação';
      }
    });
  }
  
  verifyGrades();
  
  console.log(students);
  */
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]


  //Array.forEach

let listaDePessoasAprovadas = [
  'player1@gmail.com',
  'player2@gmail.com',
  'player3@gmail.com',
  'player4@gmail.com'
];

const enviarEmail = (email) => {
  console.log(`Enviar para ${email} foi enviado com sucesso!`);
};

listaDePessoasAprovadas.forEach((item, posicao, array) => {
enviarEmail(item);
console.log(`Sua posição é a de: ${posicao}`);
console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}`);
})

//tabuada do 2

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

const multipliesFor2 = (element) => {
  console.log(`2 * ${element}: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

//convertendo para toUpperCase()

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names);