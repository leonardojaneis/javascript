// Método para concatenar vários arrays ou elementos,
// todos esses elementos são concatenados em um novo array

const filhas = ['Fernanda', 'Bruna'];
const filhos = ['Rodrigo', 'Gabriel'];

// Arrays originais eles não são modificados
const todos = filhas.concat(filhos, 'Fulano');
console.log(todos, filhas, filhos);

console.log([].concat([1, 2], [3, 4], 5, [[5,6]]));

