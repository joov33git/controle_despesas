const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');
console.log(inputTransactionName) // input#text
const form = document.querySelector('#form');
console.log(form); // form#form
const incomeDisplay = document.querySelector('#money-plus');
const expenseDisplay = document.querySelector('#money-minus');
const balanceDisplay = document.querySelector('#balance');
console.log({incomeDisplay, expenseDisplay, balanceDisplay});

const transactionUl = document.querySelector("#transactions");
console.log(transactionUl); //ul#trasactions.trasactions 

const dummyTransactions = [
  {id: 1, name:'Bolo de Brigadeiro', amount: -20},
  {id: 2, name:'Salário', amount: 300},
  {id: 3, name:'Torta de frango', amount: -10},
  {id: 4, name:'Violão', amount: 150}
]

const addTransactionIntoDOM = transaction => {

  const operator = transaction.amount < 0 ? '-' : '+';
  const CSSClass = transaction.amount < 0 ? "minus" : "plus";
  const amountWithoutOperator = Math.abs(transaction.amount);
  const li = document.createElement("li");

  li.classList.add(CSSClass);
  li.innerHTML = `${transaction.name} <span> ${operator}  R$ ${amountWithoutOperator}</span>`;
  transactionUl.append(li);

  console.log(li); // li.plus
  console.log(operator); // +

  {// <li class="minus">
       //     Salário <span>-$400</span><button class="delete-btn">x</button>
       // </li>
   }
};

addTransactionIntoDOM(dummyTransactions[1]); /*remover*/

const upDateBalanceValues = () => {
 const transactionsAmounts = dummyTransactions.map((transaction) => transaction.amount);

//const income = transactionsAmounts.filter((value) => value > 0).reduce((accumulator, value) => accumulator + value, 0).toFixed(2);
const income = transactionsAmounts.filter((value) => value > 0);
//const expense = transactionsAmounts.filter(value => value < 0).reduce((accumulator, value) => accumulator + value, 0).toFixed(2);
const expense = Math.abs (transactionsAmounts.filter((value) => value < 0 ). reduce((accumulator, value) => accumulator + value, 0)).toFixed(2);
console.log(expense); // -30.00
const total = transactionsAmounts.reduce((accumulator, transaction) => accumulator + transaction, 0).toFixed(2);
console.log(income); // (2) [300, 150]

balanceDisplay.textContent = `R$ ${total}`;
incomeDisplay.textContent = `R$ ${income}`;
expenseDisplay.textContent = `R$ ${expense}`;

}

const init = () => {
  dummyTransactions.forEach(addTransactionIntoDOM);
  upDateBalanceValues();
};

init();

const generateID = () => Math.round(Math.random()*1000); // função que gera um id

form.addEventListener('submit', event => {
  event.preventDefault();
  const transName = inputTransactionName.value.trim(); // otimização
  const transAmount = inputTransactionAmount.value.trim(); // otimização
  if(transName === '' || transAmount === '' ) {
    alert('Por gentileza preencha tanto o nome quanto o valor da transação!!!');
    return
  }
  const transaction = {
    id: generateID(), 
    name: transName, 
    amount: transAmount }
  console.log(transaction); // deve retornar o valor da 'transactions'

  dummyTransactions.push(transaction);

  init();

  inputTransactionAmount.value = ''; // limpa o input da transação
  inputTransactionName.value = ''; // limpa o input da transação
})
