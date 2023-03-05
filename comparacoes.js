// == (comparação implicita)
 

/* Na comparação implicita ele converte a variavel string 
para numero e para depois fazer a comparação entre elas
Por esse motivo o resultado da compração é True */

const numero = 5;
const texto = "5";

console.log(numero === texto);

// typeof  -  Retorna o tipo de dado na variavel;

console.log(typeof numero)
console.log(typeof texto)

/* Porem quando utilizandos === ele não faz a conversão de tipo
e por esse motivo o resultado é false já que são tipos de dados diferentes. */ 
