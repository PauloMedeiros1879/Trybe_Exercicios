// 1 - Dada uma matriz, transforme em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  function flatten() {
  return arrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue)
  }, []); 
  }
  console.log(flatten());
  
  //FINALIZADO  