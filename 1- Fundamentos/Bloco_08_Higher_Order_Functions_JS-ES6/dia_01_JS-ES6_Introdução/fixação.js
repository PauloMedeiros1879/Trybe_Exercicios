const acordar = () => 'Acordando!!';
const café = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';
const doingThings = (wakeup) => wakeup();
console.log(doingThings(acordar));
console.log(doingThings(café));
console.log(doingThings(dormir));